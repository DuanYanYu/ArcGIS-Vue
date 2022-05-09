import Vue from 'vue'
import App from './App.vue'

import '../components/css/index.scss'
import GisCore from '../components/lib/mcgis'
import McPoint from '../components/lib/mcpoint'
import McWidget from '../components/lib/mcwidget'
import McMarks from '../components/lib/mcmarks'
import McHeat from '../components/lib/mcheat'
import McCluster from '../components/lib/mccluster'
import McBaseLayer from '../components/lib/mcbaselayer'
import Demo from '../components/lib/demo'


Vue.use(GisCore)
Vue.use(McPoint)
Vue.use(McWidget)
Vue.use(McHeat)
Vue.use(McMarks)
Vue.use(McCluster)
Vue.use(McBaseLayer)
Vue.use(Demo)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')