(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{1257:function(e,t,n){"use strict";n.r(t),n.d(t,"registerFunctions",(function(){return p}));var r=n(755),a=n(471),i=n(1108),s=n(980),c=n(345),l=n(403),u=n(677);function o(e){return e instanceof l.a}function f(e,t,n,f,p){return p(e,t,(function(e,t,p){if(p.length<2)return f(new Error("Missing Parameters"));if(null===(p=Object(a.k)(p))[0]&&null===p[1])return Object(c.s)(!1);if(Object(a.K)(p[0]))return p[1]instanceof l.a?Object(c.s)(new i.a({parentfeatureset:p[0],relation:n,relationGeom:p[1]})):null===p[1]?Object(c.s)(new s.a({parentfeatureset:p[0]})):f("Spatial Relation cannot accept this parameter type");if(o(p[0])){if(o(p[1])){let e=null;switch(n){case"esriSpatialRelEnvelopeIntersects":e=Object(u.q)(Object(r.d)(p[0]),Object(r.d)(p[1]));break;case"esriSpatialRelIntersects":e=Object(u.q)(p[0],p[1]);break;case"esriSpatialRelContains":e=Object(u.c)(p[0],p[1]);break;case"esriSpatialRelOverlaps":e=Object(u.t)(p[0],p[1]);break;case"esriSpatialRelWithin":e=Object(u.C)(p[0],p[1]);break;case"esriSpatialRelTouches":e=Object(u.A)(p[0],p[1]);break;case"esriSpatialRelCrosses":e=Object(u.d)(p[0],p[1])}return null!==e?e:Object(c.r)(new Error("Unrecognised Relationship"))}return Object(a.K)(p[1])?Object(c.s)(new i.a({parentfeatureset:p[1],relation:n,relationGeom:p[0]})):null===p[1]?Object(c.s)(!1):f("Spatial Relation cannot accept this parameter type")}return null!==p[0]?f("Spatial Relation cannot accept this parameter type"):Object(a.K)(p[1])?Object(c.s)(new s.a({parentfeatureset:p[1]})):p[1]instanceof l.a||null===p[1]?Object(c.s)(!1):void 0}))}function p(e){"async"===e.mode&&(e.functions.intersects=function(t,n){return f(t,n,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(t,n){return f(t,n,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(t,n){return f(t,n,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(t,n){return f(t,n,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(t,n){return f(t,n,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(t,n){return f(t,n,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(t,n){return f(t,n,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(a.k)(n),Object(a.L)(n,3,3),o(n[0])&&o(n[1]))return Object(u.w)(n[0],n[1],Object(a.z)(n[2]));if(n[0]instanceof l.a&&null===n[1])return!1;if(n[1]instanceof l.a&&null===n[0])return!1;if(Object(a.K)(n[0])&&null===n[1])return new s.a({parentfeatureset:n[0]});if(Object(a.K)(n[1])&&null===n[0])return new s.a({parentfeatureset:n[1]});if(Object(a.K)(n[0])&&n[1]instanceof l.a)return n[0].relate(n[1],Object(a.z)(n[2]));if(Object(a.K)(n[1])&&n[0]instanceof l.a)return n[1].relate(n[0],Object(a.z)(n[2]));if(null===n[0]&&null===n[1])return!1;throw new Error("Illegal Argument")}))})}}}]);