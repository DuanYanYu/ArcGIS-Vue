(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1291:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return S}));var s=r(337),i=r(341),o=(r(342),r(336),r(340),r(338)),a=r(353),n=r(747),c=r(432),l=r(774),u=r(398),p=(r(356),r(397)),b=r(347),d=r(339),y=r(363),O=r(360),j=r(672),m=r(368),f=r(440),h=r(386),v=r(351);function g(e){return e.features.map(t=>{const r=O.a.fromJSON(e.spatialReference),s=p.a.fromJSON(t);return Object(d.r)(s.geometry).spatialReference=r,s})}function T(e){return Object(d.g)(e.features.map(t=>(Object(d.k)(t.geometry)&&(t.geometry.spatialReference=e.spatialReference),Object(v.a)(t.geometry))))}let N=class extends b.a{constructor(e){super(e),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(e){return T(e)}readPointBarriers(e,t){return T(t.barriers)}readPolylineBarriers(e){return T(e)}readPolygonBarriers(e){return T(e)}readIncidents(e,t){return g(t.saPolylines)}readServiceAreaPolygons(e,t){return g(t.saPolygons)}};Object(s.a)([Object(i.b)({type:[m.a]})],N.prototype,"facilities",void 0),Object(s.a)([Object(y.a)("facilities")],N.prototype,"readFacilities",null),Object(s.a)([Object(i.b)({type:[j.a]})],N.prototype,"messages",void 0),Object(s.a)([Object(i.b)({type:[m.a]})],N.prototype,"pointBarriers",void 0),Object(s.a)([Object(y.a)("pointBarriers",["barriers"])],N.prototype,"readPointBarriers",null),Object(s.a)([Object(i.b)({type:[f.a]})],N.prototype,"polylineBarriers",void 0),Object(s.a)([Object(y.a)("polylineBarriers")],N.prototype,"readPolylineBarriers",null),Object(s.a)([Object(i.b)({type:[h.a]})],N.prototype,"polygonBarriers",void 0),Object(s.a)([Object(y.a)("polygonBarriers")],N.prototype,"readPolygonBarriers",null),Object(s.a)([Object(i.b)({type:[p.a]})],N.prototype,"serviceAreaPolylines",void 0),Object(s.a)([Object(y.a)("serviceAreaPolylines",["saPolylines"])],N.prototype,"readIncidents",null),Object(s.a)([Object(i.b)({type:[p.a]})],N.prototype,"serviceAreaPolygons",void 0),Object(s.a)([Object(y.a)("serviceAreaPolygons",["saPolygons"])],N.prototype,"readServiceAreaPolygons",null),N=Object(s.a)([Object(o.a)("esri.rest.support.ServiceAreaSolveResult")],N);const A=N,w=Object(n.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});var B=r(695);let M=class extends B.a{constructor(e){super(e),this.url=null}solve(e,t){return async function(e,t,r){const s=[],i=[],o={},n={},p=Object(u.c)(e),{path:b}=p;t.facilities&&t.facilities.features&&Object(l.a)(t.facilities.features,i,"facilities.features",o),t.pointBarriers&&t.pointBarriers.features&&Object(l.a)(t.pointBarriers.features,i,"pointBarriers.features",o),t.polylineBarriers&&t.polylineBarriers.features&&Object(l.a)(t.polylineBarriers.features,i,"polylineBarriers.features",o),t.polygonBarriers&&t.polygonBarriers.features&&Object(l.a)(t.polygonBarriers.features,i,"polygonBarriers.features",o);const d=await Object(c.a)(i);for(const e in o){const t=o[e];s.push(e),n[e]=d.slice(t[0],t[1])}if(Object(l.e)(n,s)){let e=null;try{e=await Object(l.c)(b,t.apiKey,r)}catch{}e&&!e.hasZ&&Object(l.b)(n,s)}for(const e in n)n[e].forEach((r,s)=>{t.get(e)[s].geometry=r});const y={...r,query:{...p.query,...w.toQueryParams(t),f:"json"}},{data:O}=await Object(a.default)(b+"/solveServiceArea",y);return A.fromJSON(O)}(this.url,e,t)}};Object(s.a)([Object(i.b)()],M.prototype,"url",void 0),M=Object(s.a)([Object(o.a)("esri.tasks.ServiceAreaTask")],M);const S=M},648:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var s=r(337),i=r(361),o=r(347),a=r(341),n=(r(342),r(336),r(340),r(338));const c=new i.a({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let l=class extends o.a{constructor(e){super(e),this.description=null,this.type=null}};Object(s.a)([Object(a.b)({type:String,json:{write:!0}})],l.prototype,"description",void 0),Object(s.a)([Object(a.b)({type:String,json:{read:c.read,write:c.write}})],l.prototype,"type",void 0),l=Object(s.a)([Object(n.a)("esri.rest.support.GPMessage")],l);const u=l},672:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var s=r(337),i=r(361),o=r(341),a=(r(342),r(336),r(340),r(338)),n=r(648);const c=new i.a({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let l=class extends n.a{constructor(e){super(e),this.type=null}};Object(s.a)([Object(o.b)({type:String,json:{read:c.read,write:c.write}})],l.prototype,"type",void 0),l=Object(s.a)([Object(a.a)("esri.rest.support.NAMessage")],l);const u=l},722:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var s=r(337),i=(r(356),r(339)),o=r(341),a=(r(342),r(336),r(340),r(363)),n=r(338),c=r(397);let l=class extends c.a{};Object(s.a)([Object(o.b)()],l.prototype,"events",void 0),Object(s.a)([Object(o.b)()],l.prototype,"strings",void 0),l=Object(s.a)([Object(n.a)("esri.rest.support.DirectionsFeature")],l);const u=l;var p=r(425),b=r(355),d=r(360),y=r(440),O=r(368);let j=class extends p.default{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){var r;if(!e)return[];const s=null!=(r=t.summary.envelope.spatialReference)?r:t.spatialReference,i=s&&d.a.fromJSON(s);return e.map(e=>{var t,r;const s=this._decompressGeometry(e.compressedGeometry),o=new y.a({...s,spatialReference:i}),a=null!=(t=null==(r=e.events)?void 0:r.map(e=>{const{arriveTimeUTC:t,ETA:r,point:{x:s,y:o,z:a},strings:n}=e;return new u({geometry:new O.a({x:s,y:o,z:a,hasZ:void 0!==a,spatialReference:i}),attributes:{ETA:r,arriveTimeUTC:t},strings:n})}))?t:[];return new u({attributes:e.attributes,events:a,geometry:o,strings:e.strings})})}get mergedGeometry(){if(!this.features)return null;const e=this.features.map(({geometry:e})=>Object(i.r)(e)),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map(({strings:e})=>e)}_decompressGeometry(e){let t=0,r=0,s=0,i=0;const o=[];let a,n,c,l,u,p,b,d,y=0,O=0,j=0;if(u=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),u||(u=[]),0===parseInt(u[y],32)){y=2;const e=parseInt(u[y],32);y++,p=parseInt(u[y],32),y++,1&e&&(O=u.indexOf("|")+1,b=parseInt(u[O],32),O++),2&e&&(j=u.indexOf("|",O)+1,d=parseInt(u[j],32),j++)}else p=parseInt(u[y],32),y++;for(;y<u.length&&"|"!==u[y];){a=parseInt(u[y],32)+t,y++,t=a,n=parseInt(u[y],32)+r,y++,r=n;const e=[a/p,n/p];O&&(l=parseInt(u[O],32)+s,O++,s=l,e.push(l/b)),j&&(c=parseInt(u[j],32)+i,j++,i=c,e.push(c/d)),o.push(e)}return{paths:[o],hasZ:O>0,hasM:j>0}}_mergePolylinesToSinglePath(e,t){if(0===e.length)return new y.a({spatialReference:t});const r=[];for(const t of e)for(const e of t.paths)r.push(...e);const s=[];r.forEach((e,t)=>{0!==t&&e[0]===r[t-1][0]&&e[1]===r[t-1][1]||s.push(e)});const{hasM:i,hasZ:o}=e[0];return new y.a({hasM:i,hasZ:o,paths:[s],spatialReference:t})}};Object(s.a)([Object(o.b)({type:b.a,json:{read:{source:"summary.envelope"}}})],j.prototype,"extent",void 0),Object(s.a)([Object(o.b)()],j.prototype,"features",void 0),Object(s.a)([Object(a.a)("features")],j.prototype,"readFeatures",null),Object(s.a)([Object(o.b)()],j.prototype,"geometryType",void 0),Object(s.a)([Object(o.b)({readOnly:!0})],j.prototype,"mergedGeometry",null),Object(s.a)([Object(o.b)()],j.prototype,"routeId",void 0),Object(s.a)([Object(o.b)()],j.prototype,"routeName",void 0),Object(s.a)([Object(o.b)({value:null,readOnly:!0})],j.prototype,"strings",null),Object(s.a)([Object(o.b)({json:{read:{source:"summary.totalDriveTime"}}})],j.prototype,"totalDriveTime",void 0),Object(s.a)([Object(o.b)({json:{read:{source:"summary.totalLength"}}})],j.prototype,"totalLength",void 0),Object(s.a)([Object(o.b)({json:{read:{source:"summary.totalTime"}}})],j.prototype,"totalTime",void 0),j=Object(s.a)([Object(n.a)("esri.rest.support.DirectionsFeatureSet")],j);const m=j},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));class s{constructor(e={}){this._options=e}toQueryParams(e){if(!e)return null;const t=e.toJSON(),r={};return Object.keys(t).forEach(e=>{const s=this._options[e];if(s){const i="boolean"!=typeof s&&s.name?s.name:e,o="boolean"!=typeof s&&s.getter?s.getter(t):t[e];null!=o&&(r[i]=(e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t})(o)?o.join(","):"object"==typeof o?JSON.stringify(o):o)}else r[e]=t[e]},this),r}}function i(e){return new s(e)}},774:function(e,t,r){"use strict";r.d(t,"a",(function(){return I})),r.d(t,"b",(function(){return J})),r.d(t,"c",(function(){return F})),r.d(t,"d",(function(){return x})),r.d(t,"e",(function(){return E}));var s=r(353),i=r(344),o=r(339),a=r(474),n=r(358),c=r(398),l=r(337),u=r(347),p=r(341),b=(r(342),r(336),r(340),r(338)),d=r(350),y=r(367),O=r(361);const j=Object(O.b)()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriYards:"yards"}),m=(Object(O.b)()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),Object(O.b)()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),Object(O.b)()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),Object(O.b)()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),Object(O.b)()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"})),f=(Object(O.b)()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),Object(O.b)()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"}),Object(O.b)()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"}));var h;let v=h=class extends u.a{constructor(e){super(e),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}clone(){return new h(Object(d.a)({attributeParameterValues:this.attributeParameterValues,description:this.description,distanceAttributeName:this.distanceAttributeName,id:this.id,impedanceAttributeName:this.impedanceAttributeName,name:this.name,restrictionAttributeNames:this.restrictionAttributeNames,simplificationTolerance:this.simplificationTolerance,simplificationToleranceUnits:this.simplificationToleranceUnits,timeAttributeName:this.timeAttributeName,type:this.type,useHierarchy:this.useHierarchy,uturnAtJunctions:this.uturnAtJunctions}))}};Object(l.a)([Object(p.b)({type:[Object],json:{write:!0}})],v.prototype,"attributeParameterValues",void 0),Object(l.a)([Object(p.b)({type:String,json:{write:!0}})],v.prototype,"description",void 0),Object(l.a)([Object(p.b)({type:String,json:{write:!0}})],v.prototype,"distanceAttributeName",void 0),Object(l.a)([Object(p.b)({type:String,json:{write:!0}})],v.prototype,"id",void 0),Object(l.a)([Object(p.b)({type:String,json:{write:!0}})],v.prototype,"impedanceAttributeName",void 0),Object(l.a)([Object(p.b)({type:String,json:{write:!0}})],v.prototype,"name",void 0),Object(l.a)([Object(p.b)({type:[String],json:{write:!0}})],v.prototype,"restrictionAttributeNames",void 0),Object(l.a)([Object(p.b)({type:Number,json:{write:!0}})],v.prototype,"simplificationTolerance",void 0),Object(l.a)([Object(y.a)(j)],v.prototype,"simplificationToleranceUnits",void 0),Object(l.a)([Object(p.b)({type:String,json:{write:!0}})],v.prototype,"timeAttributeName",void 0),Object(l.a)([Object(y.a)(f)],v.prototype,"type",void 0),Object(l.a)([Object(p.b)({type:Boolean,json:{write:!0}})],v.prototype,"useHierarchy",void 0),Object(l.a)([Object(y.a)(m)],v.prototype,"uturnAtJunctions",void 0),v=h=Object(l.a)([Object(b.a)("esri.rest.support.TravelMode")],v);const g=v;let T=class extends u.a{constructor(e){super(e),this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null}};Object(l.a)([Object(p.b)()],T.prototype,"currentVersion",void 0),Object(l.a)([Object(p.b)()],T.prototype,"defaultTravelMode",void 0),Object(l.a)([Object(p.b)()],T.prototype,"directionsLanguage",void 0),Object(l.a)([Object(p.b)()],T.prototype,"directionsSupportedLanguages",void 0),Object(l.a)([Object(p.b)()],T.prototype,"directionsTimeAttribute",void 0),Object(l.a)([Object(p.b)()],T.prototype,"hasZ",void 0),Object(l.a)([Object(p.b)()],T.prototype,"impedance",void 0),Object(l.a)([Object(p.b)()],T.prototype,"networkDataset",void 0),Object(l.a)([Object(p.b)({type:[g]})],T.prototype,"supportedTravelModes",void 0),T=Object(l.a)([Object(b.a)("esri.rest.support.NetworkServiceDescription")],T);const N=T;var A=r(397),w=r(363),B=r(425),M=r(672),S=r(722);let P=class extends u.a{constructor(e){super(e),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};Object(l.a)([Object(p.b)({type:S.a,json:{write:!0}})],P.prototype,"directions",void 0),Object(l.a)([Object(p.b)({type:A.a,json:{write:!0}})],P.prototype,"route",void 0),Object(l.a)([Object(p.b)({type:String,json:{write:!0}})],P.prototype,"routeName",void 0),Object(l.a)([Object(p.b)({type:[A.a],json:{write:!0}})],P.prototype,"stops",void 0),P=Object(l.a)([Object(b.a)("esri.rest.support.RouteResult")],P);const k=P;function R(e){return e&&B.default.fromJSON(e).features.map(e=>e)}let U=class extends u.a{constructor(e){super(e),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(e,t){return R(t.barriers||t.pointBarriers)}readPolylineBarriers(e){return R(e)}readPolygonBarriers(e){return R(e)}};Object(l.a)([Object(p.b)({aliasOf:"pointBarriers"})],U.prototype,"barriers",void 0),Object(l.a)([Object(p.b)({type:[M.a]})],U.prototype,"messages",void 0),Object(l.a)([Object(p.b)({type:[A.a]})],U.prototype,"pointBarriers",void 0),Object(l.a)([Object(w.a)("pointBarriers",["barriers","pointBarriers"])],U.prototype,"readPointBarriers",null),Object(l.a)([Object(p.b)({type:[A.a]})],U.prototype,"polylineBarriers",void 0),Object(l.a)([Object(w.a)("polylineBarriers")],U.prototype,"readPolylineBarriers",null),Object(l.a)([Object(p.b)({type:[A.a]})],U.prototype,"polygonBarriers",void 0),Object(l.a)([Object(w.a)("polygonBarriers")],U.prototype,"readPolygonBarriers",null),Object(l.a)([Object(p.b)({type:[k]})],U.prototype,"routeResults",void 0),U=Object(l.a)([Object(b.a)("esri.rest.support.RouteResultsContainer")],U);const D=U;function I(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach(e=>{t.push(e.geometry)})}function J(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function x(e){const t=[],r=[],{directions:s=[],routes:{features:i=[],spatialReference:a=null}={},stops:{features:n=[],spatialReference:c=null}={},barriers:l,polygonBarriers:u,polylineBarriers:p,messages:b}=e.data,d="esri.tasks.RouteTask.NULL_ROUTE_NAME";let y,O,j=!0;const m=i&&a||n&&c||l&&l.spatialReference||u&&u.spatialReference||p&&p.spatialReference;s.forEach(e=>{t.push(y=e.routeName),r[y]={directions:e}}),i.forEach(e=>{-1===t.indexOf(y=e.attributes.Name)&&(t.push(y),r[y]={}),Object(o.k)(e.geometry)&&(e.geometry.spatialReference=m),r[y].route=e}),n.forEach(e=>{O=e.attributes,-1===t.indexOf(y=O.RouteName||d)&&(t.push(y),r[y]={}),y!==d&&(j=!1),Object(o.k)(e.geometry)&&(e.geometry.spatialReference=m),null==r[y].stops&&(r[y].stops=[]),r[y].stops.push(e)}),n.length>0&&!0===j&&(r[t[0]].stops=r[d].stops,delete r[d],t.splice(t.indexOf(d),1));const f=t.map(e=>(r[e].routeName=e===d?null:e,r[e]));return D.fromJSON({routeResults:f,pointBarriers:l,polygonBarriers:u,polylineBarriers:p,messages:b})}function E(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(Object(o.k)(e)&&e.hasZ)return!0}return!1}async function F(e,t,r){if(!e)throw new i.a("network-service:missing-url","Url to Network service is missing");const o=Object(c.a)({f:"json",token:t},r),{data:l}=await Object(s.default)(e,o);l.supportedTravelModes||(l.supportedTravelModes=[]);for(let e=0;e<l.supportedTravelModes.length;e++)l.supportedTravelModes[e].id||(l.supportedTravelModes[e].id=l.supportedTravelModes[e].itemId);const u=l.currentVersion>=10.4?async function(e,t,r){try{const i=Object(c.a)({f:"json",token:t},r),o=Object(n.I)(e)+"/retrieveTravelModes",{data:{supportedTravelModes:a,defaultTravelMode:l}}=await Object(s.default)(o,i);return{supportedTravelModes:a,defaultTravelMode:l}}catch(e){throw new i.a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(e,t,r):async function(e,t){var r,i;const o=Object(c.a)({f:"json"},t),{data:l}=await Object(s.default)(e.replace(/\/rest\/.*$/i,"/info"),o);if(!l||!l.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:u}=l,p=Object(n.I)(u)+"/sharing/rest/portals/self",{data:b}=await Object(s.default)(p,o),d=Object(a.b)("helperServices.routingUtilities.url",b);if(!d)return{supportedTravelModes:[],defaultTravelMode:null};const y=Object(c.c)(u),O=/\/solve$/i.test(y.path)?"Route":/\/solveclosestfacility$/i.test(y.path)?"ClosestFacility":"ServiceAreas",j=Object(c.a)({f:"json",serviceName:O},t),m=Object(n.I)(d)+"/GetTravelModes/execute",f=await Object(s.default)(m,j),h=[];let v=null;if(null!=f&&null!=(r=f.data)&&null!=(i=r.results)&&i.length){const e=f.data.results;for(const t of e){var g;if("supportedTravelModes"===t.paramName){if(null!=(g=t.value)&&g.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);h.push(t)}}else"defaultTravelMode"===t.paramName&&(v=t.value)}}return{supportedTravelModes:h,defaultTravelMode:v}}(e,r),{defaultTravelMode:p,supportedTravelModes:b}=await u;return l.defaultTravelMode=p,l.supportedTravelModes=b,N.fromJSON(l)}}}]);