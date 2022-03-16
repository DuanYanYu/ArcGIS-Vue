<template>
  <div id="app">
    <div>
      <GisCore :mWidth="600" :mHeight="400" />
      <GisCore :mWidth="600" :mHeight="400" baseMapUrl="http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity_Mobile/MapServer"/>
      <GisCore :mWidth="600" :mHeight="400" baseMapUrl="ColorMapEng"/>
      <!-- <GisCore :mWidth="600" :mHeight="400" baseMapUrl="ColorMapChina2"/>
      <GisCore :mWidth="600" :mHeight="400" baseMapUrl="ChinaStreetGray"/>
      <GisCore :mWidth="600" :mHeight="400" baseMapUrl="ChinaStreetPurplishBlue"/>
      <GisCore :mWidth="600" :mHeight="400" baseMapUrl="ChinaStreetWarm"/> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app>div{
  width: 600px;
  height: 600px;
}
</style>
