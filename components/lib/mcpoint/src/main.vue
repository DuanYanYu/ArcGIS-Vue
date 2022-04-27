<script>
import registerMixin from '../../../../mixins/register-component';
import Vue from 'vue';
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import PopupTemplate from '@arcgis/core/PopupTemplate'
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
export default {
    name:'mc-point',
    mixins:[registerMixin],
    data(){
        return{
            pointLayer:null,
            tmpVM: null,
        }
    },
    props:{
        point: { // 点坐标经纬度
            type: Array,
            default: ()=>{
                return [108.953098279, 34.2777998978]
            }
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
        popupTemplate: { // 坐标点弹出框数据内容
            type: Object,
            default:function(){
                return {}
            }
        }
    },
    watch:{
        point:{
            handler() {
                this.updatePonit()
            },
            deep:true
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
    computed:{
        fields(){
            let fields = []
            for(let item of this.popupTemplate.content){
                if(item.type === 'fields'){
                    for(let field of item.fieldInfos){
                        fields.push({
                            fieldName:field.fieldName,
                            label:field.label?field.label:field.fieldName,
                            type: typeof field.data,
                            data: field.data
                        })
                    }
                }
            }
            return fields
        }
    },
    methods:{
        // 注册组件
        __initComponent(options) {
            if (this.$slots.default && this.$slots.default.length) {
                options.content = this.tmpVM.$refs.node;
            }
            this.initPoint();
            this.$parentComponent.map.add(this.pointLayer);
        },
        updatePonit(){
            console.log('更新点坐标了！！');
        },
        initPoint(){
            let graphic = new Graphic({
                geometry: new Point({
                    x: this.point[0],
                    y: this.point[1],
                    spatialReference: new SpatialReference({
                        wkid: 4490
                    }),
                }),
            });
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
                objectIdField: "objectId",
                renderer: pointRenderer,
                source: [graphic],
            }

            if(JSON.stringify(this.popupTemplate) != "{}"){
                let popupTemplate = this.updatePopupTemplate()

                if(this.fields.length > 0){
                    for (let i = 0; i < this.fields.length; i++) {
                        graphic.setAttribute(this.fields[i].fieldName, this.fields[i].data)
                    }
                }
                pointLayerObj['fields'] = this.fields.map(function (item) {
                    let obj = {};
                    obj['name'] = item.fieldName;
                    obj['type'] = item.type;
                    return obj;
                });
                pointLayerObj['popupTemplate'] = popupTemplate
            }

            this.$arcMapComponent = this.pointLayer = new FeatureLayer(pointLayerObj);
            this.pointLayer.on('click', function(e){
                alert(e)
            })
        },
        // 更新坐标点弹出框内容
        updatePopupTemplate(){

            let content = []
            for(let item of this.popupTemplate.content){
                if(item.type === 'text'){
                    content.push({
                        type:'text',
                        text:item.text
                    })
                }else if(item.type === 'fields'){
                    let fields = []
                    for (let i = 0; i < this.fields.length; i++) {
                        fields.push({
                            fieldName:this.fields[i].fieldName,
                            label:this.fields[i].label
                        })
                    }
                    content.push({
                        type: 'fields',
                        fieldInfos:fields
                    })
                }
            }
            let popupTemplate = new PopupTemplate({
                title:this.popupTemplate.title,
                content,
                // actions: [ //可以自定义一些事件
                //     {
                //         id: `show-info`,
                //         title: '查看详情'
                //     }
                // ],
                fields: this.fields.map(function (item) {
                    let obj = {};
                    obj['name'] = item.fieldName;
                    obj['type'] = item.type;
                    return obj;
                }),
                outFields: ['*']
            })
            return popupTemplate
        },
        render() {
            const slots = this.$slots.default || [];
            if (slots.length) {
            this.withSlots = true;
            this.tmpVM.node = slots;
            }
            return null;
        },
    }
}
</script>