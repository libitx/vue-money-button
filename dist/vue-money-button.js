/*!
 * vue-money-button v0.2.1 (http://github.com/libitx)
 * An unofficial Vue.js component for Money Button.
 * (c) 2019 libitx
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MoneyButton=t():e.MoneyButton=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){var o=n(5);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(3).default)("f5c204a4",o,!0,{})},function(e,t,n){var o=n(7);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(3).default)("ff846c4c",o,!0,{})},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){"use strict";function o(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=i[0],a={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}n.r(t),n.d(t,"default",function(){return h});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=r&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,c=!1,l=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,r){c=n,d=r||{};var s=o(e,t);return b(s),function(t){for(var n=[],r=0;r<s.length;r++){var a=s[r];(u=i[a.id]).refs--,n.push(u)}t?b(s=o(e,t)):s=[];for(r=0;r<n.length;r++){var u;if(0===(u=n[r]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete i[u.id]}}}}function b(e){for(var t=0;t<e.length;t++){var n=e[t],o=i[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(v(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var s=[];for(r=0;r<n.parts.length;r++)s.push(v(n.parts[r]));i[n.id]={id:n.id,refs:1,parts:s}}}}function m(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function v(e){var t,n,o=document.querySelector("style["+f+'~="'+e.id+'"]');if(o){if(c)return l;o.parentNode.removeChild(o)}if(p){var r=u++;o=a||(a=m()),t=g.bind(null,o,r,!1),n=g.bind(null,o,r,!0)}else o=m(),t=function(e,t){var n=t.css,o=t.media,r=t.sourceMap;o&&e.setAttribute("media",o);d.ssrId&&e.setAttribute(f,t.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function g(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t,n){"use strict";var o=n(0);n.n(o).a},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"\n.spinner__moneybutton {\n  position: absolute;\n  top: 50%;\n  left: 50px;\n  z-index: 0;\n  margin-top: -11px;\n}\n.bounce__moneybutton {\n  width: 18px;\n  height: 18px;\n  background-color: #333;\n\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n.bounce__moneybutton.bounce-1 {\n  background-color: #FF4136;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.bounce__moneybutton.bounce-2 {\n  background-color: #357EDD;\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.bounce__moneybutton.bounce-3 {\n  background-color: #191927;\n}\n@-webkit-keyframes sk-bouncedelay {\n0%, 80%, 100% { -webkit-transform: scale(0)\n}\n40% { -webkit-transform: scale(1.0)\n}\n}\n@keyframes sk-bouncedelay {\n0%, 80%, 100% { \n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n40% { \n    -webkit-transform: scale(1.0);\n    transform: scale(1.0);\n}\n}\n",""])},function(e,t,n){"use strict";var o=n(1);n.n(o).a},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"\n.v-money-button-outer {\n  position: relative;\n  display: inline-block;\n}\n.v-money-button-inner {\n  z-index: 1;\n}\n",""])},function(e,t,n){"use strict";n.r(t);var o="https://www.moneybutton.com",r={promise:null,src:"https://www.moneybutton.com/moneybutton.js",load:function(){var e=this;return this.promise||(console.log("init script"),this.promise=new Promise(function(t,n){var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=e.src,o.addEventListener("load",function(e){return t(window.moneyButton)}),o.addEventListener("error",n),o.addEventListener("abort",n),document.head.appendChild(o)})),console.log("returning promise"),this.promise}};n(4);function i(e,t,n,o,r,i,s,a){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=u):r&&(u=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:c}}var s=i({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"spinner__moneybutton"},[t("div",{staticClass:"bounce__moneybutton bounce-1"}),this._v(" "),t("div",{staticClass:"bounce__moneybutton bounce-2"}),this._v(" "),t("div",{staticClass:"bounce__moneybutton bounce-3"})])}],!1,null,null,null);s.options.__file="loader.vue";var a=s.exports,u={props:{to:[String,Number],amount:[String,Number],editable:{type:Boolean,default:void 0},currency:{type:String,default:"USD"},label:{type:String,required:!0},successMessage:String,opReturn:String,outputs:{type:Array,default:function(){return[]}},clientIdentifier:String,buttonId:!0,buttonData:!0,type:{type:String,default:"buy"},devMode:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0}},data:function(){return{loading:!0,size:{width:"280px",height:"50px"}}},computed:{params:function(){var e=this;return{to:this.to,amount:this.amount,editable:this.editable,currency:this.outputs.length?void 0:this.currency,label:this.label,successMessage:this.successMessage,opReturn:this.opReturn,outputs:this.outputs.length?JSON.stringify(this.outputs):void 0,clientIdentifier:this.clientIdentifier,buttonId:this.buttonId,buttonData:this.buttonData,type:this.type,devMode:this.devMode,disabled:this.disabled,onPayment:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];e.$emit.apply(e,["payment"].concat(n))},onError:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];e.$emit.apply(e,["error"].concat(n))}}}},mounted:function(){this.refreshMoneyButton(),window.addEventListener("message",this.handleMessage,!1)},watch:{params:function(e){this.refreshMoneyButton()}},methods:{refreshMoneyButton:function(){var e=this;r.load().then(function(t){t.render(e.$refs.button,e.params)})},handleMessage:function(e){var t=this;e.origin===o&&"ready"===e.data.v1.topic&&(setTimeout(function(e){t.loading=!1},1e3),this.$refs.button&&(this.size={width:this.$refs.button.offsetWidth+"px",height:this.$refs.button.offsetHeight+"px"}))}},components:{Loader:a}},c=(n(6),i(u,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"v-money-button-outer",style:this.size},[t("div",{ref:"button",staticClass:"v-money-button-inner"}),this._v(" "),t("Loader",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}]})],1)},[],!1,null,null,null));c.options.__file="MoneyButton.vue";var l=c.exports;t.default=l}]).default});