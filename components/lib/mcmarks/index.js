import McMarks from './src/main.vue'

McMarks.install = function(Vue){
    Vue.component(McMarks.name, McMarks)
}

export default McMarks