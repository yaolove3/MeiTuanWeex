<template>
    <div class="container">
        <div style="flex-direction: row;justify-content: space-between;align-items: center;width: 750px;height: 100px">
            <text style="color: black;font-size: 34px;margin-left: 25px;">{{title}}</text>

            <PeterSwitch class="PeterSwitch" v-if="isSwitch" @onSwitch="onSwitch" tintColor="#0088fb" onTintColor="#bfed5a" :thumbTintColor=thumbTintColor :isOn=isOn></PeterSwitch>
            <div v-else style="flex-direction: row">
                <text v-if="renderRightTitle()" style="color: #404040;font-size: 34px;margin-left: 25px;">{{rightTitle}}</text>
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
            title: "",  // 标题
            isSwitch: false, // 是否展示开关
            rightTitle: ""
        },
        data () {
            return {
                isOn:true,
                arrowImg:globalDefine.apiUrl.resUrl + 'icon_cell_rightarrow.png',
                thumbTintColor:"#ff4855"
            }
            
        },
        methods: {
            renderRightTitle(){
                if (this.rightTitle.length > 0){
                    return true;
                } else {
                    return false;
                }
            },
            onSwitch (e) {
                // modal.toast({message:JSON.stringify(e),duration:5.0});
                // modal.toast({message:e.isSwitchOn,duration:1.0});

                this.isOn = e.isSwitchOn;

                var r = Math.floor(Math.random()*256);
                var g = Math.floor(Math.random()*256);
                var b = Math.floor(Math.random()*256);
                var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
                this.thumbTintColor = color;
            }
        }
    }
</script>

<style scoped>
    .container{
        background-color: white;
    }
    .PeterSwitch{
        width: 100px;
        height: 60px;
        margin-right: 20px;
    }

</style>