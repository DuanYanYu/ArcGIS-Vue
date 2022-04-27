<script>
import registerMixin from '../public/mixins/register-component';
import Vue from 'vue';
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export default {
    name: "mc-heat",
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
            required: true
        },
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
            this.$parentComponent.map.add(this.heatMapFeatureLayer);
        },
        updatePonit(){
            console.log('更新点坐标了！！');
        },
        initPoints(){
            let features = [];
            for (let i = 0; i < this.points.length; i++) {
                let graphic = new Graphic({
                    geometry: new Point({
                        x: this.points[i][0],
                        y: this.points[i][1],
                        spatialReference: new SpatialReference({
                            wkid: 4490
                        }),
                    }),
                });
                features.push(graphic);
            }
            
            this.$arcMapComponent = this.heatMapFeatureLayer = new FeatureLayer({
                spatialReference: new SpatialReference({
                    wkid: 4490
                }),
                objectIdField: 'objectId',
                renderer: {
                type: 'heatmap',
                colorStops: [
                    {color: 'rgba(255, 0, 0, 0)', ratio: 0},
                    {color: 'rgb(0, 255, 0)', ratio: 0.3},
                    {color: 'rgb(255, 255, 0)', ratio: 0.6},
                    {color: 'rgb(255, 0, 0)', ratio: 1}
                ],
                maxPixelIntensity: 230,
                minPixelIntensity: 10,
                blurRadius: 12
                },
                source: features
            })
        },
    }
}
</script>