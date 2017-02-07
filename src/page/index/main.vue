<style lang="less" rel="stylesheet/less">
    p {
        color: red;
        font-size: 28px;

        span {
            color: #000;
        }
    }
</style>

<template>
    <p>Hello <span>Steamer Vue</span></p>
</template>
<script>
    export default {
        data() {
            return {
                name: 'jeff'
            }
        },
        created() {
            console.log(333)
        }
    }
</script>
