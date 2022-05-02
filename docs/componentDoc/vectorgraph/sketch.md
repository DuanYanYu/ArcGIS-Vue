# 绘图工具条

## 基础示例

&#12288;&#12288;使用绘图工具条组件必须放在地图组件“容器”中，也就是说必须放在 `<mc-gis></mc-gis>` 组件中才可以，如下为一个基础示例。


::: demo
```html
<template>
  <div>
    <ClientOnly>  <!-- 请在使用组件时删除该标签。 -->
      <mc-gis :mWidth="700" :mHeight="400">
          <mc-widget/>
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
```
:::


## 位置 postion

&#12288;&#12288;可以使用`postion`属性指定工具条显示在地图上的位置，默认位置为右上角。该属性有四个值`bottom-left` （左下角）、`bottom-right` （右下角）、`top-left` （左上角）、`top-right` （右上角）。



::: demo
```html
<template>
  <div>
    <ClientOnly>  <!-- 请在使用组件时删除该标签。 -->
      <mc-gis :mWidth="700" :mHeight="400">
          <mc-widget :postion="postion"/>
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      postion: "bottom-left"
    }
  }
}
</script>
```
:::

## 可绘制图形 availableCreateTools

&#12288;&#12288;该工具条提供多种类别的图形绘制方法，包括点、线、任意多边形、矩形、圆；默认会提供所有的绘制方法，如果需要只显示部分绘制方法，可以使用该属性配置数组。


::: demo
```html
<template>
  <div>
    <ClientOnly>  <!-- 请在使用组件时删除该标签。 -->
      <mc-gis :mWidth="700" :mHeight="400">
          <mc-widget :availableCreateTools="tools"/>
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


## 绘制图形数据 @draw-complete

&#12288;&#12288;该回调函数会在图形绘制完毕和更新绘制后返回一个数组，数组每项为绘制图像完成或更新绘制图形后的数据对象，之所以为数组是因为在更新时可以选择多个图形来操作所以会返回数组。

&#12288;&#12288;返回的数据格式如下:

```javascript
[
  {
    type: 'polyline',
    data: [], // 点数据
  },
  {
    type: 'polygon',
    data: [], // 点数据
  }
]

```

### 代码

```Vue
<template>
  <div>
    <mc-gis :mWidth="600" :mHeight="400">
        <mc-widget @draw-complete="drawData"/>
    </mc-gis>
  </div>
</template>

<script>
export default {
  methods:{
    drawData(data){
      console.log('父组件获取的数据： ', data);
    },
  }
}
</script>
```
<br />
<br />

## 静态属性

&#12288;&#12288;这里的静态属性用于工具条的初始化，不支持响应式。

|         属性名          |   类型   | 说明           |                   默认值                    |                   可选值                    |
| :------------------: | :----: | ------------ | :--------------------------------------: | :--------------------------------------: |
|       postion        | String | 工具条显示在地图上的位置 |               'top-right'                | 'bottom-left' \| 'bottom-right' \| 'top-left' \| 'top-right' |
| availableCreateTools | Array  | 工具条可以绘制的图形数组 | ["point", "polyline", "polygon", "rectangle", "circle"] | "point", "polyline", "polygon", "rectangle", "circle" |

## 动态属性

&#12288;&#12288;该组件提供了以下的动态属性，这些属性可以在初始化地图时指定，也可以通过改变值来达到地图动态响应的效果。

| 属性名  |   类型    | 说明        | 默认值  |      可选值      |
| :--: | :-----: | --------- | :--: | :-----------: |
| show | Boolean | 工具条的显示与隐藏 | true | true \| false |

## 事件

|     事件名称      |       说明        |   回调参数   |
| :-----------: | :-------------: | :------: |
| draw-complete | 图形绘制或更新完成后触发该函数 | 返回图形数据对象 |
