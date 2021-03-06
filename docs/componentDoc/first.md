# 快速开始

**注意**：由于该组件没有内置arcgis，所以使用之前仍需按照正常方式导入arcgis库，目前使用的arcgis版本为4.22。
## 1. 安装并引用arcgis
#### 安装
```bash
npm i @arcgis/core
```
#### 在`index.html`文件中引用样式
```JavaScript
<link rel="stylesheet" href="https://js.arcgis.com/4.22/esri/themes/light/main.css">
```

## 2. 安装组件库
```bash
npm i arcgis4js-components
```

## 3. 引用组件库

```javascript
// 全部引入
import ArcGisComponents from "arcgis4js-components";
Vue.use(ArcGisComponents)

// 按需引用
import {McGis} from "arcgis4js-components";
Vue.use(McGis)
```

## 4. 组件使用

&#12288;&#12288;使用该组件创建一个arcgis地图非常简单，只需要以下代码就可以生成一个默认样式的地图以供展示。

<ClientOnly>
  <mc-gis :mHeight="400" :mWidth="600" useDefaultUi/>
</ClientOnly>

### 代码

```Vue
<mc-gis :mHeight="400" :mWidth="600" useDefaultUi/>
```