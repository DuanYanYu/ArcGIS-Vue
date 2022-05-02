<script>
import registerMixin from '../../../../mixins/register-component';
import Vue from 'vue';
import Sketch from "@arcgis/core/widgets/Sketch";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

export default {
    name:"mc-widget",
    mixins:[registerMixin],
    data(){
        return{
            tmpVM: null,
            graphicsLayer:null,
            sketch:null
        }
    },
    props:{
        postion:{ // 绘制工具条的位置：bottom-left、bottom-right、top-left、top-right
            type:String,
            default: 'top-right'
        },
        availableCreateTools:{ //需要使用的工具，
            type:Array,
            default: () => ["point", "polyline", "polygon", "rectangle", "circle"]
        },
        show: { //控制工具条是否显示或隐藏
            type: Boolean,
            default: true
        }
    },
    watch:{
        show:{
            handler(val) {
                if(val){
                    this.sketch.visible = true;
                }else{
                    this.sketch.visible = false;
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
        __initComponent(options) {
            if (this.$slots.default && this.$slots.default.length) {
                options.content = this.tmpVM.$refs.node;
            }
            this.initSketch();
        },
        // 初始化绘制工具ui
        initSketch(){
            this.graphicsLayer = new GraphicsLayer();
            this.$parentComponent.map.add(this.graphicsLayer);

            // All the resources in the MapView and the map have loaded. Now execute additional processes
            this.sketch = new Sketch({
                layer: this.graphicsLayer,
                view: this.$parentComponent,
                availableCreateTools:this.availableCreateTools
            });
            const th = this;
            this.$parentComponent.when(function(){

                th.$parentComponent.ui.add(th.sketch, th.postion);
                // Listen to sketch widget's create event.
                th.sketch.on("create", function(event) {
                        th.getSketchData(event, th);
                });

                th.sketch.on("update", function(event) {

                    if (event.state === "complete") {
                        th.getSketchData(event, th);
                    }
                });
            }, function(error){
                // Use the errback function to handle when the view doesn't load properly
                console.log("The view's resources failed to load: ", error);
            });
        },
        // 获取绘制图形的数据
        getSketchData(event, th){
            // check if the create event's state has changed to complete indicating
            // the graphic create operation is completed.
            let data = [];
            let graphics = []
            if (event.state === "complete") {
                if(event.graphics){
                    graphics = event.graphics.map(function(graphic){
                        return graphic.geometry;
                    })
                }else{
                    graphics.push(event.graphic.geometry)
                    
                }
                for(let geometry of graphics){
                    let obj = null
                    if(geometry.type === 'point'){
                        obj = {
                            type: 'point',
                            data: [geometry.longitude, geometry.latitude],
                        }
                    }else if(geometry.type === 'polyline'){
                        obj = {
                            type: 'polyline',
                            data: geometry.paths,
                        }
                    }else if(geometry.type === 'polygon'){
                        obj = {
                            type: 'polygon',
                            data: geometry.rings,
                        }
                    }
                    data.push(obj)
                }
                return th.$emit('draw-complete', data);
            }
        }
    }
}
</script>
