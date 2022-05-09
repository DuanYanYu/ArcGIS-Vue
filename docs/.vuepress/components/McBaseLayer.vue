<script>
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import TDTlayer from "../../../utils/TDTlayer.ts";
import registerMixin from '../public/mixins/register-component';
import Vue from 'vue';

export default {
    name: 'mc-base-layer',
    mixins:[registerMixin],
    props:{
        baseMapUrl: { //地图的底图图层
            type: String,
            default: 'ColorMapChina'
        },
        show: { //控制图层是否显示或隐藏
            type: Boolean,
            default: true
        },
        tdtBaseMap: { //使用天地图作为底图
            type: Object,
            default: null
        },
    },
    data(){
        return{
            tmpVM: null,
            baseLayer: null,
            baseMapList:{ //底图图层
                ColorMapChina:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity_Mobile/MapServer', //中国地图彩色版
                ColorMapEng:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunityENG/MapServer', //中国地图彩色英文版
                ColorMapChina2:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer', //
                ChinaStreetGray:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer', //灰色中文不含兴趣点版中国基础地图
                ChinaStreetPurplishBlue:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer', //蓝黑色中文不含兴趣点版中国基础地图
                ChinaStreetWarm:'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer' //暖色中文不含兴趣点版中国基础地图
            }, 
        }
    },
    watch: {
        show: {
            handler(val) {
                this.$nextTick(()=>{
                    this.baseLayer.visible = val;
                    this.$parentComponent.map.allLayers.items[0].visible = !val;
                })
            },
            immediate: true
        },
        baseMapUrl: {
            handler() {
                this.$nextTick(()=>{
                    this.changeBaseLayer()
                })
            }
        },
        tdtBaseMap:{
            handler(){
                this.$nextTick(()=>{
                    this.changeBaseLayer()
                })
            },
            deep: true
        }
    },
    created(){
        this.tmpVM = new Vue({
            data() {
                return {node: ''};
            },
            render(h) {
                const {node} = this;
                return h('div', {ref: 'node'}, Array.isArray(node) ? node : [node]);
            }
        }).$mount();
    },
    methods: {
        // 注册组件
        __initComponent(options) {
            if (this.$slots.default && this.$slots.default.length) {
                options.content = this.tmpVM.$refs.node;
            }
            this.initBaseLayer();
            this.$parentComponent.map.add(this.baseLayer)
        },
        initBaseLayer(){
            if(this.tdtBaseMap === null) {
                this.$arcMapComponent = this.baseLayer = new MapImageLayer({
                    url: Object.getOwnPropertyDescriptor(this.baseMapList, this.baseMapUrl)? this.baseMapList[this.baseMapUrl]:this.baseMapUrl,
                    title: "Basemap"
                })
            } else {
                console.log(this.tdtBaseMap);
                this.$arcMapComponent = this.baseLayer = new TDTlayer(this.tdtBaseMap.tk, this.tdtBaseMap.mapType);
                console.log(this.baseLayer);
            }
        },
        changeBaseLayer() {
            const layer = this.baseLayer
            this.initBaseLayer()
            this.$parentComponent.map.add(this.baseLayer, 1);
            layer && this.$parentComponent.map.remove(layer)
        }
    }
}
</script>