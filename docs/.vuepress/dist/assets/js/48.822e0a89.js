(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1251:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return j}));var s=i(337),r=i(343),a=i(345),n=i(341),h=(i(342),i(336),i(340),i(338)),l=i(970),o=i(439),c=i(971),u=i(503),d=i(396),p=i(555),b=i(567),y=i(438),g=i(546);const f=[102113,102100,3857,3785,900913],v=[0,0],w=r.a.getLogger("esri.views.2d.layers.WMTSLayerView2D");let O=class extends(Object(g.a)(Object(l.a)(Object(o.a)(y.a)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}attach(){if(!this.tileMatrixSet)return;const{tileInfo:e}=this.tileMatrixSet;this._tileInfoView=new u.a(e),this._fetchQueue=new p.a({tileInfoView:this._tileInfoView,concurrency:16,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new b.a({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],()=>this._refresh()),this.declaredClass),super.attach()}detach(){var e,t;super.detach(),this.handles.remove(this.declaredClass),null==(e=this._tileStrategy)||e.destroy(),null==(t=this._fetchQueue)||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(v,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){this.updateRequested||this.suspended||this._refresh()}isUpdating(){return this._fetchQueue.length>0}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:r=0}=t;if(!i)return this._fetchImage(e,s);const n=new d.a(0,0,0,0);let h;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,n,{signal:s}),h=await this._fetchImage(n,s)}catch(i){if(Object(a.l)(i))throw i;if(r<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new d.a(i),a=await this.fetchTile(s,{...t,resamplingLevel:r+1});return Object(c.b)(this._tileInfoView,a,s,e)}}throw i}return Object(c.b)(this._tileInfoView,h,n,e)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(e){Object(a.l)(e)||w.error(e)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then(t=>{e.bitmap.source=t}).catch(t=>{Object(a.l)(t)||(e.bitmap.source=null)}).finally(()=>{e.requestRender(),this.notifyChange("updating"),t.fulfilled=!0})};this._tileRequests.set(e,t)}),this.notifyChange("updating")}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find(e=>e.tileInfo.spatialReference.wkid===t.wkid);return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(e=>f.indexOf(e.tileInfo.spatialReference.wkid)>-1)),i}};Object(s.a)([Object(n.b)()],O.prototype,"suspended",void 0),Object(s.a)([Object(n.b)({readOnly:!0})],O.prototype,"tileMatrixSet",null),O=Object(s.a)([Object(h.a)("esri.views.2d.layers.WMTSLayerView2D")],O);const j=O},436:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i(384),r=i(407),a=i(396);class n extends r.a{constructor(e,t,i,s,r,n=s,h=r){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new a.a(e),this.x=t,this.y=i,this.width=s,this.height=r,this.rangeX=n,this.rangeY=h}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e,t){const i=t/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[a,n]=e.toScreenNoRotation([0,0],[this.x,this.y]),h=this.width/this.rangeX*i,l=this.height/this.rangeY*i;Object(s.k)(r,h,0,0,0,l,0,a,n,1),Object(s.h)(this.transforms.dvs,e.displayViewMat3,r)}}},438:function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));var s=i(337),r=i(359),a=i(399),n=i(383),h=i(444),l=i(343),o=i(339),c=i(464),u=i(341),d=(i(342),i(336),i(340),i(338));let p=class extends(Object(n.b)(Object(h.a)(Object(c.b)(a.a.EventedMixin(r.a))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw l.a.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}})}get fullOpacity(){return Object(o.s)(this.get("layer.opacity"),1)*Object(o.s)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null==(e=this.layer)?void 0:e.visible)}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};Object(s.a)([Object(u.b)()],p.prototype,"fullOpacity",null),Object(s.a)([Object(u.b)()],p.prototype,"layer",void 0),Object(s.a)([Object(u.b)()],p.prototype,"parent",void 0),Object(s.a)([Object(u.b)({readOnly:!0})],p.prototype,"suspended",null),Object(s.a)([Object(u.b)({readOnly:!0})],p.prototype,"suspendInfo",null),Object(s.a)([Object(u.b)({readOnly:!0})],p.prototype,"legendEnabled",null),Object(s.a)([Object(u.b)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),Object(s.a)([Object(u.b)({readOnly:!0})],p.prototype,"updatingProgress",null),Object(s.a)([Object(u.b)()],p.prototype,"visible",null),p=Object(s.a)([Object(d.a)("esri.views.layers.LayerView")],p);const b=p},439:function(e,t,i){"use strict";i.d(t,"a",(function(){return T}));var s=i(337),r=i(372),a=i(451),n=i(373),h=i(341),l=(i(342),i(336),i(340),i(338)),o=i(497),c=i(347);i(343),i(394);let u=class extends c.a{};u=Object(s.a)([Object(l.a)("esri.views.layers.support.ClipArea")],u);const d=u;var p;let b=p=class extends d{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new p({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};Object(s.a)([Object(h.b)({type:[Number,String],json:{write:!0}})],b.prototype,"left",void 0),Object(s.a)([Object(h.b)({type:[Number,String],json:{write:!0}})],b.prototype,"right",void 0),Object(s.a)([Object(h.b)({type:[Number,String],json:{write:!0}})],b.prototype,"top",void 0),Object(s.a)([Object(h.b)({type:[Number,String],json:{write:!0}})],b.prototype,"bottom",void 0),Object(s.a)([Object(h.b)({readOnly:!0})],b.prototype,"version",null),b=p=Object(s.a)([Object(l.a)("esri.views.layers.support.ClipRect")],b);const y=b;i(356);var g,f=i(403),v=i(351),w=i(355),O=i(386);const j={base:f.a,key:"type",typeMap:{extent:w.a,polygon:O.a}};let m=g=class extends d{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new g({geometry:this.geometry.clone()})}};Object(s.a)([Object(h.b)({types:j,json:{read:v.a,write:!0}})],m.prototype,"geometry",void 0),Object(s.a)([Object(h.b)({readOnly:!0})],m.prototype,"version",null),m=g=Object(s.a)([Object(l.a)("esri.views.layers.support.Geometry")],m);const _=m;let x=class extends d{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};Object(s.a)([Object(h.b)({type:[[[Number]]],json:{write:!0}})],x.prototype,"path",void 0),Object(s.a)([Object(h.b)({readOnly:!0})],x.prototype,"version",null),x=Object(s.a)([Object(l.a)("esri.views.layers.support.Path")],x);const R=x,I=r.a.ofType({key:"type",base:d,typeMap:{rect:y,path:R,geometry:_}}),T=e=>{let t=class extends e{constructor(){super(...arguments),this.clips=new I,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new o.a),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(n.a)(this,"suspended",e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()},!0),Object(n.a)(this,["layer.opacity","container"],()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)},!0),Object(n.a)(this,["layer.blendMode"],e=>{this.container&&(this.container.blendMode=e)},!0),Object(n.a)(this,["layer.effect"],e=>{this.container&&(this.container.effect=e)},!0),this.clips.on("change",()=>{this.container.clips=this.clips,this.notifyChange("clips")})]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then(e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{}):this.when().then(()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{})}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(!this.updatingHandles||!this.updatingHandles.updating)}isVisibleAtScale(e){let t=!0;const i=this.layer,s=i.minScale,r=i.maxScale;if(null!=s&&null!=r){let i=!s,a=!r;!i&&e<=s&&(i=!0),!a&&e>=r&&(a=!0),t=i&&a}return t}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return Object(s.a)([Object(h.b)({type:I,set(e){const t=Object(a.b)(e,this._get("clips"),I);this._set("clips",t)}})],t.prototype,"clips",void 0),Object(s.a)([Object(h.b)()],t.prototype,"moving",void 0),Object(s.a)([Object(h.b)()],t.prototype,"attached",void 0),Object(s.a)([Object(h.b)()],t.prototype,"container",void 0),Object(s.a)([Object(h.b)()],t.prototype,"suspended",void 0),Object(s.a)([Object(h.b)({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(s.a)([Object(h.b)()],t.prototype,"updateRequested",void 0),Object(s.a)([Object(h.b)()],t.prototype,"updating",null),Object(s.a)([Object(h.b)()],t.prototype,"view",void 0),t=Object(s.a)([Object(l.a)("esri.views.2d.layers.LayerView2D")],t),t}},443:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var s=i(336),r=i(349),a=i(480),n=i(550),h=i(542);const l=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class o extends a.a{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(l),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[h.a],drawPhase:r.c.DEBUG|r.c.MAP|r.c.HIGHLIGHT,target:()=>this.getStencilTarget()})),Object(s.a)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[n.a],drawPhase:r.c.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}updateTransforms(e){for(const t of this.children){const i=this._tileInfoView.getTileResolution(t.key);t.setTransform(e,i)}}setStencilReference(){let e=1;for(const t of this.children)t.stencilRef=e++}}},508:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var s=i(339);class r{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return Object(s.k)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return Object(s.k)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(Object(s.j)(t))return;const i=this.filter({pixelBlock:t});if(Object(s.j)(i.pixelBlock))return;const r=i.pixelBlock.getAsRGBA(),a=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);a.data.set(r),e.putImageData(a,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return Object(s.j)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},525:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var s=i(339),r=i(384),a=i(391),n=i(382),h=i(407),l=i(508),o=i(369);function c(e,t,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(s.width=t,s.height=i),new o.a(e,s)}class u extends h.a{constructor(e=null,t,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:Object(a.b)()}}setTransform(e){const t=Object(r.b)(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.resolution/this.pixelRatio/e.resolution,h=a*this.width,l=a*this.height,o=Math.PI*this.rotation/180;Object(r.c)(t,t,Object(n.b)(i,s)),Object(r.c)(t,t,Object(n.b)(h/2,l/2)),Object(r.j)(t,t,-o),Object(r.c)(t,t,Object(n.b)(-h/2,-l/2)),Object(r.g)(t,t,Object(n.b)(h,l)),Object(r.h)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}updateTexture(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=c(e,this.sourceWidth,this.sourceHeight):this._texture=c(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),(r=i)&&"render"in r)if(i instanceof l.a){const e=i.getRenderedRasterPixels();this._texture.setData(Object(s.k)(e)?e.renderedRasterPixels:null)}else this._texture.setData(function(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(i));else(function(e){return e&&!("render"in e)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null);var r}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},546:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var s=i(337),r=i(343),a=i(345),n=i(373),h=i(341),l=(i(342),i(336),i(340),i(338));const o=e=>{let t=class extends e{initialize(){this.handles.add(Object(n.b)(this,"layer","refresh",e=>{this.doRefresh(e.dataChanged).catch(e=>{Object(a.l)(e)||r.a.getLogger(this.declaredClass).error(e)})}),"RefreshableLayerView")}};return Object(s.a)([Object(h.b)()],t.prototype,"layer",void 0),t=Object(s.a)([Object(l.a)("esri.layers.mixins.RefreshableLayerView")],t),t}},782:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var s=i(371),r=i(391),a=i(525),n=i(436);class h extends n.a{constructor(e,t,i,s,r,n=null){super(e,t,i,s,r),this.bitmap=new a.a(n,"standard",!1),this.bitmap.coordScale=[s,r],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:Object(r.b)(),tileMat3:Object(r.b)()}}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var l=i(566),o=i(349),c=i(443);class u extends c.a{get requiresDedicatedFBO(){return this.children.some(e=>"additive"===e.bitmap.blendFunction)}createTile(e){const t=this._tileInfoView.getTileBounds(Object(s.g)(),e),[i,r]=this._tileInfoView.tileInfo.size;return new h(e,t[0],t[3],i,r)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[l.a.bitmap],target:()=>this.children.map(e=>e.bitmap),drawPhase:o.c.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===o.c.MAP&&super.doRender(e)}}},970:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i(337),r=(i(343),i(340),i(342),i(336),i(394),i(338)),a=i(782);const n=e=>{let t=class extends e{attach(){this.view.timeline.record(this.layer.title+" (BitmapTileLayer) Attach"),this._bitmapView=new a.a(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){var e;this.container.removeChild(this._bitmapView),null==(e=this._bitmapView)||e.removeAllChildren()}};return t=Object(s.a)([Object(r.a)("esri.views.2d.layers.BitmapTileLayerView2D")],t),t}},971:function(e,t,i){"use strict";function s(e,t,i,s){if(i.level===s.level)return t;const a=e.tileInfo.size,n=e.getTileResolution(i.level),h=e.getTileResolution(s.level);let l=e.getLODInfoAt(s.level);const o=l.getXForColumn(s.col),c=l.getYForRow(s.row);l=e.getLODInfoAt(i.level);const u=l.getXForColumn(i.col),d=l.getYForRow(i.row),p=function(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}(t)/a[0],b=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/a[1],y=Math.round(p*((o-u)/n)),g=Math.round(b*(-(c-d)/n)),f=Math.round(p*a[0]*(h/n)),v=Math.round(b*a[1]*(h/n)),w=r(a);return w.getContext("2d").drawImage(t,y,g,f,v,0,0,a[0],a[1]),w}function r(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return s}))}}]);