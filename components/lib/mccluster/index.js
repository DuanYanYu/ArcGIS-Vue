import McCluster from './src/main.vue'

McCluster.install = function(Vue){
    Vue.component(McCluster.name, McCluster)
}

export default McCluster