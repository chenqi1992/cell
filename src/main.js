import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

/* IE下提示Promise未定义的解决方法 */
if (!window.Promise) {
    window.Promise = Promise;
}

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')