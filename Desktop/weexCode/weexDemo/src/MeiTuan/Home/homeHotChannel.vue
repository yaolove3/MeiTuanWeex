<template>
    <div class="container">
        <homeBottomCommonCell
                :rightViewBtttomImage = rightViewBtttomImage
                leftTitle = "热门频道"
                rightTitle = "查看全部"
        ></homeBottomCommonCell>

        <div class="bottomView">
            <div class="bottomTopView">
                <div v-for="obj in homeHotData.topData" class="bottomTopItemView">
                    <div class="bottomTopItemInnerView">
                        <div>
                            <text style="color: black;font-size: 30px;margin-left: 15px;margin-top: 25px">{{obj.title}}</text>
                            <text style="color: darkgray;font-size: 26px;margin-left: 15px;margin-top: 7px">{{obj.subTitle}}</text>
                            <image :src="icon_hot" style="width: 60px;height: 40px;margin-left: 20px;margin-top: 7px"></image>
                        </div>

                        <image :src="globalDefine.apiUrl.resUrl + obj.hotImage + '.png'" style="width: 150px;height: 150px;margin-left: 10px"></image>
                    </div>
                </div>
            </div>

            <div class="bottomBottomView">
                <div v-for="obj in homeHotData.bottomData" class="bottomBottomItemView">
                    <div class="bottomBottomItemInnerView">
                        <text style="color: black;font-size: 30px;margin-top: 20px">{{obj.title}}</text>
                        <text style="color: darkgray;font-size: 26px;margin-top: 7px">{{obj.subTitle}}</text>
                        <image :src="globalDefine.apiUrl.resUrl + obj.hotImage + '.png'" style="width: 140px;height: 100px;margin-top: 10px"></image>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var homeBottomCommonCell = require('./homeBottomCommonCell');
    var globalDefine = require('../../globalDefine');
    var homeHotData = require('../resource/homeHotData');

    export default {
        data () {
            return{
                globalDefine:globalDefine,
                rightViewBtttomImage:globalDefine.apiUrl.resUrl + 'rm.png',
                homeHotData:homeHotData,
                icon_hot:globalDefine.apiUrl.resUrl + 'icon_hot.png'
            }
        },
        components:{
            homeBottomCommonCell,

        }
    }
</script>

<style scoped>
    .container{
        background-color: white;
        height: 600px;
        margin-top: 20px;
    }
    .bottomView{
        height: 500px;
        background-color: white;
    }
    .bottomTopView{
        flex: 0.45;
        flex-direction: row;
        margin-left: 15px;
        margin-top: 15px;
    }
    .bottomTopItemView{
        flex: 1;
    }
    .bottomTopItemInnerView{
        flex-direction: row;
        background-color: #f8f8f8;
        flex: 1;
        margin-right: 15px;
        margin-bottom: 15px;
        align-items: center;
    }
    .bottomBottomView{
        flex: 0.55;
        flex-direction: row;
        margin-left: 15px;
    }
    .bottomBottomItemView{
        flex: 1;
    }
    .bottomBottomItemInnerView{
        background-color: #f8f8f8;
        flex: 1;
        margin-right: 15px;
        margin-bottom: 15px;
        align-items: center;
    }
</style>