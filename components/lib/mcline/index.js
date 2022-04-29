import McLine from './src/main.vue'

McLine.install = function(Vue){
    Vue.component(McLine.name, McLine)
}

export default McLine