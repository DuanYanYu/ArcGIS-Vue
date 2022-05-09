<template>
  <div id="app">
    <div class="map"> 
      <mc-gis :mHeight="400" :mWidth="700">
        <!-- <mc-point :point="point"></mc-point> -->
        <!-- <mc-marker :icon="pointIcon" :points="citys" @click-point="getPointData"></mc-marker> -->
        <!-- <mc-cluster :icon="pointIcon" :points="citys"></mc-cluster> -->
        <mc-base-layer :show="visible" :baseMapUrl="baseMapUrl"></mc-base-layer>
        <mc-heat :points="citys"></mc-heat>
      </mc-gis>
    </div>
    <button @click="changeBase">更换底图</button>
    <button @click="changeBaseVisible">底图显隐性</button>
    <button @click="useTDT">使用天地圖底圖</button>
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
