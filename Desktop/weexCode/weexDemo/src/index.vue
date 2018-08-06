<template>
    <home></home>
    <!--<shop></shop>-->
    <!--<mine></mine>-->
    <!--<more></more>-->
</template>

<script>
    import anJuKe from '../src/components/anJuK';
    import listView from '../src/components/listView';
    import home from '../src/MeiTuan/Home/Home';
    import shop from '../src/MeiTuan/Shop/Shop';
    import mine from '../src/MeiTuan/Mine/Mine';
    import more from '../src/MeiTuan/More/More';

    export default {
        name: 'App',
        data () {
            return {
                logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
            }
        },
        components:{
            anJuKe,
            home,
            listView,
            more,
            mine,
            shop
        }
    }

</script>

<style scoped>
    .wrapper {
        justify-content: center;
        align-items: center;
    }
    .logo {
        width: 424px;
        height: 200px;
    }
    .greeting {
        text-align: center;
        margin-top: 70px;
        font-size: 50px;
        color: #41B883;
    }
    .message {
        margin: 30px;
        font-size: 32px;
        color: #727272;
    }
</style>
