<template>
    <div class="tab" style="background-color: white;flex: 1;height: 380px">
        <!--<scroller class="scrollerClass" scroll-direction="horizontal" pagingEnabled="true" style="flex-direction: row">-->
            <!--<div style="width: 1500px">-->
                <!--<div v-for="(v,i) in items1" style="flex-direction: row;margin-top: 36px">-->
                    <!--<div v-for="(item,k) in v" style="flex: 1;justify-content: center;align-items: center">-->
                        <!--<image :src="item.icon" style="width: 88px;height: 88px"></image>-->
                        <!--<text style="font-size: 30px">{{item.name}}</text>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <!--<indicator class="indicatorClass"></indicator>-->
        <!--</scroller>-->

        <slider class="slider" auto-play="true" interval="3000" @change="onchange">
            <div style="width: 750px">
                <div v-for="(v,i) in items2" style="flex-direction: row;margin-top: 36px;width: 750px">
                    <div v-for="(item,k) in v" style="flex: 1;justify-content: center;align-items: center">
                        <image :src="item.icon" style="width: 88px;height: 88px"></image>
                        <text style="font-size: 30px">{{item.name}}</text>
                    </div>
                </div>
            </div>
            <div style="width: 750px">
                <div v-for="(v,i) in items3" style="flex-direction: row;margin-top: 36px;width: 750px">
                    <div v-for="(item,k) in v" style="flex: 1;justify-content: center;align-items: center">
                        <image :src="item.icon" style="width: 88px;height: 88px"></image>
                        <text style="font-size: 30px">{{item.name}}</text>
                    </div>
                </div>
            </div>
            <indicator class="indicatorClass"></indicator>
        </slider>
    </div>
</template>

<script>
    var globalDefine = require('../../globalDefine');

    export default {
        data () {
            return {
                widths:750,
                object: WXEnvironment,
                items1:[
                    [
                        {name:'美食',icon:globalDefine.apiUrl.resUrl + 'ms.png'},
                        {name:'电影',icon:globalDefine.apiUrl.resUrl + 'dy.png'},
                        {name:'酒店',icon:globalDefine.apiUrl.resUrl + 'jd.png'},
                        {name:'休闲娱乐',icon:globalDefine.apiUrl.resUrl + 'xxyl.png'},
                        {name:'外卖',icon:globalDefine.apiUrl.resUrl + 'wm.png'},
                        {name:'自助餐',icon:globalDefine.apiUrl.resUrl + 'zzc.png'},
                        {name:'KTV',icon:globalDefine.apiUrl.resUrl + 'ktv.png'},
                        {name:'火车票机票',icon:globalDefine.apiUrl.resUrl + 'hcpjp.png'},
                        {name:'丽人',icon:globalDefine.apiUrl.resUrl + 'lr.png'},
                        {name:'周边游',icon:globalDefine.apiUrl.resUrl + 'zby.png'}
                    ],
                    [
                        {name:'足疗按摩',icon:globalDefine.apiUrl.resUrl + 'zlam.png'},
                        {name:'购物',icon:globalDefine.apiUrl.resUrl + 'gw.png'},
                        {name:'今日新单',icon:globalDefine.apiUrl.resUrl + 'jrxd.png'},
                        {name:'小吃快餐',icon:globalDefine.apiUrl.resUrl + 'xckc.png'},
                        {name:'生活服务',icon:globalDefine.apiUrl.resUrl + 'shfw.png'},
                        {name:'甜点饮品',icon:globalDefine.apiUrl.resUrl + 'tdyp.png'},
                        {name:'美甲',icon:globalDefine.apiUrl.resUrl + 'mj.png'},
                        {name:'景点门票',icon:globalDefine.apiUrl.resUrl + 'jdmp.png'},
                        {name:'旅游',icon:globalDefine.apiUrl.resUrl + 'ly.png'},
                        {name:'全部分类',icon:globalDefine.apiUrl.resUrl + 'qbfl.png'}
                    ]
                ],
                items2:[
                    [
                        {name:'美食',icon:globalDefine.apiUrl.resUrl + 'ms.png'},
                        {name:'电影',icon:globalDefine.apiUrl.resUrl + 'dy.png'},
                        {name:'酒店',icon:globalDefine.apiUrl.resUrl + 'jd.png'},
                        {name:'休闲娱乐',icon:globalDefine.apiUrl.resUrl + 'xxyl.png'},
                        {name:'外卖',icon:globalDefine.apiUrl.resUrl + 'wm.png'}
                    ],
                    [
                        {name:'自助餐',icon:globalDefine.apiUrl.resUrl + 'zzc.png'},
                        {name:'KTV',icon:globalDefine.apiUrl.resUrl + 'ktv.png'},
                        {name:'火车票机票',icon:globalDefine.apiUrl.resUrl + 'hcpjp.png'},
                        {name:'丽人',icon:globalDefine.apiUrl.resUrl + 'lr.png'},
                        {name:'周边游',icon:globalDefine.apiUrl.resUrl + 'zby.png'}
                    ]
                ],
                items3:[
                    [
                        {name:'足疗按摩',icon:globalDefine.apiUrl.resUrl + 'zlam.png'},
                        {name:'购物',icon:globalDefine.apiUrl.resUrl + 'gw.png'},
                        {name:'今日新单',icon:globalDefine.apiUrl.resUrl + 'jrxd.png'},
                        {name:'小吃快餐',icon:globalDefine.apiUrl.resUrl + 'xckc.png'},
                        {name:'生活服务',icon:globalDefine.apiUrl.resUrl + 'shfw.png'}
                    ],
                    [
                        {name:'甜点饮品',icon:globalDefine.apiUrl.resUrl + 'tdyp.png'},
                        {name:'美甲',icon:globalDefine.apiUrl.resUrl + 'mj.png'},
                        {name:'景点门票',icon:globalDefine.apiUrl.resUrl + 'jdmp.png'},
                        {name:'旅游',icon:globalDefine.apiUrl.resUrl + 'ly.png'},
                        {name:'全部分类',icon:globalDefine.apiUrl.resUrl + 'qbfl.png'}
                    ]
                ],
            }
        },
        methods: {
            onchange (event) {
                console.log('changed:', event.index)
            }
        }
    }
</script>

<style scoped>
    .scrollerClass{
        flex-direction: row;
    }
    .indicatorClass{
        width: 750px;
        height: 30px;
        item-color:darkgray;
        item-selected-color:orange;
        item-size:15px;
        top: 340px;
        left: 0px;
    }
</style>