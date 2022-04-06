const webpack = require("webpack");
module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html'
        }
    },
    chainWebpack: config => {
      config.module
          .rule('images')
          .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { limit: 1 }))
    },
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
    }
}