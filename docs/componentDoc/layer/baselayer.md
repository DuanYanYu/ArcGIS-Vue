# 底图图层
&#12288;&#12288;因为`<mc-gis/>`组件中的`baseMapUrl`属性为静态的，不可以直接更改，所以在此增加了该组件用来覆盖原本的底图组件，该组件的`baseMapUrl`属性是动态的可以变化，所以可以任意替换，同时提供了`show`属性用来控制是否显示该底图。
## 底图 baseMapUrl

&#12288;&#12288;与 [`<mc-gis/>`组件的baseMapUrl属性作用和用法和值相同。](/componentDoc/gisCore.html#底图-basemapurl)

::: demo
```html
<template>
  <div>
    <ClientOnly>  <!-- 请在使用组件时删除该标签。 -->
      <mc-gis :mWidth="700" :mHeight="400">
          <mc-base-layer :baseMapUrl="baseMapUrl"></mc-base-layer>
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
        baseMapUrl: 'ChinaStreetPurplishBlue'
    }
  },
}
</script>
```
:::


## 动态属性

|    属性名     |                   说明                    |   类型    |      默认值      |                   可选值                    |
| :--------: | :-------------------------------------: | :-----: | :-----------: | :--------------------------------------: |
| baseMapUrl | 设置地图底图的地址，这里提供了7个在线图层以供使用，也可以填入自己底图的地址， | String  | ColorMapChina | ColorMapChina/ <br />ColorMapEng/ <br />ColorMapChina2/ <br />ChinaStreetGray/ <br />ChinaStreetPurplishBlue/ <br />ChinaStreetWarm/ <br />OffshoreChina |
|    show    |                 该图层的显隐性                 | Boolean |     true      |             true \|\| false              |