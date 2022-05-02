<script>
import registerMixin from '../../../../mixins/register-component';
import Vue from 'vue';
import Polygon from "@arcgis/core/geometry/Polygon";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

export default {
    name: "mc-polygon",
    mixins:[registerMixin],
    data(){
        return{
            tmpVM: null,
            polygonLayer: null
        }
    },
    props:{
        rings: { // 坐标集合
            type: Array,
            require:true
        },
        color:{
            type: [Array, String],
            default: ()=>{
                return [226, 119, 40]
            }
        },
        width:{
            type: Number,
            default: 2
        },
        show: { //控制图层是否显示或隐藏
            type: Boolean,
            default: true
        }
    },
    watch:{
        show:{
            handler(val) {
                if(val){
                    this.polygonLayer.visible = true;
                }else{
                    this.polygonLayer.visible = false;
                }
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
            this.initLine();
            this.$parentComponent.map.add(this.polygonLayer)
        },
        initLine(){
            this.$arcMapComponent = this.polygonLayer = new GraphicsLayer({
				title: 'test'
			});
            const polygonGeometry = new Polygon({
                rings: this.rings
            });

            const lineSymbol = new SimpleLineSymbol({
                color: this.color,
                width: this.width,
            });

            const polygonGraphic = new Graphic({
                geometry: polygonGeometry,
                symbol: lineSymbol
            })
            this.polygonLayer.graphics.add(polygonGraphic);
        }
    }
}
</script>