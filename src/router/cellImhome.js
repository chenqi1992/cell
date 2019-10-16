const AppMhome = () =>
    import('@/layout/AppMhome.vue')
const Mhome = () =>
    import('@/views/mhome/cellmhome.vue')
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
        }
    ]
}