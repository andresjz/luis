(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var u=typeof n;if("string"===u||"number"===u)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===u)if(n.toString===Object.prototype.toString)for(var a in n)r.call(n,a)&&n[a]&&e.push(a);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},8771:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e,t){var n=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=u(u({},r),e));var o=r=u(u({},r),t);if(o.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(o.suspense)return n(o);r.loadableGenerated&&delete(r=u(u({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,c(n,r);delete r.ssr}return n(r)};a(n(7294));var i=a(n(4860));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return delete t.webpack,delete t.modules,e(t)}},1083:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},4860:function(e,t,n){"use strict";var r=n(2553),o=n(2012),u=n(1682);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){a=!0,u=e},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw u}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,f=(s=n(7294))&&s.__esModule?s:{default:s},d=n(7161),p=n(1083);var v=[],y=[],b=!1;function h(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var m=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a(a({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function g(e){return function(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=f.default.lazy(n.loader));var r=null;function o(){if(!r){var t=new m(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!b&&"function"===typeof n.webpack&&!n.suspense){var u=n.webpack();y.push((function(e){var t,n=c(u);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(i){n.e(i)}finally{n.f()}}))}var i=n.suspense?function(e,t){return f.default.createElement(n.lazy,a(a({},e),{},{ref:t}))}:function(e,t){o();var u=f.default.useContext(p.LoadableContext),i=d.useSubscription(r);return f.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),u&&Array.isArray(n.modules)&&n.modules.forEach((function(e){u(e)})),f.default.useMemo((function(){return i.loading||i.error?f.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?f.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return i.preload=function(){return!n.suspense&&o()},i.displayName="LoadableComponent",f.default.forwardRef(i)}(h,e)}function w(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return w(e,t)}))}g.preloadAll=function(){return new Promise((function(e,t){w(v).then(e,t)}))},g.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return b=!0,t()};w(y,e).then(n,n)}))},window.__NEXT_PRELOADREADY=g.preloadReady;var O=g;t.default=O},5152:function(e,t,n){e.exports=n(8771)},9008:function(e,t,n){e.exports=n(639)},5203:function(e,t,n){"use strict";n.d(t,{H:function(){return o}});var r=n(9624);function o(e,t){var n,o;if(null===(n=e.properties)||void 0===n?void 0:n.title)return(0,r.F)(e.properties.title);if("collection_view_page"===e.type||"collection_view"===e.type){var u=null===(o=t.collection[e.collection_id])||void 0===o?void 0:o.value;if(u)return(0,r.F)(u.name)}return""}},4021:function(e,t,n){"use strict";n.d(t,{S:function(){return u}});var r=n(2009),o=n(5203),u=function(e,t,n){var u,a=(void 0===n?{}:n).uuid,c=void 0===a||a;if(!e||!t)return null;var l=(0,r.G)(e),s=null===(u=t.block[e])||void 0===u?void 0:u.value;if(s){var f=i((0,o.H)(s,t));if(f)return c?f+"-"+l:f}return l},i=function(e){return(e||"").replace(/ /g,"-").replace(/[^a-zA-Z0-9-]/g,"").replace(/--/g,"-").replace(/-$/,"").replace(/^-/,"").trim().toLowerCase()}},5946:function(e,t,n){"use strict";n.d(t,{r:function(){return o}});var r=n(9624);function o(e,t,n){var o;if(!t.properties)return null;var u=null===(o=n.collection[t.parent_id])||void 0===o?void 0:o.value;if(u){var i=Object.keys(u.schema).find((function(t){var n;return(null===(n=u.schema[t])||void 0===n?void 0:n.name)===e}));if(i)return(0,r.F)(t.properties[i])}return null}},9624:function(e,t,n){"use strict";n.d(t,{F:function(){return r}});var r=function(e){var t;return e?Array.isArray(e)?null!==(t=null===e||void 0===e?void 0:e.reduce((function(e,t){return e+("\u204d"!==t[0]&&"\u2023"!==t[0]?t[0]:"")}),""))&&void 0!==t?t:"":e:""}},2009:function(e,t,n){"use strict";n.d(t,{G:function(){return r}});var r=function(e){return e.replace(/-/g,"")}},5873:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294);function o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function u(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var i="undefined"!==typeof window,a=function(e,t){return new URLSearchParams(e).get(t)},c=i?function(e){var t=window.location,n=(0,r.useState)((function(){return a(t.search,e)})),i=n[0],c=n[1];return(0,r.useEffect)((function(){var n=function(){c(a(t.search,e))};return o(window,"popstate",n),o(window,"pushstate",n),o(window,"replacestate",n),function(){u(window,"popstate",n),u(window,"pushstate",n),u(window,"replacestate",n)}}),[]),i}:function(){return null}},3011:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(7294);function o(e,t,o,u){void 0===o&&(o=n.g),void 0===u&&(u={});var i=(0,r.useRef)(),a=u.capture,c=u.passive,l=u.once;(0,r.useEffect)((function(){i.current=t}),[t]),(0,r.useEffect)((function(){if(o&&o.addEventListener){var t=function(e){return i.current(e)},n={capture:a,passive:c,once:l};return o.addEventListener(e,t,n),function(){o.removeEventListener(e,t,n)}}}),[e,o,a,c,l])}var u={},i=function(e,t,n){return u[e]||(u[e]={callbacks:[],value:n}),u[e].callbacks.push(t),{deregister:function(){var n=u[e].callbacks,r=n.indexOf(t);r>-1&&n.splice(r,1)},emit:function(n){u[e].value!==n&&(u[e].value=n,u[e].callbacks.forEach((function(e){t!==e&&e(n)})))}}};function a(e,t){if(void 0===t&&(t="undefined"!=typeof n.g&&n.g.localStorage?n.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),t){var u=(a=t,{get:function(e,t){var n=a.getItem(e);return null==n?"function"==typeof t?t():t:JSON.parse(n)},set:function(e,t){a.setItem(e,JSON.stringify(t))}});return function(t){return function(e,t,n){var u=n.get,a=n.set,c=(0,r.useRef)(null),l=(0,r.useState)((function(){return u(t,e)})),s=l[0],f=l[1];o("storage",(function(e){if(e.key===t){var n=JSON.parse(e.newValue);s!==n&&f(n)}})),(0,r.useEffect)((function(){return c.current=i(t,f,e),function(){c.current.deregister()}}),[e,t]);var d=(0,r.useCallback)((function(e){var n="function"==typeof e?e(s):e;a(t,n),f(n),c.current.emit(e)}),[s,a,t]);return[s,d]}(t,e,u)}}var a;return r.useState}var c=function(){},l={classList:{add:c,remove:c}},s=function(e,t,o){void 0===o&&(o=n.g);var u=e?a(e,t):r.useState,i=o.matchMedia?o.matchMedia("(prefers-color-scheme: dark)"):{},c={addEventListener:function(e,t){return i.addListener&&i.addListener(t)},removeEventListener:function(e,t){return i.removeListener&&i.removeListener(t)}},s="(prefers-color-scheme: dark)"===i.media,f=o.document&&o.document.body||l;return{usePersistedDarkModeState:u,getDefaultOnChange:function(e,t,n){return void 0===e&&(e=f),void 0===t&&(t="dark-mode"),void 0===n&&(n="light-mode"),function(r){e.classList.add(r?t:n),e.classList.remove(r?n:t)}},mediaQueryEventTarget:c,getInitialValue:function(e){return s?i.matches:e}}};function f(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var n=t.element,u=t.classNameDark,i=t.classNameLight,a=t.onChange,c=t.storageKey;void 0===c&&(c="darkMode");var l=t.storageProvider,f=t.global,d=(0,r.useMemo)((function(){return s(c,l,f)}),[c,l,f]),p=d.getDefaultOnChange,v=d.mediaQueryEventTarget,y=(0,d.usePersistedDarkModeState)((0,d.getInitialValue)(e)),b=y[0],h=y[1],m=(0,r.useMemo)((function(){return a||p(n,u,i)}),[a,n,u,i,p]);return(0,r.useEffect)((function(){m(b)}),[m,b]),o("change",(function(e){return h(e.matches)}),v),{value:b,enable:(0,r.useCallback)((function(){return h(!0)}),[h]),disable:(0,r.useCallback)((function(){return h(!1)}),[h]),toggle:(0,r.useCallback)((function(){return h((function(e){return!e}))}),[h])}}},4695:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},8216:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},5997:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,{Z:function(){return o}})},2953:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,{Z:function(){return r}})},3444:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,{Z:function(){return o}})},219:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},268:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,{Z:function(){return u}});var o=n(4695);function u(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}}}]);