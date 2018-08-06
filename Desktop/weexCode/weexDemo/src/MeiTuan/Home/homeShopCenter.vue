<template>
    <div class="container">
        <homeBottomCommonCell
          :rightViewBtttomImage = rightViewBtttomImage
          leftTitle = "购物中心"
          rightTitle = "全部4家"
        ></homeBottomCommonCell>

        <scroller class="scrollerClass" scroll-direction="horizontal" >
            <home-shop-center-item v-for="obj in homeShopCenterData.data"
                                   :imageStr = obj.img
                                   :title = obj.name
                                   :tagTitle = obj.showtext.text

            ></home-shop-center-item>

            </homeShopCenterItem>
        </scroller>
    </div>
</template>

<script>
    var globalDefine = require('../../globalDefine');
    var homeBottomCommonCell = require('./homeBottomCommonCell');
    var homeShopCenterItem = require('./homeShopCenterItem');
    var homeShopCenterData = require('../resource/homeShopCenter');

    export default {
        data () {
            return{
                rightViewBtttomImage:globalDefine.apiUrl.resUrl + 'gw.png',
                homeShopCenterData:homeShopCenterData,
            }
        },
        components:{
            homeBottomCommonCell,
            homeShopCenterItem
        }
    }
</script>

<style scoped>
    .container{
        background-color: white;
        height: 400px;
    }
    .scrollerClass{
        flex-direction: row
    }
</style>