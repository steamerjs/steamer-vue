<style lang="css" rel="stylesheet/css">
    @import "./css/main.css";

    div {
        display: flex;
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
            <div id="page" class="container">
                Hello {this.name}!
            </div>
        );
    }
};
</script>
