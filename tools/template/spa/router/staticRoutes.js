import Index from 'PAGES/spa/container/index.vue';
// import Detail from 'PAGES/spa/container/detail.vue';
// import Comment from 'PAGES/spa/container/comment.vue';

const Detail = () => import(/* webpack-chunk-name: "Detail" */ `PAGES/spa/container/detail.vue`);
const Comment = () => import(/* webpack-chunk-name: "Comment" */ `PAGES/spa/container/comment.vue`);

const routes = [
    {
        name: 'index',
        path: '/',
        component: Index
    },
    {
        name: 'detail',
        path: '/detail',
        component: Detail
    },
    {
        name: 'comment',
        path: '/comment',
        component: Comment
    }
];

export default routes;
