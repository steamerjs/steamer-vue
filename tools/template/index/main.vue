<style lang="less" rel="stylesheet/less">
    @import "./css/main.less";

    .container {
        font-size: 30px;

        .steamer {
            color: aqua;
            span {
                color: red;
            }
        }
    }
</style>

<template>
    <div class="container">
        <p class="steamer">Hello <span>{{name}}</span></p>
        <p class="scss">scss</p>
        <p class="sass">sass</p>
        <p class="less">less</p>
        <p class="stylus">stylus</p>
        <p class="css">css</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'Steamer Vue'
            }
        },
        created() {
            console.log('hello steamer-vue')
        }
    }
</script>
