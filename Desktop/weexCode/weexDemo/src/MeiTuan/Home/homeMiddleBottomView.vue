<template>
    <div class="container">
        <!--上面的view-->
        <div class="topView">
            <div class="topLeftView">
                <text style="color: magenta;font-size: 38px;margin-left: 30px;margin-top: 25px">最高立减25</text>
                <text style="color: #717171;font-size: 32px;margin-left: 30px">美味享不停，赶快行动吧</text>
            </div>
            <div class="topRightView">
                <image :src="topViewRightImage" style="width: 250px;height: 120px;"></image>
            </div>
        </div>
        <div class="bottomView">
            <!--左边view-->
            <div class="leftView">
                <div class="leftViewTopView">
                    <div>
                        <text style="color: darkorange;font-size: 32px;margin-left: 20px">1元肯德基</text>
                        <text style="color: #717171;font-size: 32px;margin-left: 20px;margin-top: 10px">1元能吃肯德基</text>
                    </div>
                    <image :src="leftViewTopImage" style="width: 150px;height: 120px;"></image>
                </div>
                <div class="leftViewBottomView">
                    <div>
                        <text style="color: crimson;font-size: 32px;margin-left: 20px">4月开春大促</text>
                        <text style="color: #717171;font-size: 32px;margin-left: 20px;margin-top: 10px">领21元红包</text>
                    </div>
                    <image :src="leftViewBtttomImage" style="width: 150px;height: 120px"></image>
                </div>
            </div>

            <!--右边view-->
            <div class="rightView">
                <div class="rightViewTopView">
                    <div>
                        <text style="color: darkorange;font-size: 32px;margin-left: 20px">新用户专享</text>
                        <text style="color: #717171;font-size: 32px;margin-left: 20px;margin-top: 10px">小长假美美哒</text>
                    </div>
                    <image :src="rightViewTopImage" style="width: 150px;height: 120px;"></image>
                </div>
                <div class="rightViewBottomView">
                    <div>
                        <text style="color: crimson;font-size: 32px;margin-left: 20px">一元抢吧</text>
                        <text style="color: #717171;font-size: 32px;margin-left: 20px;margin-top: 10px">爆品抢到手软</text>
                    </div>
                    <image :src="rightViewBtttomImage" style="width: 150px;height: 120px"></image>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var globalDefine = require('../../globalDefine');

    export default {
        data(){
            return{
                topViewRightImage:globalDefine.apiUrl.resUrl + 'nsj.png',
                leftViewTopImage:'http://p0.meituan.net/64.43/groupop/9aa35eed64db45aa33f9e74726c59d938450.png',
                leftViewBtttomImage:'http://p0.meituan.net/64.43/groupop/b8fb2def2c0063c9acabed6cbf1c65449452.png',
                rightViewTopImage:'http://p0.meituan.net/64.43/groupop/e1855577efd5280c905ab7a438b83f3d5000.png',
                rightViewBtttomImage:'http://p1.meituan.net/64.43/groupop/286f56222bac7bfd7462af56a64ce4a59032.png',
            }
        }
    }
</script>

<style scoped>
    .container{
        background-color: #e8e8e8;
        height: 510px;
        margin-top: 20px;
        flex-direction: clown;
    }
    .topView{
        background-color: white;
        height: 150px;
        width: 750px;
        margin-bottom: 2px;
        flex-direction: row;
    }
    .topLeftView{

    }
    .topRightView{
        width: 375px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .bottomView{
        flex-direction: row;
        width: 750px;
        height: 340px;
    }
    .leftView{
        width: 375px;
        height: 340px;
    }
    .rightView{
        background-color: #e8e8e8;
        margin-left: 2px;
        width: 373px;
        height: 340px;
    }
    .leftViewTopView{
        flex-direction: row;
        background-color: white;
        height: 168px;
        align-items: center;
        justify-content: space-between;
    }
    .leftViewBottomView{
        flex-direction: row;
        margin-top: 2px;
        background-color: white;
        height: 170px;
        align-items: center;
        justify-content: space-between;

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