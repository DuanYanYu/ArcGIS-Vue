# 点标记

## 基础示例

&#12288;&#12288;使用坐标点组件必须放在地图组件“容器”中，也就是说必须放在 `<GisCore></GisCore>` 组件中才可以，如下为一个基础示例。

<ClientOnly>
<GisCore :mWidth="600" :mHeight="400">
<McPoint/>
</GisCore>
</ClientOnly>


### 代码

```Vue
<GisCore :mWidth="600" :mHeight="400">
  <McPoint/>
</GisCore>
```
<br />
<br />

## 坐标 point

&#12288;&#12288;`point` 属性可以指定坐标点，该属性需要传递一个数组，数组第一项为经度，第二项为纬度。默认值为 `[ 108.953098279, 34.2777998978]` 。

<ClientOnly>
<GisCore :mWidth="600" :mHeight="400">
<McPoint/>
<McPoint :point="[116.402975,39.915156]"/>
</GisCore>
</ClientOnly>


### 代码

```Vue
<GisCore :mWidth="600" :mHeight="400">
    <McPoint/>
    <McPoint :point="[116.402975,39.915156]"/>
</GisCore>
```
<br />
<br />

## 图标 icon

&#12288;&#12288;  `icon` 属性可以指定坐标的图标，**值得注意的是**在指定路径时，特别的项目中的图片时需要用 `require()` 函数包裹路径地址。

<ClientOnly>
<GisCore :mWidth="600" :mHeight="400">
<McPoint :icon="require('../.vuepress/public/static/imgs/myPoint.png')"/>
</GisCore>
</ClientOnly>


### 代码

```Vue

<template>
  <div>
    <GisCore :mWidth="600" :mHeight="400">
        <McPoint/>
        <McPoint :icon="pointIcon"/>
    </GisCore>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      pointIcon:require('/public/static/imgs/myPoint.png')
    }
  },
}
</script>
```

<br />
<br />

## 宽高 iconWidth & iconHeight

&#12288;&#12288; 可以使用`iconWidth` 、`iconHeight` 属性来分别指定图标的宽度和高度。

<ClientOnly>
<GisCore :mWidth="600" :mHeight="400">
<McPoint :iconWidth="28" :iconHeight="28"/>
</GisCore>
</ClientOnly>

### 代码

```Vue

<template>
  <div>
    <GisCore :mWidth="600" :mHeight="400">
        <McPoint :iconWidth="width" :iconHeight="height" />
    </GisCore>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
        width: 28,
        height: 28
    }
  },
}
</script>
```

## 弹出框 popupTemplate

&#12288;&#12288; ArcGIS API提供了popupTemplate类可以在鼠标点击坐标点时显示一个信息弹出框，在这里你可以通过 `popupTemplate` 属性来配置弹出框要显示的数据。

&#12288;&#12288;该属性需要你传入一个对象`{}` ，该对象有两个属性 `title` （弹出框的标题）和`content` （要显示的数据）。

`title` 的值应为`String` 类型。

`content` 的值应为数组。数组每项为一个对象，这里提供了两种显示类别：分别是以表格形式显示数据和段落形式显示信息。

- 如果是表格形式应为如下格式：

  ```javascript
  {
    type: 'fields', // 表格形式显示数据需要制定type为fields
      fieldInfos:[{
        fieldName: 'Name',  // 字段名
        label: '地点',  // 文本
        data: '西安市' // 数据
      },{
        fieldName: 'Mine_Area', // 字段名
        label: '坐标', // 文本
        data: '108.953098279, 34.2777998978' // 数据
      }]
  }
  ```

- 如果是段落形式应为如下格式：

  ```javascript
  {
    type: 'text', // 段落形式显示数据需要制定type为text
    text: '西安，简称“镐”，古称长安、镐京，陕西省辖地级市，是陕西省省会。' //需要显示的文本内容
  }
  ```



&#12288;&#12288;点击下面的坐标查看弹出框。

<ClientOnly>
<GisCore :mWidth="600" :mHeight="400">
<McPoint :popupTemplate="{
        title:'描述',
        content:[{
          type: 'fields',
          fieldInfos:[{
            fieldName: 'Name',
            label: '地点',
            data: '西安市'
          },{
            fieldName: 'Mine_Area',
            label: '坐标',
            data: '108.953098279, 34.2777998978'
          }]
        },{
          type: 'text',
          text: '西安，简称“镐”，古称长安、镐京，陕西省辖地级市，是陕西省省会。'
        }]
      }"/>
</GisCore>
</ClientOnly>

### 代码

```Vue

<template>
  <div>
    <GisCore :mWidth="600" :mHeight="400">
        <McPoint :popupTemplate="popupTemplate" />
    </GisCore>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      popupTemplate:{
        title:'描述',
        content:[{
          type: 'fields',
          fieldInfos:[{
            fieldName: 'Name',
            label: '地点',
            data: '西安市'
          },{
            fieldName: 'Mine_Area',
            label: '坐标',
            data: '108.953098279, 34.2777998978'
          }]
        },{
          type: 'text',
          text: '西安，简称“镐”，古称长安、镐京，陕西省辖地级市，是陕西省省会。'
        }]
      }
    }
  },
}
</script>
```


## 静态属性

&#12288;&#12288;这里的静态属性用于点标记组件的初始化，不支持响应式。

|      属性名      |      说明       |   类型   |               默认值               | 可选值  |
| :-----------: | :-----------: | :----: | :-----------------------------: | :--: |
|     point     |   点标记的坐标经纬度   | Array  | [ 108.953098279, 34.2777998978] |  --  |
|     icon      |   点标记的图标地址    | String |            point.png            |  --  |
|   iconWidth   |    点标记的宽度     | Number |               22                |  --  |
|  iconHeight   |    点标记的高度     | Number |               22                |  --  |
| popupTemplate | 点击坐标点弹出框显示的数据 | Object |               --                |  [详情查看上面属性介绍](#弹出框-popuptemplate)  |


##  ref可用方法

|       方法        |      说明      |    返回值    |
| :-------------: | :----------: | :-------: |
| $$getInstance() | 返回点图层的实例 | new FeatureLayer() |



