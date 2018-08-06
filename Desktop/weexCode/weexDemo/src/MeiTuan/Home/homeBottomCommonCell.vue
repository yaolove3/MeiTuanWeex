<template>
    <div class="container">
        <div class="innerView">
            <div class="leftView">
                <image :src="rightViewBtttomImage" style="width: 50px;height: 50px;margin-left: 20px"></image>
                <text style="color: black;font-size: 34px;margin-left: 15px;">{{leftTitle}}</text>
            </div>

            <div class="rightView">
                <text style="color: #717171;font-size: 28px;">{{rightTitle}}</text>
                <image :src="rightarrow" style="width: 20px;height: 25px;margin-left: 10px;margin-right: 20px"></image>
            </div>
        </div>
    </div>
</template>

<script>
    var globalDefine = require('../../globalDefine');
    export default {
        props:{
            rightViewBtttomImage:'',
            leftTitle: '',
            rightTitle: '',
        }
        ,
        data () {
            return{
                rightarrow:globalDefine.apiUrl.resUrl + 'icon_cell_rightarrow.png',
            }
        }
    }
</script>

<style scoped>
    .container{
        background-color: #e8e8e8;
        height: 100px;
    }
    .innerView{
        background-color: white;
        flex-direction: row;
        justify-content: space-between;
        height: 98px;
    }
    .leftView{
        flex-direction: row;
        height: 100px;
        align-items: center;
    }
    .rightView{
        flex-direction: row;
        height: 100px;
        align-items: center;
    }
</style>