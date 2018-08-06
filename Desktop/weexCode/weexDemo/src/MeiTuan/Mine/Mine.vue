<template>
    <div class="container">
        <!--头部view-->
        <mineHeaderView></mineHeaderView>
        <scroller style="background-color: #e8e8e8">


            <div>
                <mineCommonCell
                        :leftIcon = "globalDefine.apiUrl.resUrl + 'collect.png'"
                        leftTitle = "我的订单"
                        rightTitle = "查看全部订单"
                        rightIcon= ""
                ></mineCommonCell>
                <mineOrderCell></mineOrderCell>
            </div>

            <div>
                <mineCommonCell style="margin-top: 20px"
                        :leftIcon = "globalDefine.apiUrl.resUrl + 'draft.png'"
                        leftTitle = "我的钱包"
                        rightTitle = "账户余额:￥100"
                        rightIcon= ""
                ></mineCommonCell>
                <mineCommonCell
                        :leftIcon = "globalDefine.apiUrl.resUrl + 'like.png'"
                        leftTitle = "抵用券"
                        rightTitle = "0"
                        rightIcon= ""
                ></mineCommonCell>
            </div>

            <div>
                <mineCommonCell style="margin-top: 20px"
                        :leftIcon = "globalDefine.apiUrl.resUrl + 'card.png'"
                        leftTitle = "积分商城"
                        rightIcon= ""
                ></mineCommonCell>
            </div>

            <div>
                <mineCommonCell style="margin-top: 20px"
                        :leftIcon = "globalDefine.apiUrl.resUrl + 'new_friend.png'"
                        leftTitle = "今日推荐"
                        :rightIcon = "globalDefine.apiUrl.resUrl + 'me_new.png'"
                ></mineCommonCell>
            </div>

            <div>
                <mineCommonCell style="margin-top: 20px"
                        :leftIcon = "globalDefine.apiUrl.resUrl + 'pay.png'"
                        leftTitle = "我要合作"
                        rightTitle = "轻松开店,招财进宝"
                        rightIcon= ""
                ></mineCommonCell>
            </div>
        </scroller>
    </div>
</template>

<script>
    var globalDefine = require('../../globalDefine');
    var mineHeaderView = require('./mineHeaderView')
    var mineCommonCell = require('./mineCommonCell');
    var mineOrderCell = require('./mineOrderCell');

    export default {
        data () {
            return{
                globalDefine:globalDefine
            }
        },
        components:{
            mineHeaderView,
            mineCommonCell,
            mineOrderCell
        }
    }
</script>

<style scoped>
    .container{
        background-color: #e8e8e8;
    }
</style>