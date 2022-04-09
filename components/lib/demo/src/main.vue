<template>
    <div class="main-map-box">
        <div class="mc-giscore" :style="[{width: mWidth? mWidth+'px':''},{height: mHeight? mHeight + 'px':''}]"></div>
        <slot></slot>
    </div>
    
</template>

<script>
import registerMixin from '../../../../mixins/register-component';
import CONST from '../../../../utils/constant';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import TileInfo from "@arcgis/core/layers/support/TileInfo";
import TDTlayer from "../../../../utils/TDTlayer.ts";
export default {
    name: 'TdtGis',
    mixins:[registerMixin],
    data(){
        return { //底图图层
            map: null,
            view: null,
            baseLayer:null
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
            this.map = new Map();
            this.view = new MapView({
                map: this.map,
                center: this.mCenterPoint,
                zoom: this.mZoom,
                container: this.$el.querySelector('.mc-giscore'),
                constraints: {
                    lods: TileInfo.create().lods
                }
            });

            //加载在线天地图影像
            this.baseLayer = new TDTlayer('f6e0f7525c9d5618f59bb0b9cde93751', 'img_c');
            this.map.add(this.baseLayer);

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