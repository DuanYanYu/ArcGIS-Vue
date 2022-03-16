<template>
    <div id="giscore" class="mc-giscore" :style="[{width: mWidth? mWidth+'px':''},{height: mHeight? mHeight + 'px':''}]">
    </div>
</template>

<script>
import Basemap from "@arcgis/core/Basemap";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import TileInfo from "@arcgis/core/layers/support/TileInfo";

export default {
    name: 'GisCore',
    data(){
        return {
            baseMapList:{
                ColorMapChina:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity_Mobile/MapServer', //中国地图彩色版
                ColorMapEng:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunityENG/MapServer', //中国地图彩色英文版
                ColorMapChina2:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer', //
                ChinaStreetGray:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer', //灰色中文不含兴趣点版中国基础地图
                ChinaStreetPurplishBlue:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer', //蓝黑色中文不含兴趣点版中国基础地图
                ChinaStreetWarm:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer', //暖色中文不含兴趣点版中国基础地图
                OffshoreChina: 'https://t0.tianditu.gov.cn/vec_w/wmts' // test
            }, //底图图层
            map: null,
            view: null,
            mapCenter: [108.953098279, 34.2777998978]
        }
    },
    props:{
        mWidth:{
            type: Number,
            default:0
        },
        mHeight:{
            type: Number,
            default:0
        }
    },
    mounted(){
        this.initMap();
    },
    methods:{
        initMap(){
            let basemap = new Basemap({
                baseLayers: [
                    new MapImageLayer({
                        url: this.baseMapList.ChinaStreetPurplishBlue,
                        title: "Basemap"
                    })
                ],
                title: "basemap",
                id: "basemap"
            });
            this.map = new Map({
                basemap: basemap
            });
            this.view = new MapView({
                center: this.mapCenter,
                zoom: 3,
                map: this.map,  // References a Map instance
                container: this.$el,  // References the ID of a DOM element
                constraints: {
                    lods: TileInfo.create().lods
                }
            });
            
            // this.removeMapUi();

            this.view.when(function(){
                // All the resources in the MapView and the map have loaded. Now execute additional processes
                
            }, function(error){
                // Use the errback function to handle when the view doesn't load properly
                console.log("The view's resources failed to load: ", error);
            });   
        },
        removeMapUi(){ // 移除地图默认样式和组件
            this.view.ui.remove('zoom')//清除放大缩小按钮
            this.view.ui.remove('attribution')//清楚底部powered by ESRI
        }
    }
}
</script>

<style lang="scss">
    @import 'giscore.scss'
</style>

<style>
    @import 'https://js.arcgis.com/4.22/esri/themes/light/main.css'
</style>