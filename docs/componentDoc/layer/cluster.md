# 聚合点图层

## 坐标点集合 points

&#12288;&#12288;使用热力图组件必须放在地图组件“容器”中，也就是说必须放在 `<GisCore></GisCore>` 组件中才可以，如下为一个基础示例。给该组件传入 `points` 即可以进行聚合功能。

&#12288;&#12288;注意坐标点集合应为如下格式：

```javascript
[
  {"lnglat":[116.258446,37.686622]},
  {"lnglat":[113.559954,22.124049]},
  {"lnglat":[116.366794,39.915309]}
  ... 
  {"lnglat":[117.366794,36.915309]}
]
```
::: demo
```html
<template>
  <div>
    <ClientOnly>
      <mc-gis :mWidth="700" :mHeight="400">
          <mc-cluster :points="citys"/>
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
        citys:[{"lnglat":[116.258446,37.686622]},{"lnglat":[113.559954,22.124049]},{"lnglat":[116.366794,39.915309]},{"lnglat":[116.486409,39.921489]},{"lnglat":[116.286968,39.863642]},{"lnglat":[116.195445,39.914601]},{"lnglat":[116.310316,39.956074]},{"lnglat":[116.105381,39.937183]},{"lnglat":[116.139157,39.735535]},{"lnglat":[116.658603,39.902486]},{"lnglat":[116.653525,40.128936]},{"lnglat":[116.235906,40.218085]},{"lnglat":[116.338033,39.728908]},{"lnglat":[116.637122,40.324272]},{"lnglat":[117.112335,40.144783]},{"lnglat":[116.843352,40.377362]},{"lnglat":[115.985006,40.465325]},{"lnglat":[113.56925,22.136546]}]
    }
  },
}
</script>
```
:::
## 聚合图标最小大小 clusterMinSize

&#12288;&#12288;该属性传入数字，用以设置聚合时的图标的最小大小。默认值为22。

::: demo
```html
<template>
  <div>
    <ClientOnly>
      <mc-gis :mWidth="700" :mHeight="400">
          <mc-cluster :points="citys" :clusterMinSize="clusterMinSize"/>
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
        clusterMinSize: 30,
        citys:[{"lnglat":[116.258446,37.686622]},{"lnglat":[113.559954,22.124049]},{"lnglat":[116.366794,39.915309]},{"lnglat":[116.486409,39.921489]},{"lnglat":[116.286968,39.863642]},{"lnglat":[116.195445,39.914601]},{"lnglat":[116.310316,39.956074]},{"lnglat":[116.105381,39.937183]},{"lnglat":[116.139157,39.735535]},{"lnglat":[116.658603,39.902486]},{"lnglat":[116.653525,40.128936]},{"lnglat":[116.235906,40.218085]},{"lnglat":[116.338033,39.728908]},{"lnglat":[116.637122,40.324272]},{"lnglat":[117.112335,40.144783]},{"lnglat":[116.843352,40.377362]},{"lnglat":[115.985006,40.465325]},{"lnglat":[113.56925,22.136546]}]
    }
  },
}
</script>
```
:::


## 聚合图标 icon

&#12288;&#12288;该组件提供`icon` 属性。**同`<mc-point/>`组件的icon属性一样**在指定路径时，特别的项目中的图片时需要用 `require()` 函数包裹路径地址。应为默认样式下，聚合图标上会显示聚合的点的数量，所以建议图标使用中心没有图标的图片达到最好的显示效果。

::: demo
```html
<template>
  <div>
    <ClientOnly>
      <mc-gis :mWidth="700" :mHeight="400">
          <mc-cluster :points="citys" :icon="icon"/>
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
        icon: require('../../.vuepress/public/static/imgs/cluster.png'),
        citys:[{"lnglat":[116.258446,37.686622]},{"lnglat":[113.559954,22.124049]},{"lnglat":[116.366794,39.915309]},{"lnglat":[116.486409,39.921489]},{"lnglat":[116.286968,39.863642]},{"lnglat":[116.195445,39.914601]},{"lnglat":[116.310316,39.956074]},{"lnglat":[116.105381,39.937183]},{"lnglat":[116.139157,39.735535]},{"lnglat":[116.658603,39.902486]},{"lnglat":[116.653525,40.128936]},{"lnglat":[116.235906,40.218085]},{"lnglat":[116.338033,39.728908]},{"lnglat":[116.637122,40.324272]},{"lnglat":[117.112335,40.144783]},{"lnglat":[116.843352,40.377362]},{"lnglat":[115.985006,40.465325]},{"lnglat":[113.56925,22.136546]}]
    }
  },
}
</script>
```
:::


## 图标宽高 iconWidth & iconHeight

&#12288;&#12288;该属性与 [`<mc-point/>`组件的iconWidth & iconHeight属性作用和用法相同。](/componentDoc/point.html#图标宽高-iconwidth-iconheight)



## 点击事件 @point-click

&#12288;&#12288;在该组件的调用处使用`@point-click`方法可以捕获坐标点的数据信息和点击事件。返回的数据对象有两个属性：`event`即点击的事件对象以及`pointData`即点相关的数据。

&#12288;&#12288;对于`pointData`的值存在两种情况：
1. 点击的是聚合点，会包括三个属性：`clusterId`、`cluster_count`和`clusterId`；其中`cluster_count`为聚合点的数量。

2. 点击的是单个坐标点，包含的属性为一开始对`points`传入每个点对象的属性集合。自定义的数据按下面格式传入`points`中
```javascript
[
  {"lnglat":[116.258446,37.686622],"name":"景县","style":2},
  {"lnglat":[113.559954,22.124049],"name":"圣方济各堂区","style":2}
  {"lnglat":[116.366794,39.915309],"name":"西城区","style":2},
  ... 
  {"lnglat":[116.486409,39.921489],"name":"朝阳区","style":2}
]
```
&#12288;&#12288; **你可以打开浏览器控制台并点击点查看。**
::: demo
```html
<template>
  <div>
    <ClientOnly>
      <mc-gis :mWidth="700" :mHeight="400">
          <mc-cluster :points="citys" @click-point="getPointData"/>
      </mc-gis>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
        citys:[{"lnglat":[116.258446,37.686622],"name":"景县","style":2},{"lnglat":[113.559954,22.124049],"name":"圣方济各堂区","style":2},{"lnglat":[116.366794,39.915309],"name":"西城区","style":2},{"lnglat":[116.486409,39.921489],"name":"朝阳区","style":2},{"lnglat":[116.286968,39.863642],"name":"丰台区","style":2},{"lnglat":[116.195445,39.914601],"name":"石景山区","style":2},{"lnglat":[116.310316,39.956074],"name":"海淀区","style":2},{"lnglat":[116.105381,39.937183],"name":"门头沟区","style":2},{"lnglat":[116.139157,39.735535],"name":"房山区","style":2},{"lnglat":[116.658603,39.902486],"name":"通州区","style":2},{"lnglat":[116.653525,40.128936],"name":"顺义区","style":2},{"lnglat":[116.235906,40.218085],"name":"昌平区","style":2},{"lnglat":[116.338033,39.728908],"name":"大兴区","style":2},{"lnglat":[116.637122,40.324272],"name":"怀柔区","style":2},{"lnglat":[117.112335,40.144783],"name":"平谷区","style":2},{"lnglat":[116.843352,40.377362],"name":"密云区","style":2},{"lnglat":[115.985006,40.465325],"name":"延庆区","style":2},{"lnglat":[113.56925,22.136546],"name":"路凼填海区","style":2},{"lnglat":[117.195907,39.118327],"name":"和平区","style":2},{"lnglat":[117.226568,39.122125],"name":"河东区","style":2},{"lnglat":[117.217536,39.101897],"name":"河西区","style":2},{"lnglat":[117.164143,39.120474],"name":"南开区","style":2},{"lnglat":[117.201569,39.156632],"name":"河北区","style":2},{"lnglat":[117.163301,39.175066],"name":"红桥区","style":2},{"lnglat":[117.313967,39.087764],"name":"东丽区","style":2},{"lnglat":[117.012247,39.139446],"name":"西青区","style":2},{"lnglat":[117.382549,38.989577],"name":"津南区","style":2},{"lnglat":[117.13482,39.225555],"name":"北辰区","style":2},{"lnglat":[117.057959,39.376925],"name":"武清区","style":2},{"lnglat":[117.308094,39.716965],"name":"宝坻区","style":2},{"lnglat":[117.654173,39.032846],"name":"滨海新区","style":2},{"lnglat":[117.82828,39.328886],"name":"宁河区","style":2},{"lnglat":[116.925304,38.935671],"name":"静海区","style":2},{"lnglat":[117.407449,40.045342],"name":"蓟州区","style":2}]
    }
  },
  methods:{
    getPointData(data){
      console.log(data.event);
      console.log(data.pointData);
      if(data.pointData['cluster_count']){
        alert('当前聚合点共有'+data.pointData['cluster_count']+'个')
      }else{
        alert('自定义数据，点位置在：'+data.pointData.name)
      }
      
    }
  }
}
</script>
```
:::


## 静态属性

&#12288;&#12288;这里的静态属性用于地图初始化，不支持响应式。

|  属性名   |  类型   | 说明            | 默认值  | 可选值  |
| :----: | :---: | ------------- | :--: | :--: |
| points | Array | 用于展示热力图的坐标点数组 |  --  |  --  |
| clusterMinSize | Number | 聚合点的最小范围 |  22  |  --  |
| icon | String | 聚合坐标点的图标 |  require('../public/static/imgs/point.png')  |  --  |
| iconWidth | Number | 单个坐标点显示的宽度 |  22  |  --  |
| iconHeight | Number | 单个坐标点显示的高度 |  22  |  --  |

## 事件

|     事件名称     |     说明      |      回调参数      |
| :----------: | :---------: | :------------: |
| point-click |    双击地图     | (pointObj: Object)（该对象包含点击事件以及坐标点数据） |
