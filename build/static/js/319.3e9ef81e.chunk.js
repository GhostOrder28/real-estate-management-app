/*! For license information please see 319.3e9ef81e.chunk.js.LICENSE.txt */
(self.webpackChunkreal_estate_management_app=self.webpackChunkreal_estate_management_app||[]).push([[319],{6357:function(e,n,r){"use strict";r.d(n,{$v:function(){return m},Rg:function(){return O},SG:function(){return b},Vq:function(){return w},aG:function(){return y},di:function(){return j},k6:function(){return v},no:function(){return h}});var t,o,a,i,c,s,u,l,f=r(168),p=r(9184),d="\n  border-top: 1px solid #edeff5;\n",g="\n  padding: 1rem 1rem;\n",v=p.ZP.table(t||(t=(0,f.Z)(["\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 0.875rem;\n"]))),b=p.ZP.thead(o||(o=(0,f.Z)(["\n  ","\n  background-color: #F9FAFC;\n  color: #696f8c;\n"])),d),h=p.ZP.tbody(a||(a=(0,f.Z)(["\n  ","\n  color: #474d66;\n"])),d),y=p.ZP.tr(i||(i=(0,f.Z)(["\n  ","\n  ","\n"])),d,"\n  width: inherit;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #F9FAFC;\n  }\n"),m=p.ZP.th(c||(c=(0,f.Z)(["\n  ","\n  white-space: nowrap;\n"])),g),O=p.ZP.th.attrs((function(e){return{colSpan:e.spanValue}}))(s||(s=(0,f.Z)(["\n  ","\n  text-align: left;\n"])),g),w=p.ZP.td.attrs((function(e){return{colSpan:e.spanValue}}))(u||(u=(0,f.Z)(["\n  ","\n  white-space: nowrap;\n"])),g),j=p.ZP.td.attrs((function(e){return{colSpan:e.spanValue}}))(l||(l=(0,f.Z)(["\n  ","\n  white-space: normal;\n"])),g)},4319:function(e,n,r){"use strict";r.r(n);var t=r(5861),o=r(885),a=r(7757),i=r.n(a),c=r(7313),s=r(5997),u=r(6352),l=r(7890),f=r(9873),p=r(2682),d=r(1967),g=r(6357),v=r(2880),b=(r(8435),r(6417));n.default=function(){var e=(0,c.useState)([]),n=(0,o.Z)(e,2),r=n[0],a=n[1],h=(0,l.s0)(),y=(0,u.v9)(p.vn),m=(0,d.$)(["client"]).t;return(0,c.useEffect)((function(){(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/clients/".concat(y));case 3:n=e.sent,console.log(n),a(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),(0,b.jsx)(v.Z,{overflow:"scroll",borderColor:"black",elevation:0,children:(0,b.jsxs)(g.k6,{children:[(0,b.jsx)(g.SG,{children:(0,b.jsxs)(g.aG,{children:[(0,b.jsx)(g.$v,{children:m("name")}),(0,b.jsx)(g.$v,{children:m("phone")}),(0,b.jsx)(g.$v,{children:m("clientType")})]})}),(0,b.jsx)(g.no,{children:r.map((function(e,n){return(0,b.jsxs)(g.aG,{onClick:function(){return h("/clientdetail/".concat(e.clientId))},children:[(0,b.jsx)(g.di,{children:(0,f.Q6)(e.clientName)}),(0,b.jsx)(g.di,{children:e.clientContactPhone}),(0,b.jsx)(g.di,{children:(0,f.Q6)(e.clientType)})]},n)}))})]})})}},6123:function(e,n){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var c in r)t.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},2880:function(e,n,r){"use strict";var t=r(4942),o=r(7462),a=r(5987),i=r(7313),c=r(6123),s=r.n(c),u=r(5192),l=r.n(u),f=r(9438),p=r.n(f),d=r(9128),g=["activeElevation","background","border","borderBottom","borderLeft","borderRight","borderTop","className","elevation","hoverElevation"],v=["className"];function b(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function h(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?b(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var y={_hover:"&:hover",_active:"&:active"},m={},O=(0,i.memo)((0,i.forwardRef)((function(e,n){var r=e.activeElevation,t=e.background,c=e.border,u=e.borderBottom,l=e.borderLeft,f=e.borderRight,b=e.borderTop,h=e.className,O=e.elevation,w=e.hoverElevation,j=(0,a.Z)(e,g),P=(0,d.m)("Pane",{elevation:O,hoverElevation:w,activeElevation:r,background:t,border:c,borderTop:b,borderRight:f,borderBottom:u,borderLeft:l},y,m),k=P.className,x=(0,a.Z)(P,v);return i.createElement(p(),(0,o.Z)({ref:n,className:s()(h,k)},x,j))}))),w=l().oneOfType([l().string,l().bool]);O.propTypes=h(h({},p().propTypes),{},{background:l().string,elevation:l().oneOf([0,1,2,3,4]),hoverElevation:l().oneOf([0,1,2,3,4]),activeElevation:l().oneOf([0,1,2,3,4]),border:w,borderTop:w,borderRight:w,borderBottom:w,borderLeft:w}),n.Z=O},1967:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(s){c=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,n)||function(e,n){if(e){if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(n,{$:function(){return b}});var a=r(2344),i=r(7313),c=r(2550);function s(){if(console&&console.warn){for(var e,n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}var u={};function l(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];"string"===typeof n[0]&&u[n[0]]||("string"===typeof n[0]&&(u[n[0]]=new Date),s.apply(void 0,n))}function f(e,n,r){e.loadNamespaces(n,(function(){if(e.isInitialized)r();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),r()}))}}))}function p(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=n.languages[0],o=!!n.options&&n.options.fallbackLng,a=n.languages[n.languages.length-1];if("cimode"===t.toLowerCase())return!0;var i=function(e,r){var t=n.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===t||2===t};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!i(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(t,e)||(!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!i(t,e)||o&&!i(a,e))))}function d(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return l("i18n.languages were undefined or empty",n.languages),!0;var t=void 0!==n.options.ignoreJSONStructure;return t?n.hasLoadedNamespace(e,{precheck:function(n,t){if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!t(n.isLanguageChangingTo,e))return!1}}):p(e,n,r)}function g(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?g(Object(r),!0).forEach((function(n){(0,a.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function b(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.i18n,t=(0,i.useContext)(c.OO)||{},a=t.i18n,s=t.defaultNS,u=r||a||(0,c.nI)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new c.zv),!u){l("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},g=[p,{},!1];return g.t=p,g.i18n={},g.ready=!1,g}u.options.react&&void 0!==u.options.react.wait&&l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var b=v(v(v({},(0,c.JP)()),u.options.react),n),h=b.useSuspense,y=b.keyPrefix,m=e||s||u.options&&u.options.defaultNS;m="string"===typeof m?[m]:m||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(m);var O=(u.isInitialized||u.initializedStoreOnce)&&m.every((function(e){return d(e,u,b)}));function w(){return u.getFixedT(null,"fallback"===b.nsMode?m:m[0],y)}var j=(0,i.useState)(w),P=o(j,2),k=P[0],x=P[1],S=(0,i.useRef)(!0);(0,i.useEffect)((function(){var e=b.bindI18n,n=b.bindI18nStore;function r(){S.current&&x(w)}return S.current=!0,O||h||f(u,m,(function(){S.current&&x(w)})),e&&u&&u.on(e,r),n&&u&&u.store.on(n,r),function(){S.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,r)})),n&&u&&n.split(" ").forEach((function(e){return u.store.off(e,r)}))}}),[u,m.join()]);var Z=(0,i.useRef)(!0);(0,i.useEffect)((function(){S.current&&!Z.current&&x(w),Z.current=!1}),[u]);var C=[k,u,O];if(C.t=k,C.i18n=u,C.ready=O,O)return C;if(!O&&!h)return C;throw new Promise((function(e){f(u,m,(function(){e()}))}))}},8435:function(){}}]);