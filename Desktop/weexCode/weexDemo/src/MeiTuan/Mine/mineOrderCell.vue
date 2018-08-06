<template>
    <div class="container">
        <div v-for="item in items" style="flex: 1;justify-content: center;align-items: center">
            <image :src="item.icon" style="width: 120px;height: 85px;"></image>
            <text style="color: #848484;font-size: 34px;margin-top: 10px">{{item.name}}</text>
        </div>
    </div>
</template>

<script>
    var globalDefine = require('../../globalDefine');

    export default {
        data () {
            return{
                items:
                    [
                        {name:'待付款',icon:globalDefine.apiUrl.resUrl + 'order1.png'},
                        {name:'待使用',icon:globalDefine.apiUrl.resUrl + 'order2.png'},
                        {name:'待评价',icon:globalDefine.apiUrl.resUrl + 'order3.png'},
                        {name:'退款/售后',icon:globalDefine.apiUrl.resUrl + 'order4.png'}
                    ]
            }
        }
    }
</script>

<style scoped>
    .container{
        height: 180px;
        background-color: white;
        flex-direction: row;
    }
</style>