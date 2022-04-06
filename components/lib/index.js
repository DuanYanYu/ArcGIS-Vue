import GisCore from './giscore';
import McPoint from './mcpoint';
const components = {
    GisCore,
    McPoint
}

const install = function(Vue){
    if(install.installed) return;
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key])
    })
}

// 直接给浏览器或 AMD loader 使用
if (typeof window !== undefined && window.Vue) {
    window.Vue.use(install);
    if (install.installed) {
        install.installed = false;
    }
}

const API = {
    install
}

export default API