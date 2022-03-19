<template>
  <div id="app">
    <div>
      <GisCore :mWidth="600" :mHeight="400" :mCenterPoint="point" :mZoom="zoom"/>
    </div>
    <input id="zoom" type="number" v-model="zoom">
    <button @click="changePoint">点我改变中心点</button>
    <button @click="changeZoom">点我改变缩放</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      point:[114.05, 22.27],
      zoom:10,
    }
  },
  methods:{
    changePoint(){
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
    }
  }
}
</script>

<style>
#app>div{
  width: 600px;
  height: 600px;
}
</style>
