<template>
    <div class="container">
        <!--导航栏-->
        <div class="navgationContainer">
            <div class="navigation">
                <text class="pageTitle">更多</text>

                <image :src="settingIcon" style="position: absolute;width: 60px;height:60px;right: 25px;top: 10px"></image>
            </div>
        </div>

        <scroller>
            <div style="margin-top: 20px">
                <moreCommonCell
                        title = "扫一扫"
                        rightTitle = ""
                ></moreCommonCell>
            </div>

            <div style="margin-top: 20px">
                <moreCommonCell
                        title = "省流量模式"
                        rightTitle = ""
                        isSwitch = true
                ></moreCommonCell>
                <moreCommonCell
                        title="消息提醒"
                        rightTitle = ""
                ></moreCommonCell>
                <moreCommonCell
                        title="邀请好友使用美团"
                        rightTitle = ""

                ></moreCommonCell>
                <moreCommonCell
                        title="清空缓存"
                        rightTitle="1.99M"
                ></moreCommonCell>
            </div>

            <div style="margin-top: 20px">
                <moreCommonCell
                        title="问卷调查"
                        rightTitle = ""

                ></moreCommonCell>
                <moreCommonCell
                        title="支付帮助"
                        rightTitle = ""

                ></moreCommonCell>
                <moreCommonCell
                        title="网络诊断"
                        rightTitle = ""

                ></moreCommonCell>
                <moreCommonCell
                        title="关于美团"
                        rightTitle = ""

                ></moreCommonCell>
                <moreCommonCell
                        title="我要应聘"
                        rightTitle = ""

                ></moreCommonCell>
            </div>

            <div style="margin-top: 20px">
                <moreCommonCell
                        title="精品应用"
                ></moreCommonCell>
            </div>

        </scroller>
    </div>
</template>

<script>
    var globalDefine = require('../../globalDefine');
    var moreCommonCell = require('./moreCommonCell');

    export default {
        data(){
            return{
                settingIcon:globalDefine.apiUrl.resUrl + 'icon_mine_setting.png',
            }
        },
        components:{
            moreCommonCell
        }
    }
</script>

<style scoped>
    .container{
        background-color: #e8e8e8;
    }
    .navgationContainer{
        height: 128px;
        background-color: rgba(255,96,0,1.0);
    }
    .navigation {
        flex-direction: row;
        height: 88px;
        margin-top: 40px;
        align-items: center;
        justify-content: center;
    }
    .pageTitle{
        color: white;
        font-size: 40px;
    }
</style>