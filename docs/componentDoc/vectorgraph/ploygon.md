# 矢量面图层


## 路径坐标集合 rings

&#12288;&#12288;使用该组价时将做标集合赋给`rings`属性即可使用默认样式进行展示。


::: demo
```html
<template>
  <div>
    <ClientOnly>  <!-- 请在使用组件时删除该标签。 -->
      <mc-gis :mWidth="700" :mHeight="400">
          <mc-polygon :rings="rings"/>
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {
        rings:[
            [116.27653, 34.15121],
            [117.2446, 38.15462],
            [118.22915, 36.54439],
            [120.23327, 37.12279]
        ],
      }
  }
}
</script>
```
:::

## 路径颜色 color

&#12288;&#12288;使用`color`属性可以设置线条的颜色，可以传递数组rgb值如：`[226, 119, 40]`该值也是线条的默认值，或者颜色的十六进制的字符串值如：`#FFFFFF`来指定。
&#12288;&#12288;注意点集合的格式应该是：
```javascript
[
    [116.27653, 34.15121],
    [117.2446, 38.15462],
    [118.22915, 36.54439],
    [120.23327, 37.12279]
]
```

::: demo
```html
<template>
  <div>
    <ClientOnly>  <!-- 请在使用组件时删除该标签。 -->
      <mc-gis :mWidth="700" :mHeight="400">
          <mc-polygon :rings="rings" :color="color"/>
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {
          rings:[
            [116.27653, 34.15121],
            [117.2446, 38.15462],
            [118.22915, 36.54439],
            [120.23327, 37.12279]
          ],
          color:"#009900",
          color2:[226, 119, 40],
      }
  }
}
</script>
```
:::

## 路径宽度 width
&#12288;&#12288;可以使用`width`属性来设置线条的宽度，默认值为2。

::: demo
```html
<template>
  <div>
    <ClientOnly>  <!-- 请在使用组件时删除该标签。 -->
      <mc-gis :mWidth="700" :mHeight="400">
          <mc-polygon :rings="rings" :width="width"/>
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {
          rings:[
            [116.27653, 34.15121],
            [117.2446, 38.15462],
            [118.22915, 36.54439],
            [120.23327, 37.12279]
          ],
          width:5,
      }
  }
}
</script>
```
:::


## 静态属性

&#12288;&#12288;这里的静态属性用于矢量面图层的初始化，不支持响应式。

|  属性名  |      类型       | 说明     |      默认值       | 可选值  |
| :---: | :-----------: | ------ | :------------: | :--: |
| paths |     Array     | 面的点集合  |      ----      | ---- |
| color | String或者Array | 面线条的颜色 | [226, 119, 40] | ---- |
| width |     Array     | 面线条宽度  |       2        | ---- |

## 动态属性

| 属性名  |   说明    |   类型    | 默认值  |       可选值       |
| :--: | :-----: | :-----: | :--: | :-------------: |
| show | 该图层的显隐性 | Boolean | true | true \|\| false |