<template>
    <div class="container">
        <!--左边view-->
        <div class="leftView">
            <image :src="leftViewTopImage" style="width: 240px;height: 60px;margin-top: 40px"></image>
            <image :src="leftViewMiddleImage" style="width: 240px;height: 120px"></image>
            <text style="color: darkgray;font-size: 34px">探路组碳烤鱼</text>
            <div style="flex-direction: row">
                <text style="color: cyan;font-size: 28px">￥9.5</text>
                <text style="color: darkorange;background-color: khaki;font-size: 28px">再减3元</text>
            </div>
        </div>

        <!--右边view-->
        <div class="rightView">
            <div class="rightViewTopView">
                <div>
                    <text style="color: darkorange;font-size: 32px;margin-left: 20px">天天特价</text>
                    <text style="color: #717171;font-size: 32px;margin-left: 20px;margin-top: 10px">特惠不打烊</text>
                </div>
                <image :src="rightViewTopImage" style="width: 150px;height: 120px;"></image>
            </div>
            <div class="rightViewBottomView">
                <div>
                    <text style="color: crimson;font-size: 32px;margin-left: 20px">一元吃</text>
                    <text style="color: #717171;font-size: 32px;margin-left: 20px;margin-top: 10px">一元吃美食</text>
                </div>
                <image :src="rightViewBtttomImage" style="width: 150px;height: 120px"></image>
            </div>
        </div>
    </div>
</template>

<script>
    var globalDefine = require('../../globalDefine');

    export default {
        data () {
            return{
                leftViewTopImage:globalDefine.apiUrl.resUrl + 'mdqg.png',
                leftViewMiddleImage:globalDefine.apiUrl.resUrl + 'yyms.png',
                rightViewTopImage:globalDefine.apiUrl.resUrl + 'tttj.png',
                rightViewBtttomImage:globalDefine.apiUrl.resUrl + 'yyms.png',

            }
        }
    }
</script>

<style scoped>
    .container{
        background-color: #e8e8e8;
        height: 340px;
        margin-top: 20px;
        flex-direction: row;
    }
    .leftView{
        flex-direction: column;
        width: 375px;
        height: 340px;
        align-items: center;
        background-color: white;
    }
    .rightView{
        background-color: #e8e8e8;
        margin-left: 2px;
        width: 373px;
        height: 340px;
    }
    .rightViewTopView{
        flex-direction: row;
        background-color: white;
        height: 168px;
        align-items: center;
        justify-content: space-between;
    }
    .rightViewBottomView{
        flex-direction: row;
        margin-top: 2px;
        background-color: white;
        height: 170px;
        align-items: center;
        justify-content: space-between;

    }
</style>