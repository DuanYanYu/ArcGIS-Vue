import TdtGis from './src/main.vue'

TdtGis.install = function(Vue){
    Vue.component(TdtGis.name, TdtGis)
}

export default TdtGis