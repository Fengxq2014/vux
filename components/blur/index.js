!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxBlur=e():t.vuxBlur=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(25)},function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(16),o=n(1),i=n(14),s="prototype",u=function(t,e,n){var a,l,c,f=t&u.F,p=t&u.G,h=t&u.S,d=t&u.P,y=t&u.B,v=t&u.W,m=p?o:o[e]||(o[e]={}),g=p?r:h?r[e]:(r[e]||{})[s];p&&(n=e);for(a in n)l=!f&&g&&a in g,l&&a in m||(c=l?g[a]:n[a],m[a]=p&&"function"!=typeof g[a]?n[a]:y&&l?i(c,r):v&&g[a]==c?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[s]=t[s],e}(c):d&&"function"==typeof c?i(Function.call,c):c,d&&((m[s]||(m[s]={}))[a]=c))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,t.exports=u},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){var r=n(15);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),i=r(o);e["default"]={ready:function(){this._blur=new i["default"](this.$el,{url:this.url,blurAmount:this.blurAmount,imageClass:"bg-blur",duration:100,opacity:1})},props:{blurAmount:{type:Number,"default":10},url:{type:String,required:!0},height:{type:Number,"default":200}},watch:{blurAmount:function(t){this._blur.setBlurAmount(t),this._blur.generateBlurredImage(this.url)},url:function(t){this._blur.generateBlurredImage(t)}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){return window.getComputedStyle(t,null).getPropertyValue(e)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),s=r(i),u=n(7),a=r(u),l=function(){return"_"+Math.random().toString(36).substr(2,9)},c={svgns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",createElement:function(t,e){var n=document.createElementNS(c.svgns,t);return e&&c.setAttr(n,e),n},setAttr:function(t,e){for(var n in e)"href"===n?t.setAttributeNS(c.xlink,n,e[n]):t.setAttribute(n,e[n]);return t}},f=function p(t,e){this.internalID=l(),this.element=t,this.width=t.offsetWidth,this.height=t.offsetHeight,this.element=t,this.parent=this.element.parentNode,this.options=(0,s["default"])({},p.DEFAULTS,e),this.overlayEl=this.createOverlay(),this.blurredImage=null,this.attachListeners(),this.generateBlurredImage(this.options.url)};f.VERSION="0.0.1",a["default"].mixTo(f),f.DEFAULTS={url:"",blurAmount:10,imageClass:"",overlayClass:"",duration:!1,opacity:1},f.prototype.setBlurAmount=function(t){this.options.blurAmount=t},f.prototype.attachListeners=function(){this.on("ui.blur.loaded",this.fadeIn.bind(this)),this.on("ui.blur.unload",this.fadeOut.bind(this))},f.prototype.fadeIn=function(){},f.prototype.fadeOut=function(){},f.prototype.generateBlurredImage=function(t){var e=this.blurredImage;this.internalID=l(),e&&e.parentNode.removeChild(e),this.blurredImage=this.createSVG(t,this.width,this.height)},f.prototype.createOverlay=function(){if(this.options.overlayClass&&""!==this.options.overlayClass){var t=document.createElement("div");return t.classList.add(this.options.overlayClass),this.parent.insertBefore(t,this.element),t}return!1},f.prototype.createSVG=function(t,e,n){var r=this,i=c.createElement("svg",{xmlns:c.svgns,version:"1.1",width:e,height:n,id:"blurred"+this.internalID,"class":this.options.imageClass,viewBox:"0 0 "+e+" "+n,preserveAspectRatio:"none"}),s="blur"+this.internalID,u=c.createElement("filter",{id:s}),a=c.createElement("feGaussianBlur",{"in":"SourceGraphic",stdDeviation:this.options.blurAmount}),l=c.createElement("image",{x:0,y:0,width:e,height:n,externalResourcesRequired:"true",href:t,style:"filter:url(#"+s+")",preserveAspectRatio:"none"});return l.addEventListener("load",function(){r.emit("ui.blur.loaded")},!0),l.addEventListener("SVGLoad",function(){r.emit("ui.blur.loaded")},!0),u.appendChild(a),i.appendChild(u),i.appendChild(l),r.options.duration&&r.options.duration>0&&(i.style.opacity=0,window.setTimeout(function(){"0"===o(i,"opacity")&&(i.style.opacity=1)},this.options.duration+100)),this.element.insertBefore(i,this.element.firstChild),i},f.prototype.createIMG=function(t,e,n){var r=this,i=this.prependImage(t),s=2*this.options.blurAmount>100?100:2*this.options.blurAmount,u={filter:"progid:DXImageTransform.Microsoft.Blur(pixelradius="+s+") ",top:2.5*-this.options.blurAmount,left:2.5*-this.options.blurAmount,width:e+2.5*this.options.blurAmount,height:n+2.5*this.options.blurAmount};for(var a in u)i.style[a]=u[a];return i.setAttribute("id",this.internalID),i.onload=function(){r.trigger("ui.blur.loaded")},this.options.duration&&this.options.duration>0&&window.setTimeout(function(){"0"===o(i,"opacity")&&(i.style.opacity=1)},this.options.duration+100),i},f.prototype.prependImage=function(t){var e=document.createElement("img");return e.url=t,e.setAttribute("id",this.internalID),e.classList.add(this.options.imageClass),this.overlayEl?this.parent.insertBefore(e,this.overlayEl):this.parent.insertBefore(e,this.parent.firstChild),e},e["default"]=f},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){}function i(t,e,n){var r=!0;if(t){var o=0,i=t.length,s=e[0],u=e[1],a=e[2];switch(e.length){case 0:for(;i>o;o+=2)r=t[o].call(t[o+1]||n)!==!1&&r;break;case 1:for(;i>o;o+=2)r=t[o].call(t[o+1]||n,s)!==!1&&r;break;case 2:for(;i>o;o+=2)r=t[o].call(t[o+1]||n,s,u)!==!1&&r;break;case 3:for(;i>o;o+=2)r=t[o].call(t[o+1]||n,s,u,a)!==!1&&r;break;default:for(;i>o;o+=2)r=t[o].apply(t[o+1]||n,e)!==!1&&r}}return r}function s(t){return"[object Function]"===Object.prototype.toString.call(t)}var u=n(9),a=r(u),l=/\s+/;o.prototype.on=function(t,e,n){var r,o,i;if(!e)return this;for(r=this.__events||(this.__events={}),t=t.split(l);o=t.shift();)i=r[o]||(r[o]=[]),i.push(e,n);return this},o.prototype.once=function(t,e,n){var r=this,o=function i(){r.off(t,i),e.apply(n||r,arguments)};return this.on(t,o,n)},o.prototype.off=function(t,e,n){var r,o,i,s;if(!(r=this.__events))return this;if(!(t||e||n))return delete this.__events,this;for(t=t?t.split(l):c(r);o=t.shift();)if(i=r[o])if(e||n)for(s=i.length-2;s>=0;s-=2)e&&i[s]!==e||n&&i[s+1]!==n||i.splice(s,2);else delete r[o];return this},o.prototype.trigger=function(t){var e,n,r,o,s,u,a=[],c=!0;if(!(e=this.__events))return this;for(t=t.split(l),s=1,u=arguments.length;u>s;s++)a[s-1]=arguments[s];for(;n=t.shift();)(r=e.all)&&(r=r.slice()),(o=e[n])&&(o=o.slice()),"all"!==n&&(c=i(o,a,this)&&c),c=i(r,[n].concat(a),this)&&c;return c},o.prototype.emit=o.prototype.trigger;var c=a["default"];c||(c=function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e}),o.mixTo=function(t){function e(e){t[e]=function(){return n[e].apply(i,Array.prototype.slice.call(arguments)),this}}var n=o.prototype;if(s(t))for(var r in n)n.hasOwnProperty(r)&&(t.prototype[r]=n[r]);else{var i=new o;for(var u in n)n.hasOwnProperty(u)&&e(u)}},t.exports=o},function(t,e,n){t.exports={"default":n(10),__esModule:!0}},function(t,e,n){t.exports={"default":n(11),__esModule:!0}},function(t,e,n){n(21),t.exports=n(1).Object.assign},function(t,e,n){n(22),t.exports=n(1).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(12);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e,n){var r=n(18),o=n(4),i=n(17);t.exports=n(3)(function(){var t=Object.assign,e={},n={},r=Symbol(),o="abcdefghijklmnopqrst";return e[r]=7,o.split("").forEach(function(t){n[t]=t}),7!=t({},e)[r]||Object.keys(t({},n)).join("")!=o})?function(t,e){for(var n=o(t),s=arguments,u=s.length,a=1,l=r.getKeys,c=r.getSymbols,f=r.isEnum;u>a;)for(var p,h=i(s[a++]),d=c?l(h).concat(c(h)):l(h),y=d.length,v=0;y>v;)f.call(h,p=d[v++])&&(n[p]=h[p]);return n}:Object.assign},function(t,e,n){var r=n(2),o=n(1),i=n(3);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],s={};s[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",s)}},function(t,e,n){var r=n(2);r(r.S+r.F,"Object",{assign:n(19)})},function(t,e,n){var r=n(4);n(20)("keys",function(t){return function(e){return t(r(e))}})},function(t,e){},function(t,e){t.exports="<div :style=\"{height:height + 'px',position: 'relative',overflow: 'hidden'}\"> <slot></slot> </div>"},function(t,e,n){var r,o;n(23),r=n(5),o=n(24),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}])});