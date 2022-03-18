const moment = require('moment');

module.exports = {
    title: '组件库 | vue-arcgismap',
    head: [
        ['link', { rel: 'icon', href: 'logo.png' }]
    ],
    themeConfig: {
        sidebar: [
            ['/', '首页'],
            ['/componentDoc/first', '快速开始'],
            ['/componentDoc/demo', '示例组件'],     
            ['/componentDoc/gisCore', '地图']     
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
                  // 不要忘了安装 moment
                  const moment = require('moment')
                  moment.locale(lang)
                  return moment(timestamp).format('YYYY年MM月DD日')
                }
            }
        ]
    ]
  }