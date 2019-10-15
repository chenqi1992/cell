const AppIndex = () =>
    import('@/layout/AppIndex.vue')
const Index = () =>
    import ('@/views/index/index.vue')
const Home = () =>
    import('@/views/home/home.vue')
const CHome = () =>
    import('@/views/cellhome/home.vue')
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
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/cellhome',
            name: 'cellHome',
            component: CHome
        },
    ]
}