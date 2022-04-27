import McHeat from './src/main.vue'

McHeat.install = function(Vue){
    Vue.component(McHeat.name, McHeat)
}

export default McHeat