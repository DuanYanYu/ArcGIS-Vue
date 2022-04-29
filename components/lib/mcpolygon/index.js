import McPolygon from './src/main.vue'

McPolygon.install = function(Vue){
    Vue.component(McPolygon.name, McPolygon)
}

export default McPolygon