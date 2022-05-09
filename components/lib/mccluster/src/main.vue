<script>
import registerMixin from '../../../../mixins/register-component';
import Vue from 'vue';
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export default {
    name: "mc-cluster",
    mixins:[registerMixin],
    data(){
        return{
            tmpVM: null,
            pointsLayer: null,
            heatMapFeatureLayer:null
        }
    },
    props:{
        points: { // 点坐标经纬度
            type: Array,
            default: ()=>{
                return [[108.953098279, 34.2777998978]]
            }
        },
        clusterMinSize:{ //聚合的最小范围
            type: Number,
            default: 22
        },
        icon: { // 图标的地址
            type: String
        },
        iconWidth: { // 图标的宽度
            type: Number,
            default: 22
        },
        iconHeight: { // 图标的高度
            type: Number,
            default: 22
        },
        show:{
            type: Boolean,
            default: true
        }
    },
    watch:{
        show:{
            handler(val) {
                this.$nextTick(()=>{
                    this.pointsLayer.visible = val;
                })
            },
            immediate: true
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
    methods:{
        // 注册组件
        __initComponent(options) {
            if (this.$slots.default && this.$slots.default.length) {
                options.content = this.tmpVM.$refs.node;
            }
            this.initPoints();
            this.$parentComponent.map.add(this.pointsLayer);
            const th = this;
            this.$parentComponent.on('click', function(e){
                th.$parentComponent.hitTest(e)
                .then(res => {
                    if (res.results.length) {
                        // 获取每个图形上的ID
                        const obj={
                            event:e,
                            pointData:res.results[0].graphic.attributes
                        }
                        th.$emit('click-point', obj)
                    }
                })
            }) 
        },
        updatePonit(){
            console.log('更新点坐标了！！');
        },
        initPoints(){
            let features = [];
            let fields = [];
            for (let i = 0; i < this.points.length; i++) {
                let graphic = new Graphic({
                    geometry: new Point({
                        x: this.points[i].lnglat[0],
                        y: this.points[i].lnglat[1],
                        spatialReference: new SpatialReference({
                            wkid: 4490
                        }),
                    }),
                });
                for (let index in this.points[i]) {
                    fields.push({
                        name:index,
                        type:typeof index
                    })
                    graphic.setAttribute(index, this.points[i][index])
                }
                
                features.push(graphic);
            }

            let pointRenderer = new UniqueValueRenderer({
                //海量点图标
                field: "color",
                defaultSymbol: new PictureMarkerSymbol({
                    url: this.icon?this.icon:'static/imgs/point.png',
                    height: this.iconHeight,
                    width: this.iconWidth,
                })
            });
            
            let pointLayerObj = {
                spatialReference: new SpatialReference({
                    wkid: 4490
                }),
                outFields: ["*"],
                fields,
                objectIdField: "objectId",
                renderer: pointRenderer,
                source: features,
            }

            this.$arcMapComponent = this.pointsLayer = new FeatureLayer(pointLayerObj);

            //开启聚合
            this.pointsLayer.featureReduction = {
                type: 'cluster',
                clusterMinSize: this.clusterMinSize,
                labelingInfo: [
                {
                    deconflictionStrategy: 'none',
                    labelExpressionInfo: {
                    expression: 'Text($feature.cluster_count, \'#,###\')'
                    },
                    symbol: {
                    type: 'text',
                    color: 'white',
                    weight: 'bold',
                    font: {
                        family: 'Noto Sans',
                        size: '16px'
                    }
                    },
                    labelPlacement: 'center-center'
                }
                ]
            }
            
            this.pointsLayer.on('click', function(e){
                alert(e)
            })
        },
    }
}
</script>