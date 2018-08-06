<template>
    <div class="rootview">
        <div style="height: 128px;background-color: #33DD39">
            <div class="navigation" style="flex-direction: row;height: 88px;margin-top: 40px">
                <!--地理位置-->
                <div class="locationContainer">
                    <text style="color: white">上海△</text>
                </div>
                <!--搜索框-->
                <div style="flex: 1;justify-content: center">
                    <div style="flex-direction: row;background-color: white;justify-content: space-between;align-items: center;margin-left: 20px;margin-right: 20px;border-radius: 8px;height: 60px;">
                        <!--图标-->
                        <image :src="searchIcon" style="width: 44px;height: 44px;margin-left: 10px"></image>
                        <input  style="margin-right: 10px;margin-left: 10px;font-size: 30px;flex: 1" placeholder="挑好房，上安居客"/>
                        <image :src="scanIcon" style="width: 44px;height: 44px;margin-right: 10px"></image>
                    </div>
                </div>
                <div style="flex-direction: row; flex: 0.3;justify-content: center;align-items: center">
                    <!--地图-->
                    <image :src="mapIcon" style="width: 44px;height: 44px;margin-right: 5px"></image>
                    <text style="color: white">地图</text>
                </div>
            </div>
        </div>

        <scroller>
            <div class="tab">
                <div v-for="(v,i) in items" style="flex-direction: row;margin-top: 36px">
                    <div v-for="(item,k) in v" style="flex: 1;justify-content: center;align-items: center">
                        <image :src="item.icon" style="width: 88px;height: 88px"></image>
                        <text>{{item.name}}</text>
                    </div>
                </div>
            </div>

            <!--头条跑马灯-->
            <div class="toutiao">
                <div style="flex-direction: row;height: 150px;margin-top: 36px;align-items: center">
                    <div class="anjuke" style="flex: 0.3;justify-content: center;align-items: center">
                        <image style="width: 121px;height: 72px" :src="anjuke">

                        </image>
                    </div>
                    <div style="width: 1px;height: 90px;background-color: #e3e3e3"></div>
                    <div style="flex: 0.66">
                        <!--跑马灯-->
                        <marquee style="flex: 1;height: 100px;background-color: #00B4FF;flex-direction: row" :marqueelist="marqueeList" timefn="ease-out" :duration="duration" lineheight="100" fontsize="40" :interval="interval">
                            <div style="background-color: blueviolet;width: 200px;height: 100px" v-for="num in marqueeList" class="text">
                                <text >{{num}}</text>
                            </div>
                        </marquee>
                    </div>
                </div>
            </div>

            <div style="flex-direction: row;height: 180px;width: 750px">
                <div v-for="obj in tablitems" style="flex: 1;flex-direction: row;">
                    <div style="justify-content: center;align-items: center;flex: 1">
                        <text>{{obj.name}}</text>
                        <image style="width: 120px;height: 88px;margin-top: 10px" :src="obj.icon"></image>
                    </div>
                    <div style="width: 1px;height: 180px;background-color: #e3e3e3"></div>
                </div>
            </div>

            <div style="flex: 1;height: 160px;background-color: #00B4FF"></div>
            <div style="flex: 1;height: 160px;background-color: blueviolet"></div>
            <div style="flex: 1;height: 160px;background-color: chartreuse"></div>
            <div style="flex: 1;height: 160px;background-color: coral"></div>

        </scroller>
    </div>
</template>

<script>
    var modal = weex.requireModule('modal');
    var globalDefine = require('../../src/globalDefine');

    export default {
        data () {
            return {
                lineColor:globalDefine.appConfig.lineColor,
                searchIcon:globalDefine.apiUrl.resUrl + 'search.png',
                scanIcon:globalDefine.apiUrl.resUrl + 'scan.png',
                mapIcon:globalDefine.apiUrl.resUrl + 'map.png',
                items:[
                    [
                        {name:'新房',icon:globalDefine.apiUrl.resUrl + 'shfw.png'},
                        {name:'二手房',icon:globalDefine.apiUrl.resUrl + 'tdyp.png'},
                        {name:'租房',icon:globalDefine.apiUrl.resUrl + 'wm.png'},
                        {name:'写字楼',icon:globalDefine.apiUrl.resUrl + 'xckc.png'}
                    ],
                    [
                        {name:'卖房',icon:globalDefine.apiUrl.resUrl + 'xxyl.png'},
                        {name:'海外地产',icon:globalDefine.apiUrl.resUrl + 'zby.png'},
                        {name:'帮你找房',icon:globalDefine.apiUrl.resUrl + 'zlam.png'},
                        {name:'小区房价',icon:globalDefine.apiUrl.resUrl + 'zzc.png'}
                    ]
                ],
                anjuke:globalDefine.apiUrl.resUrl + 'anjuke.png',
                firsttext:"",//指定第一个数据(有时候需要定制),如果为空则默认为marqueelist的第一个数据
                marqueeList:[
                    0,1,2,3,4,5,6,7,8,9
                ],
                interval:100,
                duration:10,

                tablitems:[
                    {name:'最新开盘',icon:globalDefine.apiUrl.resUrl + 'hot_eat.png'},
                    {name:'智能选房',icon:globalDefine.apiUrl.resUrl + 'hot_play.png'},
                    {name:'房价太高',icon:globalDefine.apiUrl.resUrl + 'hot_wash.png'},
                    {name:'买不起',icon:globalDefine.apiUrl.resUrl + 'hot_water.png'}
                ]
            }
        },

        methods:{
        },
        created(){
        },
        ready(){
            // 文档初始化完毕
        }
    }
</script>

<style scoped>
    .locationContainer{
        flex-direction: row;
        flex: 0.3;
        justify-content: center;
        align-items: center;
    }
</style>
