<template>
    <div class="container">
        <image :src="imageStr" style="width: 300px;height: 200px;margin-top: 20px;border-radius: 5px"></image>
        <text style="color: black;font-size: 34px;margin-left: 15px;margin-top: 10px">{{title}}</text>
        <text style="color: black;font-size: 34px;position: absolute;top: 150px;background-color: darkorange;color: white;padding-left: 5px;padding-right: 5px">{{tagTitle}}</text>
    </div>
</template>

<script>
    export default {
        props:{
            imageStr:'',
            title:'',
            tagTitle:''
        },
        data () {

        }
    }
</script>

<style scoped>
    .container{
        background-color: white;
        width: 300px;
        margin-left: 20px;
        align-items: center;
    }
</style>