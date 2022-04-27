export default ({ 
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // 解决引入自己组件报错document未找到的问题
  Vue.mixin({
    mounted() {
      // if(!isServer){
      //   import('./js/arcgis4js-components.umd.min.js').then(module => {
      //       Vue.use(module)
      //     }) 
      // }
        
      import('./components/McHeat').then(function(m) {
        Vue.use(m)
      });
      import('./components/McGis').then(function(m) {
        Vue.use(m)
      });
      import('./components/McPoint').then(function(m) {
        Vue.use(m)
      });
      import('./components/McWidget').then(function(m) {
        Vue.use(m)
      });
      import('./components/McCluster').then(function(m) {
        Vue.use(m)
      });
    }
  })
}