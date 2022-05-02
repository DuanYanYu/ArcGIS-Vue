# 矢量线图层

## 路径坐标集合 paths

&#12288;&#12288;使用该组价时将做标集合赋给`paths`属性即可使用默认样式进行展示。

&#12288;&#12288;注意点集合的格式应该是：
```javascript
[
  [116.29026, 34.1816],
  [118.26451, 34.09664],
  [120.26451, 33.09664],
]
```
::: demo
```html
<template>
  <div>
    <ClientOnly>  <!-- 请在使用组件时删除该标签。 -->
      <mc-gis :mWidth="700" :mHeight="400">
          <mc-line :paths="paths"/>
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {
          paths:[
            [116.29026, 34.1816],
            [118.26451, 34.09664],
            [120.26451, 33.09664],
          ],
      }
  }
}
</script>
```
:::

## 路径颜色 color

&#12288;&#12288;使用`color`属性可以设置线条的颜色，可以传递数组rgb值如：`[226, 119, 40]`该值也是线条的默认值，或者颜色的十六进制的字符串值如：`#FFFFFF`来指定。

::: demo
```html
<template>
  <div>
    <ClientOnly>  <!-- 请在使用组件时删除该标签。 -->
      <mc-gis :mWidth="700" :mHeight="400">
          <mc-line :paths="paths" :color="color"/>
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {
          paths:[
            [116.29026, 34.1816],
            [118.26451, 34.09664],
            [120.26451, 33.09664],
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
          <mc-line :paths="paths" :width="width"/>
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {
          paths:[
            [116.29026, 34.1816],
            [118.26451, 34.09664],
            [120.26451, 33.09664],
          ],
          width:5,
      }
  }
}
</script>
```
:::


## 静态属性

&#12288;&#12288;这里的静态属性用于矢量线图层的初始化，不支持响应式。

|  属性名  |      类型       | 说明     |      默认值       | 可选值  |
| :---: | :-----------: | ------ | :------------: | :--: |
| paths |     Array     | 路径的点集合 |      ----      | ---- |
| color | String或者Array | 路径的颜色  | [226, 119, 40] | ---- |
| width |     Array     | 路径宽度   |       2        | ---- |

## 动态属性

| 属性名  |   说明    |   类型    | 默认值  |       可选值       |
| :--: | :-----: | :-----: | :--: | :-------------: |
| show | 该图层的显隐性 | Boolean | true | true \|\| false |