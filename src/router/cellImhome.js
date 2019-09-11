const AppMhome = () =>
    import('@/layout/AppMhome.vue')
const Mhome = () =>
    import('@/views/mhome/mhome.vue')
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