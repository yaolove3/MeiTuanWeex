<template>
    <slider class="sliderClass" auto-play="true" interval="3000">
        <div class="divClass" v-for="image in imageList">
            <image class="imageClass" resize:cover :src="image.src"></image>
        </div>
        <indicator class="indicatorClass"></indicator>
    </slider>
</template>

<script>
    export default {
        data () {
            return {
                imageList:[
                    { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
                    { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
                    { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
                ]
            }
        },
        methods:{
        }

    }
</script>

<style scoped>
    .imageClass{
        width: 700px;
        height: 300px;
    }
    .sliderClass{
        margin-top: 25px;
        margin-left: 25px;
        width: 700px;
        height: 300px;
        border-width: 2px;
        border-style: solid;
        border-color: #dddddd;

    }
    .divClass{
        width: 700px;
        height: 300px;
        position: absolute;
    }
    .indicatorClass{
        width: 700px;
        height: 300px;
        item-color:white;
        item-selected-color:red;
        item-size:25px;
        top: 100px;
        left: 0px;
    }
</style>
