<template>
    <div class="leftNav">
        <ul>
            <li>
                <i class="icon iconfont iconshoppingcart"></i>
                <div>收银</div>
            </li>
            <li>
                <i class="icon iconfont iconshoppingcart"></i>
                <div>店铺</div>
            </li>
            <li>
                <i class="icon iconfont iconicon-drag"></i>
                <div>商品</div>
            </li>
            <li>
                <i class="icon iconfont iconcog"></i>
                <div>会员</div>
            </li>
            <li>
                    <i class="icon iconfont iconbell"></i>
                    <div>统计</div>
                </li>
            <li>
                <i class="icon iconfont iconeye"></i>
                <div>设置</div>
            </li>
        </ul>
    </div>

</template>
<script>
    export default {

    }

</script>
<style>
    .leftNav{
        color: white;
        font-size: 10px;
        height: 100%;
        background-color: #1d8ce0;
        float: left;
        width: 5%;

    }
    .iconfont{
        font-size:24px;
    }
    .leftNav ul{
        padding: 0;
        margin: 0;

    }
    .leftNav li{
        list-style: none;
        text-align: center;
        border-bottom: 1px solid #20a0ff;
        padding: 10px;
    }
</style>