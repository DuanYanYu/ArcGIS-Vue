import Vue from 'vue'
import App from './App.vue'

import '../components/css/index.scss'
import Demo from '../components/lib/demo'
import GisCore from '../components/lib/giscore'

import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "./assets";

Vue.use(Demo)
Vue.use(GisCore)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')