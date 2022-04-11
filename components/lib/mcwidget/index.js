import McWidget from './src/main.vue'

McWidget.install = function(Vue){
    Vue.component(McWidget.name, McWidget)
}

export default McWidget