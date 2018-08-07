<template>
    <div class="container">
        <!--导航栏-->
        <div class="navgationContainer">
            <div class="navigation">
                <!--地理位置-->
                <div class="locationContainer">
                    <text style="color: white">上海△</text>
                </div>
                <!--搜索框-->
                <div class="search">
                    <!--图标-->
                    <image :src="searchIcon" style="width: 44px;height: 44px;margin-left: 10px"></image>
                    <input  style="margin-right: 10px;margin-left: 10px;font-size: 30px;flex: 1" placeholder="输入商家、品类、商圈"/>
                    <image :src="scanIcon" style="width: 44px;height: 44px;margin-right: 10px"></image>
                </div>
                <div style="flex-direction: row; flex: 0.3;justify-content: center;align-items: center">
                    <!--地图-->
                    <image :src="mapIcon" style="width: 44px;height: 44px;margin-right: 5px"></image>
                    <text style="color: white">地图</text>
                </div>
            </div>
        </div>
        <!--列表-->
        <scroller style="background-color: #e8e8e8">
            <refresh class="refresh" @refresh="onrefresh" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator-text">Refreshing ...</text>
                <loading-indicator class="indicator"></loading-indicator>
            </refresh>

            <!--头部的View-->
            <homeTopView></homeTopView>
            <!--中间view-->
            <home-middle-view></home-middle-view>
            <!--中间下面view-->
            <homeMiddleBottomView></homeMiddleBottomView>
            <!--首页购物中心-->
            <homeShopCenter></homeShopCenter>
            <!--热门频道-->
            <homeHotChannel></homeHotChannel>
            <!--猜你喜欢-->
            <homeGuessYouLike></homeGuessYouLike>
        </scroller>
    </div>
</template>

<script>
    var modal = weex.requireModule('modal');
    var globalDefine = require('../../globalDefine');
    var homeTopView = require('./homeTopView');
    var homeMiddleView = require('./homeMiddleView');
    var homeMiddleBottomView = require('./homeMiddleBottomView');
    var homeShopCenter = require('./homeShopCenter');
    var homeHotChannel = require('./homeHotChannel');
    var homeGuessYouLike = require('./homeGuessYouLike');

    export default {
        data(){
            return{
                refreshing: false,
                searchIcon:globalDefine.apiUrl.resUrl + 'search.png',
                scanIcon:globalDefine.apiUrl.resUrl + 'scan.png',
                mapIcon:globalDefine.apiUrl.resUrl + 'map.png',
            }
        },
        components:{
            homeTopView,
            homeMiddleView,
            homeMiddleBottomView,
            homeShopCenter,
            homeHotChannel,
            homeGuessYouLike
        },
        methods:{
            onrefresh (event) {
                if (this.refreshing == false){
                    modal.toast({ message: 'Refreshing', duration: 0.2 })
                    this.refreshing = true
                    setTimeout(() => {
                        this.refreshing = false;
                        weex.requireModule("HomeViewController").iosRender();

                    }, 500)
                }
            }
        }
    }
</script>

<style scoped>
    .navgationContainer{
        height: 128px;
        background-color: rgba(255,96,0,1.0);
    }
    .navigation{
        flex-direction: row;
        height: 88px;
        margin-top: 40px;
        align-items: center;
    }
    .search{
        flex: 1;
        flex-direction: row;
        background-color: white;
        justify-content: space-between;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
        border-radius: 8px;
        height: 60px;
    }
    .refresh{
        align-items: center;
        width: 750px;
    }
    .indicator-text {
        color: #888888;
        font-size: 42px;
        text-align: center;
    }
    .indicator {
        margin-top: 16px;
        height: 40px;
        width: 40px;
        color: blue;
    }
</style>