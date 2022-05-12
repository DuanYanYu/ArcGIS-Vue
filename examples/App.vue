<template>
  <div id="app">
    <div class="map"> 
      <mc-gis :mHeight="400" :mWidth="700">
        <!-- <mc-point :point="point"></mc-point> -->
        <!-- <mc-marker :icon="pointIcon" :points="citys" @click-point="getPointData"></mc-marker> -->
        <mc-cluster :icon="pointIcon" :points="citys"></mc-cluster>
        <!-- <mc-base-layer :show="visible" :baseMapUrl="baseMapUrl"></mc-base-layer> -->
        <!-- <mc-heat :points="citys"></mc-heat> -->
      </mc-gis>
    </div>
    <button @click="changeBase">更换底图</button>
    <button @click="changeBaseVisible">底图显隐性</button>
    <button @click="useTDT">使用天地圖底圖</button>
    <button @click="changePoints">组标点集改变</button>
  </div>
</template>

<script>
import Vue from 'vue'
import citys from '../public/static/js/citys_copy';
// import citys from '../public/static/js/citys';

export default {
  name: 'App',
  data(){
    return{
      visible: true,
      baseMapUrl: 'ChinaStreetPurplishBlue',
      point:[114.05, 22.27],
      point2:[107.6874711332313,46.510240835957624,],
      zoom:3,
      citys:citys,
      tdtProp: null,
      tdtBaseMap:{
        tk:'f6e0f7525c9d5618f59bb0b9cde93751',
        mapType:'img_c'
      },
      pointIcon:require('./assets/point.png'),
      popupTemplate:{
        title:'描述',
        content:[{
          type: 'fields',
          fieldInfos:[
          {
            fieldName: 'NAME',
            label: 'abc',
            data: '东经114°05°,北纬22°27°'
          },{
            fieldName: 'POSITION',
            label: '地点',
            data: '西安市'
          }]
        }]
      }
    }
  },
  methods:{
    changePoint2(){
      this.point = this.point2;
      this.point[0]+=1;
      Vue.set(this.point,0,this.point[0]+1)
      this.point[1]-=1;
      Vue.set(this.point,1,this.point[1]-1)
    },
    changePoints(){
      this.citys = [{"lnglat":[116.258446,37.686622],"name":"景县","style":2},{"lnglat":[113.559954,22.124049],"name":"圣方济各堂区","style":2},{"lnglat":[116.366794,39.915309],"name":"西城区","style":2},{"lnglat":[116.486409,39.921489],"name":"朝阳区","style":2},{"lnglat":[116.286968,39.863642],"name":"丰台区","style":2},{"lnglat":[116.195445,39.914601],"name":"石景山区","style":2},{"lnglat":[116.310316,39.956074],"name":"海淀区","style":2},{"lnglat":[116.105381,39.937183],"name":"门头沟区","style":2},{"lnglat":[116.139157,39.735535],"name":"房山区","style":2},{"lnglat":[116.658603,39.902486],"name":"通州区","style":2},{"lnglat":[116.653525,40.128936],"name":"顺义区","style":2},{"lnglat":[116.235906,40.218085],"name":"昌平区","style":2},{"lnglat":[116.338033,39.728908],"name":"大兴区","style":2},{"lnglat":[116.637122,40.324272],"name":"怀柔区","style":2},{"lnglat":[117.112335,40.144783],"name":"平谷区","style":2},{"lnglat":[116.843352,40.377362],"name":"密云区","style":2},{"lnglat":[115.985006,40.465325],"name":"延庆区","style":2},{"lnglat":[113.56925,22.136546],"name":"路凼填海区","style":2},{"lnglat":[117.195907,39.118327],"name":"和平区","style":2},{"lnglat":[117.226568,39.122125],"name":"河东区","style":2},{"lnglat":[117.217536,39.101897],"name":"河西区","style":2},{"lnglat":[117.164143,39.120474],"name":"南开区","style":2},{"lnglat":[117.201569,39.156632],"name":"河北区","style":2},{"lnglat":[117.163301,39.175066],"name":"红桥区","style":2},{"lnglat":[117.313967,39.087764],"name":"东丽区","style":2}]
    },
    useTDT(){
      this.tdtProp = {
        tk:'f6e0f7525c9d5618f59bb0b9cde93751',
        mapType:'img_c'
      }
    },
    changeBase(){
      this.baseMapUrl = 'ChinaStreetGray'
    },
    changeBaseVisible(){
      this.visible = !this.visible;
    },
    drawData(data){
      console.log('父组件zhong ', data);
    },
    getMap(){
      console.log(this.$refs.arcgismap.$$getInstance());
    },
    changePoint(){
      this.point = [144.9530982345, 44.277755199]
    },
    updatePoint(){
      this.point = [144.9530982345, 44.277755199]
    },
    changeZoom(){
      this.zoom = 8
    },
    mouseWheel(event){
      console.log(event);
    },
    doubleClick(event){
      console.log(event);
    },
    drag(event){
      console.log(event);
    },
    keyDown(event){
      console.log(event);
    },
    getPointData(obj){
      console.log(obj);
      alert(obj.pointData.name)
    }
  }
}
</script>

<style>
* {
 margin: 0;
 padding: 0;
}
</style>
