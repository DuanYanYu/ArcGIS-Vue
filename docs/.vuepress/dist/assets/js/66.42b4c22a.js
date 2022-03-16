(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1295:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return d}));var s=r(337),i=(r(343),r(340),r(342),r(336),r(394),r(338)),o=r(353),a=r(747),n=r(432),c=r(774),l=r(398);const u=Object(a.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});var p=r(695);let b=class extends p.a{constructor(e){super(e)}solve(e,t){return async function(e,t,r){const s=[],i=[],a={},p={},b=Object(l.c)(e),{path:d}=b;t.stops&&t.stops.features&&Object(c.a)(t.stops.features,i,"stops.features",a),t.pointBarriers&&t.pointBarriers.features&&Object(c.a)(t.pointBarriers.features,i,"pointBarriers.features",a),t.polylineBarriers&&t.polylineBarriers.features&&Object(c.a)(t.polylineBarriers.features,i,"polylineBarriers.features",a),t.polygonBarriers&&t.polygonBarriers.features&&Object(c.a)(t.polygonBarriers.features,i,"polygonBarriers.features",a);const y=await Object(n.a)(i);for(const e in a){const t=a[e];s.push(e),p[e]=y.slice(t[0],t[1])}if(Object(c.e)(p,s)){let e=null;try{e=await Object(c.c)(d,t.apiKey,r)}catch{}e&&!e.hasZ&&Object(c.b)(p,s)}for(const e in p)p[e].forEach((r,s)=>{t.get(e)[s].geometry=r});const O={...r,query:{...b.query,...u.toQueryParams(t),f:"json"}},m=d.endsWith("/solve")?d:d+"/solve",j=await Object(o.default)(m,O);return Object(c.d)(j)}(this.url,e,t)}};b=Object(s.a)([Object(i.a)("esri.tasks.RouteTask")],b);const d=b},648:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var s=r(337),i=r(361),o=r(347),a=r(341),n=(r(342),r(336),r(340),r(338));const c=new i.a({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let l=class extends o.a{constructor(e){super(e),this.description=null,this.type=null}};Object(s.a)([Object(a.b)({type:String,json:{write:!0}})],l.prototype,"description",void 0),Object(s.a)([Object(a.b)({type:String,json:{read:c.read,write:c.write}})],l.prototype,"type",void 0),l=Object(s.a)([Object(n.a)("esri.rest.support.GPMessage")],l);const u=l},672:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var s=r(337),i=r(361),o=r(341),a=(r(342),r(336),r(340),r(338)),n=r(648);const c=new i.a({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let l=class extends n.a{constructor(e){super(e),this.type=null}};Object(s.a)([Object(o.b)({type:String,json:{read:c.read,write:c.write}})],l.prototype,"type",void 0),l=Object(s.a)([Object(a.a)("esri.rest.support.NAMessage")],l);const u=l},722:function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));var s=r(337),i=(r(356),r(339)),o=r(341),a=(r(342),r(336),r(340),r(363)),n=r(338),c=r(397);let l=class extends c.a{};Object(s.a)([Object(o.b)()],l.prototype,"events",void 0),Object(s.a)([Object(o.b)()],l.prototype,"strings",void 0),l=Object(s.a)([Object(n.a)("esri.rest.support.DirectionsFeature")],l);const u=l;var p=r(425),b=r(355),d=r(360),y=r(440),O=r(368);let m=class extends p.default{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){var r;if(!e)return[];const s=null!=(r=t.summary.envelope.spatialReference)?r:t.spatialReference,i=s&&d.a.fromJSON(s);return e.map(e=>{var t,r;const s=this._decompressGeometry(e.compressedGeometry),o=new y.a({...s,spatialReference:i}),a=null!=(t=null==(r=e.events)?void 0:r.map(e=>{const{arriveTimeUTC:t,ETA:r,point:{x:s,y:o,z:a},strings:n}=e;return new u({geometry:new O.a({x:s,y:o,z:a,hasZ:void 0!==a,spatialReference:i}),attributes:{ETA:r,arriveTimeUTC:t},strings:n})}))?t:[];return new u({attributes:e.attributes,events:a,geometry:o,strings:e.strings})})}get mergedGeometry(){if(!this.features)return null;const e=this.features.map(({geometry:e})=>Object(i.r)(e)),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map(({strings:e})=>e)}_decompressGeometry(e){let t=0,r=0,s=0,i=0;const o=[];let a,n,c,l,u,p,b,d,y=0,O=0,m=0;if(u=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),u||(u=[]),0===parseInt(u[y],32)){y=2;const e=parseInt(u[y],32);y++,p=parseInt(u[y],32),y++,1&e&&(O=u.indexOf("|")+1,b=parseInt(u[O],32),O++),2&e&&(m=u.indexOf("|",O)+1,d=parseInt(u[m],32),m++)}else p=parseInt(u[y],32),y++;for(;y<u.length&&"|"!==u[y];){a=parseInt(u[y],32)+t,y++,t=a,n=parseInt(u[y],32)+r,y++,r=n;const e=[a/p,n/p];O&&(l=parseInt(u[O],32)+s,O++,s=l,e.push(l/b)),m&&(c=parseInt(u[m],32)+i,m++,i=c,e.push(c/d)),o.push(e)}return{paths:[o],hasZ:O>0,hasM:m>0}}_mergePolylinesToSinglePath(e,t){if(0===e.length)return new y.a({spatialReference:t});const r=[];for(const t of e)for(const e of t.paths)r.push(...e);const s=[];r.forEach((e,t)=>{0!==t&&e[0]===r[t-1][0]&&e[1]===r[t-1][1]||s.push(e)});const{hasM:i,hasZ:o}=e[0];return new y.a({hasM:i,hasZ:o,paths:[s],spatialReference:t})}};Object(s.a)([Object(o.b)({type:b.a,json:{read:{source:"summary.envelope"}}})],m.prototype,"extent",void 0),Object(s.a)([Object(o.b)()],m.prototype,"features",void 0),Object(s.a)([Object(a.a)("features")],m.prototype,"readFeatures",null),Object(s.a)([Object(o.b)()],m.prototype,"geometryType",void 0),Object(s.a)([Object(o.b)({readOnly:!0})],m.prototype,"mergedGeometry",null),Object(s.a)([Object(o.b)()],m.prototype,"routeId",void 0),Object(s.a)([Object(o.b)()],m.prototype,"routeName",void 0),Object(s.a)([Object(o.b)({value:null,readOnly:!0})],m.prototype,"strings",null),Object(s.a)([Object(o.b)({json:{read:{source:"summary.totalDriveTime"}}})],m.prototype,"totalDriveTime",void 0),Object(s.a)([Object(o.b)({json:{read:{source:"summary.totalLength"}}})],m.prototype,"totalLength",void 0),Object(s.a)([Object(o.b)({json:{read:{source:"summary.totalTime"}}})],m.prototype,"totalTime",void 0),m=Object(s.a)([Object(n.a)("esri.rest.support.DirectionsFeatureSet")],m);const j=m},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));class s{constructor(e={}){this._options=e}toQueryParams(e){if(!e)return null;const t=e.toJSON(),r={};return Object.keys(t).forEach(e=>{const s=this._options[e];if(s){const i="boolean"!=typeof s&&s.name?s.name:e,o="boolean"!=typeof s&&s.getter?s.getter(t):t[e];null!=o&&(r[i]=(e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t})(o)?o.join(","):"object"==typeof o?JSON.stringify(o):o)}else r[e]=t[e]},this),r}}function i(e){return new s(e)}},774:function(e,t,r){"use strict";r.d(t,"a",(function(){return I})),r.d(t,"b",(function(){return J})),r.d(t,"c",(function(){return L})),r.d(t,"d",(function(){return x})),r.d(t,"e",(function(){return E}));var s=r(353),i=r(344),o=r(339),a=r(474),n=r(358),c=r(398),l=r(337),u=r(347),p=r(341),b=(r(342),r(336),r(340),r(338)),d=r(350),y=r(367),O=r(361);const m=Object(O.b)()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriYards:"yards"}),j=(Object(O.b)()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),Object(O.b)()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),Object(O.b)()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),Object(O.b)()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),Object(O.b)()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"})),f=(Object(O.b)()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),Object(O.b)()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"}),Object(O.b)()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"}));var h;let v=h=class extends u.a{constructor(e){super(e),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}clone(){return new h(Object(d.a)({attributeParameterValues:this.attributeParameterValues,description:this.description,distanceAttributeName:this.distanceAttributeName,id:this.id,impedanceAttributeName:this.impedanceAttributeName,name:this.name,restrictionAttributeNames:this.restrictionAttributeNames,simplificationTolerance:this.simplificationTolerance,simplificationToleranceUnits:this.simplificationToleranceUnits,timeAttributeName:this.timeAttributeName,type:this.type,useHierarchy:this.useHierarchy,uturnAtJunctions:this.uturnAtJunctions}))}};Object(l.a)([Object(p.b)({type:[Object],json:{write:!0}})],v.prototype,"attributeParameterValues",void 0),Object(l.a)([Object(p.b)({type:String,json:{write:!0}})],v.prototype,"description",void 0),Object(l.a)([Object(p.b)({type:String,json:{write:!0}})],v.prototype,"distanceAttributeName",void 0),Object(l.a)([Object(p.b)({type:String,json:{write:!0}})],v.prototype,"id",void 0),Object(l.a)([Object(p.b)({type:String,json:{write:!0}})],v.prototype,"impedanceAttributeName",void 0),Object(l.a)([Object(p.b)({type:String,json:{write:!0}})],v.prototype,"name",void 0),Object(l.a)([Object(p.b)({type:[String],json:{write:!0}})],v.prototype,"restrictionAttributeNames",void 0),Object(l.a)([Object(p.b)({type:Number,json:{write:!0}})],v.prototype,"simplificationTolerance",void 0),Object(l.a)([Object(y.a)(m)],v.prototype,"simplificationToleranceUnits",void 0),Object(l.a)([Object(p.b)({type:String,json:{write:!0}})],v.prototype,"timeAttributeName",void 0),Object(l.a)([Object(y.a)(f)],v.prototype,"type",void 0),Object(l.a)([Object(p.b)({type:Boolean,json:{write:!0}})],v.prototype,"useHierarchy",void 0),Object(l.a)([Object(y.a)(j)],v.prototype,"uturnAtJunctions",void 0),v=h=Object(l.a)([Object(b.a)("esri.rest.support.TravelMode")],v);const g=v;let T=class extends u.a{constructor(e){super(e),this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null}};Object(l.a)([Object(p.b)()],T.prototype,"currentVersion",void 0),Object(l.a)([Object(p.b)()],T.prototype,"defaultTravelMode",void 0),Object(l.a)([Object(p.b)()],T.prototype,"directionsLanguage",void 0),Object(l.a)([Object(p.b)()],T.prototype,"directionsSupportedLanguages",void 0),Object(l.a)([Object(p.b)()],T.prototype,"directionsTimeAttribute",void 0),Object(l.a)([Object(p.b)()],T.prototype,"hasZ",void 0),Object(l.a)([Object(p.b)()],T.prototype,"impedance",void 0),Object(l.a)([Object(p.b)()],T.prototype,"networkDataset",void 0),Object(l.a)([Object(p.b)({type:[g]})],T.prototype,"supportedTravelModes",void 0),T=Object(l.a)([Object(b.a)("esri.rest.support.NetworkServiceDescription")],T);const N=T;var A=r(397),w=r(363),M=r(425),B=r(672),S=r(722);let k=class extends u.a{constructor(e){super(e),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};Object(l.a)([Object(p.b)({type:S.a,json:{write:!0}})],k.prototype,"directions",void 0),Object(l.a)([Object(p.b)({type:A.a,json:{write:!0}})],k.prototype,"route",void 0),Object(l.a)([Object(p.b)({type:String,json:{write:!0}})],k.prototype,"routeName",void 0),Object(l.a)([Object(p.b)({type:[A.a],json:{write:!0}})],k.prototype,"stops",void 0),k=Object(l.a)([Object(b.a)("esri.rest.support.RouteResult")],k);const R=k;function U(e){return e&&M.default.fromJSON(e).features.map(e=>e)}let D=class extends u.a{constructor(e){super(e),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(e,t){return U(t.barriers||t.pointBarriers)}readPolylineBarriers(e){return U(e)}readPolygonBarriers(e){return U(e)}};Object(l.a)([Object(p.b)({aliasOf:"pointBarriers"})],D.prototype,"barriers",void 0),Object(l.a)([Object(p.b)({type:[B.a]})],D.prototype,"messages",void 0),Object(l.a)([Object(p.b)({type:[A.a]})],D.prototype,"pointBarriers",void 0),Object(l.a)([Object(w.a)("pointBarriers",["barriers","pointBarriers"])],D.prototype,"readPointBarriers",null),Object(l.a)([Object(p.b)({type:[A.a]})],D.prototype,"polylineBarriers",void 0),Object(l.a)([Object(w.a)("polylineBarriers")],D.prototype,"readPolylineBarriers",null),Object(l.a)([Object(p.b)({type:[A.a]})],D.prototype,"polygonBarriers",void 0),Object(l.a)([Object(w.a)("polygonBarriers")],D.prototype,"readPolygonBarriers",null),Object(l.a)([Object(p.b)({type:[R]})],D.prototype,"routeResults",void 0),D=Object(l.a)([Object(b.a)("esri.rest.support.RouteResultsContainer")],D);const P=D;function I(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach(e=>{t.push(e.geometry)})}function J(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function x(e){const t=[],r=[],{directions:s=[],routes:{features:i=[],spatialReference:a=null}={},stops:{features:n=[],spatialReference:c=null}={},barriers:l,polygonBarriers:u,polylineBarriers:p,messages:b}=e.data,d="esri.tasks.RouteTask.NULL_ROUTE_NAME";let y,O,m=!0;const j=i&&a||n&&c||l&&l.spatialReference||u&&u.spatialReference||p&&p.spatialReference;s.forEach(e=>{t.push(y=e.routeName),r[y]={directions:e}}),i.forEach(e=>{-1===t.indexOf(y=e.attributes.Name)&&(t.push(y),r[y]={}),Object(o.k)(e.geometry)&&(e.geometry.spatialReference=j),r[y].route=e}),n.forEach(e=>{O=e.attributes,-1===t.indexOf(y=O.RouteName||d)&&(t.push(y),r[y]={}),y!==d&&(m=!1),Object(o.k)(e.geometry)&&(e.geometry.spatialReference=j),null==r[y].stops&&(r[y].stops=[]),r[y].stops.push(e)}),n.length>0&&!0===m&&(r[t[0]].stops=r[d].stops,delete r[d],t.splice(t.indexOf(d),1));const f=t.map(e=>(r[e].routeName=e===d?null:e,r[e]));return P.fromJSON({routeResults:f,pointBarriers:l,polygonBarriers:u,polylineBarriers:p,messages:b})}function E(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(Object(o.k)(e)&&e.hasZ)return!0}return!1}async function L(e,t,r){if(!e)throw new i.a("network-service:missing-url","Url to Network service is missing");const o=Object(c.a)({f:"json",token:t},r),{data:l}=await Object(s.default)(e,o);l.supportedTravelModes||(l.supportedTravelModes=[]);for(let e=0;e<l.supportedTravelModes.length;e++)l.supportedTravelModes[e].id||(l.supportedTravelModes[e].id=l.supportedTravelModes[e].itemId);const u=l.currentVersion>=10.4?async function(e,t,r){try{const i=Object(c.a)({f:"json",token:t},r),o=Object(n.I)(e)+"/retrieveTravelModes",{data:{supportedTravelModes:a,defaultTravelMode:l}}=await Object(s.default)(o,i);return{supportedTravelModes:a,defaultTravelMode:l}}catch(e){throw new i.a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(e,t,r):async function(e,t){var r,i;const o=Object(c.a)({f:"json"},t),{data:l}=await Object(s.default)(e.replace(/\/rest\/.*$/i,"/info"),o);if(!l||!l.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:u}=l,p=Object(n.I)(u)+"/sharing/rest/portals/self",{data:b}=await Object(s.default)(p,o),d=Object(a.b)("helperServices.routingUtilities.url",b);if(!d)return{supportedTravelModes:[],defaultTravelMode:null};const y=Object(c.c)(u),O=/\/solve$/i.test(y.path)?"Route":/\/solveclosestfacility$/i.test(y.path)?"ClosestFacility":"ServiceAreas",m=Object(c.a)({f:"json",serviceName:O},t),j=Object(n.I)(d)+"/GetTravelModes/execute",f=await Object(s.default)(j,m),h=[];let v=null;if(null!=f&&null!=(r=f.data)&&null!=(i=r.results)&&i.length){const e=f.data.results;for(const t of e){var g;if("supportedTravelModes"===t.paramName){if(null!=(g=t.value)&&g.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);h.push(t)}}else"defaultTravelMode"===t.paramName&&(v=t.value)}}return{supportedTravelModes:h,defaultTravelMode:v}}(e,r),{defaultTravelMode:p,supportedTravelModes:b}=await u;return l.defaultTravelMode=p,l.supportedTravelModes=b,N.fromJSON(l)}}}]);