<template>
    <div class="container">
        <div class="topView">
            <image class="headerIconClass" :src="headerIcon"></image>
            <text style="color: white;font-size: 38px;font-weight:bold;margin-left: 25px;margin-top: 165px">{{nickName}}</text>
            <image :src="vipImg" style="width: 45px;height: 45px;margin-left: 15px;margin-top: 172px"></image>
            <image :src="arrowImg" style="position: absolute;width: 22px;height: 35px;right: 25px;margin-top: 175px"></image>

        </div>
        <div class="bottomView">
            <div class="leftView">
                <text style="color: white;font-size: 32px;">100</text>
                <text style="color: white;font-size: 35px;">优惠券</text>
            </div>
            <div style="width: 1px;height: 100px;margin-top: 15px;background-color: white"></div>
            <div class="middleView">
                <text style="color: white;font-size: 32px;">12</text>
                <text style="color: white;font-size: 35px;">评价</text>
            </div>
            <div style="width: 1px;height: 100px;margin-top: 15px;background-color: white"></div>
            <div class="rightView">
                <text style="color: white;font-size: 32px;">50</text>
                <text style="color: white;font-size: 35px;">收藏</text>
            </div>
        </div>
    </div>
</template>

<script>
    var globalDefine = require('../../globalDefine');

    export default {
        data () {
            return{
                headerIcon:globalDefine.apiUrl.resUrl + 'wd.png',
                nickName:'入夜、渐微凉',
                vipImg:globalDefine.apiUrl.resUrl + 'avatar_vip.png',
                arrowImg:globalDefine.apiUrl.resUrl + 'icon_cell_rightarrow.png',
            }
        }
    }
</script>

<style scoped>
    .container{
        height: 420px;
        background-color: rgba(255,96,0,1.0);
    }
    .headerIconClass{
        width: 160px;
        height: 160px;
        margin-left: 30px;
        margin-top: 110px;
        border-radius: 80px;
        border-width: 8px;
        border-color: rgba(255, 255, 255, 0.7);
    }
    .topView{
        flex-direction: row;
        flex: 0.7;
    }
    .bottomView{
        flex-direction: row;
        flex: 0.3;
        background-color: rgba(255, 255, 255, 0.3);
    }
    .leftView{
        flex: 0.33;
        justify-content:center;
        align-items: center;
    }
    .middleView{
        flex: 0.33;
        justify-content:center;
        align-items: center;
    }
    .rightView{
        flex: 0.33;
        justify-content:center;
        align-items: center;
    }
</style>