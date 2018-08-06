<template>
    <div class="container">
        <!--导航栏-->
        <div class="navgationContainer">
            <div class="navigation">
                <image :src="mapIcon" style="position: absolute;width: 60px;height:60px;left: 25px;top: 13px"></image>

                <text class="pageTitle">商家</text>

                <image :src="searchIcon" style="position: absolute;width: 60px;height:60px;right: 25px;top: 10px"></image>
            </div>
        </div>

        <!--网页-->
        <web class="webClass" :src="detailUrl" @pagestart="onPageStart" @pagefinish="onPageFinish" @error="onError">

        </web>
    </div>
</template>

<script>
    var globalDefine = require('../../globalDefine');
    const modal = weex.requireModule('modal');

    export default {
        data(){
            return{
                searchIcon:globalDefine.apiUrl.resUrl + 'icon_shop_search.png',
                mapIcon:globalDefine.apiUrl.resUrl + 'icon_shop_local.png',
                detailUrl: 'http://i.meituan.com/topic/huilife'
            }
        },
        methods: {
            onPageStart: function(e) {
                modal.toast({message:'开始加载:' + e.url,duration:0.5});
            },
            onPageFinish: function(e) {
                modal.toast({message:'加载成功:' + e.title,duration:0.5});
            },
            onError: function(e) {
                modal.toast({message:'加载失败',duration:0.5});
            }
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
    .webClass{
        flex: 1;
    }
</style>