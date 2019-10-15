import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import zh from './lang/zh'
import en from './lang/en'
import zhtw from './lang/zhtw'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import zhtwLocale from 'element-ui/lib/locale/lang/zh-TW'
import {getStore} from '@/utils/utils.js'

Vue.use(VueI18n)

const messages = {
  en_US: Object.assign(en, enLocale),
  zh_CN: Object.assign(zh, zhLocale),
  zh_TW: Object.assign(zhtw, zhtwLocale)
}

const i18n = new VueI18n({
  locale: getStore('locale') || 'zh_CN',
  messages
})

locale.i18n((key, value) => i18n.t(key, value)) // 为了实现element插件的多语言切换

export default i18n
