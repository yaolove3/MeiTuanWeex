<template>
    <list class="list">
        <refresh class="refresh" @refresh="onrefresh" :display="refreshing ? 'show' : 'hide'">
            <text class="indicator-text">Refreshing ...</text>
            <loading-indicator class="indicator"></loading-indicator>
        </refresh>

        <header style="background-color: white">
            <sliderView></sliderView>
        </header>>

        <!--<cell class="headerCell">-->
            <!--<sliderView></sliderView>-->
        <!--</cell>-->

        <cell class="cell" v-for="news in lists">
            <div class="panel">
                <text class="text">{{news.newsTitle}}</text>
                <text class="content">{{news.newsContent}}</text>
            </div>
        </cell>

        <loading class="loading" @loading="onloading" :display="loadinging ? 'show' : 'hide'">
            <text class="indicator-text">Loading ...</text>
            <loading-indicator class="indicator"></loading-indicator>
        </loading>
    </list>
</template>

<script>
    const modal = weex.requireModule('modal')
    const LOADMORE_COUNT = 4
    var stream = weex.requireModule('stream');
    import sliderView from './sliderView';

    export default {
        data () {
            return {
                refreshing: false,
                loadinging: false,
                lists: []
            }
        },

        created(){
            let url = 'http://www.jspang.com/DemoApi/newsApi.php';
            this.getNews(url,res => {
                modal.toast({message:'数据请求成功',duration:1.0});
                this.lists = res.data;
            });
        },

        components:{
            sliderView
        },

        methods: {
            onrefresh (event) {
                if (this.refreshing == false){
                    modal.toast({ message: 'Refreshing', duration: 1 })
                    this.refreshing = true
                    setTimeout(() => {
                        this.refreshing = false;
                        let url = 'http://www.jspang.com/DemoApi/newsApi.php';
                        this.getNews(url,res => {
                            this.lists = res.data;
                        });
                    }, 2000)
                }
            },

            onloading (event) {
                modal.toast({ message: 'Loading', duration: 1 })
                this.loadinging = true
                setTimeout(() => {
                    this.loadinging = false
                    // const length = this.lists.length
                    // for (let i = length; i < length + LOADMORE_COUNT; ++i) {
                    //     this.lists.push(i + 1)
                    // }
                    let url = 'http://www.jspang.com/DemoApi/newsApi.php';
                    this.getNews(url,res => {
                        this.lists = this.lists.concat(res.data);
                    });
                }, 2000)
            },

            getNews(url,callback){
                return stream.fetch({
                    method:'GET',
                    type:'json',
                    url:url
                },callback);
            }
        }
    }
</script>

<style scoped>
    .list{
        width: 750px;
        justify-content: center;
        align-items: center;
        /*background-color: #0088fb;*/
    }

    .refresh{
        /*background-color: aqua;*/
        align-items: center;
        width: 750px;
    }

    .cell{
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

    .panel {
        width: 600px;
        /*height: 250px;*/
        margin-top: 35px;
        margin-bottom: 35px;
        /*flex-direction: column;*/
        justify-content: center;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(162, 217, 192);
        background-color: rgba(162, 217, 192, 0.2);
    }

    .text {
        font-size: 50px;
        text-align: center;
        color: #41B883;
    }

    .content{
        lines:3;
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 10px;
        text-overflow: ellipsis;
    }

    .loading {
        width: 750px;
        display: -ms-flex;
        display: -webkit-flex;
        display: flex;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        align-items: center;
        /*background-color: aqua;*/
    }
</style>