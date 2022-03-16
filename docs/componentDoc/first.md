# 快速开始

### 1. 安装arcgis
```bash
npm i @arcgis/core
```
### 2. 安装组件库
```bash
npm i arcgis4js-components
```

### 3. 引用组件库

```javascript
// 全部引入
import "arcgis4js-components/dist/css/index.css";
import ArcGisComponents from "arcgis4js-components";
Vue.use(ArcGisComponents)

// 按需引用
import "arcgis4js-components/dist/css/demo.css";
import {Demo} from "arcgis4js-components";
Vue.use(Demo)
```