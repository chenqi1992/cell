const AppIndex = () =>
    import('@/layout/AppIndex.vue')
const Index = () =>
    import ('@/views/index/index.vue')

export default {
    path: '/',
    component: AppIndex,
    meta: {
        title: '首页',
    },
    children: [{
            path: '/index',
            name: 'index',
            component: Index
        },
    ]
}