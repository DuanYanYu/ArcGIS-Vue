# 地图

## 基础示例

&#12288;&#12288;使用该组件创建一个arcgis地图非常简单，只需要以下代码就可以生成一个默认样式的地图以供展示。

<GisCore :mHeight="400" :mWidth="600"/>

### 代码

```Vue
<GisCore :mHeight="400" :mWidth="600"/>
```
<br />
<br />

## 默认样式 useDefaultUi

&#12288;&#12288;相信很多在使用ArcGIS API的开发者都知道在创建默认地图的时候地图会带有缩放按钮及底部“powered by ESRI”的版权样式，该组件库在默认情况下已经去掉了这些内容以提供一个纯粹简洁的地图，当然考虑到有这些需求的开发者，该组件也提供了 `useDefaultUi` 属性在初始化地图时以显示这些内容。

<GisCore :mHeight="400" :mWidth="600" useDefaultUi/>

### 代码

```vue
<GisCore :mHeight="400" :mWidth="600" useDefaultUi/>
```

<br /><br />

## 底图 baseMapUrl

&#12288;&#12288;此组件在这里提供了一些在线可以访问的底图图层，可以通过配置 `baseMapUrl` 属性进行自定义配置，也可以给该属性配置自己的底图地址进行地图的初始化。以下在线地图版权所有：北京捷泰天域信息技术有限公司。

### ColorMapChina：中国地图彩色版
<br />
<GisCore :mWidth="600" :mHeight="400" baseMapUrl="ColorMapChina"/> <br />

### ColorMapEng：中国地图彩色英文版（含POI）
<br />
<GisCore :mWidth="600" :mHeight="400" baseMapUrl="ColorMapEng"/> <br />

### ChinaStreetGray：中国地图灰色版
<br />
<GisCore :mWidth="600" :mHeight="400" baseMapUrl="ChinaStreetGray"/> <br />

### ChinaStreetPurplishBlue：中国地图蓝黑版
<br />
<GisCore :mWidth="600" :mHeight="400" baseMapUrl="ChinaStreetPurplishBlue"/> <br />

### ChinaStreetWarm：中国地图暖色版
<br />
<GisCore :mWidth="600" :mHeight="400" baseMapUrl="ChinaStreetWarm"/>

### 代码

```vue
<GisCore :mWidth="600" :mHeight="400" baseMapUrl="ColorMapChina"/>
<GisCore :mWidth="600" :mHeight="400" baseMapUrl="ColorMapEng"/>
<GisCore :mWidth="600" :mHeight="400" baseMapUrl="ChinaStreetGray"/>
<GisCore :mWidth="600" :mHeight="400" baseMapUrl="ChinaStreetPurplishBlue"/>
<GisCore :mWidth="600" :mHeight="400" baseMapUrl="ChinaStreetWarm"/>

//也可以通过地址初始化地图底图
<GisCore :mWidth="600" :mHeight="400" baseMapUrl="http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity_Mobile/MapServer"/>
<GisCore :mWidth="600" :mHeight="400" baseMapUrl="http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunityENG/MapServer"/>
<GisCore :mWidth="600" :mHeight="400" baseMapUrl="http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer"/>
<GisCore :mWidth="600" :mHeight="400" baseMapUrl="http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer"/>
<GisCore :mWidth="600" :mHeight="400" baseMapUrl="http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer"/>
```

<br /><br />

## 中心点 mCenterPoint

&#12288;&#12288;此组件默认中心点设置为 `144.9530982345, 44.277755199` 即西安市，也可以通过`baseMapUrl` 属性设置地图中心点，**该属性具有响应式效果** 。

<GisCore :mWidth="600" :mHeight="400" :mCenterPoint="[114.05, 22.27]"/>

### 代码

```vue
<template>
  <div>
    <GisCore :mWidth="600" :mHeight="400" :mCenterPoint="point"/>
  </div>
</template>

<script>

export default {
  data(){
    return{
      point:[114.05, 22.27],
    }
  }
}
</script>
```

<br /><br />

## 缩放级别 mZoom

&#12288;&#12288;该属性为地图的缩放级别，默认值为3，**该属性具有响应式效果**。

<GisCore :mWidth="600" :mHeight="400" :mZoom="10"/>

```vue
<template>
  <div>
    <GisCore :mWidth="600" :mHeight="400" :mZoom="zoom"/>
  </div>
</template>

<script>

export default {
  data(){
    return{
      zoom:10,
    }
  }
}
</script>
```



<br /><br />

## 静态属性

&#12288;&#12288;这里的静态属性用于地图初始化，不支持响应式。

|     属性名      |   类型    | 说明                                      |      默认值      |                   可选值                    |
| :----------: | :-----: | --------------------------------------- | :-----------: | :--------------------------------------: |
|    mWidth    | Number  | 创建地图的宽度（单位px）                           |       0       |                    --                    |
|   mHeight    | Number  | 创建地图的高度（单位px）                           |       0       |                    --                    |
|  baseMapUrl  | String  | 设置地图底图的地址，这里提供了7个在线图层以供使用，也可以填入自己底图的地址， | ColorMapChina | ColorMapChina/ <br />ColorMapEng/ <br />ColorMapChina2/ <br />ChinaStreetGray/ <br />ChinaStreetPurplishBlue/ <br />ChinaStreetWarm/ <br />OffshoreChina |
| useDefaultUi | Boolean | 提供ArcGIS API的默认样式（放大缩小按钮和底图版权样式）        |     false     |                true/false                |

<br /><br />

## 动态属性

&#12288;&#12288;该组件提供了以下的动态属性，这些属性可以在初始化地图时指定，也可以通过改变值来达到地图动态响应的效果。

|     属性名      |   类型   | 说明        |              默认值               |                   可选值                    |
| :----------: | :----: | --------- | :----------------------------: | :--------------------------------------: |
| mCenterPoint | Array  | 地图的中心点坐标。 | [108.953098279, 34.2777998978] | 经度整数部分为0-180,小数部分为0到12位； 纬度整数部分为0-90,小数部分为0到12位 |
|    mZoom     | Number | 地图的缩放级别   |               3                |                   大于1                    |



## 事件

|     事件名称     |     说明      |      回调参数      |
| :----------: | :---------: | :------------: |
| mouse-wheel  |  鼠标滚轮缩放地图   | (event: Event) |
| double-click |    双击地图     | (event: Event) |
|     drag     |    拖动地图     | (event: Event) |
|   key-down   | 上下左右键盘键移动地图 | (event: Event) |



