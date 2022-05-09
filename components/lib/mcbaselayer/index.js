import BaseLayer from './src/main.vue'

BaseLayer.install = function(Vue){
    Vue.component(BaseLayer.name, BaseLayer)
}

export default BaseLayer