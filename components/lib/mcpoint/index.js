import McPoint from './src/main.vue'

McPoint.install = function(Vue){
    Vue.component(McPoint.name, McPoint)
}

export default McPoint