<template>
    <div class="topHeader">
        <text class="top_text">weexweexweexweexweexweexweexweexweexweexweexweexweexweex</text>
        <input class="inputStyle" type="text" placeholder="请输入文字...">
        <img class="imgStyle" src="http://7xjyw1.com1.z0.glb.clouddn.com/20170412101827.png">
        <video class="video" :src="src" autoplay controls
               @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>
        <text class="info">state: {{state}}</text>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                state: '----',
                src:'http://service-cdn.qiqiuyun.net/5e5850fb-8436-4132-912b-073272ce70f3'
            }
        },
        methods:{
            onstart (event) {
                this.state = 'onstart'
            },
            onpause (event) {
                this.state = 'onpause'
            },
            onfinish (event) {
                this.state = 'onfinish'
            },
            onfail (event) {
                this.state = 'onfinish'
            }
        }
    }
</script>

<style scoped>
    .topHeader{
        background-color: red;
        padding: 10px;
        margin-top: 0px;
    }
    .top_text{
        color: white;
        text-align: center;
        font-size: 50px;
        lines: 1;
    }
    .inputStyle{
        width: 250px;
        height: 40px;
        margin-top: 10px;
        padding: 10px;
        border-bottom-width: 1.0px;
        border-bottom-color: black;
        background-color: white;
    }
    .imgStyle{
        width: 100px;
        height: 100px;
        resize: 'contain';
    }
    .video {
         width: 630px;
         height: 350px;
         margin-top: 60px;
         margin-left: 60px;
     }
    .info {
        margin-top: 40px;
        font-size: 40px;
        text-align: center;
    }
</style>
