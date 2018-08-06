<template>
    <div class="container">
        <homeBottomCommonCell ref="homeBottomCommonCell"
                :rightViewBtttomImage = rightViewBtttomImage
                leftTitle = "猜你喜欢"
        ></homeBottomCommonCell>

        <list class="list" ref="guessList" show-scrollbar='false'  v-bind:style="{height:listHeight}" offset-accuracy="10" @appear="onappear" @scroll="scrollHandler" @scrollstart="scrollStart">
            <cell class="cell" v-for="(shop, index) in lists" ref="item">
                <div class="panel">
                    <div style="flex-direction: row">
                        <div class="panelLeftView">
                            <image :src="dealWithImgUrl(shop.imageUrl)" style="width: 240px;height: 180px;margin-left: 20px"></image>
                        </div>
                        <div class="panelRightView">
                            <div style="flex-direction: row;justify-content: space-between">
                                <text style="color: black;font-size: 28px;margin-right: 20px;lines:1;text-overflow:ellipsis;flex: 0.8">{{shop.title}}</text>
                                <text style="color: black;font-size: 28px;flex: 0.3">{{shop.topRightInfo}}</text>
                            </div>
                            <text style="color: darkgray;font-size: 28px;margin-right: 20px;margin-top: 10px;lines:2;text-overflow:ellipsis">{{shop.subTitle}}</text>
                            <div style="flex-direction: row;justify-content: space-between;margin-top: 10px">
                                <text style="color: crimson;font-size: 28px">{{shop.subMessage}}</text>
                                <text style="color: black;font-size: 28px;margin-right: 20px">{{shop.bottomRightInfo}}</text>
                            </div>
                        </div>
                    </div>
                    <div style="flex: 1;height: 1px;background-color: #c4c4c4;margin-top: 20px"></div>
                </div>
            </cell>
        </list>
    </div>
</template>

<script>
    var globalDefine = require('../../globalDefine');
    var homeBottomCommonCell = require('./homeBottomCommonCell');
    var stream = weex.requireModule('stream');
    const modal = weex.requireModule('modal');
    const dom = weex.requireModule('dom');

    export default {
        data () {
            return{
                rightViewBtttomImage:globalDefine.apiUrl.resUrl + 'cnxh.png',
                lists: [],
                listHeight:'',
            }
        },
        components:{
            homeBottomCommonCell,
        },
        created(){
            const self = this;

            let url = 'http://api.meituan.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594';
            // let url = 'http://www.jspang.com/DemoApi/newsApi.php';
            this.getNews(url,res => {
                this.lists = res.data.data;
                this.listHeight = res.data.data.length * 220 + 3 +'px';
                // modal.toast({message:res.ok,duration:1.0});
            });
        },
        methods: {
            getNews(url,callback){
                return stream.fetch({
                    method:'GET',
                    type:'json',
                    url:url
                },callback);

            },
            // 处理图像的尺寸
            dealWithImgUrl(url){
                if (url.search('w.h') == -1){ // 没有找到,正常返回
                    return url;
                }else{
                    return url.replace('w.h', '240.180');
                }
            },
            onappear (event) {
            },
            scrollHandler (e) {
            },
            scrollStart (e) {
                // this.listHeight = e.contentSize.height;
            }

        }

    }
</script>

<style scoped>
    .container{
        margin-top: 20px;
    }
    .list{
        width: 750px;
        justify-content: center;
        align-items: center;
        background-color: white;
    }
    .cell{
        width: 750px;
        height: 220px;
    }
    .panel {
        width: 750px;
        margin-top: 20px;
        /*margin-bottom: 10px;*/
    }
    .panelLeftView{
        justify-content: center;
        flex: 0.36;
    }
    .panelRightView{
        margin-left: 15px;
        flex: 0.64;
    }
</style>

