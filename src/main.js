import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css";
import { Popup, Button } from "vant";
import 'vant/lib/index.css';
import i18n from '@/utils/i18n'
// import 'lib-flexible'
Vue.use(ElementUI)
Vue.use(Popup)
Vue.use(Button)
/* IE下提示Promise未定义的解决方法 */
if (!window.Promise) {
    window.Promise = Promise;
}

Vue.config.productionTip = false

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app')
