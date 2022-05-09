import GisCore from './src/main.vue'

GisCore.install = function(Vue){
    Vue.component(GisCore.name, GisCore)
}

export default GisCore