(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1005:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var o,r=n(337),i=n(350),a=n(341),s=n(340),c=n(367),l=n(338),u=n(630),f=n(621),d=n(370),b=n(347);let p=o=class extends b.a{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new o({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:Object(i.a)(this.color)})}};Object(r.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"description",void 0),Object(r.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"label",void 0),Object(r.a)([Object(a.b)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],p.prototype,"minValue",void 0),Object(r.a)([Object(a.b)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],p.prototype,"maxValue",void 0),Object(r.a)([Object(a.b)({type:d.a,json:{type:[s.a],write:!0}})],p.prototype,"color",void 0),p=o=Object(r.a)([Object(l.a)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],p);const y=p;var h;let O=h=class extends u.a{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new h({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:Object(i.a)(this.colorClassBreakInfos),legendOptions:Object(i.a)(this.legendOptions)})}};Object(r.a)([Object(c.a)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],O.prototype,"type",void 0),Object(r.a)([Object(a.b)({json:{write:!0},type:String})],O.prototype,"field",void 0),Object(r.a)([Object(a.b)({type:f.a,json:{write:!0}})],O.prototype,"legendOptions",void 0),Object(r.a)([Object(a.b)({type:u.a.fieldTransformTypeKebabDict.apiValues,json:{type:u.a.fieldTransformTypeKebabDict.jsonValues,read:u.a.fieldTransformTypeKebabDict.read,write:u.a.fieldTransformTypeKebabDict.write}})],O.prototype,"fieldTransformType",void 0),Object(r.a)([Object(a.b)({type:[y],json:{write:!0}})],O.prototype,"colorClassBreakInfos",void 0),O=h=Object(r.a)([Object(l.a)("esri.renderers.PointCloudClassBreaksRenderer")],O);const j=O},1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var o,r=n(337),i=n(350),a=n(341),s=n(340),c=n(367),l=n(338),u=n(630),f=n(621),d=n(370),b=n(347);let p=o=class extends b.a{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new o({description:this.description,label:this.label,values:Object(i.a)(this.values),color:Object(i.a)(this.color)})}};Object(r.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"description",void 0),Object(r.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"label",void 0),Object(r.a)([Object(a.b)({type:[String],json:{write:!0}})],p.prototype,"values",void 0),Object(r.a)([Object(a.b)({type:d.a,json:{type:[s.a],write:!0}})],p.prototype,"color",void 0),p=o=Object(r.a)([Object(l.a)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],p);const y=p;var h;let O=h=class extends u.a{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new h({...this.cloneProperties(),field:Object(i.a)(this.field),fieldTransformType:Object(i.a)(this.fieldTransformType),colorUniqueValueInfos:Object(i.a)(this.colorUniqueValueInfos),legendOptions:Object(i.a)(this.legendOptions)})}};Object(r.a)([Object(c.a)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],O.prototype,"type",void 0),Object(r.a)([Object(a.b)({json:{write:!0},type:String})],O.prototype,"field",void 0),Object(r.a)([Object(a.b)({type:u.a.fieldTransformTypeKebabDict.apiValues,json:{type:u.a.fieldTransformTypeKebabDict.jsonValues,read:u.a.fieldTransformTypeKebabDict.read,write:u.a.fieldTransformTypeKebabDict.write}})],O.prototype,"fieldTransformType",void 0),Object(r.a)([Object(a.b)({type:[y],json:{write:!0}})],O.prototype,"colorUniqueValueInfos",void 0),Object(r.a)([Object(a.b)({type:f.a,json:{write:!0}})],O.prototype,"legendOptions",void 0),O=h=Object(r.a)([Object(l.a)("esri.renderers.PointCloudUniqueValueRenderer")],O);const j=O},1185:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return we}));var o=n(339),r=n(636),i=n(651);function a(){const e=new Float32Array(4);return e[3]=1,e}Object.freeze({__proto__:null,create:a,clone:function(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},fromValues:function(e,t,n,o){const r=new Float32Array(4);return r[0]=e,r[1]=t,r[2]=n,r[3]=o,r},createView:function(e,t){return new Float32Array(e,t,4)}});var s=n(410),c=n(492),l=n(433),u=n(360),f=n(1005),d=n(964),b=n(1006),p=n(344),y=n(350),h=n(343);const O=0,j=10,w=10,g=12,m=16;function v(e,t,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+O,j)),version:t.getUint16(n+w,!0),checksum:t.getUint32(n+g,!0)}}const C=0,M=4,T=8,U=16,A=24,I=32,S=40,V=48,z=56,x=64,F=72,B=80,k=84,D=88;function P(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:r}=v(e,t,n);if(n+=m,"LEPCC     "!==o)throw new p.a("lepcc-decode-error","Bad identifier");if(r>1)throw new p.a("lepcc-decode-error","Unknown version");const i=(s=n,{sizeLo:(a=t).getUint32(s+C,!0),sizeHi:a.getUint32(s+M,!0),minX:a.getFloat64(s+T,!0),minY:a.getFloat64(s+U,!0),minZ:a.getFloat64(s+A,!0),maxX:a.getFloat64(s+I,!0),maxY:a.getFloat64(s+S,!0),maxZ:a.getFloat64(s+V,!0),errorX:a.getFloat64(s+z,!0),errorY:a.getFloat64(s+x,!0),errorZ:a.getFloat64(s+F,!0),count:a.getUint32(s+B,!0),reserved:a.getUint32(s+k,!0)});var a,s;if(n+=D,i.sizeHi*2**32+i.sizeLo!==e.byteLength)throw new p.a("lepcc-decode-error","Bad size");const c=new Float64Array(3*i.count),l=[],u=[],f=[],d=[];if(n=_(e,n,l),n=_(e,n,u),n=_(e,n,f),n=_(e,n,d),n!==e.byteLength)throw new p.a("lepcc-decode-error","Bad length");let b=0,y=0;for(let e=0;e<l.length;e++){y+=l[e];let t=0;for(let n=0;n<u[e];n++){t+=f[b];const e=d[b];c[3*b]=Math.min(i.maxX,i.minX+2*i.errorX*t),c[3*b+1]=Math.min(i.maxY,i.minY+2*i.errorY*y),c[3*b+2]=Math.min(i.maxZ,i.minZ+2*i.errorZ*e),b++}}return{errorX:i.errorX,errorY:i.errorY,errorZ:i.errorZ,result:c}}function _(e,t,n){const o=[];t=R(e,t,o);const r=[];for(let i=0;i<o.length;i++){r.length=0,t=R(e,t,r);for(let e=0;e<r.length;e++)n.push(r[e]+o[i])}return t}function R(e,t,n){const o=new DataView(e,t),r=o.getUint8(0),i=31&r,a=!!(32&r),s=(192&r)>>6;let c=0;if(0===s)c=o.getUint32(1,!0),t+=5;else if(1===s)c=o.getUint16(1,!0),t+=3;else{if(2!==s)throw new p.a("lepcc-decode-error","Bad count type");c=o.getUint8(1),t+=2}if(a)throw new p.a("lepcc-decode-error","LUT not implemented");const l=Math.ceil(c*i/8),u=new Uint8Array(e,t,l);let f=0,d=0,b=0;const y=-1>>>32-i;for(let e=0;e<c;e++){for(;d<i;)f|=u[b]<<d,d+=8,b+=1;n[e]=f&y,f>>>=i,d-=i,d+i>32&&(f|=u[b-1]>>8-d)}return t+b}const q=0,N=4,E=8,L=12,Y=14,Z=15,K=16;function X(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:r}=v(e,t,n);if(n+=m,"ClusterRGB"!==o)throw new p.a("lepcc-decode-error","Bad identifier");if(r>1)throw new p.a("lepcc-decode-error","Unknown version");const i=(s=n,{sizeLo:(a=t).getUint32(s+q,!0),sizeHi:a.getUint32(s+N,!0),count:a.getUint32(s+E,!0),colorMapCount:a.getUint16(s+L,!0),lookupMethod:a.getUint8(s+Y),compressionMethod:a.getUint8(s+Z)});var a,s;if(n+=K,i.sizeHi*2**32+i.sizeLo!==e.byteLength)throw new p.a("lepcc-decode-error","Bad size");if((2===i.lookupMethod||1===i.lookupMethod)&&0===i.compressionMethod){if(3*i.colorMapCount+i.count+n!==e.byteLength||i.colorMapCount>256)throw new p.a("lepcc-decode-error","Bad count");const t=new Uint8Array(e,n,3*i.colorMapCount),o=new Uint8Array(e,n+3*i.colorMapCount,i.count),r=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++){const n=o[e];r[3*e]=t[3*n],r[3*e+1]=t[3*n+1],r[3*e+2]=t[3*n+2]}return r}if(0===i.lookupMethod&&0===i.compressionMethod){if(3*i.count+n!==e.byteLength||0!==i.colorMapCount)throw new p.a("lepcc-decode-error","Bad count");return new Uint8Array(e,n).slice()}if(i.lookupMethod<=2&&1===i.compressionMethod){if(n+3!==e.byteLength||1!==i.colorMapCount)throw new p.a("lepcc-decode-error","Bad count");const o=t.getUint8(n),r=t.getUint8(n+1),a=t.getUint8(n+2),s=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++)s[3*e]=o,s[3*e+1]=r,s[3*e+2]=a;return s}throw new p.a("lepcc-decode-error","Bad method "+i.lookupMethod+","+i.compressionMethod)}const J=0,W=4,H=8,G=12,$=14,Q=15,ee=16;function te(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:r}=v(e,t,n);if(n+=m,"Intensity "!==o)throw new p.a("lepcc-decode-error","Bad identifier");if(r>1)throw new p.a("lepcc-decode-error","Unknown version");const i=(s=n,{sizeLo:(a=t).getUint32(s+J,!0),sizeHi:a.getUint32(s+W,!0),count:a.getUint32(s+H,!0),scaleFactor:a.getUint16(s+G,!0),bitsPerPoint:a.getUint8(s+$),reserved:a.getUint8(s+Q)});var a,s;if(n+=ee,i.sizeHi*2**32+i.sizeLo!==e.byteLength)throw new p.a("lepcc-decode-error","Bad size");const c=new Uint16Array(i.count);if(8===i.bitsPerPoint){if(i.count+n!==e.byteLength)throw new p.a("lepcc-decode-error","Bad size");const t=new Uint8Array(e,n,i.count);for(let e=0;e<i.count;e++)c[e]=t[e]*i.scaleFactor}else if(16===i.bitsPerPoint){if(2*i.count+n!==e.byteLength)throw new p.a("lepcc-decode-error","Bad size");const t=new Uint16Array(e,n,i.count);for(let e=0;e<i.count;e++)c[e]=t[e]*i.scaleFactor}else{const t=[];if(R(e,n,t)!==e.byteLength)throw new p.a("lepcc-decode-error","Bad size");for(let e=0;e<i.count;e++)c[e]=t[e]*i.scaleFactor}return c}const ne=h.a.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function oe(e,t,n){let o="",r=0;for(;r<n;){const i=e[t+r];if(i<128)o+=String.fromCharCode(i),r++;else if(i>=192&&i<224){if(r+1>=n)throw new p.a("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&i)<<6|63&e[t+r+1];o+=String.fromCharCode(a),r+=2}else if(i>=224&&i<240){if(r+2>=n)throw new p.a("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&i)<<12|(63&e[t+r+1])<<6|63&e[t+r+2];o+=String.fromCharCode(a),r+=3}else{if(!(i>=240&&i<248))throw new p.a("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(r+3>=n)throw new p.a("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&i)<<18|(63&e[t+r+1])<<12|(63&e[t+r+2])<<6|63&e[t+r+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);o+=String.fromCharCode(e,t)}else o+=String.fromCharCode(a);r+=4}}}return o}function re(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let o=0;for(let r=0;r<t.length;r++){const i=t[r],a=i.valueType||i.type,s=ue[a];n.fields[i.property]=s(e,o),o+=le[a].BYTES_PER_ELEMENT}return n.byteCount=o,n}function ie(e,t){return new(0,le[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function ae(e,t,n){if(t!==e&&ne.error(`Invalid ${n} buffer size\n expected: ${e}, actual: ${t})`),t<e)throw new p.a("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}const se={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function ce(e,t,n){if("lepcc-rgb"===e.encoding)return X(t);if("lepcc-intensity"===e.encoding)return te(t);if(null!=e.encoding&&""!==e.encoding)throw new p.a("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(ne.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(ne.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const o=function(e,t,n){const o=null!=t.header?re(e,t.header):{byteOffset:0,byteCount:0,fields:{count:n}},r={header:o,byteOffset:o.byteCount,byteCount:0,entries:Object.create(null)};let i=o.byteCount;for(let e=0;e<t.ordering.length;e++){const n=t.ordering[e],a=Object(y.a)(t[n]);if(a.count=o.fields.count,"String"===a.valueType){if(a.byteOffset=i,a.byteCount=o.fields[n+"ByteCount"],"UTF-8"!==a.encoding)throw new p.a("unsupported-encoding","Unsupported String encoding.",{encoding:a.encoding})}else{if(!fe(a.valueType))throw new p.a("unsupported-value-type","Unsupported binary valueType",{valueType:a.valueType});{const e=de(a.valueType);i+=i%e!=0?e-i%e:0,a.byteOffset=i,a.byteCount=e*a.valuesPerElement*a.count}}i+=a.byteCount,r.entries[n]=a}return r.byteCount=i-r.byteOffset,r}(t,e,n);ae(o.byteOffset+o.byteCount,t.byteLength,"attribute");const r=o.entries.attributeValues||o.entries.objectIds;if(r){if("String"===r.valueType){const e=o.entries.attributeByteCounts,n=ie(t,e),i=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,r);return function(e,t,n){const o=[];let r,i,a=0;for(i=0;i<e;i+=1){if(r=t[i],r>0){if(o.push(oe(n,a,r-1)),0!==n[a+r-1])throw new p.a("string-array-error","Invalid string array: missing null termination.")}else o.push(null);a+=r}return o}(e.count,n,i)}return ie(t,r)}throw new p.a("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const le={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},ue={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function fe(e){return le.hasOwnProperty(e)}function de(e){return fe(e)?le[e].BYTES_PER_ELEMENT:0}function be(e,t){if(null==e.encoding||""===e.encoding){const n=function(e,t){const n=re(e,t&&t.header);let o=n.byteCount;const r={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,a=null!=i.vertexCount?i.vertexCount:i.count;for(const e of t.ordering){if(!t.vertexAttributes[e])continue;const n={...t.vertexAttributes[e],byteOffset:o,count:a},i=se[e]?se[e]:"_"+e;r.vertexAttributes[i]=n,o+=de(n.valueType)*n.valuesPerElement*a}const s=i.faceCount;if(t.faces&&s){r.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:o,count:s};r.faces[e]=n,o+=de(n.valueType)*n.valuesPerElement*s}}const c=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){r.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:o,count:c};r.featureAttributes[e]=n,o+=("UInt64"===n.valueType?8:de(n.valueType))*n.valuesPerElement*c}}return ae(o,e.byteLength,"geometry"),r.byteCount=o-r.byteOffset,r}(t,e);if(Object(o.j)(n.vertexAttributes.position))return;const r=ie(t,n.vertexAttributes.position),i=n.header.fields,a=[i.offsetX,i.offsetY,i.offsetZ],s=[i.scaleX,i.scaleY,i.scaleZ],c=r.length/3,l=new Float64Array(3*c);for(let e=0;e<c;e++)l[3*e]=r[3*e]*s[0]+a[0],l[3*e+1]=r[3*e+1]*s[1]+a[1],l[3*e+2]=r[3*e+2]*s[2]+a[2];return l}if("lepcc-xyz"===e.encoding)return P(t).result}function pe(e,t,n){return Object(o.k)(e)&&e.attributeInfo.useElevation?function(e,t){const n=new Float64Array(t);for(let o=0;o<t;o++)n[o]=e[3*o+2];return n}(t,n):Object(o.k)(e)?ce(e.attributeInfo.storageInfo,e.buffer,n):null}function ye(e){return null==e||"none"===e?null:"low-four-bit"===e?e=>15&e:"high-four-bit"===e?e=>(240&e)>>4:"absolute-value"===e?e=>Math.abs(e):"modulo-ten"===e?e=>e%10:null}function he(e){let t=0;for(const n of e||[])t|=1<<n;return t}class Oe{transform(e){const t=this._transform(e),n=[t.points.buffer,t.rgb.buffer];Object(o.k)(t.pointIdFilterMap)&&n.push(t.pointIdFilterMap.buffer);for(const e of t.attributes)"buffer"in e.values&&Object(r.c)(e.values.buffer)&&e.values.buffer!==t.rgb.buffer&&n.push(e.values.buffer);return Promise.resolve({result:t,transferList:n})}_transform(e){const t=be(e.schema,e.geometryBuffer);let n=t.length/3,r=null;const i=[],a=pe(e.primaryAttributeData,t,n);Object(o.k)(e.primaryAttributeData)&&a&&i.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:a});const s=pe(e.modulationAttributeData,t,n);Object(o.k)(e.modulationAttributeData)&&s&&i.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:s});let c=function(e,t,n,o){const{rendererJSON:r,isRGBRenderer:i}=e;let a=null,s=null;if(t&&i)a=t;else if(t&&"pointCloudUniqueValueRenderer"===r.type){s=b.a.fromJSON(r);const e=s.colorUniqueValueInfos;a=new Uint8Array(3*o);const n=ye(s.fieldTransformType);for(let r=0;r<o;r++){const o=(n?n(t[r]):t[r])+"";for(let t=0;t<e.length;t++)if(e[t].values.indexOf(o)>=0){a[3*r]=e[t].color.r,a[3*r+1]=e[t].color.g,a[3*r+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===r.type){s=d.a.fromJSON(r);const e=s.stops;a=new Uint8Array(3*o);const n=ye(s.fieldTransformType);for(let r=0;r<o;r++){const o=n?n(t[r]):t[r],i=e.length-1;if(o<e[0].value)a[3*r]=e[0].color.r,a[3*r+1]=e[0].color.g,a[3*r+2]=e[0].color.b;else if(o>=e[i].value)a[3*r]=e[i].color.r,a[3*r+1]=e[i].color.g,a[3*r+2]=e[i].color.b;else for(let t=1;t<e.length;t++)if(o<e[t].value){const n=(o-e[t-1].value)/(e[t].value-e[t-1].value);a[3*r]=e[t].color.r*n+e[t-1].color.r*(1-n),a[3*r+1]=e[t].color.g*n+e[t-1].color.g*(1-n),a[3*r+2]=e[t].color.b*n+e[t-1].color.b*(1-n);break}}}else if(t&&"pointCloudClassBreaksRenderer"===r.type){s=f.a.fromJSON(r);const e=s.colorClassBreakInfos;a=new Uint8Array(3*o);const n=ye(s.fieldTransformType);for(let r=0;r<o;r++){const o=n?n(t[r]):t[r];for(let t=0;t<e.length;t++)if(o>=e[t].minValue&&o<=e[t].maxValue){a[3*r]=e[t].color.r,a[3*r+1]=e[t].color.g,a[3*r+2]=e[t].color.b;break}}}else{a=new Uint8Array(3*o);for(let e=0;e<a.length;e++)a[e]=255}if(n&&s&&s.colorModulation){const e=s.colorModulation.minValue,t=s.colorModulation.maxValue,r=.3;for(let i=0;i<o;i++){const o=n[i],s=o>=t?1:o<=e?r:r+(1-r)*(o-e)/(t-e);a[3*i]=s*a[3*i],a[3*i+1]=s*a[3*i+1],a[3*i+2]=s*a[3*i+2]}}return a}(e.rendererInfo,a,s,n);if(e.filterInfo&&e.filterInfo.length>0&&Object(o.k)(e.filterAttributesData)){const o=e.filterAttributesData.map(e=>{const o=pe(e,t,n),r={attributeInfo:e.attributeInfo,values:o};return i.push(r),r});r=new Uint32Array(n),n=function(e,t,n,o,r){const i=e.length/3;let a=0;for(let s=0;s<i;s++){let i=!0;for(let e=0;e<o.length&&i;e++){const{filterJSON:t}=o[e],n=r[e].values[s];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;-1!==t.values.indexOf(n)===e&&(i=!1);break}case"pointCloudBitfieldFilter":{const e=he(t.requiredSetBits),o=he(t.requiredClearBits);(n&e)===e&&0==(n&o)||(i=!1);break}case"pointCloudReturnFilter":{const e=15&n,o=n>>>4&15,r=o>1,a=1===e,s=e===o;let c=!1;for(const e of t.includedReturns)if("last"===e&&s||"firstOfMany"===e&&a&&r||"lastOfMany"===e&&s&&r||"single"===e&&!r){c=!0;break}c||(i=!1);break}}}i&&(n[a]=s,e[3*a]=e[3*s],e[3*a+1]=e[3*s+1],e[3*a+2]=e[3*s+2],t[3*a]=t[3*s],t[3*a+1]=t[3*s+1],t[3*a+2]=t[3*s+2],a++)}return a}(t,c,r,e.filterInfo,o)}for(const o of e.userAttributesData){const e=pe(o,t,n);i.push({attributeInfo:o.attributeInfo,values:e})}3*n<c.length&&(c=new Uint8Array(c.buffer.slice(0,3*n))),this._applyElevationOffsetInPlace(t,n,e.elevationOffset);const l=this._transformCoordinates(t,n,e.obb,u.a.fromJSON(e.inSR),u.a.fromJSON(e.outSR));return{obb:e.obb,points:l,rgb:c,attributes:i,pointIdFilterMap:r}}_transformCoordinates(e,t,n,o,r){if(!Object(l.h)(e,o,0,e,r,0,t))throw Error("Can't reproject");const a=Object(c.b)(n.center[0],n.center[1],n.center[2]),u=Object(c.a)(),f=Object(c.a)();Object(i.a)(je,n.quaternion);const d=new Float32Array(3*t);for(let o=0;o<t;o++)u[0]=e[3*o]-a[0],u[1]=e[3*o+1]-a[1],u[2]=e[3*o+2]-a[2],Object(s.q)(f,u,je),n.halfSize[0]=Math.max(n.halfSize[0],Math.abs(f[0])),n.halfSize[1]=Math.max(n.halfSize[1],Math.abs(f[1])),n.halfSize[2]=Math.max(n.halfSize[2],Math.abs(f[2])),d[3*o]=u[0],d[3*o+1]=u[1],d[3*o+2]=u[2];return d}_applyElevationOffsetInPlace(e,t,n){if(0!==n)for(let o=0;o<t;o++)e[3*o+2]+=n}}const je=a();function we(){return new Oe}},492:function(e,t,n){"use strict";function o(){return new Float32Array(3)}function r(e,t,n){const o=new Float32Array(3);return o[0]=e,o[1]=t,o[2]=n,o}function i(){return o()}function a(){return r(1,1,1)}function s(){return r(1,0,0)}function c(){return r(0,1,0)}function l(){return r(0,0,1)}n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));const u=i(),f=a(),d=s(),b=c(),p=l();Object.freeze({__proto__:null,create:o,clone:function(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},fromValues:r,createView:function(e,t){return new Float32Array(e,t,3)},zeros:i,ones:a,unitX:s,unitY:c,unitZ:l,ZEROS:u,ONES:f,UNIT_X:d,UNIT_Y:b,UNIT_Z:p})},535:function(e,t,n){"use strict";function o(){return[1,0,0,0,1,0,0,0,1]}function r(e,t){return new Float64Array(e,t,9)}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));Object.freeze({__proto__:null,create:o,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},fromValues:function(e,t,n,o,r,i,a,s,c){return[e,t,n,o,r,i,a,s,c]},createView:r})},590:function(e,t,n){"use strict";function o(){return[0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3]]}function i(e,t){return new Float64Array(e,t,4)}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return i}));const a=[0,0,0,1];Object.freeze({__proto__:null,create:o,clone:r,fromValues:function(e,t,n,o){return[e,t,n,o]},createView:i,IDENTITY:a})},630:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var o,r=n(337),i=n(361),a=n(347),s=n(350),c=n(341),l=(n(340),n(338));n(342),n(336);let u=o=class extends a.a{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new o({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};Object(r.a)([Object(c.b)({type:String,json:{write:!0}})],u.prototype,"field",void 0),Object(r.a)([Object(c.b)({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"minValue",void 0),Object(r.a)([Object(c.b)({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"maxValue",void 0),u=o=Object(r.a)([Object(l.a)("esri.renderers.support.pointCloud.ColorModulation")],u);const f=u,d=new i.a({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let b=class extends a.a{};Object(r.a)([Object(c.b)({type:d.apiValues,readOnly:!0,nonNullable:!0,json:{type:d.jsonValues,read:!1,write:d.write}})],b.prototype,"type",void 0),b=Object(r.a)([Object(l.a)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],b);const p=b;var y,h=n(367);let O=y=class extends p{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new y({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};Object(r.a)([Object(h.a)({pointCloudFixedSizeAlgorithm:"fixed-size"})],O.prototype,"type",void 0),Object(r.a)([Object(c.b)({type:Number,nonNullable:!0,json:{write:!0}})],O.prototype,"size",void 0),Object(r.a)([Object(c.b)({type:Boolean,json:{write:!0}})],O.prototype,"useRealWorldSymbolSizes",void 0),O=y=Object(r.a)([Object(l.a)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],O);const j=O;var w;let g=w=class extends p{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new w({scaleFactor:this.scaleFactor})}};Object(r.a)([Object(h.a)({pointCloudSplatAlgorithm:"splat"})],g.prototype,"type",void 0),Object(r.a)([Object(c.b)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],g.prototype,"scaleFactor",void 0),g=w=Object(r.a)([Object(l.a)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],g);const m={key:"type",base:p,typeMap:{"fixed-size":j,splat:g}},v=Object(i.b)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let C=class extends a.a{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:Object(s.a)(this.pointSizeAlgorithm),colorModulation:Object(s.a)(this.colorModulation),pointsPerInch:Object(s.a)(this.pointsPerInch)}}};Object(r.a)([Object(c.b)({type:v.apiValues,readOnly:!0,nonNullable:!0,json:{type:v.jsonValues,read:!1,write:v.write}})],C.prototype,"type",void 0),Object(r.a)([Object(c.b)({types:m,json:{write:!0}})],C.prototype,"pointSizeAlgorithm",void 0),Object(r.a)([Object(c.b)({type:f,json:{write:!0}})],C.prototype,"colorModulation",void 0),Object(r.a)([Object(c.b)({json:{write:!0},nonNullable:!0,type:Number})],C.prototype,"pointsPerInch",void 0),C=Object(r.a)([Object(l.a)("esri.renderers.PointCloudRenderer")],C),(C||(C={})).fieldTransformTypeKebabDict=new i.a({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const M=C},651:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return I})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return l}));var o=n(535),r=n(590),i=n(390),a=n(570),s=n(410),c=n(617);function l(e,t,n){n*=.5;const o=Math.sin(n);return e[0]=o*t[0],e[1]=o*t[1],e[2]=o*t[2],e[3]=Math.cos(n),e}function u(e,t){const n=2*Math.acos(t[3]),o=Math.sin(n/2);return o>a.a?(e[0]=t[0]/o,e[1]=t[1]/o,e[2]=t[2]/o):(e[0]=1,e[1]=0,e[2]=0),n}function f(e,t,n){const o=t[0],r=t[1],i=t[2],a=t[3],s=n[0],c=n[1],l=n[2],u=n[3];return e[0]=o*u+a*s+r*l-i*c,e[1]=r*u+a*c+i*s-o*l,e[2]=i*u+a*l+o*c-r*s,e[3]=a*u-o*s-r*c-i*l,e}function d(e,t,n,o){const r=t[0],i=t[1],s=t[2],c=t[3];let l,u,f,d,b,p=n[0],y=n[1],h=n[2],O=n[3];return u=r*p+i*y+s*h+c*O,u<0&&(u=-u,p=-p,y=-y,h=-h,O=-O),1-u>a.a?(l=Math.acos(u),f=Math.sin(l),d=Math.sin((1-o)*l)/f,b=Math.sin(o*l)/f):(d=1-o,b=o),e[0]=d*r+b*p,e[1]=d*i+b*y,e[2]=d*s+b*h,e[3]=d*c+b*O,e}function b(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function p(e,t){const n=t[0]+t[4]+t[8];let o;if(n>0)o=Math.sqrt(n+1),e[3]=.5*o,o=.5/o,e[0]=(t[5]-t[7])*o,e[1]=(t[6]-t[2])*o,e[2]=(t[1]-t[3])*o;else{let n=0;t[4]>t[0]&&(n=1),t[8]>t[3*n+n]&&(n=2);const r=(n+1)%3,i=(n+2)%3;o=Math.sqrt(t[3*n+n]-t[3*r+r]-t[3*i+i]+1),e[n]=.5*o,o=.5/o,e[3]=(t[3*r+i]-t[3*i+r])*o,e[r]=(t[3*r+n]+t[3*n+r])*o,e[i]=(t[3*i+n]+t[3*n+i])*o}return e}function y(e,t,n,o){const r=.5*Math.PI/180;t*=r,n*=r,o*=r;const i=Math.sin(t),a=Math.cos(t),s=Math.sin(n),c=Math.cos(n),l=Math.sin(o),u=Math.cos(o);return e[0]=i*c*u-a*s*l,e[1]=a*s*u+i*c*l,e[2]=a*c*l-i*s*u,e[3]=a*c*u+i*s*l,e}const h=c.c,O=c.k,j=c.a,w=f,g=c.b,m=c.d,v=c.i,C=c.e,M=C,T=c.f,U=T,A=c.j,I=c.g,S=c.h;const V=Object(i.e)(),z=Object(i.g)(1,0,0),x=Object(i.g)(0,1,0);const F=Object(r.b)(),B=Object(r.b)();const k=Object(o.b)();Object.freeze({__proto__:null,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},setAxisAngle:l,getAxisAngle:u,multiply:f,rotateX:function(e,t,n){n*=.5;const o=t[0],r=t[1],i=t[2],a=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=o*c+a*s,e[1]=r*c+i*s,e[2]=i*c-r*s,e[3]=a*c-o*s,e},rotateY:function(e,t,n){n*=.5;const o=t[0],r=t[1],i=t[2],a=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=o*c-i*s,e[1]=r*c+a*s,e[2]=i*c+o*s,e[3]=a*c-r*s,e},rotateZ:function(e,t,n){n*=.5;const o=t[0],r=t[1],i=t[2],a=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=o*c+r*s,e[1]=r*c-o*s,e[2]=i*c+a*s,e[3]=a*c-i*s,e},calculateW:function(e,t){const n=t[0],o=t[1],r=t[2];return e[0]=n,e[1]=o,e[2]=r,e[3]=Math.sqrt(Math.abs(1-n*n-o*o-r*r)),e},slerp:d,random:function(e){const t=Object(a.b)(),n=Object(a.b)(),o=Object(a.b)(),r=Math.sqrt(1-t),i=Math.sqrt(t);return e[0]=r*Math.sin(2*Math.PI*n),e[1]=r*Math.cos(2*Math.PI*n),e[2]=i*Math.sin(2*Math.PI*o),e[3]=i*Math.cos(2*Math.PI*o),e},invert:function(e,t){const n=t[0],o=t[1],r=t[2],i=t[3],a=n*n+o*o+r*r+i*i,s=a?1/a:0;return e[0]=-n*s,e[1]=-o*s,e[2]=-r*s,e[3]=i*s,e},conjugate:b,fromMat3:p,fromEuler:y,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},copy:h,set:O,add:j,mul:w,scale:g,dot:m,lerp:v,length:C,len:M,squaredLength:T,sqrLen:U,normalize:A,exactEquals:I,equals:S,rotationTo:function(e,t,n){const o=Object(s.e)(t,n);return o<-.999999?(Object(s.d)(V,z,t),Object(s.u)(V)<1e-6&&Object(s.d)(V,x,t),Object(s.o)(V,V),l(e,V,Math.PI),e):o>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(Object(s.d)(V,t,n),e[0]=V[0],e[1]=V[1],e[2]=V[2],e[3]=1+o,A(e,e))},sqlerp:function(e,t,n,o,r,i){return d(F,t,r,i),d(B,n,o,i),d(e,F,B,2*i*(1-i)),e},setAxes:function(e,t,n,o){const r=k;return r[0]=n[0],r[3]=n[1],r[6]=n[2],r[1]=o[0],r[4]=o[1],r[7]=o[2],r[2]=-t[0],r[5]=-t[1],r[8]=-t[2],A(e,p(e,r))}})},964:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var o,r=n(337),i=n(350),a=n(341),s=(n(340),n(367)),c=n(338),l=n(630),u=n(621),f=n(924);let d=o=class extends l.a{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new o({...this.cloneProperties(),field:Object(i.a)(this.field),fieldTransformType:Object(i.a)(this.fieldTransformType),stops:Object(i.a)(this.stops),legendOptions:Object(i.a)(this.legendOptions)})}};Object(r.a)([Object(s.a)({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),Object(r.a)([Object(a.b)({json:{write:!0},type:String})],d.prototype,"field",void 0),Object(r.a)([Object(a.b)({type:u.a,json:{write:!0}})],d.prototype,"legendOptions",void 0),Object(r.a)([Object(a.b)({type:l.a.fieldTransformTypeKebabDict.apiValues,json:{type:l.a.fieldTransformTypeKebabDict.jsonValues,read:l.a.fieldTransformTypeKebabDict.read,write:l.a.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),Object(r.a)([Object(a.b)({type:[f.a],json:{write:!0}})],d.prototype,"stops",void 0),d=o=Object(r.a)([Object(c.a)("esri.renderers.PointCloudStretchRenderer")],d);const b=d}}]);