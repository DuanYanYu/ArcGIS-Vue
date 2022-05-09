import GisCore from './mcgis';
import McPoint from './mcpoint';
import McWidget from './mcwidget';
import McCluster from './mccluster';
import McHeat from './mcheat';
import McMarks from './mcmarks';
import McLine from './mcline';
import McPolygon from './mcpolygon';
import BaseLayer from './mcbaselayer';

const components = {
    GisCore,
    McPoint,
    McWidget,
    McCluster,
    McHeat,
    McMarks,
    McLine,
    McPolygon,
    BaseLayer
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