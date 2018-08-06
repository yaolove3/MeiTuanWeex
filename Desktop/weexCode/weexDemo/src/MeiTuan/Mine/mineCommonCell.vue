<template>
    <div class="container">
        <div style="flex-direction: row;justify-content: space-between;align-items: center;flex: 1">
            <div style="flex-direction: row;align-items: center">
                <image :src="leftIcon" style="width: 70px;height: 70px;margin-left: 25px;border-radius: 35px"></image>
                <text style="color: black;font-size: 34px;margin-left: 20px;">{{leftTitle}}</text>
            </div>

            <div style="flex-direction: row">
                <text style="color: #848484;font-size: 30px;margin-left: 25px;">{{rightTitle}}</text>
                <image v-if="renderRightIcon()" :src="rightIcon" style="width: 60px;height: 35px;"></image>
                <image :src="arrowImg" style="width: 22px;height: 35px;margin-right: 25px;margin-left: 15px;margin-top: 3px"></image>

            </div>
        </div>

        <div style="width: 750px;height: 1px;background-color: #e8e8e8"></div>
    </div>
</template>

<script>
    const modal = weex.requireModule('modal');
    var globalDefine = require('../../globalDefine');

    export default {
        props:{
            leftIcon: "",
            leftTitle: "",  // 标题
            rightTitle: "",
            rightIcon: ""
        },
        data () {
            return {
                arrowImg:globalDefine.apiUrl.resUrl + 'icon_cell_rightarrow.png',
            }
        },
        methods:{
            renderRightIcon(){
                if (this.rightIcon.length > 0){
                    return true;
                } else {
                    return false;
                }
            },
        }
    }
</script>

<style scoped>
    .container{
        height: 120px;
        background-color: white;
    }
</style>