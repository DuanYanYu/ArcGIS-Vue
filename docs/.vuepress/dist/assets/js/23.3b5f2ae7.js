(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1192:function(e,t,r){"use strict";r.r(t);var a=r(377);r.d(t,"BufferObject",(function(){return a.a}));var i=r(379);r.d(t,"FramebufferObject",(function(){return i.a}));var n=r(512);r.d(t,"Program",(function(){return n.a}));var o=r(749);r.d(t,"ProgramCache",(function(){return o.a}));var s=r(820);r.d(t,"Renderbuffer",(function(){return s.a}));var c=r(750);r.d(t,"ShaderCompiler",(function(){return c.a}));var p=r(369);r.d(t,"Texture",(function(){return p.a}));var h=r(376);r.d(t,"VertexArrayObject",(function(){return h.a}));var l=r(541);r.d(t,"createProgram",(function(){return l.a})),r.d(t,"glslifyDefineMap",(function(){return l.b}));var u=r(817);r.d(t,"createContextOrErrorHTML",(function(){return u.b}))},369:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r(378),i=r(339),n=r(381),o=r(375),s=r(556);class c{constructor(e,t,r=null){this._context=e,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,e.instanceCounter.increment(o.c.Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...t},34067===this._descriptor.target?this.setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(o.c.Texture,this))}release(){this.dispose()}resize(e,t){const r=this._descriptor;r.width===e&&r.height===t||(r.width=e,r.height=t,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(e=null){for(let t=34069;t<=34074;t++)this.setData(e,t)}setData(e,t=3553){if(!this._context||!this._context.gl)return;const r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===e&&(e=null),null===e&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);const a=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES),o=this._descriptor;c._validateTexture(this._context,o),r.pixelStorei(r.UNPACK_ALIGNMENT,o.unpackAlignment),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,o.flipped?1:0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.preMultiplyAlpha?1:0);const s=o.pixelFormat;let p=o.internalFormat?o.internalFormat:this._deriveInternalFormat(s,o.dataType);if(e instanceof ImageData||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement){let a=e.width,i=e.height;e instanceof HTMLVideoElement&&(a=e.videoWidth,i=e.videoHeight),o.width&&o.height,r.texImage2D(t,0,p,s,o.dataType,e),Object(n.a)(r),o.hasMipmap&&this.generateMipmap(),void 0===o.width&&(o.width=a),void 0===o.height&&(o.height=i)}else{null!=o.width&&null!=o.height||console.error("Width and height must be specified!"),r.DEPTH24_STENCIL8&&p===r.DEPTH_STENCIL&&(p=r.DEPTH24_STENCIL8);let a=o.width,c=o.height;if(function(e){return Object(i.k)(e)&&"type"in e&&"compressed"===e.type}(e)){const i=Math.round(Math.log(Math.max(a,c))/Math.LN2)+1;o.hasMipmap=o.hasMipmap&&i===e.levels.length;for(let i=0;;++i){const n=e.levels[Math.min(i,e.levels.length-1)];if(r.compressedTexImage2D(t,i,p,a,c,0,n),1===a&&1===c||!o.hasMipmap)break;a=Math.max(1,a>>1),c=Math.max(1,c>>1)}}else if(Object(i.k)(e))r.texImage2D(t,0,p,a,c,0,s,o.dataType,e),Object(n.a)(r),o.hasMipmap&&this.generateMipmap();else for(let e=0;r.texImage2D(t,e,p,a,c,0,s,o.dataType,null),Object(n.a)(r),(1!==a||1!==c)&&o.hasMipmap;++e)a=Math.max(1,a>>1),c=Math.max(1,c>>1)}c._applySamplingMode(r,this._descriptor),c._applyWrapMode(r,this._descriptor),c._applyAnisotropicFilteringParameters(this._context,this._descriptor),Object(n.a)(r),this._context.bindTexture(a,c.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,r,a,i,n,o=3553){n||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const s=this._context.gl,p=this._descriptor,h=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);(t<0||r<0||a>p.width||i>p.height||t+a>p.width||r+i>p.height)&&console.error("An attempt to update out of bounds of the texture!"),s.pixelStorei(s.UNPACK_ALIGNMENT,p.unpackAlignment),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,p.flipped?1:0),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.preMultiplyAlpha?1:0),n instanceof ImageData||n instanceof HTMLImageElement||n instanceof HTMLCanvasElement||n instanceof HTMLVideoElement?s.texSubImage2D(o,e,t,r,p.pixelFormat,p.dataType,n):s.texSubImage2D(o,e,t,r,a,i,p.pixelFormat,p.dataType,n),this._context.bindTexture(h,c.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;e.hasMipmap||(e.hasMipmap=!0,this._samplingModeDirty=!0,c._validateTexture(this._context,e)),9729===e.samplingMode?(this._samplingModeDirty=!0,e.samplingMode=9985):9728===e.samplingMode&&(this._samplingModeDirty=!0,e.samplingMode=9984);const t=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(e.target),this._context.bindTexture(t,c.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,c._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(c._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(c._applyWrapMode(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(e,t){if("webgl"===this._context.webglVersion)return e;if(5126===t)switch(e){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return e}static _validateTexture(e,t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!");const r=Object(a.g)(t.width)&&Object(a.g)(t.height);Object(s.a)(e.gl)||r||("number"==typeof t.wrapMode?33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===t.wrapMode.s&&33071===t.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let r=t.samplingMode,a=t.samplingMode;9985===r||9987===r?(r=9729,t.hasMipmap||(a=9729)):9984!==r&&9986!==r||(r=9728,t.hasMipmap||(a=9728)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,a)}static _applyWrapMode(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){var r;const a=e.capabilities.textureFilterAnisotropic;a&&e.gl.texParameterf(t.target,a.TEXTURE_MAX_ANISOTROPY,null!=(r=t.maxAnisotropy)?r:1)}}c.TEXTURE_UNIT_FOR_UPDATES=0},375:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i}));const a=33984;var i;!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.VertexShader=3]="VertexShader",e[e.FragmentShader=4]="FragmentShader",e[e.Program=5]="Program",e[e.Framebuffer=6]="Framebuffer",e[e.Renderbuffer=7]="Renderbuffer",e[e.COUNT=8]="COUNT"}(i||(i={}));const n=33306},381:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return c}));var a=r(344),i=r(336);const n=r(343).a.getLogger("esri/views/webgl");const o=!!Object(i.a)("enable-feature:webgl-debug");function s(){return o}function c(){return o}function p(e){if(s()){const t=e.getError();if(t){const r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),i=(new Error).stack;n.error(new a.a("webgl-error","WebGL error occured",{message:r,stack:i}))}}}},541:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var a=r(512);function i(e){let t="";for(const r in e){const a=e[r];if("boolean"==typeof a)a&&(t+=`#define ${r}\n`);else if("number"==typeof a)t+=`#define ${r} ${a.toFixed()}\n`;else if("object"==typeof a){const e=a.options;let i=0;for(const r in e)t+=`#define ${e[r]} ${(i++).toFixed()}\n`;t+=`#define ${r} ${e[a.value]}\n`}}return t}function n(e,t,r,i){r=r||{},i=i||"";const n="function"==typeof t.shaders?t.shaders(r):t.shaders;return new a.a(e,i+n.vertexShader,i+n.fragmentShader,t.attributes)}},556:function(e,t,r){"use strict";function a(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}r.d(t,"a",(function(){return a}))},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(541);class i{constructor(e){this._programCacheByTemplate=new Map,this._rctx=e}dispose(){this._programCacheByTemplate.forEach(e=>e.programs.forEach(e=>e.dispose())),this._programCacheByTemplate=null}getProgram(e,t){return this._programCacheByTemplate.has(e)||this.addProgramTemplate(e,t=>Object(a.a)(this._rctx,e,t)),this.getProgramTemplateInstance(e,t)}addProgramTemplate(e,t){this._programCacheByTemplate.set(e,{constructor:t,programs:new Map})}getProgramTemplateInstance(e,t){const r=this._programCacheByTemplate.get(e);if(r){const e=t?JSON.stringify(t):"default";if(!r.programs.has(e)){const a=r.constructor(t);r.programs.set(e,a)}return r.programs.get(e)}return null}}},750:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));class a{constructor(e){this.readFile=e}resolveIncludes(e){return this.resolve(e)}resolve(e,t=new Map){if(t.has(e))return t.get(e);const r=this.read(e);if(!r)throw new Error("cannot find shader file "+e);const a=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let i=a.exec(r);const n=[];for(;null!=i;)n.push({path:i[1],start:i.index,length:i[0].length}),i=a.exec(r);let o=0,s="";return n.forEach(e=>{s+=r.slice(o,e.start),s+=t.has(e.path)?"":this.resolve(e.path,t),o=e.start+e.length}),s+=r.slice(o),t.set(e,s),s}read(e){return this.readFile(e)}}}}]);