const moment = require('moment');
const webpack = require("webpack");
module.exports = {
    title: '组件库 | vue-arcgismap',
    // base:'/ArcGIS-Vue/',
    head: [
        ['link', { rel: 'icon', href: 'logo.png' }]
    ],
    locales:{
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        },
    },
    themeConfig: {
        sidebar: [
            ['/', '首页'],
            ['/componentDoc/first', '快速开始'], 
            ['/componentDoc/gisCore', '地图'],
            ['/componentDoc/point', '点标记'],
            {
                title: '数据图层',
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    ['/componentDoc/layer/marker', '海量点'],
                    ['/componentDoc/layer/cluster', '点聚合'],
                    ['/componentDoc/layer/heat', '热力图'],
                ]
            },
            {
                title: '矢量图形',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    ['/componentDoc/vectorgraph/sketch', '绘图工具条'],
                    ['/componentDoc/vectorgraph/ployline', '矢量线'],
                    ['/componentDoc/vectorgraph/ploygon', '矢量面'],
                ]
            },
        ],
        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/componentDoc/first' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: '汉语', link: '/language/chinese/' },
                    { text: 'English', link: '/language/english/' }
                ]
            },
            { text: 'GitHub', link: 'https://github.com/DuanYanYu/ArcGIS-Vue' },
            { text: 'Npm', link: 'https://www.npmjs.com/package/arcgis4js-components' },
            
        ],
        logo: '/logo.png',
        lastUpdated: '上次更新时间：', // string | boolean
    },
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                  moment.locale(lang)
                  return moment(timestamp).format('YYYY年MM月DD日')
                }
            }
        ],
        [
            'vuepress-plugin-typescript',
            {
              tsLoaderOptions: {
                // ts-loader 的所有配置项
              },
            },
        ],  
        ['demo-container-v2'],
    ],
    configureWebpack: {
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
    chainWebpack: (config, isServer) => {
        config.resolve.alias.set('core-js/library/fn', 'core-js/features')
    }
}