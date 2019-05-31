<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="goodsName" label="商品名称">
                <!--prop读取属性 -->

              </el-table-column>
              <el-table-column prop="count" label="数量" width="70">
                <!--prop读取属性 -->

              </el-table-column>
              <el-table-column prop="price" label="金额" width="70">
                <!--prop读取属性 -->

              </el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="delGoods(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="num">
              <small>数量：</small>{{count}}
              <small>金额：</small>{{money}}元
            </div>
            <div class="div-btn">
              <el-button type="info">挂单</el-button>
              <el-button type="danger" @click="delAllGoods()">删除</el-button> 
              <el-button type="success" @click="checkout()">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            挂单
          </el-tab-pane>
          <el-tab-pane label="外卖">
            外卖
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                <!--v-for循环-->
                <span>{{goods.goodsName}}</span>
                <span class="o-price">￥{{goods.price}}元</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class='cookList'>
                  <li v-for="goods in type0Goods"  @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>

            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class='cookList'>
                <li v-for="goods in type1Goods"  @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class='cookList'>
                <li v-for="goods in type2Goods"  @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class='cookList'>
                <li v-for="goods in type3Goods"  @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'pos',
    data()
    {
      return {
        tableData: [],
        oftenGoods:[
          {
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
              goodsName:'香脆鸡柳',
              price:17
          }
          
      ],
        type0Goods: [
        ],
        type1Goods: [
        ],
        type2Goods: [
        ],
        type3Goods: [
        ],
        money:0,
        count:0,
      }
    },
    // methods(){

    // },
    created: function ()
    {
      axios.get( 'https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods' )
        .then( reponse =>
        {
          // console.log(reponse);
          this.type0Goods = reponse.data[0];
          this.type1Goods = reponse.data[1];
          this.type2Goods = reponse.data[2];
          this.type3Goods = reponse.data[3];
        } )
        .catch( error =>
        {
          console.log( error );
          alert( '网络错误' );
        } )
    },//创建即执行
    mounted: function ()
    {
      var orderHeight = document.body.clientHeight;//获取屏幕高度
      document.getElementById( 'order-list' ).style.height = orderHeight + 'px';
    },//当所有的虚拟Dom加载完成后执行
    methods:{
      addOrderList(goods){
        this.money=0;
        this.count=0;
        //判断是否存在于订单列表
        let isHave = false;
        for(let i=0;i<this.tableData.length;i++){
          if(this.tableData[i].goodsId == goods.goodsId){
            isHave = true;
          }
        }
        if(isHave){
          //当存在时改变列表中商品数量
          let arr = this.tableData.filter(a=>a.goodsId == goods.goodsId);
          arr[0].count++;
        }else{
          let newGodds = {goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1}
          this.tableData.push(newGodds);
        }
        //根据判断编写业务逻辑
        this.getMoney();
      },
      //删除单个商品
      delGoods(goods){
        this.tableData=this.tableData.filter(o=>o.goodsId != goods.goodsId);
        this.getMoney();
      },
      delAllGoods(){
        this.tableData=[];
        this.count=0;
        this.money=0;
      },
      //计算汇总价格和个数
      getMoney(){
        this.money=0;
        this.count=0;
        if(this.tableData){
          this.tableData.forEach((element)=>{
            this.count+=element.count;
            this.money=this.money+(element.price*element.count);
          })
        }
      },
      //结账
      checkout(){
        if(this.count != 0){
          this.tableData=[];
          this.count=0;
          this.money=0;
          this.$message({
            message:'结账成功',
            type:'success'
          })
        }else{
          this.$message.error("不能空结");
        }
      }
    }
  }//构造器
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pos-order {
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda;
  }

  .div-btn {
    margin-top: 10px;
  }

  .title {
    height: 20px;
    border-bottom: 1p solid #d3dce6;
    background-color: #f9fafc;
    padding: 10px;
    text-align: left;
  }

  .often-goods-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #e5e9f2;
    padding: 10px;
    margin: 10px;
    background-color: white;
    cursor: pointer;
  }

  .o-price {
    color: #58b7ff;
  }

  .goods-type {
    clear: both;
  }

  .cookList li {
    list-style: none;
    width: 23%;
    border: 1px solid #E5E9F2;
    height: auot;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 2px;
    cursor: pointer;

  }

  .cookList li span {

    display: block;
    float: left;
  }

  .foodImg {
    width: 40%;
  }

  .foodName {
    font-size: 18px;
    padding-left: 10px;
    color: brown;

  }

  .foodPrice {
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
  }
  .num{
    background: white;
    padding: 10px;
    border-bottom: 1px solid #d3dce6;

  }
</style>