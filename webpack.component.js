const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

const glob = require('glob');
const list = {}; //存放组件（key：组件名，value：组件地址）

//扫描项目中的所有组件组件
async function makeList(dirPash, list){
    const files = glob.sync(`${dirPash}/**/index.js`);
    for(let file of files){
        const component = file.split(/[/.]/)[2];
        list[component] = `./${file}`;
    }
    console.log(list);
}

makeList('components/lib', list)

module.exports = {
    entry: list,
    // mode: 'development',
    output: {
        filename: '[name].umd.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'mui',
        libraryTarget: 'umd',
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    module:{
        rules:[{
            test: /\.vue$/,
            use: [
                {
                    loader: 'vue-loader'
                }
            ]
        }]
    }
}