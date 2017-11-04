<style lang="less" rel="stylesheet/less">
    @import "./css/main.less";

    div {
        margin: 0 auto;
        text-align: center;
    }
</style>

<script>
export default {
    data() {
        return {
            name: ' world'
        };
    },
    created() {
        console.log('hello steamer-vue');
    },
    render() {
        return (
            <div class="container">
                Hello {this.name}!
            </div>
        );
    }
};
</script>
