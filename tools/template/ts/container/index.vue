<style lang="less">
@import "./index.less";
</style>

<script lang="tsx">
import Vue, {
    CreateElement
} from 'vue';
import {
    Component
} from 'vue-property-decorator';

@Component({})
export default class Index extends Vue {

    template:string = 'TypeScript SPA'

    jumpToDetail():void {
        this.$router.push('/detail');
    }

    jumpToComment():void {
        this.$router.push('/comment');
    }

    jumpToIndex():void {
        this.$router.push('/');
    }

    render(h: CreateElement) {
        return (
            <div class="wrapper">
                <div class="logo"></div>
                <h2 class="title">steamer-vue</h2>
                <div class="text">{this.template} 模板</div>
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
}
</script>
