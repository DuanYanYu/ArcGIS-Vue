<template>
  <div id="app">
    <div class="map">
      <mc-gis :mHeight="400" :mWidth="600">
        <!-- <mc-marks :icon="pointIcon" :points="citys" @click-point="getPointData"></mc-marks> -->
        <mc-cluster :icon="pointIcon" :points="citys"></mc-cluster>
        <!-- <mc-heat :points="citys"></mc-heat> -->
      </mc-gis>
    </div>
    
    <input id="zoom" type="number" v-model.number="zoom">
    <button @click="changePoint">点我改变中心点</button>
    <button @click="visible=!visible">点我工具条显隐性</button>
    <button @click="updatePoint">点我改变点坐标</button>
    <button @click="changeZoom">点我改变缩放</button>
    <button @click="getMap">获取地图实例</button>
  </div>
</template>

<script>
import citys from '../public/static/js/citys_copy';
export default {
  name: 'App',
  data(){
    return{
      visible: true,
      point:[114.05, 22.27],
      point2:[107.6874711332313,46.510240835957624,],
      zoom:3,
      citys:citys,
      tdtProp:{
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
      alert(obj.name)
    }
  }
}
</script>

<style>
#app>div.map{
  width: 600px;
  height: 600px;
}
</style>
