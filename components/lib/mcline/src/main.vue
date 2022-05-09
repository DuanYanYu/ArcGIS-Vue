<script>
import registerMixin from '../../../../mixins/register-component';
import Vue from 'vue';
import Polyline from "@arcgis/core/geometry/Polyline";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

export default {
    name: "mc-line",
    mixins:[registerMixin],
    data(){
        return{
            tmpVM: null,
            lineLayer: null
        }
    },
    props:{
        paths: { // 线坐标
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
        join:{
            type: String,
            default: 'round'
        },
        show:{ //控制图层是否显示或隐藏
            type: Boolean,
            default: true
        }
    },
    watch:{
        show:{
            handler(val) {
                this.$nextTick(()=>{
                    this.lineLayer.visible = val;
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
            this.initLine();
            this.$parentComponent.map.add(this.lineLayer)
        },
        initLine(){
            this.$arcMapComponent = this.lineLayer = new GraphicsLayer({
				title: 'test'
			});
            const polyline = new Polyline({
                paths: this.paths
            });

            const lineSymbol = new SimpleLineSymbol({
                color: this.color,
                width: this.width,
                join:this.join
            });

            const polylineGraphic = new Graphic({
                geometry: polyline,
                symbol: lineSymbol
            })
            this.lineLayer.graphics.add(polylineGraphic);
        }
    }
}
</script>