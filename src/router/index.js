import Vue from 'vue'
import Router from 'vue-router'
import index from './cellIndex'

Vue.use(Router)
let routeslist = []
    // 模块路由添到路由列表
routeslist.push(index)
export default new Router({
    mode: 'history',
    routes: routeslist,
    scrollBehavior(to, from, savedPosition) {
        Boolean(document.querySelectorAll(".el-scrollbar__wrap")[0]) ? (document.querySelectorAll(".el-scrollbar__wrap")[0].scrollTop = 0) : ''
        return { x: 0, y: 0 }
    }
})