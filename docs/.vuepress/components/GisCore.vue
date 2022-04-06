<template>
    <div class="main-map-box">
        <div class="mc-giscore" :style="[{width: mWidth? mWidth+'px':''},{height: mHeight? mHeight + 'px':''}]"></div>
        <slot></slot>
    </div>
</template>

<script>
import registerMixin from '../public/mixins/register-component';
import CONST from '../public/utils/constant';
import Basemap from "@arcgis/core/Basemap";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import TileInfo from "@arcgis/core/layers/support/TileInfo";
export default {
    name: 'GisCore',
    mixins:[registerMixin],
    data(){
        return {
            baseMapList:{
                ColorMapChina:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity_Mobile/MapServer', //中国地图彩色版
                ColorMapEng:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunityENG/MapServer', //中国地图彩色英文版
                ColorMapChina2:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer', //
                ChinaStreetGray:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer', //灰色中文不含兴趣点版中国基础地图
                ChinaStreetPurplishBlue:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer', //蓝黑色中文不含兴趣点版中国基础地图
                ChinaStreetWarm:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer' //暖色中文不含兴趣点版中国基础地图
            }, //底图图层
            map: null,
            view: null,
        }
    },
    props:{
        mWidth:{ //地图的宽
            type: Number,
            default:0
        },
        mHeight:{ //地图的高
            type: Number,
            default:0
        },
        baseMapUrl:{ //地图的底图图层
            type: String,
            default: 'ColorMapChina'
        },
        useDefaultUi:{ //是否使用默认样式和组件
            type:Boolean,
            default: false
        },
        mZoom:{ //地图显示级别
            type: Number,
            default: 3
        },
        mCenterPoint:{ //地图中心点位置
            type: Array,
            default(){
                return [108.953098279, 34.2777998978]
            } 
        }
    },
    watch:{
        mCenterPoint:{
            handler(val){
                let lng = /^(|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,12})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,12}|180)$/;
                if(!lng.test(val[0])){
                    return console.log('经度整数部分为0-180,小数部分为0到12位!'); 
                }
                var latreg = /^(|\+)?([0-8]?\d{1}\.\d{0,12}|90\.0{0,12}|[0-8]?\d{1}|90)$/;
                if(!latreg.test(val[1])){
                    return console.log('纬度整数部分为0-90,小数部分为0到12位!');
                }
                this.changePoint(val);
            },
            deep:true
        },
        mZoom:{
            handler(val){
                this.changeZoom(val);
            }
        }
    },
    mounted(){
        // 禁用鼠标滚轮冒泡
        this.$el.onmousewheel = function(e) {
            e = e || window.event;
            if(document.all){
                e.cancelBubble = true;
            } else { 
                e.stopPropagation(); 
            }
        };
        this.$el.onkeydown = function(event){
            if ([37,38,39,40].includes(event.keyCode))
                event.preventDefault();
        }
        this.initMap();
    },
    methods:{
        initMap(){
            let basemap = new Basemap({
                baseLayers: [
                    new MapImageLayer({
                        url: Object.getOwnPropertyDescriptor(this.baseMapList, this.baseMapUrl)? this.baseMapList[this.baseMapUrl]:this.baseMapUrl,
                        title: "Basemap"
                    })
                ],
                title: "basemap",
                id: "basemap"
            });
            this.$parentComponent = this.$arcMapComponent =  this.map = new Map({
                basemap: basemap
            });
            this.view = new MapView({
                center: this.mCenterPoint,
                zoom: this.mZoom,
                map: this.map,  // References a Map instance
                container: this.$el.querySelector('.mc-giscore'),  // References the ID of a DOM element
                constraints: {
                    lods: TileInfo.create().lods
                }
            });
            
            !this.useDefaultUi && this.removeMapUi();

            this.view.when(function(){
                // All the resources in the MapView and the map have loaded. Now execute additional processes
                
            }, function(error){
                // Use the errback function to handle when the view doesn't load properly
                console.log("The view's resources failed to load: ", error);
            });
            // mouse-wheel   鼠标滚动轮事件
            // double-click 双击放大
            // drag  移动
            // key-down  上下箭头移动
            // "drag", ["Shift"]   Shift+拖拽拉框放大
            // "drag", ["Shift", "Control"]   Shift+Ctrl+拖拽拉框缩小
            let th = this;
            this.view.on("mouse-wheel", function (event) {
                console.log(th.view.zoom);
                th.$emit('mouse-wheel', event);
            });
            this.view.on("double-click", function (event) {
                th.$emit('double-click', event);
            });
            this.view.on("drag", function (event) {
                th.$emit('drag', event);
            });
            this.view.on("key-down", function (event) {
                th.$emit('key-down', event);
            });
            this.view.on("click", function (event) {
                th.$emit('click', event);
                // console.log(event);
            });

            this.$emit(CONST.ARCMAP_READY_EVENT, this.$parentComponent);
            this.$children.forEach(component => {
                component.$emit(CONST.ARCMAP_READY_EVENT, this.$parentComponent);
            });
        },
        removeMapUi(){ // 移除地图默认样式和组件
            this.view.ui.remove('zoom')//清除放大缩小按钮
            this.view.ui.remove('attribution')//清楚底部powered by ESRI
        },
        changePoint(point){
            this.view.goTo({
                center: point
            })
        },
        changeZoom(zoom){
            this.view.zoom = zoom;
        }
    },
    beforeDestroy() {
        if (this.$arcMapComponent) {
            this.$arcMapComponent.destroy();
            this.$arcMapComponent = null;
        }
    },
    destroyed() {
        this.$parentComponent && this.$parentComponent.destroy();
    },
}
</script>

<style>
    @import 'https://js.arcgis.com/4.22/esri/themes/light/main.css'
</style>