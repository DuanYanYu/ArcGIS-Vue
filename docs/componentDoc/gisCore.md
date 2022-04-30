# 地图

## 宽高 mWidth&mHeight

&#12288;&#12288;使用该组件创建一个arcgis地图非常简单，只需要以下代码就可以生成一个默认样式的地图以供展示。注意这里的宽高值可以传递`Number`和`String`两种类型；如果传递的是`Number`类型的其单位为`px`，如果传递的是`String`类型的，那么需要传递一个带有单位的字符串如：`100vh`，`100vw`等。

::: demo
```html
<template>
  <div>
    <ClientOnly>  <!-- 请在使用组件时删除该标签。 -->
      <mc-gis :mWidth="width" :mHeight="height">
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      width: 700,
      height: 400,
      // width: '100vw',
      // height: '100vh'
    }
  }
}
</script>
```
:::


## 默认样式 useDefaultUi

&#12288;&#12288;相信很多在使用ArcGIS API的开发者都知道在创建默认地图的时候地图会带有缩放按钮及底部“powered by ESRI”的版权样式，该组件库在默认情况下已经去掉了这些内容以提供一个纯粹简洁的地图，当然考虑到有这些需求的开发者，该组件也提供了 `useDefaultUi` 属性在初始化地图时以显示这些内容。


::: demo
```html
<template>
  <div>
    <ClientOnly>  <!-- 请在使用组件时删除该标签。 -->
      <mc-gis :mWidth="700" :mHeight="400" useDefaultUi>
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      tools: ['point', 'polyline']
    }
  }
}
</script>
```
:::

## 底图 baseMapUrl

&#12288;&#12288;此组件在这里提供了一些在线可以访问的底图图层，可以通过配置 `baseMapUrl` 属性进行自定义配置，也可以给该属性配置自己的底图地址进行地图的初始化。或许你可以使用[arcgis官方提供的底图生成工具](https://www.arcgis.com/home/webmap/viewer.html)自己生成底图来使用。

以下在线地图版权所有：北京捷泰天域信息技术有限公司。

### ColorMapChina：中国地图彩色版
<br />

::: demo
```html
<template>
  <div>
    <ClientOnly>  <!-- 请在使用组件时删除该标签。 -->
      <mc-gis :mWidth="700" :mHeight="400" :baseMapUrl="ColorMapChina">
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      baseMapUrl: "ColorMapChina"
    }
  }
}
</script>
```
:::

### ColorMapEng：中国地图彩色英文版（含POI）
<br />
<ClientOnly>
  <mc-gis :mWidth="600" :mHeight="400" baseMapUrl="ColorMapEng"/> <br />
</ClientOnly>

### ChinaStreetGray：中国地图灰色版
<br />
<ClientOnly>
  <mc-gis :mWidth="600" :mHeight="400" baseMapUrl="ChinaStreetGray"/> <br />
</ClientOnly>

### ChinaStreetPurplishBlue：中国地图蓝黑版
<br />
<ClientOnly>
  <mc-gis :mWidth="600" :mHeight="400" baseMapUrl="ChinaStreetPurplishBlue"/> <br />
</ClientOnly>

### ChinaStreetWarm：中国地图暖色版
<br />
<ClientOnly>
  <mc-gis :mWidth="600" :mHeight="400" baseMapUrl="ChinaStreetWarm"/>
</ClientOnly>

### 代码

```vue
<mc-gis :mWidth="600" :mHeight="400" baseMapUrl="ColorMapChina"/>
<mc-gis :mWidth="600" :mHeight="400" baseMapUrl="ColorMapEng"/>
<mc-gis :mWidth="600" :mHeight="400" baseMapUrl="ChinaStreetGray"/>
<mc-gis :mWidth="600" :mHeight="400" baseMapUrl="ChinaStreetPurplishBlue"/>
<mc-gis :mWidth="600" :mHeight="400" baseMapUrl="ChinaStreetWarm"/>

//也可以通过地址初始化地图底图
<mc-gis :mWidth="600" :mHeight="400" baseMapUrl="http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity_Mobile/MapServer"/>
<mc-gis :mWidth="600" :mHeight="400" baseMapUrl="http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunityENG/MapServer"/>
<mc-gis :mWidth="600" :mHeight="400" baseMapUrl="http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer"/>
<mc-gis :mWidth="600" :mHeight="400" baseMapUrl="http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer"/>
<mc-gis :mWidth="600" :mHeight="400" baseMapUrl="http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer"/>
```

<br /><br />



## 天地图 tdtBaseMap

&#12288;&#12288;该组件可以配置`tdtBaseMap` 属性实现调用天地图图层作为底图的功能。 **注意**：在使用天地图属性后，`baseMapUrl` 属性失效 `tdtBaseMap` 属性为一个对象，需要配置两个属性`tk `、 `mapType`这两个属性的值得类别都为`String`；`tk` 属性为天地图API时注册的[密钥](https://console.tianditu.gov.cn/api/register)；`mapType` 为天地图提供的[图层的类别](http://lbs.tianditu.gov.cn/server/MapService.html)。该属性提供以下几个值：

| mapType的值 |  说明（图层名称）  |
| :-------: | :--------: |
|   img_c   | 影像底图的经纬度投影 |


<ClientOnly>
  <mc-gis :mWidth="700" :mHeight="400" :tdtBaseMap="{
        tk:'f6e0f7525c9d5618f59bb0b9cde93751',
        mapType:'img_c'
      }"/>
</ClientOnly>


```html
<template>
  <div>
    <ClientOnly>  <!-- 请在使用组件时删除该标签。 -->
      <mc-gis :mWidth="700" :mHeight="400" :tdtBaseMap="tdtProp">
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      tdtProp:{
        tk:'你的天地图密钥',
        mapType:'img_c'
      },
    }
  }
}
</script>
```

## 中心点 mCenterPoint

&#12288;&#12288;此组件默认中心点设置为 `144.9530982345, 44.277755199` 即西安市，也可以通过`baseMapUrl` 属性设置地图中心点，**该属性具有响应式效果** 。


::: demo
```html
<template>
  <div>
    <ClientOnly>  <!-- 请在使用组件时删除该标签。 -->
      <mc-gis :mWidth="700" :mHeight="400" :mCenterPoint="point">
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      point:[114.05, 22.27],
    }
  }
}
</script>
```
:::

## 缩放级别 mZoom

&#12288;&#12288;该属性为地图的缩放级别，默认值为3，**该属性具有响应式效果**。


::: demo
```html
<template>
  <div>
    <ClientOnly>  <!-- 请在使用组件时删除该标签。 -->
      <mc-gis :mWidth="700" :mHeight="400" :mZoom="zoom">
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      zoom:10,
    }
  }
}
</script>
```
:::
## 静态属性

&#12288;&#12288;这里的静态属性用于地图初始化，不支持响应式。

|     属性名      |   类型    | 说明                                       |        默认值         |                   可选值                    |
| :----------: | :-----: | ---------------------------------------- | :----------------: | :--------------------------------------: |
|    mWidth    | Number  | 如果传递的是`Number`类型即为创建地图的宽度（单位px）;如果是字符串需要自己带着单位，如`100vw` | String \|\| Number |                   ----                   |
|   mHeight    | Number  | 如果传递的是`Number`类型即为创建地图的高度（单位px）;如果是字符串需要自己带着单位，如`100vh` | String \|\| Number |                  -----                   |
|  baseMapUrl  | String  | 设置地图底图的地址，这里提供了7个在线图层以供使用，也可以填入自己底图的地址，  |   ColorMapChina    | ColorMapChina/ <br />ColorMapEng/ <br />ColorMapChina2/ <br />ChinaStreetGray/ <br />ChinaStreetPurplishBlue/ <br />ChinaStreetWarm/ <br />OffshoreChina |
|  tdtBaseMap  | Object  | 设置地图底图为天地图的底图图层                          |         --         |      [详情请看上方属性介绍](#天地图-tdtbasemap)       |
| useDefaultUi | Boolean | 提供ArcGIS API的默认样式（放大缩小按钮和底图版权样式）         |       false        |                true/false                |

<br /><br />

## 动态属性

&#12288;&#12288;该组件提供了以下的动态属性，这些属性可以在初始化地图时指定，也可以通过改变值来达到地图动态响应的效果。

|     属性名      |   类型   | 说明        |              默认值               |                   可选值                    |
| :----------: | :----: | --------- | :----------------------------: | :--------------------------------------: |
| mCenterPoint | Array  | 地图的中心点坐标。 | [108.953098279, 34.2777998978] | 经度整数部分为0-180,小数部分为0到12位； 纬度整数部分为0-90,小数部分为0到12位 |
|    mZoom     | Number | 地图的缩放级别   |               3                |                 大于等于0的整数                 |



## 事件

|     事件名称     |     说明      |      回调参数      |
| :----------: | :---------: | :------------: |
| mouse-wheel  |  鼠标滚轮缩放地图   | (event: Event) |
| double-click |    双击地图     | (event: Event) |
|     drag     |    拖动地图     | (event: Event) |
|   key-down   | 上下左右键盘键移动地图 | (event: Event) |
|    click     |    单击地图     | (event: Event) |

##  ref可用方法

|       方法        |      说明      |    返回值    |
| :-------------: | :----------: | :-------: |
| $$getInstance() | 返回arcgis地图实例 | new Map() |

