(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{602:function(e,t,r){"use strict";r.r(t),r.d(t,"addOrUpdateResource",(function(){return u})),r.d(t,"contentToBlob",(function(){return f})),r.d(t,"fetchResources",(function(){return c})),r.d(t,"getSiblingOfSameType",(function(){return h})),r.d(t,"getSiblingOfSameTypeI",(function(){return m})),r.d(t,"removeAllResources",(function(){return l})),r.d(t,"removeResource",(function(){return i})),r.d(t,"splitPrefixFileNameAndExtension",(function(){return p}));var n=r(353),a=r(344),o=r(339),s=r(358);async function c(e,t={},r){await e.load(r);const n=Object(s.z)(e.itemUrl,"resources"),{start:a=1,num:c=10,sortOrder:u="asc",sortField:i="created"}=t,l={query:{start:a,num:c,sortOrder:u,sortField:i,token:e.apiKey},signal:Object(o.i)(r,"signal")},d=await e.portal._request(n,l);return{total:d.total,nextStart:d.nextStart,resources:d.resources.map(({created:t,size:r,resource:n})=>({created:new Date(t),size:r,resource:e.resourceFromPath(n)}))}}async function u(e,t,r,n){if(!e.hasPath())throw new a.a(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const c=e.portalItem;await c.load(n);const u=Object(s.z)(c.userItemUrl,"add"===t?"addResources":"updateResources"),[i,l]=d(e.path),p=await f(r),h=new FormData;return i&&"."!==i&&h.append("resourcesPrefix",i),h.append("fileName",l),h.append("file",p,l),h.append("f","json"),Object(o.k)(n)&&n.access&&h.append("access",n.access),await c.portal._request(u,{method:"post",body:h,signal:Object(o.i)(n,"signal")}),e}async function i(e,t,r){if(!t.hasPath())throw new a.a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const n=Object(s.z)(e.userItemUrl,"removeResources");await e.portal._request(n,{method:"post",query:{resource:t.path},signal:Object(o.i)(r,"signal")}),t.portalItem=null}async function l(e,t){await e.load(t);const r=Object(s.z)(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:Object(o.i)(t,"signal")})}function d(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function p(e){const[t,r]=function(e){const t=Object(s.n)(e);return Object(o.j)(t)?[e,""]:[e.slice(0,e.length-t.length-1),"."+t]}(e),[n,a]=d(t);return[n,a,r]}async function f(e){return e instanceof Blob?e:(await Object(n.default)(e.url,{responseType:"blob"})).data}function h(e,t){if(!e.hasPath())return null;const[r,,n]=p(e.path);return e.portalItem.resourceFromPath(Object(s.z)(r,t+n))}function m(e,t){if(!e.hasPath())return null;const[r,,n]=p(e.path);return e.portalItem.resourceFromPath(Object(s.z)(r,t+n))}}}]);