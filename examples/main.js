import Vue from 'vue'
import App from './App.vue'

import '../components/css/index.scss'
import GisCore from '../components/lib/giscore'
import McPoint from '../components/lib/mcpoint'
import Demo from '../components/lib/demo'


Vue.use(GisCore)
Vue.use(McPoint)
Vue.use(Demo)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')