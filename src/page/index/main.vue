<style lang="scss" rel="stylesheet/scss">
    @import "css/main";
    @import "css/main";

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

<style lang="styl">
    @import "css/main.styl";
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
