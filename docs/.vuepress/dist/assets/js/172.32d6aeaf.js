(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{849:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return l}));var o=r(337),s=r(344),n=r(423),i=r(516),p=r(341),a=(r(342),r(336),r(340),r(338)),c=r(421),u=r(446);let d=class extends(Object(u.a)(Object(n.a)(c.a))){constructor(e){super(e),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,t)=>{Object(i.b)(()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let r="Unsupported layer type";e&&(r+=" "+e),t(new s.a("layer:unsupported-layer-type",r,{layerType:e}))})}))}read(e,t){const r={resourceInfo:e};null!=e.id&&(r.id=e.id),null!=e.title&&(r.title=e.title),super.read(r,t)}write(e){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};Object(o.a)([Object(p.b)({readOnly:!0})],d.prototype,"resourceInfo",void 0),Object(o.a)([Object(p.b)({type:["show","hide"]})],d.prototype,"listMode",void 0),Object(o.a)([Object(p.b)({json:{read:!1},readOnly:!0,value:"unsupported"})],d.prototype,"type",void 0),d=Object(o.a)([Object(a.a)("esri.layers.UnsupportedLayer")],d);const l=d}}]);