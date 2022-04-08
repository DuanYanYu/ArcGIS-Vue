const webpack = require("webpack");
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html'
        }
    },
    lintOnSave: false,
    configureWebpack:{
        devtool: 'source-map',
        plugins: [
            // 限制只打一个包，不分Chunk
            new webpack.optimize.LimitChunkCountPlugin({
              maxChunks: 1
            })
          ],
          // 当库里面引入了比较大的文件时，为了不影响主包大小，需要设置下该包使用外部引入
          externals: {
            '@arcgis': "@arcgis"
          }
    },
    chainWebpack(config) {
      config.plugins.delete('preload') // TODO: need test
      config.plugins.delete('prefetch') // TODO: need test
  
      // 处理ts文件 (新增loader)
      config.module
        .rule('ts')
        .test(/\.tsx?$/)
        .exclude
        .add(resolve('node_modules'))
        .end()
        .use('cache-loader')
        .loader('cache-loader')
        .options({
          cacheDirectory: resolve('node_modules/.cache/ts-loader')
        })
        .end()
        .use('babel-loader')
        .loader('babel-loader')
        .end()
        .use('ts-loader')
        .loader('ts-loader')
        .options({
          transpileOnly: true, // 关闭类型检查，即只进行转译(类型检查交给webpack插件(fork-ts-checker-webpack-plugin)在另一个进程中进行,这就是所谓的多进程方案,如果设置transpileOnly为false, 则编译和类型检查全部由ts-loader来做, 这就是单进程方案.显然多进程方案速度更快)
          appendTsSuffixTo: ['\\.vue$'],
          happyPackMode: false
        })
        .end()
  
      // set svg-sprite-loader
      config.module
        .rule('svg')
        .exclude.add(resolve('src/assets/icons'))
        .end()
      config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('src/assets/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end()
  
      config
        .when(process.env.NODE_ENV !== 'development',
          config => {
            config
              .plugin('ScriptExtHtmlWebpackPlugin')
              .after('html')
              .use('script-ext-html-webpack-plugin', [{
              // `runtime` must same as runtimeChunk name. default is `runtime`
                inline: /runtime\..*\.js$/
              }])
              .end()
            config
              .optimization.splitChunks({
                chunks: 'all',
                cacheGroups: {
                  libs: {
                    name: 'chunk-libs',
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: 'initial' // only package third parties that are initially dependent
                  },
                  elementUI: {
                    name: 'chunk-elementUI', // split elementUI into a single package
                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                  },
                  commons: {
                    name: 'chunk-commons',
                    test: resolve('src/components'), // can customize your rules
                    minChunks: 3, //  minimum common number
                    priority: 5,
                    reuseExistingChunk: true
                  }
                }
              })
            config.optimization.runtimeChunk('single'),
            {
               from: path.resolve(__dirname, './public/robots.txt'), //防爬虫文件
               to: './' //到根目录下
            }
          }
        )
    }
}