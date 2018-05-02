<style lang="less">
@import "./index.less";
</style>

<script>
export default {
    data() {
        return {

        };
    },
    methods: {
        jumpToDetail() {
            this.$router.push('/detail');
        },
        jumpToComment() {
            this.$router.push('/comment');
        },
        jumpToIndex() {
            this.$router.push('/');
        }
    },
    render() {
        console.log();
        console.log('index mounted');
        return (
            <div class="wrapper">
                <div class="logo"></div>
                <h2 class="title">steamer-vue</h2>
                <div class="text">SPA 模板</div>
                <div class="page">
                    <a onClick={this.jumpToIndex}>index</a>
                    <a onClick={this.jumpToDetail}>detail</a>
                    <a onClick={this.jumpToComment}>comment</a>
                </div>
                <div class="link">
                    <a class="icon-github" href="https://github.com/steamerjs/steamer-react" target="_blank" title="Github"></a>
                    <a class="icon-docs" href="https://steamerjs.github.io/" target="_blank" title="文档"></a>
                    <a class="icon-author" href="https://github.com/lcxfs1991" target="_blank" title="作者"></a>
                </div>
            </div>
        );
    }
};
</script>
