(window.webpackJsonp=window.webpackJsonp||[]).push([[92,107],{654:function(e,t,l){"use strict";l.r(t),l.d(t,"default",(function(){return x}));var a=l(337),r=(l(356),l(353)),o=l(344),s=l(423),n=l(434),i=l(358),c=l(341),p=(l(342),l(336),l(340),l(363)),u=l(338),b=l(364),j=l(421),y=l(482),d=l(450),O=l(446),w=l(530),v=l(454),h=l(668),m=l(426),f=l(708),g=l(355),T=l(360),S=l(368);let R=class extends(Object(y.a)(Object(w.a)(Object(v.a)(Object(d.a)(Object(O.a)(Object(s.a)(j.a))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new g.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,T.a.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=T.a.WebMercator,this.subDomains=null,this.tileInfo=new m.a({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new S.a({x:-20037508.342787,y:20037508.342787,spatialReference:T.a.WebMercator}),spatialReference:T.a.WebMercator,lods:[new h.a({level:0,scale:591657527.591555,resolution:156543.033928}),new h.a({level:1,scale:295828763.795777,resolution:78271.5169639999}),new h.a({level:2,scale:147914381.897889,resolution:39135.7584820001}),new h.a({level:3,scale:73957190.948944,resolution:19567.8792409999}),new h.a({level:4,scale:36978595.474472,resolution:9783.93962049996}),new h.a({level:5,scale:18489297.737236,resolution:4891.96981024998}),new h.a({level:6,scale:9244648.868618,resolution:2445.98490512499}),new h.a({level:7,scale:4622324.434309,resolution:1222.99245256249}),new h.a({level:8,scale:2311162.217155,resolution:611.49622628138}),new h.a({level:9,scale:1155581.108577,resolution:305.748113140558}),new h.a({level:10,scale:577790.554289,resolution:152.874056570411}),new h.a({level:11,scale:288895.277144,resolution:76.4370282850732}),new h.a({level:12,scale:144447.638572,resolution:38.2185141425366}),new h.a({level:13,scale:72223.819286,resolution:19.1092570712683}),new h.a({level:14,scale:36111.909643,resolution:9.55462853563415}),new h.a({level:15,scale:18055.954822,resolution:4.77731426794937}),new h.a({level:16,scale:9027.977411,resolution:2.38865713397468}),new h.a({level:17,scale:4513.988705,resolution:1.19432856685505}),new h.a({level:18,scale:2256.994353,resolution:.597164283559817}),new h.a({level:19,scale:1128.497176,resolution:.298582141647617}),new h.a({level:20,scale:564.248588,resolution:.14929107082380833}),new h.a({level:21,scale:282.124294,resolution:.07464553541190416}),new h.a({level:22,scale:141.062147,resolution:.03732276770595208}),new h.a({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then(()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new i.a(this.urlTemplate);this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new o.a("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)});return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&T.a.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:l}=this,a=new i.a(t),r=a.scheme?a.scheme+"://":"//",o=r+a.authority+"/";if(-1===a.authority.indexOf("{subDomain}"))e.push(o);else if(l&&l.length>0&&a.authority.split(".").length>1)for(const t of l)e.push(r+a.authority.replace(/\{subDomain\}/gi,t)+"/");return e.map(e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new i.a(e),l=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(l.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&Object(i.w)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=Object(i.D)(e)),t.templateUrl=e}fetchTile(e,t,l,a={}){const{signal:o}=a,s=this.getTileUrl(e,t,l),n={responseType:"image",signal:o,query:{...this.refreshParameters}};return Object(r.default)(s,n).then(e=>e.data)}getTileUrl(e,t,l){const a=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+Object(n.c)(this.urlPath,{level:a,z:a,col:l,x:l,row:t,y:t})}};Object(a.a)([Object(c.b)({type:String,value:"",json:{write:!0}})],R.prototype,"copyright",void 0),Object(a.a)([Object(c.b)({type:g.a,json:{write:!0},nonNullable:!0})],R.prototype,"fullExtent",void 0),Object(a.a)([Object(c.b)({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"legendEnabled",void 0),Object(a.a)([Object(c.b)({type:["show","hide"]})],R.prototype,"listMode",void 0),Object(a.a)([Object(c.b)()],R.prototype,"levelValues",null),Object(a.a)([Object(c.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],R.prototype,"isReference",void 0),Object(a.a)([Object(c.b)({type:["WebTiledLayer"],value:"WebTiledLayer"})],R.prototype,"operationalLayerType",void 0),Object(a.a)([Object(c.b)({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"popupEnabled",void 0),Object(a.a)([Object(c.b)({type:T.a})],R.prototype,"spatialReference",void 0),Object(a.a)([Object(p.a)("spatialReference",["spatialReference","fullExtent.spatialReference"])],R.prototype,"readSpatialReference",null),Object(a.a)([Object(c.b)({type:[String],json:{write:!0}})],R.prototype,"subDomains",void 0),Object(a.a)([Object(c.b)({type:m.a,json:{write:!0}})],R.prototype,"tileInfo",void 0),Object(a.a)([Object(c.b)({readOnly:!0})],R.prototype,"tileServers",null),Object(a.a)([Object(c.b)({json:{read:!1}})],R.prototype,"type",void 0),Object(a.a)([Object(c.b)()],R.prototype,"urlPath",null),Object(a.a)([Object(c.b)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],R.prototype,"urlTemplate",void 0),Object(a.a)([Object(p.a)("urlTemplate",["urlTemplate","templateUrl"])],R.prototype,"readUrlTemplate",null),Object(a.a)([Object(b.a)("urlTemplate",{templateUrl:{type:String}})],R.prototype,"writeUrlTemplate",null),Object(a.a)([Object(c.b)({type:f.a,json:{write:!0}})],R.prototype,"wmtsInfo",void 0),R=Object(a.a)([Object(u.a)("esri.layers.WebTileLayer")],R);const x=R},708:function(e,t,l){"use strict";l.d(t,"a",(function(){return p}));var a,r=l(337),o=l(347),s=l(350),n=l(341),i=(l(340),l(338));let c=a=class extends o.a{constructor(e){super(e)}clone(){return new a({customLayerParameters:Object(s.a)(this.customLayerParameters),customParameters:Object(s.a)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};Object(r.a)([Object(n.b)({json:{type:Object,write:!0}})],c.prototype,"customLayerParameters",void 0),Object(r.a)([Object(n.b)({json:{type:Object,write:!0}})],c.prototype,"customParameters",void 0),Object(r.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"layerIdentifier",void 0),Object(r.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"tileMatrixSet",void 0),Object(r.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"url",void 0),c=a=Object(r.a)([Object(i.a)("esri.layer.support.WMTSLayerInfo")],c);const p=c},845:function(e,t,l){"use strict";l.r(t),l.d(t,"default",(function(){return y}));var a=l(337),r=(l(356),l(341)),o=(l(342),l(336),l(340),l(338)),s=l(368),n=l(654),i=l(668),c=l(426),p=l(547),u=l(360),b=l(355);let j=class extends n.default{constructor(...e){super(...e),this.portalItem=null,this.isReference=null,this.tileInfo=new c.a({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new s.a({x:-20037508.342787,y:20037508.342787,spatialReference:u.a.WebMercator}),spatialReference:u.a.WebMercator,lods:[new i.a({level:0,scale:591657527.591555,resolution:156543.033928}),new i.a({level:1,scale:295828763.795777,resolution:78271.5169639999}),new i.a({level:2,scale:147914381.897889,resolution:39135.7584820001}),new i.a({level:3,scale:73957190.948944,resolution:19567.8792409999}),new i.a({level:4,scale:36978595.474472,resolution:9783.93962049996}),new i.a({level:5,scale:18489297.737236,resolution:4891.96981024998}),new i.a({level:6,scale:9244648.868618,resolution:2445.98490512499}),new i.a({level:7,scale:4622324.434309,resolution:1222.99245256249}),new i.a({level:8,scale:2311162.217155,resolution:611.49622628138}),new i.a({level:9,scale:1155581.108577,resolution:305.748113140558}),new i.a({level:10,scale:577790.554289,resolution:152.874056570411}),new i.a({level:11,scale:288895.277144,resolution:76.4370282850732}),new i.a({level:12,scale:144447.638572,resolution:38.2185141425366}),new i.a({level:13,scale:72223.819286,resolution:19.1092570712683}),new i.a({level:14,scale:36111.909643,resolution:9.55462853563415}),new i.a({level:15,scale:18055.954822,resolution:4.77731426794937}),new i.a({level:16,scale:9027.977411,resolution:2.38865713397468}),new i.a({level:17,scale:4513.988705,resolution:1.19432856685505}),new i.a({level:18,scale:2256.994353,resolution:.597164283559817}),new i.a({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.subDomains=["a","b","c"],this.fullExtent=new b.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,u.a.WebMercator),this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA"}get refreshInterval(){return 0}};Object(a.a)([Object(r.b)({type:p.default,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],j.prototype,"portalItem",void 0),Object(a.a)([Object(r.b)({type:Boolean,json:{read:!1,write:!1}})],j.prototype,"isReference",void 0),Object(a.a)([Object(r.b)({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],j.prototype,"refreshInterval",null),Object(a.a)([Object(r.b)({type:c.a,json:{write:!1}})],j.prototype,"tileInfo",void 0),Object(a.a)([Object(r.b)({type:["show","hide"]})],j.prototype,"listMode",void 0),Object(a.a)([Object(r.b)({readOnly:!0,json:{read:!1,write:!1}})],j.prototype,"subDomains",void 0),Object(a.a)([Object(r.b)({readOnly:!0,json:{read:!1,write:!1},nonNullable:!0})],j.prototype,"fullExtent",void 0),Object(a.a)([Object(r.b)({readOnly:!0,json:{read:!1,write:!1}})],j.prototype,"urlTemplate",void 0),Object(a.a)([Object(r.b)({type:["OpenStreetMap"]})],j.prototype,"operationalLayerType",void 0),Object(a.a)([Object(r.b)({json:{read:!1}})],j.prototype,"type",void 0),Object(a.a)([Object(r.b)({json:{read:!1,write:!1}})],j.prototype,"copyright",void 0),Object(a.a)([Object(r.b)({json:{read:!1,write:!1}})],j.prototype,"wmtsInfo",void 0),j=Object(a.a)([Object(o.a)("esri.layers.OpenStreetMapLayer")],j);const y=j}}]);