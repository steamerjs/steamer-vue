import Index from '../container/index.vue';

const Detail = () => import(/* webpack-chunk-name: "Detail" */ `../container/detail.vue`);
const Comment = () => import(/* webpack-chunk-name: "Comment" */ `../container/comment.vue`);

const routes = [
    {
        name: 'index',
        path: '/',
        component: Index,
    },
    {
        name: 'detail',
        path: '/detail',
        component: Detail,
    },
    {
        name: 'comment',
        path: '/comment',
        component: Comment,
    },
];

export default routes;
