//接口域名地址
let baseURL, protocol = 'http://',
    hostName = '';
if (process.env.NODE_ENV === 'development') {
    hostName = 'www.celltr.com'
} else if (process.env.NODE_ENV === 'production') {
    if (process.env.VUE_APP_TYPE === "test") {
        hostName = 'www.celltr.com'
    } else if (process.env.VUE_APP_TYPE === "dev") {
        hostName = 'www.celltr.com'
    } else if (process.env.VUE_APP_TYPE === 'prod') {
        hostName = 'www.celltr.com'
    } else {
        hostName = 'www.celltr.com'
    }
}
baseURL = protocol + hostName

export default {
    baseURL: baseURL,
    hostName: hostName
}