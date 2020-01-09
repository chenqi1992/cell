const AppMhome = () =>
    import('@/layout/AppMhome.vue')
const Mhome = () =>
    import('@/views/mhome/cellmhome.vue')  //首页
const Mhomedetail = () => import("@/views/mhome1/cellmhome.vue"); //首页下载详情
export default {
    path: '/',
    component: AppMhome,
    meta: {
        title: '首页',
    },
    children: [
        {
            path: '/mhome',
            name: 'mhome',
            component: Mhome
        },
        {
            path: '/mhomedetail',
            name: 'mhomedetail',
            component: Mhomedetail
        }
    ]
}
