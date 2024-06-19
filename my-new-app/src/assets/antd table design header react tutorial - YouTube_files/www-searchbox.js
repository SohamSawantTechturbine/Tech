(function(){'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function v(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return a.raw=a}
function w(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ia(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ia(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ka});
var la=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=la(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),na;
if(typeof Object.setPrototypeOf=="function")na=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;oa=qa.a;break a}catch(a){}oa=!1}na=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ra=na;
function z(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Fa=b.prototype}
function sa(){this.u=!1;this.m=null;this.l=void 0;this.g=1;this.s=this.o=0;this.B=this.i=null}
function ta(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
sa.prototype.A=function(a){this.l=a};
function ua(a,b){a.i={Pd:b,je:!0};a.g=a.o||a.s}
sa.prototype.return=function(a){this.i={return:a};this.g=this.s};
function A(a,b,c){a.g=c;return{value:b}}
sa.prototype.N=function(a){this.g=a};
function va(a,b,c){a.o=b;c!=void 0&&(a.s=c)}
function wa(a){a.o=0;var b=a.i.Pd;a.i=null;return b}
function xa(a){var b=a.B.splice(0)[0];(b=a.i=a.i||b)?b.je?a.g=a.o||a.s:b.N!=void 0&&a.s<b.N?(a.g=b.N,a.i=null):a.g=a.s:a.g=0}
function ya(a){this.g=new sa;this.l=a}
function za(a,b){ta(a.g);var c=a.g.m;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.g.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.u=!1,e;var f=e.value}catch(g){return a.g.m=null,ua(a.g,g),Ba(a)}a.g.m=null;d.call(a.g,f);return Ba(a)}
function Ba(a){for(;a.g.g;)try{var b=a.l(a.g);if(b)return a.g.u=!1,{value:b.value,done:!1}}catch(c){a.g.l=void 0,ua(a.g,c)}a.g.u=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.je)throw b.Pd;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ca(a){this.next=function(b){ta(a.g);a.g.m?b=Aa(a,a.g.m.next,b,a.g.A):(a.g.A(b),b=Ba(a));return b};
this.throw=function(b){ta(a.g);a.g.m?b=Aa(a,a.g.m["throw"],b,a.g.A):(ua(a.g,b),b=Ba(a));return b};
this.return=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Da(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Da(new Ca(new ya(a)))}
function Ea(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect",function(a){return a?a:{}});
v("Reflect.construct",function(){return ma});
v("Reflect.setPrototypeOf",function(a){return a?a:ra?function(b,c){try{return ra(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.l=[];this.u=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.l=function(g){if(this.g==null){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=ea.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.m(l)}}}this.g=null};
c.prototype.m=function(g){this.i(function(){throw g;})};
b.prototype.m=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.H),reject:g(this.o)}};
b.prototype.H=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.J(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.s(g)}};
b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}typeof h=="function"?this.P(h,g):this.s(g)};
b.prototype.o=function(g){this.A(2,g)};
b.prototype.s=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(this.g!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;this.g===2&&this.I();this.B()};
b.prototype.I=function(){var g=this;e(function(){if(g.D()){var h=ea.console;typeof h!=="undefined"&&h.error(g.i)}},1)};
b.prototype.D=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.B=function(){if(this.l!=null){for(var g=0;g<this.l.length;++g)f.l(this.l[g]);this.l=null}};
var f=new c;b.prototype.J=function(g){var h=this.m();g.fc(h.resolve,h.reject)};
b.prototype.P=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return typeof r=="function"?function(u){try{l(r(u))}catch(t){m(t)}}:q}
var l,m,p=new b(function(r,q){l=r;m=q});
this.fc(k(g,l),k(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.fc=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;this.l==null?f.l(k):this.l.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),m=l.next();!m.done;m=l.next())d(m.value).fc(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(u){return function(t){r[u]=t;q--;q==0&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).fc(p(r.length-1),m),k=h.next();while(!k.done)})};
return b});
v("Object.setPrototypeOf",function(a){return a||ra});
v("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
v("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ia(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ia(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&ia(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.g)?delete k[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return fa(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ia(h[0],l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Fa(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
function Ga(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return Fa(this,b,"includes").indexOf(b,c||0)!==-1}});
v("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
v("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
v("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var D=this||self;function Ha(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function E(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Ia(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Ja(a){var b=Ia(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Ka(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function La(a,b,c){return a.call.apply(a.bind,arguments)}
function Ma(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function F(a,b,c){F=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?La:Ma;return F.apply(null,arguments)}
function G(){return Date.now()}
function H(a,b){a=a.split(".");var c=D;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function I(a,b){function c(){}
c.prototype=b.prototype;a.Fa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Oh=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Na(a){return a}
;function Oa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Oa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
I(Oa,Error);Oa.prototype.name="CustomError";function Pa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.l=c}}
;var Qa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ra(a,b){return a<b?-1:a>b?1:0}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
function Sa(a){return{valueOf:a}.valueOf()}
;var Ta;function Ua(){if(Ta===void 0){var a=null,b=D.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Na,createScript:Na,createScriptURL:Na})}catch(c){D.console&&D.console.error(c.message)}Ta=a}else Ta=a}return Ta}
;function Va(a){this.g=a}
Va.prototype.toString=function(){return this.g+""};
function Ya(a){if(a instanceof Va&&a.constructor===Va)return a.g;Ia(a);return"type_error:TrustedResourceUrl"}
var Za={};function $a(a){var b=Ua();a=b?b.createScriptURL(a):a;return new Va(a,Za)}
;function ab(a){this.g=a}
ab.prototype.toString=function(){return this.g};
var bb=new ab("about:invalid#zClosurez");function cb(a){this.og=a}
function db(a){return new cb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var eb=[db("data"),db("http"),db("https"),db("mailto"),db("ftp"),new cb(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function fb(a){for(var b=Ea.apply(1,arguments),c=[a[0]],d=0;d<b.length;d++)c.push(String(b[d])),c.push(a[d+1]);return new ab(c.join(""))}
var gb=Sa(function(){return typeof URL==="function"}),kb=["data:",
"http:","https:","mailto:","ftp:"],lb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function mb(a){if(a instanceof ab)if(a instanceof ab)a=a.g;else throw Error("");else a=lb.test(a)?a:void 0;return a}
;function nb(a,b){b=mb(b);b!==void 0&&(a.href=b)}
;var ob=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},pb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},qb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=typeof a==="string"?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e};
function rb(a,b){b=ob(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function sb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ja(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function tb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ub(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ub(a[c]);return b}
var vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<vb.length;f++)c=vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function xb(a){var b=arguments.length;if(b==1&&Array.isArray(arguments[0]))return xb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;var yb={};function zb(a){this.g=a}
zb.prototype.toString=function(){return this.g.toString()};
function Ab(a){if(a instanceof zb&&a.constructor===zb)return a.g;Ia(a);return"type_error:SafeHtml"}
function Bb(a){var b=Ua();a=b?b.createHTML(a):a;return new zb(a,yb)}
;function Cb(a,b){if(a.nodeType===1){var c=a.tagName;if(c==="SCRIPT"||c==="STYLE")throw Error("");}a.innerHTML=Ab(b)}
;function Db(){throw Error("unknown trace type");}
;function Eb(a,b){a.src=Ya(b);var c,d;(c=(b=(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)==null?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Fb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Gb(a){return decodeURIComponent(a.replace(/\+/g," "))}
;var Hb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ib(a){return a?decodeURI(a):a}
function Jb(a){return Ib(a.match(Hb)[3]||null)}
function Kb(a){var b=a.match(Hb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Lb(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function Mb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Mb(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function Nb(a){var b=[],c;for(c in a)Mb(c,a[c],b);return b.join("&")}
function Ob(a,b){b=Nb(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function Pb(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var Qb=/#|$/,Rb=/[?&]($|#)/;function Sb(){this.ab=this.ab;this.m=this.m}
Sb.prototype.ab=!1;Sb.prototype.dispose=function(){this.ab||(this.ab=!0,this.Ba())};
Sb.prototype.addOnDisposeCallback=function(a,b){this.ab?b!==void 0?a.call(b):a():(this.m||(this.m=[]),this.m.push(b!==void 0?F(a,b):a))};
Sb.prototype.Ba=function(){if(this.m)for(;this.m.length;)this.m.shift()()};function Tb(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
Tb.prototype.stopPropagation=function(){this.i=!0};
Tb.prototype.preventDefault=function(){this.defaultPrevented=!0};var Ub=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();var Vb=Ha(610401301,!1),Wb=Ha(188588736,Ha(1,!0));function Xb(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var Yb,Zb=D.navigator;Yb=Zb?Zb.userAgentData||null:null;function $b(a){return Vb?Yb?Yb.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function J(a){return Xb().indexOf(a)!=-1}
;function ac(){return Vb?!!Yb&&Yb.brands.length>0:!1}
function bc(){return ac()?!1:J("Opera")}
function cc(){return ac()?!1:J("Trident")||J("MSIE")}
function dc(){return ac()?$b("Microsoft Edge"):J("Edg/")}
function ec(){return J("Safari")&&!(fc()||(ac()?0:J("Coast"))||bc()||(ac()?0:J("Edge"))||dc()||(ac()?$b("Opera"):J("OPR"))||J("Firefox")||J("FxiOS")||J("Silk")||J("Android"))}
function fc(){return ac()?$b("Chromium"):(J("Chrome")||J("CriOS"))&&!(ac()?0:J("Edge"))||J("Silk")}
function gc(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function hc(){var a=Xb();if(cc()){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])a=b[1];else{b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),c[1]=="7.0")if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];a=b}return a}c=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");b=[];for(var d;d=c.exec(a);)b.push([d[1],d[2],d[3]||void 0]);a=gc(b);return bc()?a(["Version","Opera"]):
(ac()?0:J("Edge"))?a(["Edge"]):dc()?a(["Edg"]):J("Silk")?a(["Silk"]):fc()?a(["Chrome","CriOS","HeadlessChrome"]):(a=b[2])&&a[1]||""}
;function ic(){return J("Gecko")&&!(Xb().toLowerCase().indexOf("webkit")!=-1&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge")}
;function jc(){return Vb&&Yb&&Yb.platform?Yb.platform==="Android":J("Android")}
function kc(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function lc(a){lc[" "](a);return a}
lc[" "]=function(){};var mc=cc(),nc=J("Edge"),oc=ic(),pc=jc();function qc(a,b){Tb.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.l=null;a&&this.init(a,b)}
I(qc,Tb);var rc={2:"touch",3:"pen",4:"mouse"};
qc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(oc){a:{try{lc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=typeof a.pointerType==="string"?a.pointerType:rc[a.pointerType]||"";this.state=a.state;this.l=a;a.defaultPrevented&&qc.Fa.preventDefault.call(this)};
qc.prototype.stopPropagation=function(){qc.Fa.stopPropagation.call(this);this.l.stopPropagation?this.l.stopPropagation():this.l.cancelBubble=!0};
qc.prototype.preventDefault=function(){qc.Fa.preventDefault.call(this);var a=this.l;a.preventDefault?a.preventDefault():a.returnValue=!1};var sc="closure_listenable_"+(Math.random()*1E6|0);var tc=0;function uc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.oc=e;this.key=++tc;this.Ub=this.ec=!1}
function vc(a){a.Ub=!0;a.listener=null;a.proxy=null;a.src=null;a.oc=null}
;function wc(a){this.src=a;this.listeners={};this.g=0}
wc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=xc(a,b,d,e);g>-1?(b=a[g],c||(b.ec=!1)):(b=new uc(b,this.src,f,!!d,e),b.ec=c,a.push(b));return b};
wc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=xc(e,b,c,d);return b>-1?(vc(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.g--),!0):!1};
function yc(a,b){var c=b.type;c in a.listeners&&rb(a.listeners[c],b)&&(vc(b),a.listeners[c].length==0&&(delete a.listeners[c],a.g--))}
function xc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ub&&f.listener==b&&f.capture==!!c&&f.oc==d)return e}return-1}
;var zc="closure_lm_"+(Math.random()*1E6|0),Ac={},Bc=0;function Cc(a,b,c,d,e){if(d&&d.once)Dc(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Cc(a,b[f],c,d,e);else c=Ec(c),a&&a[sc]?a.ra(b,c,Ka(d)?!!d.capture:!!d,e):Fc(a,b,c,!1,d,e)}
function Fc(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ka(e)?!!e.capture:!!e,h=Gc(a);h||(a[zc]=h=new wc(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ic();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ub||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Jc(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Bc++}}
function Ic(){function a(c){return b.call(a.src,a.listener,c)}
var b=Kc;return a}
function Dc(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Dc(a,b[f],c,d,e);else c=Ec(c),a&&a[sc]?a.g.add(String(b),c,!0,Ka(d)?!!d.capture:!!d,e):Fc(a,b,c,!0,d,e)}
function Lc(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Lc(a,b[f],c,d,e);else(d=Ka(d)?!!d.capture:!!d,c=Ec(c),a&&a[sc])?a.g.remove(String(b),c,d,e):a&&(a=Gc(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=xc(b,c,d,e)),(c=a>-1?b[a]:null)&&Mc(c))}
function Mc(a){if(typeof a!=="number"&&a&&!a.Ub){var b=a.src;if(b&&b[sc])yc(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Jc(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Bc--;(c=Gc(b))?(yc(c,a),c.g==0&&(c.src=null,b[zc]=null)):vc(a)}}}
function Jc(a){return a in Ac?Ac[a]:Ac[a]="on"+a}
function Kc(a,b){if(a.Ub)a=!0;else{b=new qc(b,this);var c=a.listener,d=a.oc||a.src;a.ec&&Mc(a);a=c.call(d,b)}return a}
function Gc(a){a=a[zc];return a instanceof wc?a:null}
var Nc="__closure_events_fn_"+(Math.random()*1E9>>>0);function Ec(a){if(typeof a==="function")return a;a[Nc]||(a[Nc]=function(b){return a.handleEvent(b)});
return a[Nc]}
;function Oc(){Sb.call(this);this.g=new wc(this);this.B=this;this.u=null}
I(Oc,Sb);Oc.prototype[sc]=!0;Oc.prototype.addEventListener=function(a,b,c,d){Cc(this,a,b,c,d)};
Oc.prototype.removeEventListener=function(a,b,c,d){Lc(this,a,b,c,d)};
function Pc(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.B;c=b.type||b;typeof b==="string"?b=new Tb(b,a):b instanceof Tb?b.target=b.target||a:(e=b,b=new Tb(c,a),wb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&f>=0;f--){var g=b.g=d[f];e=Qc(g,c,!0,b)&&e}b.i||(g=b.g=a,e=Qc(g,c,!0,b)&&e,b.i||(e=Qc(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=Qc(g,c,!1,b)&&e}
Oc.prototype.Ba=function(){Oc.Fa.Ba.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,vc(d[e]);delete a.listeners[c];a.g--}}this.u=null};
Oc.prototype.ra=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function Qc(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ub&&g.capture==c){var h=g.listener,k=g.oc||g.src;g.ec&&yc(a.g,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function Rc(a,b){this.i=a;this.m=b;this.l=0;this.g=null}
Rc.prototype.get=function(){if(this.l>0){this.l--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Sc(a,b){a.m(b);a.l<100&&(a.l++,b.next=a.g,a.g=b)}
;function Tc(){}
;function Uc(){var a=Vc;return document.createRange().createContextualFragment(Ab(Bb(a[0])))}
;function Wc(a,b){var c=b.createRange();c.selectNode(b.body);a=Bb(a);return c.createContextualFragment(Ab(a))}
;function Xc(a){a=a.nodeName;return typeof a==="string"?a:"FORM"}
function Yc(a){a=a.nodeType;return a===1||typeof a!=="number"}
;var Zc="ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" "),
$c=[["A",new Map([["href",{ja:2}]])],["AREA",new Map([["href",{ja:2}]])],["LINK",new Map([["href",{ja:2,conditions:new Map([["rel",new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])}]])],["SOURCE",new Map([["src",{ja:1}],["srcset",{ja:1}]])],["IMG",new Map([["src",{ja:1}],["srcset",{ja:1}]])],["VIDEO",new Map([["src",{ja:1}]])],["AUDIO",new Map([["src",{ja:1}]])]],ad="title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "),
bd=[["dir",{ja:3,conditions:Sa(function(){return new Map([["dir",new Set(["auto","ltr","rtl"])]])})}],
["async",{ja:3,conditions:Sa(function(){return new Map([["async",new Set(["async"])]])})}],
["cite",{ja:2}],["loading",{ja:3,conditions:Sa(function(){return new Map([["loading",new Set(["eager","lazy"])]])})}],
["poster",{ja:2}],["target",{ja:3,conditions:Sa(function(){return new Map([["target",new Set(["_self","_blank"])]])})}]],cd=new function(){var a=new Set(ad),b=new Map(bd),c=new Map($c);
this.l=new Set(Zc);this.g=c;this.i=a;this.m=b};function dd(){this.g=cd}
function ed(a,b){var c=document.implementation.createHTMLDocument("");a=fd(a,b,c);c=c.body;c.appendChild(a);c=(new XMLSerializer).serializeToString(c);c=c.slice(c.indexOf(">")+1,c.lastIndexOf("</"));return Bb(c)}
function fd(a,b,c){b=Wc(b,c);b=document.createTreeWalker(b,5,function(h){if(h.nodeType===3)h=1;else if(Yc(h))if(h=Xc(h),h===null)h=2;else{var k=a.g;h=h!=="FORM"&&(k.l.has(h)||k.g.has(h))?1:2}else h=2;return h});
for(var d=b.nextNode(),e=c.createDocumentFragment(),f=e;d!==null;){var g=void 0;if(d.nodeType===3)g=document.createTextNode(d.data);else if(Yc(d))g=gd(a,d,c);else throw Error("");f.appendChild(g);if(d=b.firstChild())f=g;else for(;!(d=b.nextSibling())&&(d=b.parentNode());)f=f.parentNode}return e}
function gd(a,b,c){var d=Xc(b);c=c.createElement(d);b=b.attributes;for(var e=w(b),f=e.next();!f.done;f=e.next()){var g=f.value;f=g.name;g=g.value;var h=a.g;var k=h.g.get(d);h=(k==null?0:k.has(f))?k.get(f):h.i.has(f)?{ja:1}:(h=h.m.get(f))?h:{ja:0};a:{if(k=h.conditions){k=w(k);for(var l=k.next();!l.done;l=k.next()){var m=w(l.value);l=m.next().value;m=m.next().value;var p=void 0;if((l=(p=b.getNamedItem(l))==null?void 0:p.value)&&!m.has(l)){k=!1;break a}}}k=!0}if(k)switch(h.ja){case 1:hd(c,f,g);break;
case 2:a:if(h=void 0,gb){try{h=new URL(g)}catch(r){h="https:";break a}h=h.protocol}else b:{h=document.createElement("a");try{h.href=g}catch(r){h=void 0;break b}h=h.protocol;h=h===":"||h===""?"https:":h}hd(c,f,h!==void 0&&kb.indexOf(h.toLowerCase())!==-1?g:"about:invalid#zClosurez");break;case 3:hd(c,f,g.toLowerCase());break;case 4:hd(c,f,g)}}return c}
function hd(a,b,c){a.setAttribute(b,c)}
var id=Sa(function(){return new dd});function jd(a){var b=a.split(/\?|#/),c=/\?/.test(a)?"?"+b[1]:"";return{path:b[0],params:c,hash:/#/.test(a)?"#"+(c?b[2]:b[1]):""}}
function kd(a){var b=Ea.apply(1,arguments);if(b.length===0)return $a(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return $a(c)}
function ld(a,b){a=jd(Ya(a).toString());var c=a.params,d=c.length?"&":"?";b.forEach(function(e,f){e=e instanceof Array?e:[e];for(var g=0;g<e.length;g++){var h=e[g];h!==null&&h!==void 0&&(c+=d+encodeURIComponent(f)+"="+encodeURIComponent(String(h)),d="&")}});
return $a(a.path+c+a.hash)}
;function md(a,b){this.width=a;this.height=b}
n=md.prototype;n.clone=function(){return new md(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function nd(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
;function od(a){typeof D.setImmediate!=="function"||D.Window&&D.Window.prototype&&D.Window.prototype.setImmediate==D.setImmediate?(pd||(pd=qd()),pd(a)):D.setImmediate(a)}
var pd;function qd(){var a=D.MessageChannel;typeof a==="undefined"&&typeof window!=="undefined"&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=nd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h=f.location.protocol=="file:"?"*":f.location.protocol+"//"+f.location.host;e=F(function(k){if((h=="*"||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if(typeof a!=="undefined"){var b=new a,c={},d=c;b.port1.onmessage=function(){if(c.next!==void 0){c=c.next;var e=c.Kd;c.Kd=null;e()}};
return function(e){d.next={Kd:e};d=d.next;b.port2.postMessage(0)}}return function(e){D.setTimeout(e,0)}}
;function rd(a){D.setTimeout(function(){throw a;},0)}
;function sd(){this.l=this.g=null}
sd.prototype.add=function(a,b){var c=td.get();c.set(a,b);this.l?this.l.next=c:this.g=c;this.l=c};
sd.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.l=null),a.next=null);return a};
var td=new Rc(function(){return new ud},function(a){return a.reset()});
function ud(){this.next=this.scope=this.g=null}
ud.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
ud.prototype.reset=function(){this.next=this.scope=this.g=null};var vd,wd=!1,xd=new sd;function yd(a,b){vd||zd();wd||(vd(),wd=!0);xd.add(a,b)}
function zd(){if(D.Promise&&D.Promise.resolve){var a=D.Promise.resolve(void 0);vd=function(){a.then(Ad)}}else vd=function(){od(Ad)}}
function Ad(){for(var a;a=xd.remove();){try{a.g.call(a.scope)}catch(b){rd(b)}Sc(td,a)}wd=!1}
;function Bd(a){this.g=0;this.u=void 0;this.m=this.l=this.i=null;this.o=this.s=!1;if(a!=Tc)try{var b=this;a.call(void 0,function(c){Cd(b,2,c)},function(c){Cd(b,3,c)})}catch(c){Cd(this,3,c)}}
function Dd(){this.next=this.context=this.l=this.i=this.g=null;this.m=!1}
Dd.prototype.reset=function(){this.context=this.l=this.i=this.g=null;this.m=!1};
var Ed=new Rc(function(){return new Dd},function(a){a.reset()});
function Fd(a,b,c){var d=Ed.get();d.i=a;d.l=b;d.context=c;return d}
Bd.prototype.then=function(a,b,c){return Gd(this,typeof a==="function"?a:null,typeof b==="function"?b:null,c)};
Bd.prototype.$goog_Thenable=!0;Bd.prototype.cancel=function(a){if(this.g==0){var b=new Hd(a);yd(function(){Id(this,b)},this)}};
function Id(a,b){if(a.g==0)if(a.i){var c=a.i;if(c.l){for(var d=0,e=null,f=null,g=c.l;g&&(g.m||(d++,g.g==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.g==0&&d==1?Id(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):Jd(c),Kd(c,e,3,b)))}a.i=null}else Cd(a,3,b)}
function Ld(a,b){a.l||a.g!=2&&a.g!=3||Md(a);a.m?a.m.next=b:a.l=b;a.m=b}
function Gd(a,b,c,d){var e=Fd(null,null,null);e.g=new Bd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.l=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof Hd?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;Ld(a,e);return e.g}
Bd.prototype.B=function(a){this.g=0;Cd(this,2,a)};
Bd.prototype.D=function(a){this.g=0;Cd(this,3,a)};
function Cd(a,b,c){if(a.g==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.B,f=a.D;if(d instanceof Bd){Ld(d,Fd(e||Tc,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ka(d))try{var k=d.then;if(typeof k==="function"){Nd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.g=b,a.i=null,Md(a),b!=3||c instanceof Hd||Od(a,c))}}
function Nd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Md(a){a.s||(a.s=!0,yd(a.A,a))}
function Jd(a){var b=null;a.l&&(b=a.l,a.l=b.next,b.next=null);a.l||(a.m=null);return b}
Bd.prototype.A=function(){for(var a;a=Jd(this);)Kd(this,a,this.g,this.u);this.s=!1};
function Kd(a,b,c,d){if(c==3&&b.l&&!b.m)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,Pd(b,c,d);else try{b.m?b.i.call(b.context):Pd(b,c,d)}catch(e){Qd.call(null,e)}Sc(Ed,b)}
function Pd(a,b,c){b==2?a.i.call(a.context,c):a.l&&a.l.call(a.context,c)}
function Od(a,b){a.o=!0;yd(function(){a.o&&Qd.call(null,b)})}
var Qd=rd;function Hd(a){Oa.call(this,a)}
I(Hd,Oa);Hd.prototype.name="cancel";function Rd(a,b){Oc.call(this);this.i=a||1;this.l=b||D;this.o=F(this.Zg,this);this.s=G()}
I(Rd,Oc);n=Rd.prototype;n.enabled=!1;n.La=null;n.Zg=function(){if(this.enabled){var a=G()-this.s;a>0&&a<this.i*.8?this.La=this.l.setTimeout(this.o,this.i-a):(this.La&&(this.l.clearTimeout(this.La),this.La=null),Pc(this,"tick"),this.enabled&&(Sd(this),this.start()))}};
n.start=function(){this.enabled=!0;this.La||(this.La=this.l.setTimeout(this.o,this.i),this.s=G())};
function Sd(a){a.enabled=!1;a.La&&(a.l.clearTimeout(a.La),a.La=null)}
n.Ba=function(){Rd.Fa.Ba.call(this);Sd(this);delete this.l};var Td=kc()||J("iPod"),Ud=J("iPad");!J("Android")||fc();fc();var Vd=ec()&&!(kc()||J("iPad")||J("iPod"));var Wd={},Xd=null;
function Yd(a,b){Ja(a);b===void 0&&(b=0);if(!Xd){Xd={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;e<5;e++){var f=c.concat(d[e].split(""));Wd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];Xd[h]===void 0&&(Xd[h]=g)}}}b=Wd[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Zd=typeof Uint8Array!=="undefined",$d=!mc&&typeof btoa==="function";function ae(){return typeof BigInt==="function"}
;var be=0,ce=0;function de(a){var b=a<0;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(ee(c,a)),b=c.next().value,a=c.next().value,c=b);be=c>>>0;ce=a>>>0}
function fe(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else ae()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=Math.floor(a/1E7),a%=1E7),c>=1E7&&(b+=Math.floor(c/1E7),c%=1E7),c=b+ge(c)+ge(a));return c}
function ge(a){a=String(a);return"0000000".slice(a.length)+a}
function he(){var a=be,b=ce;b&2147483648?ae()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(ee(a,b)),a=b.next().value,b=b.next().value,a="-"+fe(a,b)):a=fe(a,b);return a}
function ee(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;var ie=typeof Symbol==="function"&&typeof Symbol()==="symbol";function je(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var ke=je(),le=je("0di"),me=je("2ex");function ne(a){return a.Xg||(a.Xg=je("o_"+a[0]))}
;Math.max.apply(Math,x(Object.values({Ah:1,yh:2,xh:4,Dh:8,Ch:16,Bh:32,sh:64,Fh:128,wh:256,vh:512,zh:1024,th:2048,Eh:4096,uh:8192})));var oe=ie?function(a,b){a[ke]|=b}:function(a,b){a.Da!==void 0?a.Da|=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},pe=ie?function(a,b){a[ke]&=~b}:function(a,b){a.Da!==void 0&&(a.Da&=~b)};
function qe(a,b,c){return c?a|b:a&~b}
var re=ie?function(a){return a[ke]|0}:function(a){return a.Da|0},se=ie?function(a){return a[ke]}:function(a){return a.Da},te=ke?function(a,b){a[ke]=b;
return a}:function(a,b){a.Da!==void 0?a.Da=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function ue(a){oe(a,34);return a}
function ve(a,b){te(b,(a|0)&-14591)}
function we(a,b){te(b,(a|34)&-14557)}
function xe(a){a=a>>14&1023;return a===0?536870912:a}
;var ye={},ze={};function Ae(a){return!(!a||typeof a!=="object"||a.tg!==ze)}
function Be(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
var Ce;function De(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=re(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;te(a,d|1);return!0}
var Ee,Fe=[];te(Fe,55);Ee=Object.freeze(Fe);function Ge(a){if(a&2)throw Error();}
function He(a,b,c){this.i=0;this.g=a;this.l=b;this.m=c}
He.prototype.next=function(){if(this.i<this.g.length){var a=this.g[this.i++];return{done:!1,value:this.l?this.l.call(this.m,a):a}}return{done:!0,value:void 0}};
He.prototype[Symbol.iterator]=function(){return new He(this.g,this.l,this.m)};
function Ie(){}
Object.freeze(new function(){});
Object.freeze(new Ie);Object.freeze(new Ie);var Je;function Ke(a){a=Error(a);Fb(a,"warning");return a}
;function Le(a){return a.displayName||a.name||"unknown type name"}
var Me=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ne(a){var b=typeof a;return b==="number"?Number.isFinite(a):b!=="string"?!1:Me.test(a)}
function Oe(a){if(a!=null){var b=!!b;if(!Ne(a))throw Ke("int64");typeof a==="string"?a=Pe(a):b?(Ne(a),a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),Qe(b)?a=b:(de(a),a=he()))):a=Re(a)}return a}
function Qe(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function Re(a){Ne(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){de(a);var b=be,c=ce;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a}
function Pe(a){Ne(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));if(!Qe(a)){if(a.length<16)de(Number(a));else if(ae())a=BigInt(a),be=Number(a&BigInt(4294967295))>>>0,ce=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+(a[0]==="-");ce=be=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),ce*=1E6,be=be*1E6+d,be>=4294967296&&(ce+=Math.trunc(be/4294967296),ce>>>=0,be>>>=0);b&&(b=w(ee(be,ce)),a=b.next().value,
b=b.next().value,be=a,ce=b)}a=he()}return a}
function Se(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Te(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Le(b)+" but got "+(a&&Le(a.constructor)));return a}
function Ue(a,b,c,d){if(a!=null&&typeof a==="object"&&a.gd===ye)return a;if(!Array.isArray(a))return c?d&2?(a=b[le])?b=a:(a=new b,ue(a.L),b=b[le]=a):b=new b:b=void 0,b;var e=c=re(a);e===0&&(e|=d&32);e|=d&2;e!==c&&te(a,e);return new b(a)}
;var Ve;
function K(a,b,c){a==null&&(a=Ve);Ve=void 0;if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=re(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(Be(c[f])){d|=256;b=f-(+!!(d&512)-1);if(b>=1024)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(b>1024)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}te(a,d);return a}
;var We=function(){try{var a=function(){return ma(Map,[],this.constructor)};
z(a,Map);lc(new a);return!1}catch(b){return!0}}();
function Xe(){this.g=new Map}
n=Xe.prototype;n.get=function(a){return this.g.get(a)};
n.set=function(a,b){this.g.set(a,b);this.size=this.g.size;return this};
n.delete=function(a){a=this.g.delete(a);this.size=this.g.size;return a};
n.clear=function(){this.g.clear();this.size=this.g.size};
n.has=function(a){return this.g.has(a)};
n.entries=function(){return this.g.entries()};
n.keys=function(){return this.g.keys()};
n.values=function(){return this.g.values()};
n.forEach=function(a,b){return this.g.forEach(a,b)};
Xe.prototype[Symbol.iterator]=function(){return this.entries()};
var Ye=function(){function a(){return ma(Map,[],this.constructor)}
if(We)return Object.setPrototypeOf(Xe.prototype,Map.prototype),Object.defineProperties(Xe.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Xe;z(a,Map);return a}();
function Ze(a){return a}
function $e(a,b,c,d){c=c===void 0?Ze:c;d=d===void 0?Ze:d;var e=Ye.call(this)||this;var f=re(a);f|=64;te(a,f);e.Yb=f;e.Hc=b;e.Qb=c;e.Ad=e.Hc?af:d;for(var g=0;g<a.length;g++){var h=a[g],k=c(h[0],!1,!0),l=h[1];b?l===void 0&&(l=null):l=d(h[1],!1,!0,void 0,void 0,f);Ye.prototype.set.call(e,k,l)}return e}
z($e,Ye);function bf(a){if(a.Yb&2)throw Error("Cannot mutate an immutable Map");}
function cf(a,b){b=b===void 0?df:b;if(a.size!==0)return ef(a,b)}
function ef(a,b){b=b===void 0?df:b;var c=[];a=Ye.prototype.entries.call(a);for(var d;!(d=a.next()).done;)d=d.value,d[0]=b(d[0]),d[1]=b(d[1]),c.push(d);return c}
n=$e.prototype;n.clear=function(){bf(this);Ye.prototype.clear.call(this)};
n.delete=function(a){bf(this);return Ye.prototype.delete.call(this,this.Qb(a,!0,!1))};
n.entries=function(){var a=Array.from(Ye.prototype.keys.call(this));return new He(a,ff,this)};
n.keys=function(){return Ye.prototype.keys.call(this)};
n.values=function(){var a=Array.from(Ye.prototype.keys.call(this));return new He(a,$e.prototype.get,this)};
n.forEach=function(a,b){var c=this;Ye.prototype.forEach.call(this,function(d,e){a.call(b,c.get(e),e,c)})};
n.set=function(a,b){bf(this);a=this.Qb(a,!0,!1);return a==null?this:b==null?(Ye.prototype.delete.call(this,a),this):Ye.prototype.set.call(this,a,this.Ad(b,!0,!0,this.Hc,!1,this.Yb))};
n.has=function(a){return Ye.prototype.has.call(this,this.Qb(a,!1,!1))};
n.get=function(a){a=this.Qb(a,!1,!1);var b=Ye.prototype.get.call(this,a);if(b!==void 0){var c=this.Hc;return c?(c=this.Ad(b,!1,!0,c,this.Qh,this.Yb),c!==b&&Ye.prototype.set.call(this,a,c),c):b}};
$e.prototype[Symbol.iterator]=function(){return this.entries()};
$e.prototype.toJSON=void 0;$e.prototype.tg=ze;function af(a,b,c,d,e,f){b&&Te(a,d);a=Ue(a,d,c,f);e&&(a=gf(a));f&2&&re(a.L);return a}
function df(a){return a}
function ff(a){return[a,this.get(a)]}
;function hf(a,b){return jf(b)}
function jf(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(De(a,void 0,0))return}else{if(Zd&&a!=null&&a instanceof Uint8Array){if($d){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Yd(a);return a}if(a instanceof $e)return cf(a)}}return a}
;function kf(a,b,c){a=Array.prototype.slice.call(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function lf(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=De(a,void 0,0)?void 0:e&&re(a)&2?a:mf(a,b,c,d!==void 0,e);else if(Be(a)){var f={},g;for(g in a)f[g]=lf(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function mf(a,b,c,d,e){var f=d||c?re(a):0;d=d?!!(f&32):void 0;a=Array.prototype.slice.call(a);for(var g=0;g<a.length;g++)a[g]=lf(a[g],b,c,d,e);c&&c(f,a);return a}
function nf(a){return lf(a,of,void 0,void 0,!1)}
function of(a){return a.gd===ye?pf(a):a instanceof $e?cf(a,nf):jf(a)}
;function qf(a,b,c){c=c===void 0?we:c;if(a!=null){if(Zd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=re(a);d&2||(b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16))),a=b?te(a,(d|34)&-12293):mf(a,qf,d&4?we:c,!0,!0));return a}a.gd===ye?(c=a.L,d=se(c),a=d&2?a:rf(a,c,d,!0)):a instanceof $e&&!(a.Yb&2)&&(c=ue(ef(a,qf)),a=new $e(c,a.Hc,a.Qb,a.Ad));return a}}
function rf(a,b,c,d){a=a.constructor;b=sf(b,c,d);re(b);Ve=b;b=new a(b);Ve=void 0;return b}
function sf(a,b,c){var d=c||b&2?we:ve,e=!!(b&32);a=kf(a,b,function(f){return qf(f,e,d)});
oe(a,32|(c?2:0));return a}
function gf(a){var b=a.L,c=se(b);return c&2?rf(a,b,c,!1):a}
;function tf(a,b){a=a.L;return uf(a,se(a),b)}
function vf(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function uf(a,b,c,d){if(c===-1)return null;var e=xe(b);if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(vf(a,b,e,c)&&me!=null){var g;a=(g=Je)!=null?g:Je={};g=a[me]||0;g>=4||(a[me]=g+1,g=Error(),Fb(g,"incident"),rd(g))}return d}return vf(a,b,e,c)}}
function wf(a,b,c){var d=a.L,e=se(d);Ge(e);xf(d,e,b,c);return a}
function xf(a,b,c,d,e){Be(d);var f=xe(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(d==null)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&te(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function yf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function zf(a,b,c,d){a=a.L;var e=se(a);Ge(e);var f=Af(a,e,c);if(d==null)if(f===b)Bf(ne(c),a,0);else return;else f!==b&&(f&&(e=xf(a,e,f)),Bf(ne(c),a,b));xf(a,e,b,d)}
function Bf(a,b,c){ie||a in b?b[a]=c:Object.defineProperty(b,a,{value:c,writable:!0})}
function Af(a,b,c){var d=ne(c),e=a[d];if(e!=null)return e;e=0;for(var f=c.length-1;f>=0;f--){var g=c[f];e===0&&uf(a,b,g)!=null?e=g:e!==0&&(b=xf(a,b,g))}Bf(d,a,e);return e}
function Cf(a,b,c){var d=d===void 0?!1:d;var e=a.L;var f=se(e),g=uf(e,f,c,d);b=Ue(g,b,!1,f);b!==g&&b!=null&&xf(e,f,c,b,d);e=b;if(e==null)return e;a=a.L;f=se(a);f&2||(g=gf(e),g!==e&&(e=g,xf(a,f,c,e,d)));return e}
function Df(a,b,c,d){d!=null?Te(d,b):d=void 0;return wf(a,c,d)}
function Ef(a,b){a=qe(a,2,!!(2&b));a=qe(a,32,!0);return a=qe(a,2048,!1)}
function Ff(a,b){var c=!0;32&b&&c||(a=qe(a,32,!1));return a}
function Gf(a,b,c,d){a=a.L;var e=se(a);Ge(e);var f,g=!!(2&e),h=g?1:2;f&&(f=!g);g=uf(a,e,b);g=Array.isArray(g)?g:Ee;var k=re(g),l=!!(4&k);if(!l){var m=k;m===0&&(m=Ef(m,e));m=qe(m,1,!0);k=g;var p=e,r=!!(2&m);r&&(p=qe(p,2,!0));for(var q=!r,u=!0,t=0,y=0;t<k.length;t++){var C=Ue(k[t],c,!1,p);if(C instanceof c){if(!r){var P=!!(re(C.L)&2);q&&(q=!P);u&&(u=P)}k[y++]=C}}y<t&&(k.length=y);m=qe(m,4,!0);m=qe(m,16,u);m=qe(m,8,q);te(k,m);r&&Object.freeze(k);k=m}if(f&&!(8&k||!g.length&&(h===1||h===4&&32&k))){yf(k)&&
(g=Array.prototype.slice.call(g),k=Ef(k,e),e=xf(a,e,b,g));f=g;for(m=0;m<f.length;m++)p=f[m],r=gf(p),p!==r&&(f[m]=r);k=qe(k,8,!0);k=qe(k,16,!f.length);te(f,k)}yf(k)||(f=k,(m=h===1||h===4&&!!(32&k))?(p=!!(32&k),k=qe(k,!g.length||16&k&&(!l||p)?2:2048,!0)):k=Ff(k,e),k!==f&&te(g,k),m&&Object.freeze(g));h===2&&yf(k)&&(g=Array.prototype.slice.call(g),k=Ef(k,e),k=Ff(k,e),te(g,k),xf(a,e,b,g));b=g;c=d!=null?Te(d,c):new c;b.push(c);re(c.L)&2?pe(b,8):pe(b,16)}
function Hf(a,b){var c=0;c=c===void 0?0:c;a=tf(a,b);a=a==null?a:Number.isFinite(a)?a|0:void 0;return a!=null?a:c}
function If(a,b){var c=a.L;b=Af(c,se(c),Jf)===b?b:-1;a=tf(a,b);return a==null||typeof a==="string"?a:void 0}
function L(a,b,c){return wf(a,b,Se(c))}
function Kf(a,b,c){if(c!=null){if(!Number.isFinite(c))throw Ke("enum");c|=0}return wf(a,b,c)}
;function Lf(a){return a}
function Mf(a,b,c,d){return Nf(a,b,c,d,Of,Pf)}
function Qf(a,b,c,d){return Nf(a,b,c,d,Rf,Sf)}
function Nf(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,m=0,p=c.length-1;p>=0;p--){var r=c[p];d&&p===c.length-1&&r===d||(l++,r!=null&&k++)}if(d)for(var q in d)p=+q,isNaN(p)||(m+=Tf(p),h++,p>g&&(g=p));l=e(l,k)+f(h,g,m);q=k;p=h;r=g;for(var u=m,t=c.length-1;t>=0;t--){var y=c[t];if(!(y==null||d&&t===c.length-1&&y===d)){y=t-b;var C=e(y,q)+f(p,r,u);C<l&&(a=1+y,l=C);p++;q--;u+=Tf(y);r=Math.max(r,y)}}b=e(0,0)+f(p,r,u);b<l&&(a=0,l=b);if(d){p=h;r=g;u=m;q=k;for(var P in d)d=+P,isNaN(d)||d>=
1024||(p--,q++,u-=P.length,g=e(d,q)+f(p,r,u),g<l&&(a=1+d,l=g))}return a}
function Sf(a,b,c){return c+a*3+(a>1?a-1:0)}
function Rf(a,b){return(a>1?a-1:0)+(a-b)*4}
function Pf(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function Of(a){return 40+4*a}
function Tf(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
function Uf(a){switch(a){case Lf:case Mf:case Qf:break;default:throw Error("ipsel");}}
;function M(a,b,c){this.L=K(a,b,c)}
function pf(a){var b=b===void 0?Lf:b;Uf(b);return a.toJSON()}
M.prototype.toJSON=function(){if(Ce)var a=Vf(this,this.L,!1);else a=mf(this.L,of,void 0,void 0,!1),a=Vf(this,a,!0);return a};
M.prototype.clone=function(){var a=this.L;return rf(this,a,se(a),!1)};
M.prototype.gd=ye;M.prototype.toString=function(){return Vf(this,this.L,!1).toString()};
function Vf(a,b,c){var d=Wb?void 0:a.constructor.hb;c=se(c?a.L:b);a=b.length;if(!a)return b;var e=b[a-1],f=Be(e);f?a--:e=void 0;c=+!!(c&512)-1;var g=a-c,h=g!==g,k=h?Array.prototype.slice.call(b,0,a):b;if(f||h){a:{var l=k;var m=e;f={};var p=!1;if(h)for(var r=Math.max(0,g+c);r<l.length;r++){var q=l[r],u=r-c;q==null||De(q,d,u)||Ae(q)&&q.size===0||(l[r]=void 0,f[u]=q,p=!0)}if(m)for(var t in m)if(r=+t,isNaN(r))f[t]=m[t];else if(q=m[t],Array.isArray(q)&&(De(q,d,+t)||Ae(q)&&q.size===0)&&(q=null),q==null&&
(p=!0),r<g&&h){p=!0;q=r+c;for(u=l.length;u<=q;u++)l.push(void 0);l[q]=m[r]}else q!=null&&(f[t]=q);if(p){for(var y in f){m=f;break a}m=null}}l=m==null?e!=null:m!==e}h&&(a=k.length);for(var C;a>0;a--){y=a-1;t=k[y];y-=c;if(!(t==null||De(t,d,y)||Ae(t)&&t.size===0))break;C=!0}if(k===b&&!l&&!C)return k;h?C&&(k.length=a):k=Array.prototype.slice.call(k,0,a);m&&k.push(m);return k}
;Object.freeze({});var Wf=window;function Xf(){return Vb&&Yb?Yb.mobile:!(Vb&&Yb?!Yb.mobile&&(J("iPad")||J("Android")||J("Silk")):J("iPad")||J("Android")&&!J("Mobile")||J("Silk"))&&(J("iPod")||J("iPhone")||J("Android")||J("IEMobile"))}
;function Yf(a){var b=Zf;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function $f(){var a=[];Yf(function(b){a.push(b)});
return a}
var Zf={hh:"allow-forms",ih:"allow-modals",jh:"allow-orientation-lock",kh:"allow-pointer-lock",lh:"allow-popups",mh:"allow-popups-to-escape-sandbox",nh:"allow-presentation",oh:"allow-same-origin",ph:"allow-scripts",qh:"allow-top-navigation",rh:"allow-top-navigation-by-user-activation"},ag=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return $f()});
function bg(){var a=cg(),b={};pb(ag(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function cg(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function dg(){var a=document.body||document.documentElement;a:{var b=a.nodeType==9?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction}
;var eg=(new Date).getTime();function fg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function gg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var r=g,q=0;q<64;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;q<80;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var u=e[1],t=e[2],y=e[3],C=e[4];for(q=0;q<80;q++){if(q<40)if(q<20){var P=y^u&(t^y);var ja=1518500249}else P=u^t^y,ja=1859775393;else q<60?(P=u&t|y&(u|t),ja=2400959708):(P=u^t^y,ja=3395469782);P=((p<<5|p>>>27)&4294967295)+P+C+ja+r[q]&4294967295;C=y;y=t;t=(u<<30|u>>>2)&4294967295;u=p;p=P}e[0]=e[0]+p&4294967295;e[1]=e[1]+u&4294967295;
e[2]=e[2]+t&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+C&4294967295}
function c(p,r){if(typeof p==="string"){p=unescape(encodeURIComponent(p));for(var q=[],u=0,t=p.length;u<t;++u)q.push(p.charCodeAt(u));p=q}r||(r=p.length);q=0;if(l==0)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[l++]=p[q++],m++,l==64)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var q=63;q>=56;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;q<5;q++)for(var u=24;u>=0;u-=8)p[r++]=e[q]>>u&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ef:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function hg(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,ig(fg(d),a,c||null)].join(" "):null}
function ig(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],pb(d,function(h){e.push(h)}),jg(e.join(" "));
var f=[],g=[];pb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];pb(d,function(h){e.push(h)});
a=jg(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function jg(a){var b=gg();b.update(a);return b.ef().toLowerCase()}
;var kg={};function lg(a){this.g=a||{cookie:""}}
n=lg.prototype;n.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{ed:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.vi;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ed}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Qa(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{ed:0,path:b,domain:c});return d};
n.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Qa(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var mg=new lg(typeof document=="undefined"?null:document);function ng(a){return!!kg.FPA_SAMESITE_PHASE2_MOD||!(a===void 0||!a)}
function og(a){a=a===void 0?!1:a;var b=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__OVERRIDE_SID;ng(a)&&(b=b||D.__1PSAPISID);if(b)return!0;if(typeof document!=="undefined"){var c=new lg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");ng(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function pg(a,b,c,d){(a=D[a])||typeof document==="undefined"||(a=(new lg(document)).get(b));return a?hg(a,c,d):null}
function qg(a){var b=b===void 0?!1:b;var c=fg(String(D.location.href)),d=[];if(og(b)){c=c.indexOf("https:")==0||c.indexOf("chrome-extension:")==0||c.indexOf("moz-extension:")==0;var e=c?D.__SAPISID:D.__APISID;e||typeof document==="undefined"||(e=new lg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?hg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&ng(b)&&((b=pg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=pg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return d.length==0?null:d.join(" ")}
;function rg(a){Oc.call(this);var b=this;this.A=this.i=0;this.Ea=a!=null?a:{Ha:function(e,f){return setTimeout(e,f)},
xa:function(e){clearTimeout(e)}};
var c,d;this.l=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return A(e,sg(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||tg(this)}
z(rg,Oc);function ug(){var a=vg;rg.g||(rg.g=new rg(a));return rg.g}
rg.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ea.xa(this.A);delete rg.g};
rg.prototype.ya=function(){return this.l};
function tg(a){a.A=a.Ea.Ha(function(){var b;return B(function(c){if(c.g==1)return a.l?((b=window.navigator)==null?0:b.onLine)?c.N(3):A(c,sg(a),3):A(c,sg(a),3);tg(a);c.g=0})},3E4)}
function sg(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,va(h,2,3),d&&(a.i=a.Ea.Ha(function(){d.abort()},b||2E4)),A(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.B=[h.i];h.o=0;h.s=0;a.s=void 0;a.i&&(a.Ea.xa(a.i),a.i=0);g!==a.l&&(a.l=g,a.l?Pc(a,"networkstatus-online"):Pc(a,"networkstatus-offline"));c(g);xa(h);break;case 2:wa(h),g=!1,h.N(3)}})})}
;var wg=/^[6-9]$/,xg=/<\/?(?:b|em)>/gi;function yg(a){this.g=a}
var zg=new yg({});function Ag(a){a=Bg(a);return Bb(a)}
function Cg(a){a=Bg(a);return $a(a)}
function Bg(a){return a===null?"null":a===void 0?"undefined":a}
;function Dg(a,b,c,d,e,f){this.A=a instanceof zb?a:Ag(a);this.g=b;this.u=c;this.s=d;this.i=e;this.m=f||zg;this.o=!1;switch(this.s){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 94:case 92:case 93:case 411:case 410:case 71:this.o=!0}}
Dg.prototype.getHtml=function(){return Ab(this.A).toString()};
Dg.prototype.l=function(){return this.u};
Dg.prototype.getType=function(){return this.s};var Eg=/^\s/,Fg=/\s+/,Gg=/\s+/g,Hg=/^\s+|\s+$/g,Ig=/^\s+$/,Jg=/<[^>]*>/g,Kg=/&nbsp;/g,Lg=/&#x3000;/g,Mg=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],Ng=document.getElementsByTagName("head")[0],Og=0,Pg=1;function Qg(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function Rg(a,b){function c(){return b}
b===void 0&&(b=a);return{Ob:c,Yd:function(){return a},
zf:c,ci:function(){return a<b},
equals:function(d){return d&&a==d.Yd()&&b==d.zf()}}}
function Sg(a,b,c,d){if(b==null||b===""){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function Tg(a,b){var c=[],d;for(d in a)Sg(d,a[d],c,b);return c.join("&")}
function Ug(a){var b={},c=Math.max(a.indexOf("?"),a.indexOf("#"));a=a.substr(c+1);if(c>=0&&a){c=a.split("&");a=0;for(var d;a<c.length;++a)if(d=c[a])d=d.split("="),b[d[0]]=d[1]||""}return b}
function Vg(a){return!!a&&!Ig.test(a)}
function Wg(a){for(var b=Mg.length,c=0;c<b;c+=2)a=a.replace(Mg[c],Mg[c+1].source);return a}
function Xg(a){for(var b=Mg.length,c=0;c<b;c+=2)a=a.replace(Mg[c+1],Mg[c].source);a=a.replace(Kg," ");return a.replace(Lg,"\u3000")}
function Yg(a,b){return a&&(a.indexOf(" ")>-1||Fg.test(a))?(a=a.replace(Gg," "),a.replace(b?Hg:Eg,"")):a}
function Zg(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function $g(){}
function ah(a){var b=bh;if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1}
function ch(){return 0}
function dh(a){var b={},c;for(c in a)b[c]=a[c];return b}
function eh(a,b){a+="";b.length&&(a+="i"+b.join("i"),a+="k"+(ob(b,173)!=-1?14:1));return a}
;function fh(a,b,c){this.g=a;this.J=b;this.D=c||"";this.u=(Og++).toString(36);this.B=this.g.toLowerCase();this.l=Yg(this.B);this.F={};this.A={};this.o=this.I=this.m=!1;this.H=1}
fh.prototype.getId=function(){return this.u};
function gh(a){a=parseInt(a.u,36);return isNaN(a)?-1:a}
function hh(a,b,c,d){a.m||(a.F[b]=c,d&&(a.A[b]=c))}
;function ih(a,b,c,d,e,f){this.l=a;this.g=b;this.i=c;this.o=d;this.m=e;this.u=f;this.s=!0;this.g?this.g.length&&this.g[0].getType()==33&&(this.m=this.s=!1):this.g=[];this.i||(this.i=zg)}
ih.prototype.getType=function(){return this.s};function jh(){}
jh.prototype.Dd=function(){};
jh.prototype.redirect=function(){};
jh.prototype.Cd=function(){return""};
jh.prototype.me=function(){};function kh(){this.l={};this.g={}}
kh.prototype.set=function(a,b){this.l[a]=b};
kh.prototype.has=function(a){return!!this.l[a]};
function lh(a,b,c){b in a.g||(a.g[b]=[]);a.g[b].push(c)}
;function mh(a,b,c,d,e,f){this.s=a;this.A=b;this.B=c;this.o=d;this.i=e;this.config_=f;this.u={};this.m={};this.g=[];this.l=!1;a=this.A;c=a.l;for(var g in c)if(d=g,b=c[d])this.u[d]=b,this.g.push(b);a=a.g;for(g in a){d=g;b=a[d];c=d;d=b;e=this.m[c]||[];for(f=0;f<d.length;++f)if(b=d[f])e.push(b),this.g.push(b);this.m[c]=e}this.g.sort(nh);for(g=0;a=this.g[g++];)a.sa(this.B,this.o);this.s.me(this.o);this.o.Ye();for(g=0;a=this.g[g++];)a.O(this);for(g=0;a=this.g[g++];)a.ga(this.config_);for(g=0;a=this.g[g++];)a.nb(this.config_);
for(g=0;a=this.g[g++];)a.R(this.config_);this.l=!0}
function oh(a){if(a.l){for(var b=0,c;c=a.g[b++];)c.Ga();a.l=!1}}
mh.prototype.isActive=function(){return this.l};
mh.prototype.get=function(a){return this.u[a]};
function ph(a,b){return a.m[b]||[]}
function nh(a,b){a=ah(a.getType());b=ah(b.getType());return a<0?1:b<0?-1:a-b}
var bh=[127,551,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,143,138,144,139,140,135,136];function N(a){this.l=a}
n=N.prototype;n.sa=function(){};
n.O=function(){};
n.ga=function(){};
n.nb=function(){};
n.R=function(){};
n.getType=function(){return this.l};
n.Ga=function(){};function qh(){this.l=149;this.g={};this.i=0}
z(qh,N);n=qh.prototype;n.O=function(a){this.A=a.get(127)};
n.R=function(a){if(a.connectionType==this.qb()){this.config_=a;var b=this.A.i,c="https:"==document.location.protocol;this.s=b.protocol||"http"+(c?"s":"")+"://";this.o=b.host||"clients1."+a.ic;this.u=b.Ac;this.m=b.He}};
n.Ga=function(){rh(this);this.i=0};
n.Fe=function(a,b,c){sh(this,a.getId(),a.g,b,c);return!0};
n.qb=function(){return 1};
n.Tc=function(){return this.i};
n.Pc=function(a){var b=this.g[a];b&&(th(b),delete this.g[a])};
function sh(a,b,c,d,e){a.config_.Od||rh(a);var f=new XMLHttpRequest;c=a.s+a.o+a.u+"?"+(a.m?a.m+"&":"")+(d?d+"&":"")+"q="+encodeURIComponent(c)+"&xhr=t&xssi=t";f.open("GET",c,!0);f.withCredentials=!0;a.config_.visitorData&&f.setRequestHeader("X-Goog-Visitor-Id",a.config_.visitorData);f.onreadystatechange=function(){if(f.readyState==4){switch(f.status){case 403:a.i=1E3;break;case 302:case 500:case 502:case 503:++a.i;break;case 200:var g=f.responseText;g.lastIndexOf(")]}'\n",0)==0&&(g=g.substring(5));
e(JSON.parse(g));default:a.i=0}a.Pc(b)}};
a.g[b]=f;f.send(null)}
function rh(a){for(var b in a.g)th(a.g[b]);a.g={}}
function th(a){a.onreadystatechange=$g;var b=a.readyState;b!=0&&b!=4&&a.abort()}
;var uh;function vh(){this.l=153}
z(vh,N);function wh(a,b){a.length&&b.push({getType:function(){return 507},
position:2})}
;function xh(a){this.o=a}
xh.prototype.getType=function(){return this.o};
xh.prototype.s=function(){return!0};function yh(a){this.l=152;this.D=a}
I(yh,N);yh.prototype.Ab=$g;var zh=cc(),Ah;if(Ah=zh){for(var Bh=hc(),Ch=0,Dh=Qa(String(Bh)).split("."),Eh=Qa("10").split("."),Fh=Math.max(Dh.length,Eh.length),Gh=0;Ch==0&&Gh<Fh;Gh++){var Hh=Dh[Gh]||"",Ih=Eh[Gh]||"";do{var Jh=/(\d*)(\D*)(.*)/.exec(Hh)||["","","",""],Kh=/(\d*)(\D*)(.*)/.exec(Ih)||["","","",""];if(Jh[0].length==0&&Kh[0].length==0)break;Ch=Ra(Jh[1].length==0?0:parseInt(Jh[1],10),Kh[1].length==0?0:parseInt(Kh[1],10))||Ra(Jh[2].length==0,Kh[2].length==0)||Ra(Jh[2],Kh[2]);Hh=Jh[3];Ih=Kh[3]}while(Ch==0)}Ah=Ch>=0}
var Lh=Ah,Mh=ic();Mh&&hc();var Nh=bc(),Oh=Xb().toLowerCase().indexOf("webkit")!=-1&&!J("Edge");ec();var Ph=fc(),Qh=Xf()&&ec(),Rh=jc(),Sh=Vb&&Yb&&Yb.platform?Yb.platform==="macOS":J("Macintosh"),Th=Xf();var Uh;xb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function Vh(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}
function Wh(a,b,c){Array.isArray(c)&&(c=c.join(" "));var d="aria-"+b;c===""||c==void 0?(Uh||(c={},Uh=(c.atomic=!1,c.autocomplete="none",c.dropeffect="none",c.haspopup=!1,c.live="off",c.multiline=!1,c.multiselectable=!1,c.orientation="vertical",c.readonly=!1,c.relevant="additions text",c.required=!1,c.sort="none",c.busy=!1,c.disabled=!1,c.hidden=!1,c.invalid="false",c)),c=Uh,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)}
function Xh(a){var b=a.getAttribute("aria-activedescendant");return(a.nodeType==9?a:a.ownerDocument||a.document).getElementById(b==null||b==void 0?"":String(b))}
function Yh(a,b){var c="";b&&(c=b.id);Wh(a,"activedescendant",c)}
;var Zh=document.documentElement.style.opacity!=void 0,$h={rtl:"right",ltr:"left"};function ai(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(d){}}
function bi(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(d){a=null}}return{Ec:b,Ta:c}}
function ci(a){try{return di(a).activeElement==a}catch(b){}return!1}
function O(a,b){a=document.createElement(a);b&&(a.className=b);return a}
function Q(a){return O("div",a)}
function ei(a,b){a.innerHTML!=b&&Cb(a,Ag(b))}
function fi(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=$h[b])}
function gi(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function hi(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return gi(a)}
function ii(a){var b=O("a");nb(b,"#ifl");b.className="sbsb_i sbqs_b";a.appendChild(b);return b}
function ji(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{Oe:c,de:b}}
function di(a){return a?a.ownerDocument||a.document:window.document}
function ki(a){return a?(a=di(a),a.defaultView||a.parentWindow):window}
function li(){return Zh?"opacity":"filter"}
function mi(a){return Zh?a+"":"alpha(opacity="+Math.floor(a*100)+")"}
;function ni(){this.o=507;oi(this)}
z(ni,xh);ni.prototype.g=function(){return this.i};
function pi(a,b,c,d){oi(a,c,d);Cb(a.l,ed(id,b))}
function oi(a,b,c){a.i=Q("sbfl_a");a.l=Q("sbfl_b");a.l.onclick=function(){c&&c.openReportForm&&c.openReportForm(b)};
a.i.appendChild(a.l)}
;var qi=[30,35,33,41],ri=[39,10,21];function si(a,b){yh.call(this,507);this.m=a;this.g=b}
z(si,yh);si.prototype.O=function(a){this.i=a.get(128)};
si.prototype.sa=function(a,b){b.addRule(".sbfl_a","font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0");b.addRule(".sbsb_c[dir=ltr] .sbfl_a","text-align:right");b.addRule(".sbsb_c[dir=rtl] .sbfl_a","text-align:left");b.addRule(".sbfl_a:hover","color:#333;cursor:pointer");b.addRule(".sbfl_b","background:rgba(255,255,255,.9)")};
si.prototype.Ib=function(){return new ni};
function ti(a){return a.map(function(b){return{label:b.g}})}
si.prototype.Bb=function(a,b){a=qb(this.i.m,function(c){a:if(qi.indexOf(c.getType())>=0)c=!1;else{c=c.i||[];for(var d=w(ri),e=d.next();!e.done;e=d.next())if(c.indexOf(e.value)>=0){c=!1;break a}c=!0}return c},this);
a.length>0?(pi(b,this.m,ti(a),this.g),b.g().style.display=""):b.g().style.display="none"};var Vc=ha(['<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16667 14.1667H7.50001V6.66667H9.16667V14.1667ZM12.5 6.66667H10.8333V14.1667H12.5V6.66667ZM15.8333 3.33333V4.16667H15V17.5H5.00001V4.16667H4.16667V3.33333H7.50001V2.5H12.5V3.33333H15.8333ZM14.1667 4.16667H5.83334V16.6667H14.1667V4.16667Z" fill="#030303"/></svg>']),ui=ha(["#ps"]);
function vi(a,b,c,d,e,f,g){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=f;this.Y=g;this.B=!0;this.A=!1;this.i=Q("sbpqs_d");this.u=Q();this.P=O("span","sbpqs_a");this.J&&(this.l=O("a"),nb(this.l,fb(ui)),this.l.className="sbsb_i",this.I=Q("fr sbpqs_b"),this.u.appendChild(this.I),this.I.appendChild(this.l),this.m=Q("sbpqs_c"),Cb(this.m,ed(id,this.Y)),Vh(this.m,"alert"));this.u.appendChild(this.P);this.i.appendChild(this.u);this.m&&this.i.appendChild(this.m)}
z(vi,xh);vi.prototype.g=function(){return this.i};
vi.prototype.s=function(){return this.B};
function wi(a,b,c,d,e){a.A=!1;a.B=!0;a.ca=c;a.F=d;a.u.style.display="";Cb(a.P,ed(id,b));a.J&&(a.m.style.display="none",b=Uc(),a.l.textContent="",a.l.appendChild(b),a.l.onclick=function(f){xi(a,f)},a.l.title=e)}
function xi(a,b){a.A=!0;yi(a.X,a.ca,function(){a.A&&(zi(a.W),a.i.onmouseover=a.i.onmouseout=a.i.onclick=null,a.u.style.display="none",a.m.style.display="",a.D.i==a.F&&Ai(a.H),a.D.g==a.F&&(Bi(a.D),Ci(a.H)),a.B=!1)});
hi(b)}
;function Di(){yh.call(this,35)}
z(Di,yh);n=Di.prototype;n.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
n.O=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
n.ga=function(a){this.R(a)};
n.R=function(a){this.A=a.vd;this.s=a.qd;this.o=a.pd};
n.Ib=function(){return new vi(this.u,this.m,this.g,this.i,this.B,this.A,this.o)};
n.Bb=function(a,b){wi(b,a.getHtml(),a.g,a.l(),this.s)};
n.Ab=function(a,b,c){Ei(c,b.g,1)};function Fi(a,b,c,d,e,f,g,h){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=g;this.Y=h;this.B=!0;this.A=!1;this.l=Q("sbpqs_d");this.m=Q();this.P=O("span","sbpqs_a");this.J&&(this.u=O("a"),nb(this.u,"#ps"),this.u.className="sbsb_i",this.I=Q("fr sbpqs_b"),this.m.appendChild(this.I),this.I.appendChild(this.u),this.i=Q("sbpqs_c"),Cb(this.i,ed(id,this.Y)),Vh(this.i,"alert"));this.m.appendChild(this.P);this.l.appendChild(this.m);this.i&&this.l.appendChild(this.i)}
z(Fi,xh);Fi.prototype.g=function(){return this.l};
Fi.prototype.s=function(){return this.B};
Fi.prototype.ea=function(a){this.A=!0;yi(this.X,this.ca,F(this.na,this));return hi(a)};
Fi.prototype.na=function(){this.A&&(zi(this.W),this.l.onmouseover=this.l.onmouseout=this.l.onclick=null,this.m.style.display="none",this.i.style.display="",this.D.i==this.F&&Ai(this.H),this.D.g==this.F&&(Bi(this.D),Ci(this.H)),this.B=!1)};function Gi(){yh.call(this,35)}
z(Gi,yh);n=Gi.prototype;n.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbdd_a[dir=ltr] .sbpqs_b","padding-right:3px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_b","padding-left:3px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
n.O=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
n.ga=function(a){this.R(a)};
n.R=function(a){this.A=a.vd;this.s=a.qd;this.o=a.pd};
n.Ib=function(a){return new Fi(this.u,this.m,this.g,this.i,this.B,a,this.A,this.o)};
n.Bb=function(a,b){var c=a.getHtml(),d=a.g;a=a.l();var e=this.s;b.A=!1;b.B=!0;b.ca=d;b.F=a;b.m.style.display="";Cb(b.P,ed(id,c));b.J&&(b.i.style.display="none",Cb(b.u,ed(id,e)),b.u.onclick=F(b.ea,b))};
n.Ab=function(a,b,c){Ei(c,b.g,1)};function Hi(){this.l=134;this.i={}}
z(Hi,N);n=Hi.prototype;n.O=function(a){this.m=a.i.getId()};
n.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={});window.google.sbox["d"+this.m]=F(this.Te,this)};
n.R=function(a){this.A=Cg("//"+(a.rd||"clients1."+a.ic)+"/complete/deleteitems");this.s=a.zd;this.o=a.authuser;this.u=a.clientName};
n.Ga=function(){Ii(this)};
function Ii(a){a.g&&(Ji.removeChild(a.g),a.g=null)}
n.Te=function(a){Ii(this);a=a[0];var b=this.i[a];b&&(delete this.i[a],b())};
var Ji=Ng;function Ki(){this.l=189}
z(Ki,N);Ki.prototype.O=function(a){this.g=a.get(134);this.i=a.get(123);this.s=a.get(118);this.A=a.get(553)};
Ki.prototype.ga=function(a){this.o=a.uf};
Ki.prototype.R=function(a){this.m=a.zd;this.u=!(!this.g||!this.m);this.o&&(a=this.s.g?3E3:0,window.setTimeout(F(this.B,this),a),this.o=!1)};
function yi(a,b,c){a=a.g;a.i[b]=c;c=new Map;"1"===Ug(window.location.search).ssl_dbg&&c.set("ssl_dbg","1");c.set("delq",b);c.set("client",a.u);c.set("callback","google.sbox.d"+a.m);b=a.A;c.set("tok",a.s);a.o&&c.set("authuser",a.o);a.g=O("script");b=ld(b,c);Eb(a.g,b);Ji.appendChild(a.g)}
Ki.prototype.B=function(){var a=Li(this.A,"",void 0,void 0,!0);Mi(this.i,a);Ni(this.i)};function Oi(){this.l=156}
z(Oi,N);Oi.prototype.O=function(a){this.m=a.get(189)};
Oi.prototype.i=function(a){var b=this.m,c={};b.u&&(c.tok=b.m);"1"===Ug(window.location.search).ssl_dbg&&(c.ssl_dbg="1");for(var d in c)hh(a,d,c[d]);return 1};
Oi.prototype.g=function(){return 12};function Pi(a){this.l=156;this.o=a;this.m=null}
I(Pi,N);Pi.prototype.i=function(a){var b=1,c=a.D;a=Vg(a.g);var d=c=="focus"||c=="input";c=this.o.SEARCHBOX_INPUT_AUTOFOCUS&&c=="mousedown"&&this.m&&!this.m.isVisible();a||!d&&!c||(b=2);return b};
Pi.prototype.g=function(){return 2};
Pi.prototype.O=function(a){this.m=a.get(128)};function Ri(){this.l=157}
z(Ri,N);function Si(){this.l=156}
z(Si,N);Si.prototype.i=function(a){var b=Ug(Gb(window.location.href));b.v&&hh(a,"video_id",b.v,!0);return 1};
Si.prototype.g=function(){return 24};function Ti(a,b,c){this.l=598;this.I=b;this.A=c;this.s="";this.i=a;this.u=!1}
z(Ti,N);Ti.prototype.O=function(a){this.F=a.get(553);this.g=a.get(128);this.D=a.get(118);this.B=a.get(150)};
Ti.prototype.ga=function(a){this.m=a.od;this.H=a.rf};
function Ui(a,b){a.s=b;a.F.ud(a.s)}
function Vi(a){if(!a.I||a.g.isVisible())return!1;var b=a.D.g;if(!b||b.length==0)return!1;if(b!=a.m)return a.A=="always"&&a.g&&a.g.m&&a.g.m.length>0&&Wi(a.g),!1;if(a.i&&a.i.getRefinementsTuple){var c=a.i.getRefinementsTuple();if(c){var d=c[0];d=="ClearBySearchbox"?a.o=[]:d=="FromSearchResponse"&&a.u&&(a.o=c[1],a.u=!1)}}if(!a.o||a.o.length<=0)return a.g&&a.g.m&&a.g.m.length>0?(Wi(a.g),!1):a.A=="always"||a.A=="fallback";c=[];for(var e=d=0;e<a.o.length&&!(c.length>=a.H);++e){var f=a.o[e];f&&f.length>
0&&c.push(new Dg(a.B.bold(b,f),f,d++,0,[71],null))}c.length>0&&Xi(a.g,c,!1);return!1}
;function Yi(){this.l=156}
z(Yi,N);Yi.prototype.O=function(a){this.m=a.get(598)};
Yi.prototype.i=function(a){var b=this.m,c;a:{if(b.i&&b.i.getPreviousQuery&&(c=b.i.getPreviousQuery()))break a;c=null}var d;d=(d=Ug(Gb(window.location.href)))?(d=d.search_query||d.q)&&d==b.m:!1;c&&c!=b.m?(b.u=!0,b.m=c,Ui(b,c)):d||b.s==""?d&&b.s==""&&Ui(b,b.m):Ui(b,"");return a.D!="mousedown"&&a.D!="focus"||!Vi(this.m)?1:2};
Yi.prototype.g=function(){return 46};function Zi(){this.l=149;this.i=Ng;this.g={}}
z(Zi,N);n=Zi.prototype;n.O=function(a){this.D=a.get(127);this.u=a.i.getId()};
n.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
n.R=function(a){this.config_=a;a.connectionType==this.qb()&&(a=this.D.i,this.s=a.protocol,this.o=a.host,this.B=a.Ac,this.A=a.He,this.F="https:"==document.location.protocol,$i(this,F(this.Ue,this)),(new Image).src=this.s+this.o+"/generate_204")};
n.Ga=function(){$i(this,null);aj(this)};
n.Fe=function(a,b,c,d){c=a.getId();var e=a.g;this.config_.Od||aj(this);b=this.s+this.o+this.B+"?"+(this.A?this.A+"&":"")+(b?b+"&":"");a=[];Sg("q",e,a,!0);this.config_.Ne||Sg("callback","google.sbox.p"+this.u,a);if(this.F){e="";for(var f=4+Math.floor(Math.random()*32),g,h=0;h<f;++h)g=Math.random()<.3?48+Math.floor(Math.random()*10):(Math.random()>.5?65:97)+Math.floor(Math.random()*26),e+=String.fromCharCode(g);Sg("gs_gbg",e,a)}e=O("script");this.config_.pg&&e.setAttribute("nonce",this.config_.pg);
Eb(e,Cg(b+a.join("&")));e.charset="utf-8";this.g[c]=e;this.m=d;this.i.appendChild(e);return!0};
n.qb=function(){return 0};
n.Tc=function(){return 0};
n.Pc=function(a){var b=this.g[a];b&&(this.i.removeChild(b),delete this.g[a])};
function aj(a){for(var b in a.g)a.i.removeChild(a.g[b]);a.g={};a.m=null}
n.Ue=function(a){this.m&&this.m(a)};
function $i(a,b){b||(b=$g);var c=window.google;a.config_.Ne?c.ac.h=b:c.sbox["p"+a.u]=b}
;function bj(){this.l=115;this.o={}}
z(bj,N);n=bj.prototype;n.O=function(a){this.m=a.get(116);if(a=ph(a,154))for(var b,c=0;b=a[c++];)this.o[cj]=b};
n.R=function(){this.g=!1};
n.Ga=function(){dj(this)};
n.isVisible=function(){return this.g};
n.getHeight=function(){return this.g?this.m.getHeight():0};
function dj(a){if(a.g){var b=a.m;b.B=0;ej(b.o.m,!1);fj(b.P,!1);fj(b.i,!1);gj(b,b.W);hj(b.F,9);a.g=!1}}
var ij={ee:"left",lg:!0,pb:null,marginWidth:0};function jj(){this.l=118}
z(jj,N);n=jj.prototype;n.O=function(a){this.m=a.get(119);this.A=a.get(130);this.X=a.get(145);this.s=a.get(117);this.I=a.get(123);this.B=a.get(374);this.F=a.get(121);this.Y=a.get(553);this.i=a.get(128);this.J=a.get(139);this.ca=a.get(173);this.ea=ph(a,160)};
n.ga=function(a){this.config_=a;this.g=this.o=this.m.g.value||""};
n.R=function(a){this.config_=a;this.D=this.P=!1;kj(this)};
function lj(a){var b={};hj(a.s,11,b);!b.cancel&&a.config_.Wf&&od(function(){var c=a.i;Ni(c.D);mj(c)})}
function nj(a,b){if(a.config_.Dc==0||a.config_.Dc==2||a.config_.Dc==3&&!a.o&&!b)return!1;a:{if(oj(a.i)&&(a.i.i!=null?b=pj(a.i):(b=a.i,b=oj(b)?b.m[0]:null),b.o))break a;b=null}var c;if(c=b){if(c=b=b.g)c=a.o,c=!(c||b?c&&b&&c.toLowerCase()==b.toLowerCase():1);c?(a.o=a.g,Zg(b,a.g,!0)&&(b=a.g+b.substr(a.g.length)),qj(a,b,Rg(b.length),"",!0),rj(a,b,!0),c=!0):c=!1}return c?(a.B.add(8),!0):!1}
function qj(a,b,c,d,e){a.config_.hf&&!a.i.isVisible()&&d=="mousedown"&&sj(a.i,c,d);var f=!1,g=!1;if(b!=a.g||d=="onremovechip")Zg(d,"key")?a.B.add(1):d=="paste"&&a.B.add(2),f=!0,tj(a,b),hj(a.s,1,{Xb:d,pb:a.u}),g=G(),a.H||(a.H=g),a.W=g,Vg(b)&&(e=!0),g=!0;b=Li(a.Y,b,c,d);switch(b.H){case 3:b.o=!0;case 2:e=!0;break;case 4:e=!1}e?(f&&(f=a.i,f.s&&!f.A&&(f.A=window.setTimeout(F(f.clear,f),f.config_.Xf))),a.P&&hh(b,"gs_is",1),Mi(a.I,b)):g&&(a.i.clear(),Ni(a.I));hj(a.s,2,{Xb:d})}
function Ci(a){a=a.m;if(!a.u)try{a.g.focus(),a.u=!0,uj(a)}catch(b){}}
function vj(a,b){tj(a,b);wj(a.m);hj(a.s,4,{pb:a.u,input:b})}
function Ai(a){a.g!=a.o&&tj(a,a.o);hj(a.s,5,{input:a.o,Ug:a.i.m,pb:a.u});wj(a.m)}
n.getHeight=function(){return this.m.getHeight()};
function xj(a){if(a.ca){if(a.config_.Wc)return!0;for(var b=0,c;c=a.ea[b++];)if(c.isEnabled())return!0}return!1}
n.clear=function(){this.g&&(tj(this,""),this.m.clear(),hj(this.s,1),hj(this.s,16),this.i.clear())};
function yj(a,b){var c=a.m.s.Ob();a.u==b?oj(a.i)&&c==a.g.length&&(a.i.i!=null?a.config_.mc&&!a.config_.Na&&Ei(a.F,pj(a.i).g,6):a.config_.le&&nj(a,!0)):a.A&&c==0&&a.A.g()}
function zj(a){var b=a.m.s.Ob();return a.config_.Na&&oj(a.i)&&a.i.i!=null&&b===a.g.length}
function rj(a,b,c){a.g=b||"";kj(a);wj(a.m);c||hj(a.s,4,{pb:a.u,input:a.g})}
function kj(a){var b=Aj(a.X,a.g);if(b!=a.u){var c=a.m;c.o&&(c.o.dir=b);c.g.dir=b;c.B&&(c.B.dir=b);if(c.Cb){c=c.g;var d=0,e=c.style;c.nodeName!="INPUT"&&(d+=1);e.left=e.right="";e[b=="rtl"?"right":"left"]=d+"px"}a.u=b}}
function tj(a,b){a.g=a.o=b||"";kj(a)}
;function Bj(){this.l=128}
z(Bj,N);n=Bj.prototype;n.O=function(a){this.o=a.get(129);this.P=a.get(145);this.I=a.get(115);this.D=a.get(123);this.u=a.get(118);this.ca=a.get(147);this.W=ph(a,153);this.Y=a.get(553);this.H=a.get(184);this.ea=a.get(157)};
n.ga=function(){this.W.sort(ch)};
n.R=function(a){this.config_=a;this.i=this.g=null;this.s=this.F=!1;this.X=!0;this.B="";this.J=0};
n.Ga=function(){this.A&&(window.clearTimeout(this.A),this.A=null);this.m=null;mj(this)};
function Xi(a,b,c){var d=a.H&&a.H.i(b);a.clear();a.m=b;var e=oj(a)?b[0].g:a.u.o;a:{var f=e;if(a.P.g){for(var g=!1,h=!1,k=0,l;k<f.length;++k)if(l=f.charAt(k),!Cj.test(l)&&(Dj.test(l)?h=!0:g=!0,h&&g)){f=!0;break a}f=!1}else f=!0}f&&(e=a.u.o);a.B=Aj(a.P,e);if(a.config_.Fg&&oj(a)&&c&&!Th){a.F=!0;c=a.o;if(c.o){c.F=a.B;Ej(c);e=!1;for(f=0;g=b[f++];)Fj(c,g)&&(e=!0);c=e}else c=!1;e=b[0].m.g.a||"";e=Xg(e);b=a.ca;f=0;e&&(b.g||Gj(b),Hj(b),e in b.m?f=b.m[e]:(ei(b.g,Wg(e)),b.m[e]=f=b.g.offsetWidth,ei(b.g,"")));
a.J=f}else{a.F=!1;b=a.o;if(a.F||!a.config_.Qg&&!oj(a))c=[];else{c=[];e=[];for(f=0;a.W[f++]&&!wh(a.m,e););(f=e?e.length:0)&&(f-=Ij(e,c,0));for(g=0;g<a.m.length;++g)c.push(a.m[g]);f&&(f-=Ij(e,c,1));a.config_.Tf&&c.push(1);f&&(f-=Ij(e,c,2));f&&Ij(e,c,3);a.config_.be&&c.push(2);a.ea&&c.length>1&&c[0].getType()==5&&c.splice(1,0,3)}if(b.o){b.F=a.B;Ej(b);e=!1;for(f=0;g=c[f++];)if(g==1)g=b,g.B?g.B.style.display="":(h=O("li"),k=h.style,k.position="relative",k.textAlign="center",k.whiteSpace="nowrap",h.dir=
g.H,g.i=Q(),g.i.className="sbsb_g",g.config_.be&&(g.i.style.paddingBottom="1px"),Jj(g,g.config_.Ng,g.i,13),g.config_.Sf?Jj(g,g.config_.Rd,g.i,8):g.config_.Uf&&Jj(g,g.config_.Og,g.i,14),h.appendChild(g.i),h.onmousedown=F(g.nd,g),h.className=g.config_.Cc,g.B=h),g.g.appendChild(g.B);else if(g==2)if(g=b,g.A)g.A.style.display="";else{h=Q("sbsb_j "+g.config_.Cc);k=O("a");k.id="sbsb_f";nb(k,"http://www.google.com/support/websearch/bin/answer.py?hl="+g.config_.ad+"&answer=106230");var m=g.config_.qg;l={Gg:!0};
l=l===void 0?{}:l;m instanceof zb?l=m:(m=String(m).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),l.ri&&(m=m.replace(/(^|[\r\n\t ]) /g,"$1&#160;")),l.Gg&&(m=m.replace(/(\r\n|\n|\r)/g,"<br>")),l.si&&(m=m.replace(/(\t+)/g,'<span style="white-space:pre">$1</span>')),l=Bb(m));Cb(k,l);h.appendChild(k);h.onmousedown=F(g.nd,g);g.A=h;g.o.appendChild(g.A)}else g==3?(g=b,h=g.ca.pop(),h||(h=O("li"),Wh(h,"hidden",!0),h.l=!0,k=O("div","sbsb_e"),h.appendChild(k)),
g.g.appendChild(h)):Fj(b,g)&&(e=!0);c=e}else c=!1;a.J=0}d&&(a.i=a.H.l(),Kj(a,a.H.g()));c?Wi(a):a.clear()}
function Kj(a,b){if(a.g!=b){var c=a.g;a.g=b;Lj(a,c)}}
n.De=function(){if(oj(this))if(this.s){var a=this.g;this.g==this.m.length-1?this.i=this.g=null:this.g==null?this.g=0:++this.g;this.i=this.g;Mj(this,a,F(this.De,this))}else Wi(this)};
n.Ee=function(){if(oj(this))if(this.s){var a=this.g;this.m&&this.g!=0?this.g==null?this.g=this.m.length-1:--this.g:this.i=this.g=null;this.i=this.g;Mj(this,a,F(this.Ee,this))}else Wi(this)};
n.isVisible=function(){return this.s};
n.isEnabled=function(){return this.X};
function pj(a){return a.i!=null?a.m[a.i]:null}
function oj(a){return!(!a.m||!a.m.length)}
function Wi(a){if(!a.s){a:{var b=a.I,c=cj;if(c in b.o){if(b.i){if(c==cj)break a;dj(b);b.i.i.s=!1}b.i=b.o[c];c=b.m;b=b.i;b!=c.u&&(c.u=b,b=b.g.o,c.I?b!=c.I&&c.s.replaceChild(b,c.I):c.s.appendChild(b),c.I=b)}}c=a.I;if(!c.g){b=c.m;var d=dh(ij);if(c.i){var e=c.i.i;d.pb=e.B;d.marginWidth=e.J;var f=e.config_.Vg;f||(f=e.B=="rtl"?"right":"left");d.ee=f}gj(b,d.pb||b.W);e=d.marginWidth;b.X!=e&&(f=b.H.style,e?(f.width=e+"px",f.height="1px"):f.height="",b.X=e);b.ea=d.lg;b.ca=d.ee;ej(b.o.m,!0);fj(b.P,!0);fj(b.i,
!0);hj(b.F,14);b.Fd();c.g=!0}a.s=!0}}
function mj(a){a.s&&(a.A&&(window.clearTimeout(a.A),a.A=null),dj(a.I),a.s=!1)}
n.clear=function(){mj(this);this.m=null;this.F=!1;this.g!=null&&Nj(this.o,this.g);this.i=this.g=null;this.o.clear()};
function Bi(a){a.g!=null&&Nj(a.o,a.g);a.i=a.g=null}
function sj(a,b,c){if(oj(a))Wi(a);else{var d=a.u.o;d&&(b=Li(a.Y,d,b||a.u.m.s,c),Mi(a.D,b))}}
function Ij(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(c==3?f.la&&f.la(b)&&++d:(b.push(f),++d));return d}
function Mj(a,b,c){var d;(d=a.g==null)||(d=(d=a.o.m[a.g])?d.s():!1);d?(Lj(a,b),b=a.o,c=a.g,c=c===void 0?null:c,c===null?b.u.removeAttribute("aria-activedescendant"):(c=b.m[c])&&c.s()&&(c=c.g(),b.config_.Na&&(c=c.querySelector('[role="gridcell"]')),c&&Yh(b.u,c)),a.g==null?Ai(a.u):(b=a.m[a.g],b.getType(),rj(a.u,b.g))):(Nj(a.o,b),c())}
function Lj(a,b){b!=null&&Nj(a.o,b);a.g!=null&&(b=a.o,(a=b.m[a.g])&&a.s()&&Oj(a.g().parentNode,b.X))}
var cj=Pg++;function Pj(){this.l=154}
z(Pj,N);Pj.prototype.O=function(a){this.i=a.get(128);this.g=a.get(129)};function Qj(){this.l=145;this.g=Dj.test("x")}
z(Qj,N);Qj.prototype.sa=function(a){this.i=a.nc()};
function Aj(a,b){var c=a.i;a.g&&(Dj.test(b)?c="ltr":Cj.test(b)||(c="rtl"));return c}
var Cj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),Dj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");function Rj(){this.l=117;this.i=[];this.g={Se:1}}
z(Rj,N);function R(a,b,c,d,e,f){var g=Sj(a,b);g||(g={},a.i.push({element:b,Of:g}));var h=g[c];h||(h=g[c]=[],a=Tj(a,c,b.Se?window:ki(b),h),typeof c!=="string"?b[c]=a:b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a);h.push({kg:!!f,dd:!1,priority:e||0,process:d});h.sort(Uj);d.qf=c}
function Vj(a,b,c){if(a=Sj(a,b))if(a=a[c.qf])for(var d=0;b=a[d++];)if(b.process==c){b.dd=!0;break}}
function hj(a,b,c){c=c||{};(a=a.g[b])&&a(c,c.Xb)}
Rj.prototype.ra=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)};
function Tj(a,b,c,d){return F(function(e,f){if(d.length){if(!e){e={};var g=c.event;g&&(g.keyCode&&(e.keyCode=g.keyCode),e.jg=!0)}e.Xb=f||b;f=e;for(var h,k,l=0;g=d[l++];)g.dd?k=!0:h||(g.kg?Wj(g,f):h=g.process(f));if(k)for(k=0;h=d[k];)h.dd?d.splice(k,1):++k;if(e.sc)return delete e.sc,e.jg&&(e=c.event||e),hi(e),e.returnValue=!1}},a)}
function Sj(a,b){for(var c,d=0;d<a.i.length;++d)if(c=a.i[d],c.element==b)return c.Of;return null}
function Wj(a,b){od(function(){a.process(b)})}
function Uj(a,b){return b.priority-a.priority}
;function Xj(){this.l=494;this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}}
z(Xj,N);Xj.prototype.R=function(){this.reset()};
Xj.prototype.reset=function(){this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}};function Yj(){this.l=374}
z(Yj,N);Yj.prototype.R=function(){this.reset()};
Yj.prototype.add=function(a){this.g||(this.g={});this.g[a]=!0};
Yj.prototype.reset=function(){this.g={}};function Zj(){this.l=120;this.D=-1}
z(Zj,N);Zj.prototype.O=function(a){this.H=a.get(191);this.g=a.get(123);this.m=a.get(118);this.A=a.get(374);this.i=a.get(494);this.B=a.get(126);this.o=a.get(128);this.F=ph(a,311)};
Zj.prototype.ga=function(a){this.u=a.sg};
Zj.prototype.R=function(a){this.config_=a;this.reset()};
function ak(a,b){var c=a.m.o;var d=[];d[27]=64;d[0]=bk(a.config_.clientName);d[28]=bk(a.config_.requestIdentifier);d[1]=b==void 0?"":b+"";b=a.A;var e=[];for(f in b.g)e.push(parseInt(f,10));d[26]=e.join("j");var f="";a.o.i!=null?f=a.o.i+"":(b=a.B.i,(b.s>=10||b.u.Tc()>=3)&&(f="o"));d[2]=f;f="";if(b=a.o.m){for(var g=e=0,h;h=b[g++];){h=eh(h.getType(),h.i||[]);if(h!=k){e>1&&(f+="l"+e);f+=(k?"j":"")+h;e=0;var k=h}++e}e>1&&(f+="l"+e)}d[3]=f;k="";f=a.o.m;b=a.i.s;if(f)for(e=0;g=f[e++];){var l=eh(g.getType(),
g.i||[]);l in b&&delete b[l]}if(b)for(l in b)k+=(k?"j":"")+l;d[35]=k;l=a.i.i;d[33]=l>-1?String(l):"";d[4]=Math.max(a.m.H-a.s,0);d[5]=Math.max(a.m.W-a.s,0);d[6]=a.D;d[7]=G()-a.s;d[18]=Math.max(a.m.na-a.s,0);d[8]=a.g.Db;k=a.g;k=(l=k.i)?k.g.m:0;d[25]=l?"1"+(a.config_.lf?"a":"")+(a.config_.Md?"c":""):"";d[10]=k;l=a.g;d[11]=l.i?l.g.o:0;d[12]=a.g.na;f=a.g;l=f.ca;k=f.Y;f=f.ea;d[9]=l;d[22]=k;d[17]=f;d[13]=a.g.Cb;d[14]=a.g.H;d[15]=a.g.J;l=a.g;k=[];for(b=e=0;b<=ck;++b)f=l.I[b],f==0?e++:(e=e==1?"0j":e>1?b+"-":
"",k.push(e+f),e=0);d[16]=k.join("j");d[36]=a.g.P;l=0;for(var m in a.i.g)l++;d[30]=l;d[31]=a.i.u;d[32]=a.i.o;d[19]=bk(a.config_.xd);m=a.i;k=a.B.g;l=!1;k&&(l=k.i.g.e||"");k=0;l?(k|=1,m.m>1&&(k|=2)):m.m>0&&(k|=2);m=k;d[20]=m==0?"":m+"";for(m=0;l=a.F[m++];)k=l.l(),dk[k]&&(d[k]=d[k]==void 0?bk(l.g()):"");d=d.join(".").replace(ek,"");if(a.H&&a.u){m=c+d;b:{l=a.u;k=[];if(l)for(e=b=f=0;e<l.length;++e){g=l.charCodeAt(e);if(g<32||g>127||!fk[g-32]){l=[];break b}f<<=6;f|=fk[g-32]-1;b+=6;b>=8&&(k.push(f>>b-8&
255),b-=8)}l=k}f=l;l={};l.chain=Array(4);l.buffer=Array(4);l.gh=Array(4);l.padding=Array(64);l.padding[0]=128;for(k=1;k<64;++k)l.padding[k]=0;gk(l);k=Array(64);f.length>64&&(gk(l),hk(l,f),f=ik(l));for(b=0;b<f.length;++b)k[b]=f[b]^92;for(b=f.length;b<64;++b)k[b]=92;gk(l);for(b=0;b<64;++b)l.buffer[b]=k[b]^106;jk(l,l.buffer);l.total=64;hk(l,kk(m));m=ik(l);gk(l);jk(l,k);l.total=64;hk(l,m);m=ik(l);m=m.slice(0,8);typeof m==="string"&&(m=kk(m));l="";if(m){k=m.length;for(e=b=f=0;k--;)for(b<<=8,b|=m[e++],
f+=8;f>=6;)l+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b>>f-6&63),f-=6;f&&(l+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>f+8-6&63))}m=l}else m="";c={oq:c,gs_l:d+"."+m};a.config_.mg&&(c.q=a.m.g);return c}
Zj.prototype.reset=function(){this.s=G();++this.D;var a=this.m;a.H=0;a.W=0;a.na=0;this.A.reset();a=this.g;if(a.i){var b=a.g;b.m=0;b.o=0}a.Db=0;a.s=0;a.na=0;a.ca=0;a.Y=0;a.ea=0;a.Cb=0;a.H=0;a.J=0;a.P=0;a.I=[];for(b=0;b<=ck;++b)a.I[b]=0;for(a=0;b=this.F[a++];)b.reset();this.i.reset()};
function bk(a){return a?a.replace(lk,"-"):""}
var ek=/\.+$/,lk=/\./g,dk=Qg([23]);function mk(){this.l=121}
z(mk,N);mk.prototype.sa=function(a){this.m=a.Vd()};
mk.prototype.O=function(a){this.g=a.get(347);this.s=a.get(130);this.F=a.get(117);this.A=a.get(123);this.o=a.get(118);this.H=a.get(120);this.I=a.get(128);this.B=a.get(139);this.u=a.s;this.D=ph(a,294)};
mk.prototype.R=function(a){this.config_=a};
function Ei(a,b,c){if(a.D){for(var d=!1,e=0,f;f=a.D[e++];)f.g(b,c)==2&&(d=!0);if(d)return}if(Vg(b)||a.config_.lb||a.s&&a.s.lb()){if(wg.test(c)){if(a.m&&!a.i){d=a.m;b:{if(e=d.getElementsByTagName("input"))for(var g=0;f=e[g++];)if(f.name=="btnI"&&f.type.toLowerCase()!="submit"){e=f;break b}e=null}e?d=null:(e=O("input"),e.type="hidden",e.name="btnI",e.value="1",d.appendChild(e),d=e);a.i=d}}else a.i&&(a.m.removeChild(a.i),a.i=null);a.g&&a.config_.Qc&&nk(a.g,c);a.u.Dd(c);ok(a);hj(a.F,12,{query:b})}}
mk.prototype.redirect=function(a){this.g&&this.config_.Qc&&nk(this.g);this.u.redirect(a);ok(this)};
function ok(a){Ni(a.A);a.A.o=null;a.H.reset();a.I.clear();if(a.o.o!=a.o.g){var b=a.o;b.o=b.g}a.B&&a.B.clear()}
;function pk(){this.l=553}
z(pk,N);pk.prototype.O=function(a){this.g=ph(a,156);a.get(126)};
pk.prototype.ga=function(){this.g.sort(qk)};
pk.prototype.R=function(a){this.config_=a;this.i=a.od};
pk.prototype.ud=function(a){this.i=a};
function Li(a,b,c,d,e){b=new fh(b,c||Rg(b.length),d||"");c=1;if(a.g){d=0;for(var f;f=a.g[d++];)f=f.i(b),f>c&&(c=f)}b.H=c;a.config_.Nc!=null&&hh(b,"ds",a.config_.Nc,!0);a.config_.Ge!=null&&hh(b,"swl",a.config_.Ge,!0);hh(b,"pq",a.i,!0);e&&!b.m&&(b.I=!0);b.m||(b.s=G(),"cp"in b.A||(a=b.J.Ob(),hh(b,"cp",a,!0)),hh(b,"gs_id",b.u),b.i=Tg(b.A)+":"+b.B,b.m=!0);return b}
function qk(a,b){return a.g()-b.g()}
;function rk(){this.l=123;this.A=!1;this.F=-1}
z(rk,N);n=rk.prototype;n.O=function(a){this.g=a.get(133);this.W=a.get(130);this.Ic=a.get(118);this.Jc=a.get(120);this.X=a.get(494);this.Ze=a.get(124);this.Eb=a.get(125);this.Fb=a.get(230);this.Kc=a.get(127)};
n.R=function(a){this.u=this.Kc.g;this.config_=a;this.A=!0;this.m={};this.D=0;this.Ve=a.vf;this.We=a.ag;this.Ya=-1;this.i=this.config_.enableCaching&&!!this.g};
n.Ga=function(){this.A=!1;sk(this);this.m=this.o=null;Ni(this)};
function Mi(a,b){if(!(!a.A||a.We||a.W&&a.W.l())){var c=!0,d=gh(b);d>a.F&&(a.F=d);++a.Db;a.X.g[b.getId()]=!0;Vg(a.Ic.g)||Vg(b.g)||(d=a.X,d.i=Math.max(d.i,0));d=G();for(var e in a.m)d-a.m[e].s>2500&&tk(a,e);a.i&&(e=a.g.get(b))&&((c=a.Ve||b.I)&&a.config_.bg&&(b.o=!0),a.Eb.process(e),e.o&&++a.na,a.o=null);c&&(a.o=b,a.B||a.te())}}
function Ni(a){a.Ya=a.F}
function zi(a){if(a.i){a=a.g;for(var b in a.i)for(var c=a.i[b].g,d,e=0;d=c[e++];)if(d.getType()==35){delete a.i[b];break}for(b=0;b<a.g.length;++b)a.g[b].reset()}}
function uk(a,b){return F(function(c){this.Ed(c,b)},a)}
n.te=function(){sk(this);if(!(this.u.Tc()>2)){var a=this.o;this.o=null;if(a){var b=[],c=a.F;if(c)for(var d in c)Sg(d,c[d],b);b=this.u.Fe(a,b.join("&"),uk(this,a),F(this.Ed,this));a.o||(++this.ca,b?(this.m[a.getId()]=a,++this.s):++this.Y);a=100;b=(this.s-2)/2;for(c=1;c++<=b;)a*=2;a<this.D&&(a=this.D);this.B=window.setTimeout(F(this.te,this),a)}}};
function sk(a){a.B!=null&&(window.clearTimeout(a.B),a.B=null)}
function tk(a,b){a.u.Pc(b);delete a.m[b];a.s&&--a.s}
n.Ed=function(a,b){if(this.A){if(!b&&(b=this.m[(a[2]||{}).j],!b))return;if(!b.o){var c=this.Ze;var d=b,e=a[0],f=a[1],g={};if(a=a[2])for(var h in a){var k=a[h];h in c.g&&(k=c.g[h].parse(k));g[h]=k}h=k=a=!1;for(var l,m=0;l=f[m++];)if((l[1]||0)==33?k=!0:a=!0,k&&a){h=!0;break}a=0;k=[];for(m=0;l=f[m++];){var p=l[1]||0;if(!h||p!=33){var r=l[0];c.m&&(r=c.i.bold(e.toLowerCase(),Xg(r).replace(Jg,"")));var q=k,u=q.push,t=Xg(r).replace(Jg,""),y=a++,C=l[3];u.call(q,new Dg(r,t,y,p,l[2]||[],C?new yg(C):zg))}}c=
new ih(d,k,new yg(g),!1,!0,!1);this.Fb&&(c=ed(this.Fb,c));if(this.i)for(d=this.g,e=c,(e.g&&e.g[0]||e.l.g!="")&&e&&e.m&&(d.i[e.l.i]=e),f=0;f<d.g.length;++f)d.g[f].update(e);gh(b)<=this.Ya?!b||b.g||c.o||(this.P=G()-b.s):(++this.ea,this.Eb.process(c)||++this.Cb,this.D=c.i.g.d||0,b&&(tk(this,b.getId()),d=b.s,d=G()-d,b.g?(this.J+=d,this.H=Math.max(d,this.H),++this.I[d>vk?ck:wk[Math.floor(d/100)]]):this.P=d));c&&(b=c.i.g.q||"")&&(this.Jc.u=b)}}};
var wk=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],ck=wk[wk.length-1]+1,vk=wk.length*100-1;function xk(){this.l=124;this.g={}}
z(xk,N);xk.prototype.O=function(a){this.i=a.get(150);if(a=ph(a,158))for(var b,c=0;b=a[c++];)this.g[b.Zh()]=b};
xk.prototype.R=function(a){this.m=a.Vc};function yk(){this.l=125}
z(yk,N);yk.prototype.O=function(a){this.o=a.get(117);this.u=a.get(118);this.s=a.get(494);this.g=ph(a,122);this.i=a.get(126);this.m=a.get(128);this.g.sort(zk)};
yk.prototype.process=function(a){var b=a,c=this.u.g.toLowerCase(),d=this.i.g;c=Yg(c);var e=b.l;b=e?e.l:Yg(b.l.g.toLowerCase());var f=(d=d?d.l:null)?d.l:"";e=(c.indexOf(b)==0?c.indexOf(f)==0?d&&d.getId()==e.getId()?0:b.length>=f.length?1:-1:1:-1)==1;c=e!=-1;if(e){if(this.g)for(e=0;b=this.g[e++];)a=b.l(a);d=this.i.g=a;a=d.l.g;e=d.g;this.m.isEnabled()&&(b=d.getType()==0,Xi(this.m,e,b));b=this.s;var g=d.l;f=g.getId();if(f in b.g){var h=d.g.length;h>0&&(Vg(g.g)||(b.i=h),g=g.s,g=G()-g,b.o+=g,++b.u);d.i.g.e&&
++b.m;delete b.g[f]}d=d.g;for(g=0;f=d[g++];)h=f.getType(),b.s[eh(h,f.i||[])]=!0;hj(this.o,3,{input:a,Ug:e})}return c};
function zk(a,b){return a.g()-b.g()}
;function Ak(){this.l=126}
z(Ak,N);Ak.prototype.O=function(a){this.i=a.get(123)};
Ak.prototype.R=function(){this.g=null};var Bk=["expflags","plugin"];function Ck(){this.l=127;this.m={}}
z(Ck,N);Ck.prototype.O=function(a){a=ph(a,149);for(var b,c=0;b=a[c++];)this.m[b.qb()]=b};
Ck.prototype.R=function(a){var b="https:"==document.location.protocol,c=[];Sg("client",a.clientName,c);Sg("hl",a.ad,c);Sg("gl",a.Je,c);Sg("sugexp",a.xd,c);Sg("gs_rn",64,c);Sg("gs_ri",a.requestIdentifier,c);var d=Ug(a.url||D.location.href);Bk.filter(function(e){return d.hasOwnProperty(e)}).forEach(function(e){return c.push(e+"="+d[e])});
a.authuser&&Sg("authuser",a.authuser,c);this.i={protocol:"http"+(b?"s":"")+"://",host:a.rd||"clients1."+a.ic,Ac:a.Ac||"/complete/search",He:c.length?c.join("&"):""};this.g&&this.g.qb()==a.connectionType||(this.g=this.m[a.connectionType])};function Dk(){this.l=191}
z(Dk,N);function kk(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function gk(a){a.chain[0]=1732584193;a.chain[1]=4023233417;a.chain[2]=2562383102;a.chain[3]=271733878;a.cc=a.total=0}
function jk(a,b){for(var c=a.gh,d=0;d<64;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.chain[0];b=a.chain[1];d=a.chain[2];for(var f=a.chain[3],g,h,k,l=0;l<64;++l)l<16?(g=f^b&(d^f),h=l):l<32?(g=d^f&(b^d),h=5*l+1&15):l<48?(g=b^d^f,h=3*l+5&15):(g=d^(b|~f),h=7*l&15),k=f,f=d,d=b,e=e+g+Ek[l]+c[h]&4294967295,g=Fk[l],b=b+((e<<g|e>>>32-g)&4294967295)&4294967295,e=k;a.chain[0]=a.chain[0]+e&4294967295;a.chain[1]=a.chain[1]+b&4294967295;a.chain[2]=a.chain[2]+d&4294967295;a.chain[3]=a.chain[3]+f&4294967295}
function hk(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.cc++]=b[d],a.cc==64&&(jk(a,a.buffer),a.cc=0)}
function ik(a){var b=Array(16),c=a.total*8,d=a.cc;hk(a,a.padding,d<56?56-d:64-(d-56));for(var e=56;e<64;++e)a.buffer[e]=c&255,c>>>=8;jk(a,a.buffer);for(e=d=0;e<4;++e)for(c=0;c<32;c+=8)b[d++]=a.chain[e]>>c&255;return b}
var fk=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],Fk=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],Ek=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,
2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,
2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function Gk(){this.l=150}
I(Gk,N);
Gk.prototype.bold=function(a,b){b=Wg(b.replace(xg,""));a=Wg(Yg(a,!0));if(Zg(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",d=[],e=b.length-1,f=0,g=-1,h;h=b.charAt(f);++f)h==" "||h=="\t"?c.length&&(d.push({t:c,Vb:g,e:f+1}),c="",g=-1):(c+=h,g==-1?g=f:f==e&&d.push({t:c,Vb:g,e:f+1}));a=a.split(/\s+/);f={};for(c=0;e=a[c++];)f[e]=1;g=-1;a=[];h=d.length-1;for(c=0;e=d[c];++c)f[e.t]?(e=g==-1,c==h?a.push({Vb:e?c:g,e:c}):e&&(g=c)):g>-1&&(a.push({Vb:g,e:c-1}),g=-1);if(!a.length)return"<b>"+b+"</b>";
c="";for(f=e=0;g=a[f];++f)(h=d[g.Vb].Vb)&&(c+="<b>"+b.substring(e,h-1)+"</b> "),e=d[g.e].e,c+=b.substring(h,e);e<b.length&&(c+="<b>"+b.substring(e)+"</b> ");return c};function Hk(){this.l=146}
I(Hk,N);function Ik(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
Ik("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");Ik("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");Ik("D1,D4,D7,DA,DD");Ik("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");Ik("D1__,D4__,D7__,DA__,DD");Ik("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");Ik("CF,D2,D5,D8,DB");function Jk(){this.l=116;this.ea=!0;this.isDarkTheme=!!document.body.dataset.dt}
z(Jk,N);n=Jk.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff",d=this.isDarkTheme?"#3c4043":"#ccc",e=this.isDarkTheme?"#5f6368":"#d9d9d9";this.W=a.nc();b.addRule(".sbdd_a",(Th?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");Th?b.addRule(".sbdd_b","background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("border-radius:0 0 3px 3px;")+"cursor:default"):b.addRule(".sbdd_b",
"background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
n.O=function(a){this.J=a.get(130);a.get(115);this.o=a.get(118);this.F=a.get(117);this.Y=a.i.getId()};
n.ga=function(a){this.config_=a};
n.nb=function(a){this.g=Q();this.g.className="gstl_"+this.Y+" sbdd_a";fj(this.g,!1);this.P=this.g;this.H=Q("fl");this.g.appendChild(this.H);this.A=Q();this.g.appendChild(this.A);this.s=Q("sbdd_b");this.A.appendChild(this.s);this.na=Q();this.A.appendChild(this.na);this.config_.ae&&(this.i=O("iframe","gstl_"+this.Y+" sbdd_c"),fj(this.i,!1),(this.config_.Ia||document.body).appendChild(this.i));if(this.m=this.config_.jf)typeof this.m==="number"&&(this.m+=this.config_.kc[2],this.m-=Kk(this)),Lk(this,this.g,
this.m);Mk(this);(a.Ia||document.body).appendChild(this.g);a=this.F;var b=F(this.Fd,this);R(a,a.g,8,b)};
n.R=function(a){this.config_=a;this.g.style.position=a.Mb};
n.getHeight=function(){this.B||(this.B=this.s?Math.max(this.s.offsetHeight,0):0);return this.B};
n.Fd=function(){this.B=0;Mk(this);if(this.i){var a=this.config_.Hd[0],b=this.i.style;this.config_.Mb!="relative"&&(b.top=this.g.style.top,b.left=this.g.offsetLeft+this.H.offsetWidth+"px");b=this.i;a=this.getHeight()+a;b.style.height=Math.max(a,0)+"px";Lk(this,this.i,this.s.offsetWidth)}this.u&&Ej(this.u.g)};
function Mk(a){var b,c;if(c=a.u)c=a.u.g,c=c.config_.Rf||c.H==c.F?c.Ya:null;var d=(b=c)?b.offsetWidth:Nk(a.o.m);var e=a.m;c=Kk(a);e?typeof e==="string"&&(e=null):a.X||!a.ea?a.A.style.display="inline-block":(a.A.style.display="",e=d+a.config_.kc[2]-c,Lk(a,a.g,e));if(a.config_.Mb!="relative"){var f="rtl"==dg()!=(a.D=="rtl"),g=a.config_.Ia;var h={Ta:0,Ec:0};if(f||!g||g==document.body||a.config_.Td)h=bi(a.o.m.F),b&&(h.Ta=bi(b).Ta);b=h;h=e;e=a.config_.kc;g=e[1];e=e[0];e=b.Ec+a.o.getHeight()+e;if(a.ca==
"right"){h="rtl"==dg()!=(a.D=="rtl");var k=a.config_.Ia;g=-g;if(h||!k||k==document.body)g+=(ki(a.g)||window).document.documentElement.clientWidth-d-b.Ta;d=g;h=e;b=void 0}else b=b.Ta+g,a.ca=="center"&&h&&(b+=(d-h)/2),h=e,d=void 0;e={Ta:0,Ec:0};a.config_.Mb=="absolute"&&a.config_.Ia&&a.config_.Ia!=document.body&&(f||a.config_.Td)&&(e=bi(a.config_.Ia));g=a.g.style;g.top=h-e.Ec+"px";g.left=g.right="";b!=void 0?g.left=b+c-e.Ta+"px":(b=0,a.config_.Ia&&f&&(b=document.body.clientWidth-(e.Ta+a.config_.Ia.offsetWidth)),
g.right=d+c-b+"px")}}
function Lk(a,b,c){typeof c==="number"?c>0&&(a.config_.fh?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function fj(a,b){a&&(a.style.display=b?"":"none")}
function gj(a,b){if(a.D!=b){a.D=b;var c=a.config_.Ia;c&&c!=document.body&&(c.style.textAlign=b=="rtl"?"right":"left");fi(a.g,b)}}
function Kk(a){return a.J&&a.J.i()&&(a=a.o.m.B.offsetWidth,typeof a==="number")?a:0}
;function Ok(){this.l=119;this.W=!1;this.s=Rg(0);this.ca=-1;this.ea=!1;this.isDarkTheme=!!document.body.dataset.dt}
z(Ok,N);n=Ok.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.D=a;this.g=a.Uc();Vh(this.g,"combobox");Wh(this.g,"haspopup",!1);Wh(this.g,"autocomplete","list");this.Ic=a.nc();a.Lc()||(b.addRule(".sbib_a","background:"+c+";"+b.prefix("box-sizing:border-box;")),a=Sh&&Oh||zh?6:5,b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:"+a+"px 9px 0"),b.addRule(".sbib_c[dir=ltr]","float:right"),b.addRule(".sbib_c[dir=rtl]","float:left"),b.addRule(".sbib_d",b.prefix("box-sizing:border-box;")+
"height:100%;unicode-bidi:embed;white-space:nowrap"),b.addRule(".sbib_d[dir=ltr]","float:left"),b.addRule(".sbib_d[dir=rtl]","float:right"),Lh&&b.addRule(".sbib_a input::-ms-clear","display: none"),b.addRule(".sbib_a,.sbib_c","vertical-align:top"))};
n.O=function(a){this.i=a.get(118);this.m=a.get(117);this.X=a.get(128);this.I=a.get(173);this.Cb=!!a.get(136);this.Jc=a.i.getId()};
n.ga=function(a){this.config_=a;this.J=a.Pb;this.P=a.ig;this.Kc=a.Nd;this.u=ci(this.g);this.Gc();var b=this;zh&&R(this.m,this.g,"beforedeactivate",function(c){b.ea&&(b.ea=!1,c.sc=!0)},10);
a=(kc()||J("iPad")||J("iPod"))&&Ph;Mh&&Pk(this);(Qh||a)&&Qk(this);this.F=this.g};
n.nb=function(a){var b=!!a.pf[130];if(this.Cb||xj(this.i)||b||a.wf)(this.A=this.D.get("gs_id"))?(b&&(this.B=this.D.get("sb_chc")),this.o=this.D.get("sb_ifc")):(this.A=Q("gstl_"+this.Jc+" sbib_a"),a=this.A.style,this.P&&(a.width=this.P+"px"),this.J&&(a.height=this.J+"px"),a=this.g.style,a.border="none",a.padding=Nh||zh?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.g.className=this.config_.Zc,b&&(this.B=Q("sbib_d"),this.B.id=this.D.getId("sb_chc"),this.A.appendChild(this.B)),xj(this.i)&&
this.I&&(this.I.g.className+=" sbib_c",b=this.I,a=this.Ic,b.s!=a&&(b.g.dir=b.s=a),this.A.appendChild(this.I.g)),this.o=Q("sbib_b"),this.o.id=this.D.getId("sb_ifc"),this.A.appendChild(this.o),Rk(this,this.A,this.o)),this.config_.td&&this.g&&this.o&&(this.g.removeAttribute("role"),Vh(this.o,"combobox"),this.g.removeAttribute("aria-haspopup"),Wh(this.o,"haspopup",!0)),this.config_.Na&&this.g&&(b=this.D.getId("sbsg"),Wh(this.g,"controls",b),this.config_.td&&this.o?(Wh(this.o,"haspopup","grid"),Wh(this.o,
"owns",b)):Wh(this.g,"haspopup","grid")),this.config_.Rg||this.config_.ff||Sk(this,this.A),this.F=this.A;this.Kc&&(b=F(this.re,this),R(this.m,this.g,"blur",b,10),b=F(this.Ae,this),R(this.m,this.g,"focus",b,10),this.Fb=!0);b=this.m;a=F(this.Nf,this);R(b,b.g,8,a);Tk(this)};
n.R=function(a){this.config_=a;this.g.setAttribute("autocomplete","off");this.g.setAttribute("spellcheck",!1);this.g.style.outline=a.ne?"":"none";this.Db=this.g.value;this.Fb&&this.Ae();Uk(this)};
n.Ga=function(){this.Fb&&this.re();Vk(this)};
function Rk(a,b,c){Vk(a);c||(c=b);a.g.parentNode.replaceChild(b,a.g);c.appendChild(a.g);a.u&&a.config_.Ig&&(zh||Mh?od(function(){a.g.focus();ai(a.g,a.s.Ob())}):a.g.focus());
Uk(a)}
n.getHeight=function(){var a=this.F?this.F.offsetHeight:0;this.J>a&&(a=this.J);return a};
function Nk(a){return a.P?a.P:a.F?a.F.offsetWidth:0}
n.select=function(){this.g.select();this.Gc()};
function wj(a){Rh&&(a.g.value="");a.g.value=a.i.g;Rh&&(a.g.value=a.g.value);uj(a)}
function Wk(a){a.u&&(a.g.blur(),a.u=!1)}
n.clear=function(){this.g.value=""};
function uj(a){if(a.u){var b=a.g.value.length;a.s=Rg(b);ai(a.g,b)}}
function Sk(a,b){R(a.m,b,"mouseup",function(){a.g.focus()})}
function Tk(a){function b(e){R(a.m,a.g,e,F(a.ye,a),10,c)}
R(a.m,a.g,"keydown",F(a.Lf,a));(Nh||a.config_.cf)&&R(a.m,a.g,"keypress",F(a.Mf,a));R(a.m,a.g,"select",F(a.Gc,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var d=F(a.If,a);R(a.m,a.g,"compositionstart",d);R(a.m,a.g,"compositionend",d)}
n.If=function(a){a=a.type;a=="compositionstart"?(a=this.i,a.D!=1&&(a.D=!0)):a=="compositionend"&&(a=this.i,a.D!=0&&(a.D=!1))};
n.Lf=function(a){var b=a.keyCode;this.ca=b;var c=(Oh||Mh)&&(b==38||b==40)&&oj(this.X),d=b==13,e=b==27;this.Y=!1;b!=9||a.shiftKey||(this.Y=nj(this.i));if(d){(b=pj(this.X))&&b.getType();var f=this;od(function(){var g=f.X,h=a.shiftKey?4:3;g.i!=null&&pj(g).getType();g=g.u;Ei(g.F,g.g,h)})}if(c||d||e||this.Y)a.sc=!0};
n.Mf=function(a){var b=a.keyCode,c=b==9&&this.Y;if(b==13||b==27||c)a.sc=!0};
n.ye=function(a){if(!this.Eb){var b=a.Xb;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,b!="keypress"){var c=a==38||a==40;if(b=="keydown"){var d=this.i;var e=a==229;(d.P=e)&&d.B.add(4);if(c)break a}else if(d=a!=this.ca,this.ca=-1,!c||d)break a;switch(a){case 27:a=this.i;a.config_.Mg?Ei(a.F,a.g,5):(a.i.isVisible()?(c=a.i,Ni(c.D),mj(c)):Wk(a.m),Ai(a));break;case 37:a=this.i;yj(a,"rtl");if(zj(a)&&(c=a.i,c.i!==null&&(a=c.o,(c=Xk(a,c.i))&&!(c.length<=1))))for(d=Xh(a.u),
e=1;e<c.length;e++)c[e].id===d.id&&Yh(a.u,c[e-1]);break;case 39:a=this.i;yj(a,"ltr");if(zj(a)&&(c=a.i,c.i!==null&&(a=c.o,c=Xk(a,c.i))))for(d=Xh(a.u),e=0;e<c.length-1;e++)c[e].id===d.id&&Yh(a.u,c[e+1]);break;case 38:this.i.i.Ee();break;case 40:a=this.i;c=this.s;oj(a.i)?a.i.De():sj(a.i,c);break;case 46:a=this.i;a.g&&this.s.Yd()==a.g.length&&(a.J&&a.J.clear(),a.config_.Lg&&Ei(a.F,a.g,2));break;case 8:a=this.i,a.A&&this.s.Ob()==0&&a.A.g()}}this.Gc();qj(this.i,this.g.value,this.s,b)}};
n.Hf=function(){this.u=!0;hj(this.i.s,10)};
n.Ff=function(){this.u=!1;lj(this.i)};
function Uk(a){a.W||(a.W=!0,a.Ya=F(a.Hf,a),R(a.m,a.g,"focus",a.Ya,99),a.na=F(a.Ff,a),R(a.m,a.g,"blur",a.na,99))}
function Vk(a){a.W&&(a.W=!1,Vj(a.m,a.g,a.Ya),Vj(a.m,a.g,a.na))}
n.Ae=function(){this.H||(this.H=new Rd(this.config_.Eg||50),this.H.ra("tick",this.Dg,void 0,this),this.H.start())};
n.re=function(){this.H&&(Sd(this.H),this.H=null)};
n.Dg=function(){this.ye({Xb:"polling"})};
n.Nf=function(){if(Mh){var a=this.g,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
n.Gc=function(){if(this.u){a:{var a=this.g;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var d=a.createTextRange(),e=di(a).selection.createRange();d.inRange(e)&&(d.setEndPoint("EndToStart",e),b=d.text.length,d.setEndPoint("EndToEnd",e),c=d.text.length)}if(b!==void 0){var f=Rg(b,c);break a}}catch(g){}f=null}f&&(this.s=f)}};
function Pk(a){var b;a.m.ra(window,"pagehide",function(){a.Eb=!0;b=a.g.value});
a.m.ra(window,"pageshow",function(c){a.Eb=!1;(c.persisted||b!==void 0)&&vj(a.i,b)})}
function Qk(a){a.m.ra(window,"pageshow",function(b){b.persisted&&a.Db&&vj(a.i,a.Db)})}
function ej(a,b){a.config_.td&&a.o?Wh(a.o,"expanded",b):Wh(a.g,"haspopup",b);b||a.g.removeAttribute("aria-activedescendant")}
;function Yk(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Zk(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function $k(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Yk(a).match(/\S+/g)||[],b=ob(a,b)>=0);return b}
function Oj(a,b){if(a.classList)a.classList.add(b);else if(!$k(a,b)){var c=Yk(a);Zk(a,c+(c.length>0?" "+b:b))}}
function al(a,b){a.classList?a.classList.remove(b):$k(a,b)&&Zk(a,Array.prototype.filter.call(a.classList?a.classList:Yk(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;function bl(){this.l=129;this.J={};this.W=[];this.Y=[];this.ca=[];this.m=[];this.ea=0;this.isDarkTheme=!!document.body.dataset.dt}
z(bl,N);n=bl.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.P=a;this.u=a.Uc();this.H=a.nc();Th||b.addRule(".sbsb_a","background:"+c);b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");Th||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 10px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g",
"text-align:center;padding:8px 0 7px;position:relative");b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(Oh?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");
Th&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
n.O=function(a){this.D=a.get(128);this.s=a.get(118);this.I=a.get(121);a=ph(a,152);var b={};if(a)for(var c,d=0;c=a[d++];)b[c.D]=c;this.na=b};
n.ga=function(a){this.config_=a};
n.nb=function(a){this.o=Q();a.Na?(this.g=Q("sbsb_b"),Vh(this.g,"grid"),this.g.id=this.P.getId("sbsg")):(this.g=O("ul","sbsb_b"),Vh(this.g,"listbox"));this.o.appendChild(this.g)};
n.R=function(a){this.config_=a;var b=a.xe;b&&(this.Ya=this.P.Ud(b));this.o.className=a.Wg||"sbsb_a";this.X=a.Tg||"sbsb_d"};
function Xk(a,b){if(a.config_.Na&&(a=a.m[b]))return a.g().parentNode.querySelectorAll("[role=gridcell]")}
function Nj(a,b){(b=a.m[b])&&al(b.g().parentNode,a.X)}
n.clear=function(){for(var a,b,c;c=this.W.pop();)a=c.getType(),(b=this.J[a])||(b=this.J[a]=[]),b.push(c),a=c.g(),a.parentNode.removeChild(a);for(;a=this.g.firstChild;)a=this.g.removeChild(a),a.l?this.ca.push(a):a!=this.B&&a!=this.A&&this.Y.push(a);this.B&&(this.B.style.display="none");this.A&&(this.A.style.display="none");this.m=[]};
function Fj(a,b){var c=b.getType(),d=a.na[c];if(!d)return!1;(c=(c=a.J[c])&&c.pop())||(c=cl(a,d));d.Bb(b,c);a.W.push(c);var e=c.g();if(a.config_.Na)for(var f=e.querySelectorAll('[role="gridcell"]'),g=0;g<f.length;g++)f[g].id=e.id+("x"+g);f=dl(a);f.appendChild(e);if(b.l!==void 0){a.m.push(c);g=a.F;var h=b.l();a.config_.Yf&&(e.onmouseover=function(){Kj(a.D,h)},e.onmouseout=function(){Bi(a.D)});
var k=c.g();k.onclick=function(l){Wk(a.s.m);b.o&&rj(a.s,b.g);Bi(a.D);var m=a.D;m.i=m.g=h;l=l||ki(k).event;d.Ab(l,b,a.I)}}else g=a.H;
fi(f,g);return!0}
function cl(a,b){b=b.Ib(a.I);var c=b.g();Oj(c,"sbse");c.id="sbse"+a.ea;(c=b.g())&&!a.config_.Na&&Vh(c,"option");a.ea++;return b}
function Jj(a,b,c,d){var e=O("input");e.type="button";e.value=Xg(b);e.onclick=function(){Ei(a.I,a.s.g,d)};
if(a.config_.Qf){b="lsb";var f=O("span");var g=O("span");f.className="ds";g.className="lsbb";f.appendChild(g);g.appendChild(e)}else b="sbsb_h",f=e;e.className=b;c.appendChild(f)}
function dl(a){var b=a.Y.pop();if(b)return a.g.appendChild(b),b;a.config_.Na?(b=Q(),Vh(b,"row")):(b=O("li"),Vh(b,"presentation"));b.className="sbsb_c "+a.config_.Cc;b.onmousedown=F(a.nd,a);a.g.appendChild(b);return b}
n.nd=function(a){a=a||ki(this.o).event;a.stopPropagation?(a.stopPropagation(),window.Polymer&&window.Polymer.Element&&a.preventDefault()):zh&&!Nh&&(this.s.m.ea=!0);return!1};
function Ej(a){if(a.i){var b=0,c=a.s.m.B;c&&(b=c.offsetWidth);c=a.i;a=Nk(a.s.m)-b-3;a>0&&(c.style.width=a+"px")}}
;function el(){this.l=147}
I(el,N);el.prototype.sa=function(a){this.u=a.Vd()||document.body};
el.prototype.ga=function(a){this.config_=a};
el.prototype.getHeight=function(){this.g||Gj(this);Hj(this);this.i||(ei(this.g,"|"),this.i=this.g.offsetHeight);return this.i};
function Gj(a){var b=Q(a.config_.Zc),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.g=b;a.g.style.visibility="hidden";a.u.appendChild(a.g)}
function Hj(a){var b=G();if(!a.o||a.o+3E3<b){a.o=b;b=a.g;var c=ki(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.s&&b==a.s||(a.m={},a.i=null,a.s=b)}}
;function fl(){kh.call(this);this.set(191,new Dk);this.set(150,new Gk);this.set(146,new Hk);this.set(147,new el);lh(this,149,new Zi);this.set(145,new Qj);this.set(117,new Rj);this.set(494,new Xj);this.set(374,new Yj);this.set(120,new Zj);this.set(121,new mk);this.set(553,new pk);this.set(124,new xk);this.set(125,new yk);this.set(123,new rk);this.set(126,new Ak);this.set(127,new Ck);this.set(115,new bj);this.set(118,new jj);this.set(128,new Bj);lh(this,154,new Pj);this.set(116,new Jk);this.set(119,
new Ok);this.set(129,new bl)}
z(fl,kh);function gl(){this.l=347;this.i=[];this.m=0}
z(gl,N);gl.prototype.O=function(a){this.o=a.get(120)};
gl.prototype.R=function(a){this.s="//"+(a.rg||"www."+a.ic)+"/gen_204?";this.g=a.Sg||{}};
function nk(a,b){b=ak(a.o,b);for(var c in a.g)c in b||(b[c]=a.g[c]);c=Tg(b,!0);hl(a,a.s+c)}
function hl(a,b){var c=new Image,d=a.m,e=a.i;c.onerror=c.onload=c.onabort=function(){try{delete e[d]}catch(f){}};
a.i[a.m++]=c;c.src=b}
;function il(){this.l=151;this.g=!0;this.i={}}
z(il,N);n=il.prototype;n.O=function(a){this.m=a.get(150)};
n.ga=function(){this.s=Qg([0])};
n.R=function(a){this.o=a.Vc;this.g=a.Md};
n.Ga=function(){this.g=!1};
n.update=function(a){if(this.g){var b=a.g;if(b.length){var c=a.l.l;a:{var d=Number.MAX_VALUE;for(var e,f=0;e=b[f++];){if(!this.s[e.getType()]){d=-1;break a}e=e.g;d=Math.min(e.length,d)}}if(d!=-1){var g=b[0].g;if(Zg(g,c,!0))for(f=c.length+1;f<=d;){c=null;for(e=0;g=b[e++];){g=g.g;if(f>g.length)return;g=g.substr(0,f);if(!c)c=g;else if(c!=g)return}this.i[c]=a;++f}}}}};
n.get=function(a){if(this.g){var b=this.i[a.l];if(b){for(var c=a.B,d=a.l,e=b.i,f=this.o||!e.g.k,g=[],h,k,l=b.g,m,p=0;m=l[p++];)k=m.g,h=f?this.m.bold(c,k):Wg(k),g.push(new Dg(h,k,m.l(),m.getType(),m.i||[],m.m));delete this.i[d];return new ih(a,g,e,!0,b.m,!1)}}return null};
n.reset=function(){this.i={}};function jl(){this.l=133;this.i={};this.g=[];this.o=this.m=0}
z(jl,N);jl.prototype.O=function(a){this.g=ph(a,151);this.g.sort(kl)};
jl.prototype.R=function(){this.o=this.m=0};
jl.prototype.get=function(a){var b=this.i[a.i];if(b)++this.m;else if(this.g)for(var c=0;c<this.g.length;++c)if(b=this.g[c].get(a)){b&&b.m&&(this.i[b.l.i]=b);++this.o;break}return b?new ih(a,b.g,b.i,b.o,b.m,b.u):null};
jl.prototype.has=function(a){return!!this.i[a.i]};
function kl(){return 0}
;function ll(a){this.l=a;this.g=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)")}
function ml(a,b){b&&!a.g.test(b.className)&&(b.className+=" "+a.l)}
function nl(a,b){b&&(b.className=b.className.replace(a.g," "))}
;function ol(){this.l=570;this.m=!1}
I(ol,N);n=ol.prototype;n.sa=function(a){this.u=a};
n.O=function(a){this.s=a.get(117);this.A=a.get(118)};
n.ga=function(a){var b=a.Nb;if(this.g=b?this.u.Ud(b):null){b=this.s;var c=F(this.Gf,this);R(b,b.g,10,c);b=this.s;c=F(this.Ef,this);R(b,b.g,11,c);R(this.s,this.g,"mouseover",F(this.Kf,this));R(this.s,this.g,"mouseout",F(this.Jf,this));a.Sc&&(this.o=new ll(a.Sc));a.Rc&&(this.i=new ll(a.Rc))}};
n.R=function(){this.m=!0;this.g&&this.A.m.u&&this.i&&ml(this.i,this.g)};
n.Ga=function(){this.m=!1;this.g&&(this.o&&nl(this.o,this.g),this.i&&nl(this.i,this.g))};
n.Kf=function(){this.m&&this.o&&ml(this.o,this.g)};
n.Jf=function(){this.m&&this.o&&nl(this.o,this.g)};
n.Gf=function(){this.m&&this.i&&ml(this.i,this.g)};
n.Ef=function(){this.m&&this.i&&nl(this.i,this.g)};var pl=ha(["//www.google.com/textinputassistant/","/","_tia.js"]);function ql(){this.l=160}
I(ql,N);n=ql.prototype;n.sa=function(a,b){this.m=a;a.Lc()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))};
n.O=function(a){this.s=a.get(374);this.u=a.get(128)};
n.ga=function(a){this.o=!!a.pc;this.A=a.pe;this.D=a.vc;this.H=a.Bg;this.F=a.Ag};
n.nb=function(){(this.i=this.m.get("gs_ok"))?this.g=this.i.firstChild:(this.g=O("img"),this.g.src=this.A+"/tia.png",this.i=O("span","gsok_a gsst_e"),this.i.id=this.m.getId("gs_ok"),this.i.appendChild(this.g));this.g.ds=F(this.gf,this);this.g.setAttribute("tia_field_name",this.m.Uc().name);this.g.setAttribute("tia_disable_swap",!0)};
n.R=function(a){a.Wc&&(this.o=!!a.pc);this.g.setAttribute("tia_property",a.qe)};
n.isEnabled=function(){return this.o};
n.Xd=function(){return{tooltip:this.F}};
n.Gd=function(a){if(!this.B){a=nd("SCRIPT");var b=kd(pl,this.H,this.D);Eb(a,b);document.body.appendChild(a);this.B=!0;this.s.add(3)}else if(this.g.onclick)this.g.onclick(a);return!1};
n.gf=function(){var a=this.u;Ni(a.D);mj(a)};
var rl=Pg++;var sl=ha(["#"]);function tl(){this.l=173;this.m={}}
z(tl,N);n=tl.prototype;
n.sa=function(a,b){this.o=a;a.Lc()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e","vertical-align:middle;"+(li()+":"+mi(.6)+";")),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",li()+":"+mi(.8)+";"),b.addRule(".gsst_a:active .gsst_e",li()+":"+
mi(1)+";"))};
n.O=function(a){this.u=a.get(118);this.i=ph(a,160)};
n.ga=function(a){this.A=a.Wc;this.i.sort(ul)};
n.nb=function(a){this.g=this.o.get("gs_st");if(!this.g){this.g=Q("gsst_b");this.g.id=this.o.getId("gs_st");if(a=a.Pb)this.g.style.lineHeight=a+"px";vl(this)}wl(this)};
n.R=function(){if(this.A)for(var a=0,b;b=this.i[a++];){var c=!!this.m[rl];if(b.isEnabled()!=c){for(;this.g.hasChildNodes();)this.g.removeChild(this.g.lastChild);vl(this);wl(this);break}}};
function ul(){return 0}
function vl(a){for(var b,c=0,d;d=a.i[c++];)if(d.isEnabled()){b=!0;var e=O("a","gsst_a");xl(a,e,d);e.appendChild(d.i);a.g.appendChild(e)}a.g.style.display=b?"":"none"}
function wl(a){a.m={};for(var b=0,c;c=a.i[b++];)if(c.isEnabled()){var d=rl,e=c.i.parentNode;e.onclick=F(c.Gd,c);a.m[d]=e;c.Xd&&(c=c.Xd(),c.gi&&(d=a.m[d])&&d.style&&(d.style.visibility="hidden"),d=c.tooltip)&&(e.title=d)}}
function xl(a,b,c){nb(b,fb(sl));b.addEventListener("click",function(){return!1});
Nh&&(b.tabIndex=0);b.onkeydown=function(d){d=d||window.event;var e=d.keyCode;if(e==13||e==32)c.Gd(d),Ci(a.u),hi(d)}}
Pg++;function yl(){this.o=33;this.l=Q();this.l.className="gspr_a"}
I(yl,xh);yl.prototype.g=function(){return this.l};function zl(){yh.call(this,33)}
z(zl,yh);zl.prototype.sa=function(a,b){b.addRule(".gspr_a","padding-right:1px")};
zl.prototype.Ib=function(){return new yl};
zl.prototype.Bb=function(a,b){Cb(b.l,ed(id,a.m.g.b||""))};
zl.prototype.Ab=function(a,b,c){Ei(c,b.g,1)};function Al(a,b){this.o=0;this.u=a;this.D=b;this.m=Q();this.l=Q("sbqs_a");this.m.appendChild(this.l);this.B=Q("sbqs_c");this.m.appendChild(this.B)}
z(Al,xh);Al.prototype.g=function(){return this.m};
function Bl(a,b,c,d){Cb(a.B,Ag(b));a.A=c;d&&!a.i&&(a.i=ii(a.l),a.i.onclick=F(function(e){Wk(this.u.m);rj(this.u,this.A);Ei(this.D,this.A,9);return hi(e)},a));
d?(Cb(a.i,Ag(d+" &raquo;")),a.l.style.display="",Wh(a.l,"hidden",!0)):a.i&&(a.l.style.display="none")}
;function Cl(){yh.call(this,0)}
I(Cl,yh);n=Cl.prototype;n.sa=function(a,b){b.addRule(".sbsb_c[dir=ltr] .sbqs_a","float:right");b.addRule(".sbsb_c[dir=rtl] .sbqs_a","float:left");b.addRule(".sbqs_b","visibility:hidden");b.addRule(".sbsb_d .sbqs_b","visibility:visible");b.addRule(".sbsb_c[dir=ltr] .sbqs_b","padding-left:5px;");b.addRule(".sbsb_c[dir=rtl] .sbqs_b","padding-right:5px;");b.addRule(".sbqs_c","word-wrap:break-word")};
n.O=function(a){this.g=a.get(118)};
n.R=function(a){this.i=a.Qd?a.Rd:""};
n.Ib=function(a){return new Al(this.g,a)};
n.Bb=function(a,b){Bl(b,a.getHtml(),a.g,this.i)};
n.Ab=function(a,b,c){Ei(c,b.g,1)};function Dl(a){fl.call(this);lh(this,149,new qh);this.set(347,new gl);this.set(133,new jl);lh(this,151,new il);this.set(570,new ol);this.set(134,new Hi);this.set(189,new Ki);lh(this,156,new Oi);a.ENABLE_DELETE_ICON?lh(this,152,new Di):lh(this,152,new Gi);lh(this,152,new zl);lh(this,152,new Cl);this.set(173,new tl);lh(this,160,new ql);this.set(157,new Ri);lh(this,156,new Si);a.SEARCHBOX_BEHAVIOR_EXPERIMENT=="zero-prefix"&&lh(this,156,new Pi(a));var b=a.SBOX_STRINGS||{};a.SEARCHBOX_REPORTING&&a.SEARCHBOX_COMPONENT&&
b.SBOX_REPORT_SUGGESTIONS&&(lh(this,153,new vh),lh(this,152,new si(b.SBOX_REPORT_SUGGESTIONS,a.SEARCHBOX_COMPONENT)));a.SEARCHBOX_COMPONENT&&(this.set(598,new Ti(a.SEARCHBOX_COMPONENT,a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST,a.SEARCHBOX_ZERO_TYPING_SUGGEST_USE_REGULAR_SUGGEST)),lh(this,156,new Yi))}
z(Dl,fl);function El(){return{yf:function(){return{clientName:"hp",requestIdentifier:"hp",ic:"google.com",Je:"",ad:"en",Nc:"",od:"",videoId:"",zd:"",authuser:0,sg:"",Fi:"",Ge:null,xd:"",Od:!1,rd:"",Ac:"",connectionType:0,transport:null,Ne:!1,ui:!1,ag:!1,enableCaching:!0,rf:10,Yh:10,lf:!0,Md:!0,Uh:!1,vf:!1,mg:!1,ng:!1,ji:!1,Wf:!0,hf:!1,Xf:500,Wc:!1,Pf:!0,di:!0,yi:!1,pc:!1,vc:"",pe:"//www.google.com/textinputassistant",qe:"",Bg:7,ai:!1,bi:!1,Tf:!1,Sf:!0,Uf:!1,be:!1,Na:!1,Mg:!1,Lg:!1,Dc:1,le:!0,mc:!1,Qd:!1,Nd:!1,
Eg:10,Vc:!1,Ig:!0,Ia:document.body,Vf:!0,Ke:null,pf:{},Xh:{},ti:0,wf:!1,bg:!0,lb:!1,uf:!1,Qg:!1,Ai:null,mf:!1,rg:null,Sg:null,Qc:!1,Yf:!0,td:!1,cf:!1,Ci:1,ne:!1,Ng:"Search",Rd:"I'm  Feeling Lucky",Og:"",qg:"Learn more",qd:"Remove",pd:"This search was removed from your Web History",fi:"",Th:"Did you mean:",Ag:"",wi:"",Ii:"Search by voice",Hi:'Listening for "Ok Google"',Gi:'Say "Ok Google"',Sh:"Clear Search",Pb:0,ig:0,Zc:"",Cc:"",ii:!1,Mb:"absolute",Qf:!1,ae:!1,xe:null,Rf:!0,kc:[0,0,0],jf:null,Vg:null,
Hd:[0],vd:!0,Me:"",Wg:"",Tg:"",Nb:null,Sc:"",Rc:"",Rh:1,fh:!1,Td:!1,li:0,Rg:!1,ff:!1,Vh:!1,Fg:!0}}}}
;function Fl(a,b,c,d,e){var f=Mh?"-moz-":zh?"-ms-":Nh?"-o-":Oh?"-webkit-":"",g=".gstl_"+d,h=new RegExp("(\\.("+e.join("|")+")\\b)"),k=[];return{addRule:function(l,m){if(b){if(c){l=l.split(",");for(var p=[],r=0,q;q=l[r++];)q=h.test(q)?q.replace(h,g+"$1"):g+" "+q,p.push(q);l=p.join(",")}k.push(l,"{",m,"}")}},
Ye:function(){if(b&&k.length){b=!1;var l=O("style");l.setAttribute("type","text/css");(a||Ng).appendChild(l);var m=k.join("");k=null;l.styleSheet?l.styleSheet.cssText=m:l.appendChild(document.createTextNode(m))}},
prefix:function(l,m){var p=l+(m||"");f&&(p+=m?l+f+m:f+l);return p}}}
;function Gl(a,b,c,d){this.i=a;this.I=b;this.F=c;this.H=d;this.l=-1;this.D=!1}
n=Gl.prototype;n.install=function(a){if(!this.D){a=Hl(a);this.l<0&&(this.l=Il(a));var b=di(this.i),c=Jl(this),d=!!b.getElementById("gs_id"+this.l),e=this,f=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.Me&&f.push(a.Me);f=Fl(a.Ke,a.Vf,a.mf,this.l,f);this.A=a.lb;this.g=new mh(this.F,this.H,{Lc:function(){return d},
get:function(g){return b.getElementById(g+e.l)},
Ud:function(g){return b.getElementById(g)},
Vd:function(){return e.I},
nc:function(){return c},
getId:function(g){return g+e.l},
Uc:function(){return e.i}},f,this,a);
this.g.get(347);this.u=this.g.get(130);this.g.get(115);this.m=this.g.get(117);this.g.get(123);this.g.get(135);this.J=this.g.get(118);this.Y=this.g.get(119);this.P=this.g.get(374);this.o=this.g.get(120);this.g.get(189);this.W=this.g.get(553);this.g.get(419);this.g.get(126);this.g.get(128);this.g.get(139);this.X=this.g.get(121);a=ki(this.i);this.s=ji(a);this.B=F(this.Kg,this);this.m.ra(a,"resize",this.B);this.D=!0}};
n.isActive=function(){return!!this.g&&this.g.isActive()};
function Kl(a,b){function c(d){Ei(a.X,a.J.g,12);return gi(d)}
a.m.ra(b,"keyup",function(d){d.keyCode!=13&&d.keyCode!=32||c(d)});
a.m.ra(b,"click",c)}
n.getId=function(){return this.l};
n.lb=function(){return this.A||!!this.u&&this.u.lb()};
n.ud=function(a){this.W.ud(a)};
function Il(a){a=ki(a.Ke||Ng);a.nextSearchboxId==void 0&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function Jl(a){if(a.i)for(a=a.i;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function Hl(a){a=dh(a);var b=a.vc;b?a.vc=b.toLowerCase():a.pc=!1;a.mc&&!a.Qd&&(a.mc=!1);Ph||(a.ng=!1);return a}
n.Kg=function(){var a=ji(ki(this.i));if(a.Oe!=this.s.Oe||a.de!=this.s.de)this.s=a,hj(this.m,8)};function Ll(){this.B="sbhcn";this.A="sbfcn";this.D="gsfi";this.i="gsfs";this.u=function(){return!0};
H("ytvoicesearchloggingparams",F(this.Af,this))}
z(Ll,jh);n=Ll.prototype;n.Af=function(){this.g.P.add(6);return ak(this.g.o,15)};
n.Dd=function(a){Wk(this.g.Y);this.u(ak(this.g.o,a))&&this.l.submit()};
n.redirect=function(a){this.I(this.Cd(a))};
n.Cd=function(a){var b=a.indexOf("?")>=0?"&":"?",c=ak(this.g.o);var d=this.g;c||(c=ak(d.o));d=Tg(c);return a+b+d};
n.me=function(a){if(this.o||this.m){if(this.s>22){var b=(this.s-22)/2;a.addRule(".sbsb_c","padding:"+b+"px 24px "+b+"px 10px")}else a.addRule(".sbsb_c","padding:4px 24px 4px 10px");this.J?a.addRule(".sbsb_a","padding: 16px 0 0"):a.addRule(".sbsb_a","padding: 16px 0");a.addRule(".sbdd_b","border-top: 0");a.addRule(".sbib_a","background:transparent");a.addRule(".sbib_b","padding: 0")}b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#030303" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule(".sbpqs_a","display: flex; align-items:center; white-space: pre;");a.addRule(".sbpqs_a:before",b);b='background: no-repeat url("data:image/svg+xml;base64,'+window.btoa('<svg fill="#030303" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>')+
'");';a.addRule(".sbqs_c","display: flex; align-items:center; white-space: pre;");a.addRule(".sbqs_c:before",b);b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#f1f1f1" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule("html[dark] .sbpqs_a:before",b);b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#f1f1f1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>')+
'");';a.addRule("html[dark] .sbqs_c:before",b);a.addRule(".sbpqs_a:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbqs_c:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbpqs_c","display: flex; align-items:center; margin-left: 34px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_c","margin-right: 34px;");a.addRule(".sbsb_c","line-height: 32px;");a.addRule(".sbpqs_c","line-height: 32px;");a.addRule(".sbsb_a","padding: 16px 0 8px");a.addRule(".sbfl_a","margin:-5px -18px -9px 0");
a.addRule("."+this.i,"font-size:1.6rem;color:#222");a.addRule(".sbdd_c","z-index:2010");a.addRule(".sbdd_a","z-index:2021");a.addRule(".sbib_a","background:transparent; width: 100%; flex: 1;");a.addRule("ytd-masthead[dark] .gsst_e","filter: invert(100%)");a.addRule(".sbpqs_a","color: #030303");a.addRule(".sbqs_c b","font-weight:500");a.addRule(".sbpqs_a b","font-weight: 500");a.addRule("html[dark] .sbqs_c b","font-weight: 600");a.addRule("html[dark] .sbpqs_a b","font-weight: 600");a.addRule(".sbsb_c[dir=ltr]",
"padding: 0px 24px 0px 16px;");a.addRule(".sbsb_c[dir=rtl]","padding: 0px 16px 0px 24px;");a.addRule(".sbdd_b","border-radius: 12px;");a.addRule(".sbsb_a","border-radius: 12px;");a.addRule(".sbsb_c[dir=ltr] .sbpqs_a:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=ltr] .sbqs_c:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_a:before","margin-left: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbqs_c:before","margin-left: 14px;");a.addRule(".sbfl_a","margin:-5px -10px -9px 0");this.H&&
(a.addRule(".sbsb_c","padding:0px 12px 0px 16px"),a.addRule(".sbpqs_b","display: flex; align-items: center; height: 32px;"));this.F&&(a.addRule(".sbpqs_b","display: none"),a.addRule(".sbsb_d .sbpqs_b","display: flex; align-items: center; height: 32px;"));a.addRule("html[dark] .sbsb_a","background: var(--yt-spec-raised-background);");a.addRule("html[dark] .sbdd_b","border: none; background: none; box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);");a.addRule("html[dark] .sbsb_i","color: var(--yt-spec-call-to-action)");
a.addRule("html[dark] .sbsb_d","background: var(--yt-spec-additive-background);");a.addRule(".sbfl_b","background: none; color: var(--yt-spec-text-secondary);");a.addRule("html[dark] .sbfl_a:hover","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbpqs_a","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbqs_c","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbse","color: var(--yt-spec-text-primary);")};
n.install=function(a,b,c,d,e,f,g){this.l=a;this.I=f;g&&(this.u=g);f=El().yf();f.clientName="youtube";f.requestIdentifier="youtube";f.Nc="yt";f.ad=d.REQUEST_LANGUAGE;f.Je=d.REQUEST_DOMAIN;f.Pf=!1;f.Dc=0;f.le=!1;f.mc=!1;f.ne=!1;f.Vc=!0;f.Zc=this.D;f.Cc=this.i;f.Sc=this.B;f.Rc=this.A;f.hi=!0;f.pc=d.HAS_ON_SCREEN_KEYBOARD;f.vc=d.REQUEST_LANGUAGE;f.pe="//www.gstatic.com/inputtools/images";f.qe="youtube";f.Qc=!0;f.Mb="fixed";this.o=d.IS_POLYMER;this.m=d.IS_FUSION;this.J=d.SEARCHBOX_REPORTING;this.s=d.SEARCHBOX_TAP_TARGET_EXPERIMENT;
this.H=d.ENABLE_DELETE_ICON;this.F=d.ENABLE_DELETE_ICON_HOVER;f.rd="suggestqueries-clients6.youtube.com";d.PQ&&(f.od=d.PQ);f.zd=d.PSUGGEST_TOKEN;f.authuser=d.SESSION_INDEX;f.pd=e.SUGGESTION_DISMISSED_LABEL;f.qd=e.SUGGESTION_DISMISS_LABEL;f.vd=!d.HIDE_REMOVE_LINK;f.Bi=Qg([0,33,35]);this.o?(f.Nb="search-container",f.Pb=24):this.m?(f.Nb="masthead-search",f.Pb=24):(f.Nb="masthead-search-terms",f.Pb=30);bc()||(f.ae=!0);f.xe=f.Nb;e=this.l.offsetHeight;f.kc=[e+(56-e)/2-40+4,0,0];e=[0];cc()&&hc()=="8.0"&&
(e[0]=-1);f.Hd=e;(e=d.REQUEST_LANGUAGE)?(e=e.toLowerCase(),e=e=="zh-tw"||e=="zh-cn"||e=="ja"||e=="ko"):e=!1;e&&(f.Nd=!0);if(e=d.SUGG_EXP_ID)f.xd=e;d.SEND_VISITOR_DATA&&(f.connectionType=1);d.SEND_VISITOR_DATA&&"VISITOR_DATA"in d&&(f.visitorData=d.VISITOR_DATA);if(this.g){a=this.g;b=f;c=ki(a.i);d=a.B;c.removeEventListener?c.removeEventListener("resize",d,!1):c.detachEvent("onresize",d);oh(a.g);b=Hl(b);a.A=b.lb;a=a.g;oh(a);for(c=0;d=a.g[c++];)d.R(b);a.l=!0}else d=new Dl(d),this.g=new Gl(b,a,this,d),
this.g.install(f),c&&(Kl(this.g,c),c.onclick=null)};function Ml(){this.data=[];this.g=-1}
Ml.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
Ml.prototype.get=function(a){return!!this.data[a]};
function Nl(a){a.g===-1&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function Ol(){this.blockSize=-1}
;function Pl(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.s=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.m=this.l=0;this.reset()}
I(Pl,Ol);Pl.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.m=this.l=0};
function Ql(a,b,c){c||(c=0);var d=a.s;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;e<80;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;e<80;e++){if(e<40)if(e<20){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else e<60?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
Pl.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.l;d<b;){if(f==0)for(;d<=c;)Ql(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Ql(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Ql(this,e);f=0;break}}this.l=f;this.m+=b}};
Pl.prototype.digest=function(){var a=[],b=this.m*8;this.l<56?this.update(this.i,56-this.l):this.update(this.i,this.blockSize-(this.l-56));for(var c=this.blockSize-1;c>=56;c--)this.o[c]=b&255,b/=256;Ql(this,this.o);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function Rl(){}
Rl.prototype.next=function(){return Sl};
var Sl={done:!0,value:void 0};Rl.prototype.kb=function(){return this};function Tl(a){if(a instanceof Ul||a instanceof Vl||a instanceof Wl)return a;if(typeof a.next=="function")return new Ul(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Ul(function(){return a[Symbol.iterator]()});
if(typeof a.kb=="function")return new Ul(function(){return a.kb()});
throw Error("Not an iterator or iterable.");}
function Ul(a){this.g=a}
Ul.prototype.kb=function(){return new Vl(this.g())};
Ul.prototype[Symbol.iterator]=function(){return new Wl(this.g())};
Ul.prototype.l=function(){return new Wl(this.g())};
function Vl(a){this.g=a}
z(Vl,Rl);Vl.prototype.next=function(){return this.g.next()};
Vl.prototype[Symbol.iterator]=function(){return new Wl(this.g)};
Vl.prototype.l=function(){return new Wl(this.g)};
function Wl(a){Ul.call(this,function(){return a});
this.i=a}
z(Wl,Ul);Wl.prototype.next=function(){return this.i.next()};function Xl(a){var b=[];Yl(new Zl,a,b);return b.join("")}
function Zl(){}
function Yl(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Yl(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),$l(d,c),c.push(":"),Yl(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":$l(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var am={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},bm=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function $l(a,b){b.push('"',a.replace(bm,function(c){var d=am[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),am[c]=d);return d}),'"')}
;function cm(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function S(a){Sb.call(this);this.s=1;this.i=[];this.o=0;this.g=[];this.l={};this.u=!!a}
I(S,Sb);n=S.prototype;n.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.s=e+3;d.push(e);return e};
n.Fc=function(a){var b=this.g[a];if(b){var c=this.l[b];this.o!=0?(this.i.push(a),this.g[a+1]=function(){}):(c&&rb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
n.ue=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];dm(this.g[g+1],this.g[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.ab;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.o--,this.i.length>0&&this.o==0)for(;c=this.i.pop();)this.Fc(c)}}return e!=0}return!1};
function dm(a,b,c){yd(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.Fc,this),delete this.l[a])}else this.g.length=0,this.l={}};
n.Ba=function(){S.Fa.Ba.call(this);this.clear();this.i.length=0};function em(a){this.g=a}
em.prototype.set=function(a,b){b===void 0?this.g.remove(a):this.g.set(a,Xl(b))};
em.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
em.prototype.remove=function(a){this.g.remove(a)};function fm(a){this.g=a}
I(fm,em);function gm(a){this.data=a}
function hm(a){return a===void 0||a instanceof gm?a:new gm(a)}
fm.prototype.set=function(a,b){fm.Fa.set.call(this,a,hm(b))};
fm.prototype.l=function(a){a=fm.Fa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
fm.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function im(a){this.g=a}
I(im,fm);im.prototype.set=function(a,b,c){if(b=hm(b)){if(c){if(c<G()){im.prototype.remove.call(this,a);return}b.expiration=c}b.creation=G()}im.Fa.set.call(this,a,b)};
im.prototype.l=function(a){var b=im.Fa.l.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<G()||c&&c>G())im.prototype.remove.call(this,a);else return b}};function jm(){}
;function km(){}
I(km,jm);km.prototype[Symbol.iterator]=function(){return Tl(this.kb(!0)).l()};
km.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function lm(a){this.g=a;this.l=null}
I(lm,km);n=lm.prototype;n.set=function(a,b){mm(this);try{this.g.setItem(a,b)}catch(c){if(this.g.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){mm(this);a=this.g.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){mm(this);this.g.removeItem(a)};
n.kb=function(a){mm(this);var b=0,c=this.g,d=new Rl;d.next=function(){if(b>=c.length)return Sl;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
n.clear=function(){mm(this);this.g.clear()};
n.key=function(a){mm(this);return this.g.key(a)};
function mm(a){if(a.g==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.l)!=null?b:a.l=nm(a.g))||rd(Error("Storage mechanism: Storage unavailable"))}
function nm(a){if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return b instanceof DOMException&&(b.name==="QuotaExceededError"||b.code===22||b.code===1014||b.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}}
;function om(){var a=null;try{a=D.localStorage||null}catch(b){}lm.call(this,a)}
I(om,lm);function pm(a,b){this.l=a;this.g=b+"::"}
I(pm,km);pm.prototype.set=function(a,b){this.l.set(this.g+a,b)};
pm.prototype.get=function(a){return this.l.get(this.g+a)};
pm.prototype.remove=function(a){this.l.remove(this.g+a)};
pm.prototype.kb=function(a){var b=this.l[Symbol.iterator](),c=this,d=new Rl;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.g.length):c.l.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var T={},qm=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";T.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
T.wd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var rm={mb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Sd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},sm={mb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Sd:function(a){return[].concat.apply([],a)}};
T.Pg=function(){qm?(T.jb=Uint8Array,T.Ka=Uint16Array,T.Re=Int32Array,T.assign(T,rm)):(T.jb=Array,T.Ka=Array,T.Re=Array,T.assign(T,sm))};
T.Pg();var tm=!0;try{new Uint8Array(1)}catch(a){tm=!1}
function um(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new T.jb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var vm={};vm=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var wm={},xm,ym=[],zm=0;zm<256;zm++){xm=zm;for(var Am=0;Am<8;Am++)xm=xm&1?3988292384^xm>>>1:xm>>>1;ym[zm]=xm}wm=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^ym[(a^b[d])&255];return a^-1};var Bm={};Bm={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Cm(a){for(var b=a.length;--b>=0;)a[b]=0}
var Dm=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Em=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Fm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Gm=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Hm=Array(576);Cm(Hm);var Im=Array(60);Cm(Im);var Jm=Array(512);Cm(Jm);var Km=Array(256);Cm(Km);var Lm=Array(29);Cm(Lm);var Mm=Array(30);Cm(Mm);function Nm(a,b,c,d,e){this.Ie=a;this.tf=b;this.sf=c;this.kf=d;this.xg=e;this.ce=a&&a.length}
var Om,Pm,Qm;function Rm(a,b){this.Ld=a;this.wb=0;this.Ua=b}
function Sm(a,b){a.ba[a.pending++]=b&255;a.ba[a.pending++]=b>>>8&255}
function Tm(a,b,c){a.ha>16-c?(a.pa|=b<<a.ha&65535,Sm(a,a.pa),a.pa=b>>16-a.ha,a.ha+=c-16):(a.pa|=b<<a.ha&65535,a.ha+=c)}
function Um(a,b,c){Tm(a,c[b*2],c[b*2+1])}
function Vm(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Wm(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Vm(d[e]++,e))}
function Xm(a){var b;for(b=0;b<286;b++)a.ta[b*2]=0;for(b=0;b<30;b++)a.bb[b*2]=0;for(b=0;b<19;b++)a.ka[b*2]=0;a.ta[512]=1;a.Ra=a.zb=0;a.za=a.matches=0}
function Ym(a){a.ha>8?Sm(a,a.pa):a.ha>0&&(a.ba[a.pending++]=a.pa);a.pa=0;a.ha=0}
function Zm(a,b,c){Ym(a);Sm(a,c);Sm(a,~c);T.mb(a.ba,a.window,b,c,a.pending);a.pending+=c}
function $m(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function an(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Qa;){e<a.Qa&&$m(b,a.da[e+1],a.da[e],a.depth)&&e++;if($m(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function bn(a,b,c){var d=0;if(a.za!==0){do{var e=a.ba[a.Jb+d*2]<<8|a.ba[a.Jb+d*2+1];var f=a.ba[a.cd+d];d++;if(e===0)Um(a,f,b);else{var g=Km[f];Um(a,g+256+1,b);var h=Dm[g];h!==0&&(f-=Lm[g],Tm(a,f,h));e--;g=e<256?Jm[e]:Jm[256+(e>>>7)];Um(a,g,c);h=Em[g];h!==0&&(e-=Mm[g],Tm(a,e,h))}}while(d<a.za)}Um(a,256,b)}
function cn(a,b){var c=b.Ld,d=b.Ua.Ie,e=b.Ua.ce,f=b.Ua.kf,g,h=-1;a.Qa=0;a.sb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Qa]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Qa<2;){var k=a.da[++a.Qa]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Ra--;e&&(a.zb-=d[k*2+1])}b.wb=h;for(g=a.Qa>>1;g>=1;g--)an(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Qa--],an(a,c,1),d=a.da[1],a.da[--a.sb]=g,a.da[--a.sb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.da[1]=k++,an(a,c,1);while(a.Qa>=
2);a.da[--a.sb]=a.da[1];g=b.Ld;k=b.wb;d=b.Ua.Ie;e=b.Ua.ce;f=b.Ua.tf;var l=b.Ua.sf,m=b.Ua.xg,p,r=0;for(p=0;p<=15;p++)a.Ma[p]=0;g[a.da[a.sb]*2+1]=0;for(b=a.sb+1;b<573;b++){var q=a.da[b];p=g[g[q*2+1]*2+1]+1;p>m&&(p=m,r++);g[q*2+1]=p;if(!(q>k)){a.Ma[p]++;var u=0;q>=l&&(u=f[q-l]);var t=g[q*2];a.Ra+=t*(p+u);e&&(a.zb+=t*(d[q*2+1]+u))}}if(r!==0){do{for(p=m-1;a.Ma[p]===0;)p--;a.Ma[p]--;a.Ma[p+1]+=2;a.Ma[m]--;r-=2}while(r>0);for(p=m;p!==0;p--)for(q=a.Ma[p];q!==0;)d=a.da[--b],d>k||(g[d*2+1]!==p&&(a.Ra+=(p-g[d*
2+1])*g[d*2],g[d*2+1]=p),q--)}Wm(c,h,a.Ma)}
function dn(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ka[l*2]+=g:l!==0?(l!==e&&a.ka[l*2]++,a.ka[32]++):g<=10?a.ka[34]++:a.ka[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function en(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Um(a,l,a.ka);while(--g!==0)}else l!==0?(l!==e&&(Um(a,l,a.ka),g--),Um(a,16,a.ka),Tm(a,g-3,2)):g<=10?(Um(a,17,a.ka),Tm(a,g-3,3)):(Um(a,18,a.ka),Tm(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function fn(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ta[c*2]!==0)return 0;if(a.ta[18]!==0||a.ta[20]!==0||a.ta[26]!==0)return 1;for(c=32;c<256;c++)if(a.ta[c*2]!==0)return 1;return 0}
var gn=!1;function hn(a,b,c){a.ba[a.Jb+a.za*2]=b>>>8&255;a.ba[a.Jb+a.za*2+1]=b&255;a.ba[a.cd+a.za]=c&255;a.za++;b===0?a.ta[c*2]++:(a.matches++,b--,a.ta[(Km[c]+256+1)*2]++,a.bb[(b<256?Jm[b]:Jm[256+(b>>>7)])*2]++);return a.za===a.Sb-1}
;function jn(a,b){a.msg=Bm[b];return b}
function kn(a){for(var b=a.length;--b>=0;)a[b]=0}
function ln(a){var b=a.state,c=b.pending;c>a.U&&(c=a.U);c!==0&&(T.mb(a.output,b.ba,b.Tb,c,a.xb),a.xb+=c,b.Tb+=c,a.yd+=c,a.U-=c,b.pending-=c,b.pending===0&&(b.Tb=0))}
function mn(a,b){var c=a.va>=0?a.va:-1,d=a.C-a.va,e=0;if(a.level>0){a.S.Oc===2&&(a.S.Oc=fn(a));cn(a,a.uc);cn(a,a.jc);dn(a,a.ta,a.uc.wb);dn(a,a.bb,a.jc.wb);cn(a,a.Id);for(e=18;e>=3&&a.ka[Gm[e]*2+1]===0;e--);a.Ra+=3*(e+1)+14;var f=a.Ra+3+7>>>3;var g=a.zb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Tm(a,b?1:0,3),Zm(a,c,d);else if(a.strategy===4||g===f)Tm(a,2+(b?1:0),3),bn(a,Hm,Im);else{Tm(a,4+(b?1:0),3);c=a.uc.wb+1;d=a.jc.wb+1;e+=1;Tm(a,c-257,5);Tm(a,d-1,5);Tm(a,e-4,4);for(f=0;f<e;f++)Tm(a,a.ka[Gm[f]*
2+1],3);en(a,a.ta,c-1);en(a,a.bb,d-1);bn(a,a.ta,a.bb)}Xm(a);b&&Ym(a);a.va=a.C;ln(a.S)}
function U(a,b){a.ba[a.pending++]=b}
function nn(a,b){a.ba[a.pending++]=b>>>8&255;a.ba[a.pending++]=b&255}
function on(a,b){var c=a.ke,d=a.C,e=a.wa,f=a.oe,g=a.C>a.ma-262?a.C-(a.ma-262):0,h=a.window,k=a.Wa,l=a.Ja,m=a.C+258,p=h[d+e-1],r=h[d+e];a.wa>=a.Zd&&(c>>=2);f>a.G&&(f=a.G);do{var q=b;if(h[q+e]===r&&h[q+e-1]===p&&h[q]===h[d]&&h[++q]===h[d+1]){d+=2;for(q++;h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&d<m;);q=258-(m-d);d=m-258;if(q>e){a.vb=b;e=q;if(q>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.G?e:a.G}
function pn(a){var b=a.ma,c;do{var d=a.Pe-a.G-a.C;if(a.C>=b+(b-262)){T.mb(a.window,a.window,b,b,0);a.vb-=b;a.C-=b;a.va-=b;var e=c=a.qc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ja[--e],a.Ja[e]=f>=b?f-b:0;while(--c);d+=b}if(a.S.oa===0)break;e=a.S;c=a.window;f=a.C+a.G;var g=e.oa;g>d&&(g=d);g===0?c=0:(e.oa-=g,T.mb(c,e.input,e.gb,g,f),e.state.wrap===1?e.M=vm(e.M,c,g,f):e.state.wrap===2&&(e.M=wm(e.M,c,g,f)),e.gb+=g,e.ib+=g,c=g);a.G+=c;if(a.G+a.la>=3)for(d=a.C-a.la,a.T=a.window[d],
a.T=(a.T<<a.Pa^a.window[d+1])&a.Oa;a.la&&!(a.T=(a.T<<a.Pa^a.window[d+3-1])&a.Oa,a.Ja[d&a.Wa]=a.head[a.T],a.head[a.T]=d,d++,a.la--,a.G+a.la<3););}while(a.G<262&&a.S.oa!==0)}
function qn(a,b){for(var c;;){if(a.G<262){pn(a);if(a.G<262&&b===0)return 1;if(a.G===0)break}c=0;a.G>=3&&(a.T=(a.T<<a.Pa^a.window[a.C+3-1])&a.Oa,c=a.Ja[a.C&a.Wa]=a.head[a.T],a.head[a.T]=a.C);c!==0&&a.C-c<=a.ma-262&&(a.V=on(a,c));if(a.V>=3)if(c=hn(a,a.C-a.vb,a.V-3),a.G-=a.V,a.V<=a.fd&&a.G>=3){a.V--;do a.C++,a.T=(a.T<<a.Pa^a.window[a.C+3-1])&a.Oa,a.Ja[a.C&a.Wa]=a.head[a.T],a.head[a.T]=a.C;while(--a.V!==0);a.C++}else a.C+=a.V,a.V=0,a.T=a.window[a.C],a.T=(a.T<<a.Pa^a.window[a.C+1])&a.Oa;else c=hn(a,0,
a.window[a.C]),a.G--,a.C++;if(c&&(mn(a,!1),a.S.U===0))return 1}a.la=a.C<2?a.C:2;return b===4?(mn(a,!0),a.S.U===0?3:4):a.za&&(mn(a,!1),a.S.U===0)?1:2}
function rn(a,b){for(var c,d;;){if(a.G<262){pn(a);if(a.G<262&&b===0)return 1;if(a.G===0)break}c=0;a.G>=3&&(a.T=(a.T<<a.Pa^a.window[a.C+3-1])&a.Oa,c=a.Ja[a.C&a.Wa]=a.head[a.T],a.head[a.T]=a.C);a.wa=a.V;a.se=a.vb;a.V=2;c!==0&&a.wa<a.fd&&a.C-c<=a.ma-262&&(a.V=on(a,c),a.V<=5&&(a.strategy===1||a.V===3&&a.C-a.vb>4096)&&(a.V=2));if(a.wa>=3&&a.V<=a.wa){d=a.C+a.G-3;c=hn(a,a.C-1-a.se,a.wa-3);a.G-=a.wa-1;a.wa-=2;do++a.C<=d&&(a.T=(a.T<<a.Pa^a.window[a.C+3-1])&a.Oa,a.Ja[a.C&a.Wa]=a.head[a.T],a.head[a.T]=a.C);
while(--a.wa!==0);a.eb=0;a.V=2;a.C++;if(c&&(mn(a,!1),a.S.U===0))return 1}else if(a.eb){if((c=hn(a,0,a.window[a.C-1]))&&mn(a,!1),a.C++,a.G--,a.S.U===0)return 1}else a.eb=1,a.C++,a.G--}a.eb&&(hn(a,0,a.window[a.C-1]),a.eb=0);a.la=a.C<2?a.C:2;return b===4?(mn(a,!0),a.S.U===0?3:4):a.za&&(mn(a,!1),a.S.U===0)?1:2}
function sn(a,b){for(var c,d,e,f=a.window;;){if(a.G<=258){pn(a);if(a.G<=258&&b===0)return 1;if(a.G===0)break}a.V=0;if(a.G>=3&&a.C>0&&(d=a.C-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.C+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.V=258-(e-d);a.V>a.G&&(a.V=a.G)}a.V>=3?(c=hn(a,1,a.V-3),a.G-=a.V,a.C+=a.V,a.V=0):(c=hn(a,0,a.window[a.C]),a.G--,a.C++);if(c&&(mn(a,!1),a.S.U===0))return 1}a.la=0;return b===4?(mn(a,!0),a.S.U===0?3:4):
a.za&&(mn(a,!1),a.S.U===0)?1:2}
function tn(a,b){for(var c;;){if(a.G===0&&(pn(a),a.G===0)){if(b===0)return 1;break}a.V=0;c=hn(a,0,a.window[a.C]);a.G--;a.C++;if(c&&(mn(a,!1),a.S.U===0))return 1}a.la=0;return b===4?(mn(a,!0),a.S.U===0?3:4):a.za&&(mn(a,!1),a.S.U===0)?1:2}
function un(a,b,c,d,e){this.Cf=a;this.wg=b;this.zg=c;this.vg=d;this.xf=e}
var vn;vn=[new un(0,0,0,0,function(a,b){var c=65535;for(c>a.Aa-5&&(c=a.Aa-5);;){if(a.G<=1){pn(a);if(a.G===0&&b===0)return 1;if(a.G===0)break}a.C+=a.G;a.G=0;var d=a.va+c;if(a.C===0||a.C>=d)if(a.G=a.C-d,a.C=d,mn(a,!1),a.S.U===0)return 1;if(a.C-a.va>=a.ma-262&&(mn(a,!1),a.S.U===0))return 1}a.la=0;if(b===4)return mn(a,!0),a.S.U===0?3:4;a.C>a.va&&mn(a,!1);return 1}),
new un(4,4,8,4,qn),new un(4,5,16,8,qn),new un(4,6,32,32,qn),new un(4,4,16,16,rn),new un(8,16,32,32,rn),new un(8,16,128,128,rn),new un(8,32,128,256,rn),new un(32,128,258,1024,rn),new un(32,258,258,4096,rn)];
function wn(){this.S=null;this.status=0;this.ba=null;this.wrap=this.pending=this.Tb=this.Aa=0;this.K=null;this.Ca=0;this.method=8;this.tb=-1;this.Wa=this.Bd=this.ma=0;this.window=null;this.Pe=0;this.head=this.Ja=null;this.oe=this.Zd=this.strategy=this.level=this.fd=this.ke=this.wa=this.G=this.vb=this.C=this.eb=this.se=this.V=this.va=this.Pa=this.Oa=this.Xc=this.qc=this.T=0;this.ta=new T.Ka(1146);this.bb=new T.Ka(122);this.ka=new T.Ka(78);kn(this.ta);kn(this.bb);kn(this.ka);this.Id=this.jc=this.uc=
null;this.Ma=new T.Ka(16);this.da=new T.Ka(573);kn(this.da);this.sb=this.Qa=0;this.depth=new T.Ka(573);kn(this.depth);this.ha=this.pa=this.la=this.matches=this.zb=this.Ra=this.Jb=this.za=this.Sb=this.cd=0}
function xn(a,b){if(!a||!a.state||b>5||b<0)return a?jn(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.oa!==0||c.status===666&&b!==4)return jn(a,a.U===0?-5:-2);c.S=a;var d=c.tb;c.tb=b;if(c.status===42)if(c.wrap===2)a.M=0,U(c,31),U(c,139),U(c,8),c.K?(U(c,(c.K.text?1:0)+(c.K.Sa?2:0)+(c.K.extra?4:0)+(c.K.name?8:0)+(c.K.comment?16:0)),U(c,c.K.time&255),U(c,c.K.time>>8&255),U(c,c.K.time>>16&255),U(c,c.K.time>>24&255),U(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),U(c,c.K.ni&255),c.K.extra&&c.K.extra.length&&
(U(c,c.K.extra.length&255),U(c,c.K.extra.length>>8&255)),c.K.Sa&&(a.M=wm(a.M,c.ba,c.pending,0)),c.Ca=0,c.status=69):(U(c,0),U(c,0),U(c,0),U(c,0),U(c,0),U(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),U(c,3),c.status=113);else{var e=8+(c.Bd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.C!==0&&(e|=32);c.status=113;nn(c,e+(31-e%31));c.C!==0&&(nn(c,a.M>>>16),nn(c,a.M&65535));a.M=1}if(c.status===69)if(c.K.extra){for(e=c.pending;c.Ca<(c.K.extra.length&65535)&&(c.pending!==c.Aa||
(c.K.Sa&&c.pending>e&&(a.M=wm(a.M,c.ba,c.pending-e,e)),ln(a),e=c.pending,c.pending!==c.Aa));)U(c,c.K.extra[c.Ca]&255),c.Ca++;c.K.Sa&&c.pending>e&&(a.M=wm(a.M,c.ba,c.pending-e,e));c.Ca===c.K.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(c.status===73)if(c.K.name){e=c.pending;do{if(c.pending===c.Aa&&(c.K.Sa&&c.pending>e&&(a.M=wm(a.M,c.ba,c.pending-e,e)),ln(a),e=c.pending,c.pending===c.Aa)){var f=1;break}f=c.Ca<c.K.name.length?c.K.name.charCodeAt(c.Ca++)&255:0;U(c,f)}while(f!==0);c.K.Sa&&c.pending>
e&&(a.M=wm(a.M,c.ba,c.pending-e,e));f===0&&(c.Ca=0,c.status=91)}else c.status=91;if(c.status===91)if(c.K.comment){e=c.pending;do{if(c.pending===c.Aa&&(c.K.Sa&&c.pending>e&&(a.M=wm(a.M,c.ba,c.pending-e,e)),ln(a),e=c.pending,c.pending===c.Aa)){f=1;break}f=c.Ca<c.K.comment.length?c.K.comment.charCodeAt(c.Ca++)&255:0;U(c,f)}while(f!==0);c.K.Sa&&c.pending>e&&(a.M=wm(a.M,c.ba,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.K.Sa?(c.pending+2>c.Aa&&ln(a),c.pending+2<=c.Aa&&(U(c,
a.M&255),U(c,a.M>>8&255),a.M=0,c.status=113)):c.status=113);if(c.pending!==0){if(ln(a),a.U===0)return c.tb=-1,0}else if(a.oa===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return jn(a,-5);if(c.status===666&&a.oa!==0)return jn(a,-5);if(a.oa!==0||c.G!==0||b!==0&&c.status!==666){d=c.strategy===2?tn(c,b):c.strategy===3?sn(c,b):vn[c.level].xf(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.U===0&&(c.tb=-1),0;if(d===2&&(b===1?(Tm(c,2,3),Um(c,256,Hm),c.ha===16?(Sm(c,c.pa),c.pa=0,c.ha=0):c.ha>=
8&&(c.ba[c.pending++]=c.pa&255,c.pa>>=8,c.ha-=8)):b!==5&&(Tm(c,0,3),Zm(c,0,0),b===3&&(kn(c.head),c.G===0&&(c.C=0,c.va=0,c.la=0))),ln(a),a.U===0))return c.tb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(U(c,a.M&255),U(c,a.M>>8&255),U(c,a.M>>16&255),U(c,a.M>>24&255),U(c,a.ib&255),U(c,a.ib>>8&255),U(c,a.ib>>16&255),U(c,a.ib>>24&255)):(nn(c,a.M>>>16),nn(c,a.M&65535));ln(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var yn={};yn=function(){this.input=null;this.ib=this.oa=this.gb=0;this.output=null;this.yd=this.U=this.xb=0;this.msg="";this.state=null;this.Oc=2;this.M=0};var zn=Object.prototype.toString;
function An(a){if(!(this instanceof An))return new An(a);a=this.options=T.assign({level:-1,method:8,chunkSize:16384,Xa:15,yg:8,strategy:0,Va:""},a||{});a.raw&&a.Xa>0?a.Xa=-a.Xa:a.Df&&a.Xa>0&&a.Xa<16&&(a.Xa+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.S=new yn;this.S.U=0;var b=this.S;var c=a.level,d=a.method,e=a.Xa,f=a.yg,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=jn(b,-2);else{e===8&&(e=9);var k=new wn;
b.state=k;k.S=b;k.wrap=h;k.K=null;k.Bd=e;k.ma=1<<k.Bd;k.Wa=k.ma-1;k.Xc=f+7;k.qc=1<<k.Xc;k.Oa=k.qc-1;k.Pa=~~((k.Xc+3-1)/3);k.window=new T.jb(k.ma*2);k.head=new T.Ka(k.qc);k.Ja=new T.Ka(k.ma);k.Sb=1<<f+6;k.Aa=k.Sb*4;k.ba=new T.jb(k.Aa);k.Jb=1*k.Sb;k.cd=3*k.Sb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.ib=b.yd=0;b.Oc=2;c=b.state;c.pending=0;c.Tb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.M=c.wrap===2?0:1;c.tb=0;if(!gn){d=Array(16);for(f=g=0;f<28;f++)for(Lm[f]=g,e=0;e<1<<Dm[f];e++)Km[g++]=
f;Km[g-1]=f;for(f=g=0;f<16;f++)for(Mm[f]=g,e=0;e<1<<Em[f];e++)Jm[g++]=f;for(g>>=7;f<30;f++)for(Mm[f]=g<<7,e=0;e<1<<Em[f]-7;e++)Jm[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Hm[e*2+1]=8,e++,d[8]++;for(;e<=255;)Hm[e*2+1]=9,e++,d[9]++;for(;e<=279;)Hm[e*2+1]=7,e++,d[7]++;for(;e<=287;)Hm[e*2+1]=8,e++,d[8]++;Wm(Hm,287,d);for(e=0;e<30;e++)Im[e*2+1]=5,Im[e*2]=Vm(e,5);Om=new Nm(Hm,Dm,257,286,15);Pm=new Nm(Im,Em,0,30,15);Qm=new Nm([],Fm,0,19,7);gn=!0}c.uc=new Rm(c.ta,Om);c.jc=new Rm(c.bb,Pm);c.Id=
new Rm(c.ka,Qm);c.pa=0;c.ha=0;Xm(c);c=0}else c=jn(b,-2);c===0&&(b=b.state,b.Pe=2*b.ma,kn(b.head),b.fd=vn[b.level].wg,b.Zd=vn[b.level].Cf,b.oe=vn[b.level].zg,b.ke=vn[b.level].vg,b.C=0,b.va=0,b.G=0,b.la=0,b.V=b.wa=2,b.eb=0,b.T=0);b=c}}else b=-2;if(b!==0)throw Error(Bm[b]);a.header&&(b=this.S)&&b.state&&b.state.wrap===2&&(b.state.K=a.header);if(a.Kb){var l;typeof a.Kb==="string"?l=um(a.Kb):zn.call(a.Kb)==="[object ArrayBuffer]"?l=new Uint8Array(a.Kb):l=a.Kb;a=this.S;f=l;g=f.length;if(a&&a.state)if(l=
a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.G)b=-2;else{b===1&&(a.M=vm(a.M,f,g,0));l.wrap=0;g>=l.ma&&(b===0&&(kn(l.head),l.C=0,l.va=0,l.la=0),c=new T.jb(l.ma),T.mb(c,f,g-l.ma,l.ma,0),f=c,g=l.ma);c=a.oa;d=a.gb;e=a.input;a.oa=g;a.gb=0;a.input=f;for(pn(l);l.G>=3;){f=l.C;g=l.G-2;do l.T=(l.T<<l.Pa^l.window[f+3-1])&l.Oa,l.Ja[f&l.Wa]=l.head[l.T],l.head[l.T]=f,f++;while(--g);l.C=f;l.G=2;pn(l)}l.C+=l.G;l.va=l.C;l.la=l.G;l.G=0;l.V=l.wa=2;l.eb=0;a.gb=d;a.input=e;a.oa=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(Bm[b]);
this.Lh=!0}}
An.prototype.push=function(a,b){var c=this.S,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=um(a):zn.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.gb=0;c.oa=c.input.length;do{c.U===0&&(c.output=new T.jb(d),c.xb=0,c.U=d);a=xn(c,e);if(a!==1&&a!==0)return Bn(this,a),this.ended=!0,!1;if(c.U===0||c.oa===0&&(e===4||e===2))if(this.options.Va==="string"){var f=T.wd(c.output,c.xb);b=f;f=f.length;if(f<65537&&(b.subarray&&tm||!b.subarray))b=
String.fromCharCode.apply(null,T.wd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=T.wd(c.output,c.xb),this.chunks.push(b)}while((c.oa>0||c.U===0)&&a!==1);if(e===4)return(c=this.S)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=jn(c,-2):(c.state=null,a=d===113?jn(c,-3):0)):a=-2,Bn(this,a),this.ended=!0,a===0;e===2&&(Bn(this,0),c.U=0);return!0};
function Bn(a,b){b===0&&(a.result=a.options.Va==="string"?a.chunks.join(""):T.Sd(a.chunks));a.chunks=[];a.err=b;a.msg=a.S.msg}
;function Cn(a){this.name=a}
;var Dn=new Cn("rawColdConfigGroup");var En=new Cn("rawHotConfigGroup");function Fn(a){this.L=K(a)}
z(Fn,M);Fn.prototype.g=function(a){L(this,5,a)};function Gn(a){this.L=K(a)}
z(Gn,M);function Hn(a){this.L=K(a)}
z(Hn,M);Hn.hb=[2];function In(a){this.L=K(a)}
z(In,M);In.prototype.qb=function(){return Hf(this,61)};
In.prototype.getPlayerType=function(){return Hf(this,36)};
In.prototype.setHomeGroupInfo=function(a){return Df(this,Hn,81,a)};
In.hb=[9,66,32,86,100,101];function Jn(a){this.L=K(a)}
z(Jn,M);var Kn=[2,3,4,5,6];function Ln(a){this.L=K(a)}
z(Ln,M);Ln.hb=[15,26,28];function Mn(a){this.L=K(a)}
z(Mn,M);Mn.hb=[5];function Nn(a){this.L=K(a)}
z(Nn,M);function On(a){this.L=K(a)}
z(On,M);On.prototype.setSafetyMode=function(a){return Kf(this,5,a)};
On.hb=[12];function Pn(a){this.L=K(a)}
z(Pn,M);Pn.hb=[12];var Qn={Kh:"WEB_DISPLAY_MODE_UNKNOWN",Gh:"WEB_DISPLAY_MODE_BROWSER",Ih:"WEB_DISPLAY_MODE_MINIMAL_UI",Jh:"WEB_DISPLAY_MODE_STANDALONE",Hh:"WEB_DISPLAY_MODE_FULLSCREEN"};function Rn(a){this.L=K(a)}
z(Rn,M);function Sn(a){this.L=K(a)}
z(Sn,M);Sn.prototype.l=function(){var a=a===void 0?0:a;var b=tf(this,2);if(b!=null)if(Ne(b)){var c;typeof b==="number"?c=Re(b):c=Pe(b);b=c}else b=void 0;return b!=null?b:a};function Tn(a){this.L=K(a)}
z(Tn,M);function Un(a){this.L=K(a,497)}
z(Un,M);
var Vn=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486,491,495,496];function Wn(a){this.L=K(a)}
z(Wn,M);function Xn(a){this.L=K(a)}
z(Xn,M);Xn.prototype.getPlaylistId=function(){return If(this,2)};
var Jf=[1,2];function Yn(a){this.L=K(a)}
z(Yn,M);Yn.hb=[3];var Zn=D.window,$n,ao,bo=(Zn==null?void 0:($n=Zn.yt)==null?void 0:$n.config_)||(Zn==null?void 0:(ao=Zn.ytcfg)==null?void 0:ao.data_)||{};H("yt.config_",bo);function co(){var a=arguments;a.length>1?bo[a[0]]=a[1]:a.length===1&&Object.assign(bo,a[0])}
function V(a,b){return a in bo?bo[a]:b}
;var eo={};function fo(){return eo.clicktracking||(eo.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function W(a){a=go(a);return typeof a==="string"&&a==="false"?!1:!!a}
function ho(a,b){a=go(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function go(a){return V("EXPERIMENT_FLAGS",{})[a]}
function io(){for(var a=[],b=V("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=V("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;function jo(a,b,c,d){mg.set(""+a,b,{ed:c,path:"/",domain:d===void 0?"youtube.com":d,secure:!1})}
;var ko=[];function lo(a){ko.forEach(function(b){return b(a)})}
function mo(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){no(b)}}:a}
function no(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=V("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),co("ERRORS",b));lo(a)}
function oo(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=V("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),co("ERRORS",f))}
;var po=/^[\w.]*$/,qo={q:!0,search_query:!0};function ro(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=so(f[0]||""),h=so(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?sb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],p=String(ro);l.args=[{key:m,value:f[1],query:a,method:to===p?"unchanged":p}];qo.hasOwnProperty(m)||oo(l)}}return c}
var to=String(ro);function uo(a){var b=[];tb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];pb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function vo(a){a.charAt(0)==="?"&&(a=a.substring(1));return ro(a,"&")}
function wo(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=vo(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return Ob(a,e)+d}
function xo(a){if(!b)var b=window.location.href;var c=a.match(Hb)[1]||null,d=Jb(a);c&&d?(a=a.match(Hb),b=b.match(Hb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Jb(b)===d&&(Number(b.match(Hb)[4]||null)||null)===(Number(a.match(Hb)[4]||null)||null):!0;return a}
function so(a){return a&&a.match(po)?a:Gb(a)}
;var yo=Td||Ud;function zo(a){var b=Xb();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Ao=Date.now().toString();function Bo(a){var b=Co;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=eg;e.flash="0";a:{try{var f=b.g.top.location.href}catch(hb){f=2;break a}f=f?f===b.l.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?Wf:g;try{var h=g.history.length}catch(hb){h=0}e.u_his=h;var k;e.u_h=(k=Wf.screen)==null?void 0:k.height;var l;e.u_w=(l=Wf.screen)==null?void 0:l.width;var m;e.u_ah=(m=Wf.screen)==null?void 0:m.availHeight;var p;e.u_aw=
(p=Wf.screen)==null?void 0:p.availWidth;var r;e.u_cd=(r=Wf.screen)==null?void 0:r.colorDepth}catch(hb){}h=b.g;try{var q=h.screenX;var u=h.screenY}catch(hb){}try{var t=h.outerWidth;var y=h.outerHeight}catch(hb){}try{var C=h.innerWidth;var P=h.innerHeight}catch(hb){}try{var ja=h.screenLeft;var ca=h.screenTop}catch(hb){}try{C=h.innerWidth,P=h.innerHeight}catch(hb){}try{var ib=h.screen.availWidth;var Qi=h.screen.availTop}catch(hb){}q=[ja,ca,q,u,ib,Qi,t,y,C,P];u=b.g.top;try{var Hc=(u||window).document,
jb=Hc.compatMode=="CSS1Compat"?Hc.documentElement:Hc.body;var Wa=(new md(jb.clientWidth,jb.clientHeight)).round()}catch(hb){Wa=new md(-12245933,-12245933)}Hc=Wa;Wa={};var Xa=Xa===void 0?D:Xa;jb=new Ml;"SVGElement"in Xa&&"createElementNS"in Xa.document&&jb.set(0);u=bg();u["allow-top-navigation-by-user-activation"]&&jb.set(1);u["allow-popups-to-escape-sandbox"]&&jb.set(2);Xa.crypto&&Xa.crypto.subtle&&jb.set(3);"TextDecoder"in Xa&&"TextEncoder"in Xa&&jb.set(4);Xa=Nl(jb);Wa.bc=Xa;Wa.bih=Hc.height;Wa.biw=
Hc.width;Wa.brdim=q.join();b=b.l;b=(Wa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Wa.wgl=!!Wf.WebGLRenderingContext,Wa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Co=new function(){var a=window.document;this.g=window;this.l=a};
H("yt.ads_.signals_.getAdSignalsString",function(a){return uo(Bo(a))});G();var Do="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function Eo(){if(!Do)return null;var a=Do();return"open"in a?a:null}
;function Fo(a,b){typeof a==="function"&&(a=mo(a));return window.setTimeout(a,b)}
;var Go="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(Go);var Ho={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Io="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(Go)),Jo=!1;
function Ko(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&mo(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=Eo();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;W("debug_forward_web_query_parameters")&&(a=Lo(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Mo(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(p){oo(p)}}l.send(d);return l}
function Mo(a,b){b=b===void 0?{}:b;var c=xo(a),d=V("INNERTUBE_CLIENT_NAME"),e=W("web_ajax_ignore_global_headers_if_set"),f;for(f in Ho){var g=V(Ho[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=V("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(Jb(a)?!1:!0))){k=a;var l;if(l=W("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=Jb(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=Ib(k.match(Hb)[5]||null)||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Jb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Jb(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(p){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Jb(a)||(b["X-YouTube-Ad-Signals"]=uo(Bo()));return b}
function No(a,b){b.method="POST";b.postParams||(b.postParams={});return Oo(a,b)}
function Oo(a,b){var c=b.format||"JSON";a=Po(a,b);var d=Qo(a,b),e=!1,f=Ro(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||p||r)m=So(a,c,k,b.convertToSafeHtml);l&&(l=To(c,k,m));m=m||{};p=b.context||D;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.onFinish&&
b.onFinish.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=Fo(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function Po(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=V("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=wo(a,b||{},!0);return a}
function Qo(a,b){var c=V("XSRF_FIELD_NAME"),d=V("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=V("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Jb(a)&&!b.withCredentials&&Jb(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(W("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=vo(e),wb(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):Nb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!Jo&&a&&b.method!=="POST"&&(Jo=!0,no(Error("AJAX request with postData should use POST")));return e}
function So(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,oo(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Uo(a):null)e={},pb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Vo(g)})}d&&Wo(e);
return e}
function Wo(a){if(Ka(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=Bb(a[b]);a[c]=d}else Wo(a[b])}}
function To(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Uo(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Vo(a){var b="";pb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Lo(a){var b=window.location.search,c=Jb(a);W("debug_handle_relative_url_for_query_forward_killswitch")||!c&&xo(a)&&(c=document.location.hostname);var d=Ib(a.match(Hb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=vo(b),f={};pb(Io,function(g){e[g]&&(f[g]=e[g])});
return wo(a,f||{},!1)}
var Ro=Ko;function Xo(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Yo(){}
;function Zo(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;H("ytglobal.prefsUserPrefsPrefs_",E("ytglobal.prefsUserPrefsPrefs_")||{});var $o={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},ap={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},bp={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},cp={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function dp(){var a=D.navigator;return a?a.connection:void 0}
;function ep(a){var b=Ea.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
z(ep,Error);function fp(){try{return gp(),!0}catch(a){return!1}}
function gp(){if(V("DATASYNC_ID")!==void 0)return V("DATASYNC_ID");throw new ep("Datasync ID not set","unknown");}
;function hp(){}
function ip(a,b){return vg.Za(a,0,b)}
hp.prototype.Ha=function(a,b){return this.Za(a,1,b)};
hp.prototype.Gb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var jp=ho("web_emulated_idle_callback_delay",300),kp=1E3/60-3,lp=[8,5,4,3,2,1,0];
function mp(a){a=a===void 0?{}:a;Sb.call(this);this.l=[];this.i={};this.I=this.g=0;this.H=this.s=!1;this.B=[];this.D=this.J=!1;for(var b=w(lp),c=b.next();!c.done;c=b.next())this.l[c.value]=[];this.o=0;this.na=a.timeout||1;this.A=kp;this.u=0;this.P=this.Cg.bind(this);this.ea=this.ah.bind(this);this.X=this.Xe.bind(this);this.Y=this.Zf.bind(this);this.ca=this.Hg.bind(this);this.W=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!W("disable_scheduler_requestIdleCallback");(this.F=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.P)}
z(mp,Sb);n=mp.prototype;n.Gb=function(a){var b=G();np(a);a=G()-b;this.s||(this.A-=a)};
n.Za=function(a,b,c){++this.I;if(b===10)return this.Gb(a),this.I;var d=this.I;this.i[d]=a;this.s&&!c?this.B.push({id:d,priority:b}):(this.l[b].push(d),this.H||this.s||(this.g!==0&&op(this)!==this.u&&pp(this),this.start()));return d};
n.xa=function(a){delete this.i[a]};
function qp(a){a.B.length=0;for(var b=5;b>=0;b--)a.l[b].length=0;a.l[8].length=0;a.i={};pp(a)}
function op(a){if(a.l[8].length){if(a.D)return 4;if(!document.hidden&&a.F)return 3}for(var b=5;b>=a.o;b--)if(a.l[b].length>0)return b>0?!document.hidden&&a.F?3:2:1;return 0}
function rp(a){var b=E("yt.logging.errors.log");b&&b(a)}
function np(a){try{a()}catch(b){rp(b)}}
function sp(a){for(var b=w(lp),c=b.next();!c.done;c=b.next())if(a.l[c.value].length)return!0;return!1}
n.Zf=function(a){var b=void 0;a&&(b=a.timeRemaining());this.J=!0;tp(this,b);this.J=!1};
n.ah=function(){tp(this)};
n.Xe=function(){up(this)};
n.Hg=function(a){this.D=!0;var b=op(this);b===4&&b!==this.u&&(pp(this),this.start());tp(this,void 0,a);this.D=!1};
n.Cg=function(){document.hidden||up(this);this.g&&(pp(this),this.start())};
function up(a){pp(a);a.s=!0;for(var b=G(),c=a.l[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&np(e)}vp(a);a.s=!1;sp(a)&&a.start();b=G()-b;a.A-=b}
function vp(a){for(var b=0,c=a.B.length;b<c;b++){var d=a.B[b];a.l[d.priority].push(d.id)}a.B.length=0}
function tp(a,b,c){a.D&&a.u===4&&a.g||pp(a);a.s=!0;b=G()+(b||a.A);for(var d=a.l[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(l){rp(l)}}for(d=a.l[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&np(e);d=a.J?0:1;d=a.o>d?a.o:d;if(!(G()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.l[f];g.length;){var h=g.shift(),k=c.i[h];delete c.i[h];if(k){c=k;break a}}c=null}c&&np(c)}while(c&&G()<b)}a.s=!1;vp(a);a.A=kp;sp(a)&&a.start()}
n.start=function(){this.H=!1;if(this.g===0)switch(this.u=op(this),this.u){case 1:var a=this.Y;this.g=this.W?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,jp);break;case 2:this.g=window.setTimeout(this.ea,this.na);break;case 3:this.g=window.requestAnimationFrame(this.ca);break;case 4:this.g=window.setTimeout(this.X,0)}};
function pp(a){if(a.g){switch(a.u){case 1:var b=a.g;a.W?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
n.Ba=function(){qp(this);pp(this);this.F&&document.removeEventListener("visibilitychange",this.P);Sb.prototype.Ba.call(this)};var wp=E("yt.scheduler.instance.timerIdMap_")||{},xp=ho("kevlar_tuner_scheduler_soft_state_timer_ms",800),yp=0,zp=0;function Ap(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.ab)a=new mp(V("scheduler")||{}),H("ytglobal.schedulerInstanceInstance_",a);return a}
function Bp(){Cp();var a=E("ytglobal.schedulerInstanceInstance_");a&&(a&&typeof a.dispose=="function"&&a.dispose(),H("ytglobal.schedulerInstanceInstance_",null))}
function Cp(){qp(Ap());for(var a in wp)wp.hasOwnProperty(a)&&delete wp[Number(a)]}
function Dp(a,b,c){if(!c)return c=c===void 0,-Ap().Za(a,b,c);var d=window.setTimeout(function(){var e=Ap().Za(a,b);wp[d]=e},c);
return d}
function Ep(a){Ap().Gb(a)}
function Fp(a){var b=Ap();if(a<0)b.xa(-a);else{var c=wp[a];c?(b.xa(c),delete wp[a]):window.clearTimeout(a)}}
function Gp(){Hp()}
function Hp(){window.clearTimeout(yp);Ap().start()}
function Ip(){var a=Ap();pp(a);a.H=!0;window.clearTimeout(yp);yp=window.setTimeout(Gp,xp)}
function Jp(){window.clearTimeout(zp);zp=window.setTimeout(function(){Kp(0)},xp)}
function Kp(a){Jp();var b=Ap();b.o=a;b.start()}
function Lp(a){Jp();var b=Ap();b.o>a&&(b.o=a,b.start())}
function Mp(){window.clearTimeout(zp);var a=Ap();a.o=0;a.start()}
;function Np(){hp.apply(this,arguments)}
z(Np,hp);function Op(){Np.g||(Np.g=new Np);return Np.g}
Np.prototype.Za=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Fo(a,c||0)};
Np.prototype.xa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Np.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
var vg=Op();
W("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(H("yt.scheduler.instance.dispose",Bp),H("yt.scheduler.instance.addJob",Dp),H("yt.scheduler.instance.addImmediateJob",Ep),H("yt.scheduler.instance.cancelJob",Fp),H("yt.scheduler.instance.cancelAllJobs",Cp),H("yt.scheduler.instance.start",Hp),H("yt.scheduler.instance.pause",Ip),H("yt.scheduler.instance.setPriorityThreshold",Kp),H("yt.scheduler.instance.enablePriorityThreshold",Lp),H("yt.scheduler.instance.clearPriorityThreshold",Mp),H("yt.scheduler.initialized",
!0));function Pp(a){var b=new om;this.g=(a=(b.l=nm(b.g))?a?new pm(b,a):b:null)?new im(a):null;this.l=document.domain||window.location.hostname}
Pp.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape(Xl(b))}catch(f){return}else e=escape(b);jo(a,e,c,this.l)};
Pp.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=mg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Pp.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.l;mg.remove(""+a,"/",b===void 0?"youtube.com":b)};var Qp=function(){var a;return function(){a||(a=new Pp("ytidb"));return a}}();
function Rp(){var a;return(a=Qp())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Sp=[],Tp=!1;function Up(a){Tp||(Sp.push({type:"ERROR",payload:a}),Sp.length>10&&Sp.shift())}
function Vp(a,b){Tp||(Sp.push({type:"EVENT",eventType:a,payload:b}),Sp.length>10&&Sp.shift())}
;function Wp(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Xp(a){return a.substr(0,a.indexOf(":"))||a}
;var Yp={},Zp=(Yp.AUTH_INVALID="No user identifier specified.",Yp.EXPLICIT_ABORT="Transaction was explicitly aborted.",Yp.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Yp.MISSING_INDEX="Index not created.",Yp.MISSING_OBJECT_STORES="Object stores not created.",Yp.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Yp.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Yp.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Yp.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Yp.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Yp.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Yp.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Yp),$p={},aq=($p.AUTH_INVALID="ERROR",$p.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",$p.EXPLICIT_ABORT="IGNORED",$p.IDB_NOT_SUPPORTED="ERROR",$p.MISSING_INDEX=
"WARNING",$p.MISSING_OBJECT_STORES="ERROR",$p.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",$p.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",$p.QUOTA_EXCEEDED="WARNING",$p.QUOTA_MAYBE_EXCEEDED="WARNING",$p.UNKNOWN_ABORT="WARNING",$p.INCOMPATIBLE_DB_VERSION="WARNING",$p),bq={},cq=(bq.AUTH_INVALID=!1,bq.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,bq.EXPLICIT_ABORT=!1,bq.IDB_NOT_SUPPORTED=!1,bq.MISSING_INDEX=!1,bq.MISSING_OBJECT_STORES=!1,bq.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,bq.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,bq.QUOTA_EXCEEDED=!1,bq.QUOTA_MAYBE_EXCEEDED=!0,bq.UNKNOWN_ABORT=!0,bq.INCOMPATIBLE_DB_VERSION=!1,bq);function X(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Zp[a]:c;d=d===void 0?aq[a]:d;e=e===void 0?cq[a]:e;ep.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,X.prototype)}
z(X,ep);function dq(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Zp.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,dq.prototype)}
z(dq,X);function eq(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,eq.prototype)}
z(eq,Error);var fq=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function gq(a,b,c,d){b=Xp(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new X("QUOTA_EXCEEDED",a);if(Vd&&e.name==="UnknownError")return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof eq)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&fq.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",mi:e.name})];e.level="WARNING";return e}
function hq(a,b,c){var d=Rp();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function iq(a){if(!a)throw Error();throw a;}
function jq(a){return a}
function kq(a){this.g=a}
function lq(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=w(d.l);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.l=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
lq.resolve=function(a){return new lq(new kq(function(b,c){a instanceof lq?a.then(b,c):b(a)}))};
lq.reject=function(a){return new lq(new kq(function(b,c){c(a)}))};
lq.prototype.then=function(a,b){var c=this,d=a!=null?a:jq,e=b!=null?b:iq;return new lq(new kq(function(f,g){c.state.status==="PENDING"?(c.g.push(function(){mq(c,c,d,f,g)}),c.l.push(function(){nq(c,c,e,f,g)})):c.state.status==="FULFILLED"?mq(c,c,d,f,g):c.state.status==="REJECTED"&&nq(c,c,e,f,g)}))};
function oq(a,b){a.then(void 0,b)}
function mq(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof lq?pq(a,b,f,d,e):d(f)}catch(g){e(g)}}
function nq(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof lq?pq(a,b,f,d,e):d(f)}catch(g){e(g)}}
function pq(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof lq?pq(a,b,f,d,e):d(f)},function(f){e(f)})}
;function qq(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function rq(a){return new Promise(function(b,c){qq(a,b,c)})}
function sq(a){return new lq(new kq(function(b,c){qq(a,b,c)}))}
;function tq(a,b){return new lq(new kq(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var uq=window,Y=uq.ytcsi&&uq.ytcsi.now?uq.ytcsi.now:uq.performance&&uq.performance.timing&&uq.performance.now&&uq.performance.timing.navigationStart?function(){return uq.performance.timing.navigationStart+uq.performance.now()}:function(){return(new Date).getTime()};function vq(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.l=!1}
n=vq.prototype;n.add=function(a,b,c){return wq(this,[a],{mode:"readwrite",qa:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return wq(this,[a],{mode:"readwrite",qa:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.g.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
function xq(a,b,c){a=a.g.createObjectStore(b,c);return new yq(a)}
n.delete=function(a,b){return wq(this,[a],{mode:"readwrite",qa:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return wq(this,[a],{mode:"readonly",qa:!0},function(c){return c.objectStore(a).get(b)})};
function zq(a,b,c){return wq(a,[b],{mode:"readwrite",qa:!0},function(d){d=d.objectStore(b);return sq(d.g.put(c,void 0))})}
n.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function wq(a,b,c,d){var e,f,g,h,k,l,m,p,r,q,u,t;return B(function(y){switch(y.g){case 1:var C={mode:"readonly",qa:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?C.mode=c:Object.assign(C,c);e=C;a.transactionCount++;f=e.qa?3:1;g=0;case 2:if(h){y.N(4);break}g++;k=Math.round(Y());va(y,5);l=a.g.transaction(b,e.mode);C=new Aq(l);C=Bq(C,d);return A(y,C,7);case 7:return m=y.l,p=Math.round(Y()),Cq(a,k,p,g,void 0,b.join(),e),y.return(m);case 5:r=wa(y);q=Math.round(Y());u=gq(r,a.g.name,b.join(),
a.g.version);if((t=u instanceof X&&!u.g)||g>=f)Cq(a,k,q,g,u,b.join(),e),h=u;y.N(2);break;case 4:return y.return(Promise.reject(h))}})}
function Cq(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Vp("QUOTA_EXCEEDED",{dbName:Xp(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&e.type==="UNKNOWN_ABORT"&&(c-=a.i,c<0&&c>=Math.pow(2,31)&&(c=0),Vp("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.l=!0),Dq(a,!1,d,f,b,g.tag),Up(e)):Dq(a,!0,d,f,b,g.tag)}
function Dq(a,b,c,d,e,f){Vp("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.l,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.g.name};
function yq(a){this.g=a}
n=yq.prototype;n.add=function(a,b){return sq(this.g.add(a,b))};
n.autoIncrement=function(){return this.g.autoIncrement};
n.clear=function(){return sq(this.g.clear()).then(function(){})};
function Eq(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function Fq(a,b){return Gq(a,{query:b},function(c){return c.delete().then(function(){return Hq(c)})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?Fq(this,a):sq(this.g.delete(a))};
n.get=function(a){return sq(this.g.get(a))};
n.index=function(a){try{return new Iq(this.g.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new eq(a,this.g.name);throw b;}};
n.getName=function(){return this.g.name};
n.keyPath=function(){return this.g.keyPath};
function Gq(a,b,c){a=a.g.openCursor(b.query,b.direction);return Jq(a).then(function(d){return tq(d,c)})}
function Aq(a){var b=this;this.g=a;this.i=new Map;this.l=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.l){e=X;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function Bq(a,b){var c=new Promise(function(d,e){try{oq(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
Aq.prototype.abort=function(){this.g.abort();this.l=!0;throw new X("EXPLICIT_ABORT");};
Aq.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new yq(a),this.i.set(a,b));return b};
function Iq(a){this.g=a}
Iq.prototype.delete=function(a){return Kq(this,{query:a},function(b){return b.delete().then(function(){return Hq(b)})})};
Iq.prototype.get=function(a){return sq(this.g.get(a))};
Iq.prototype.keyPath=function(){return this.g.keyPath};
Iq.prototype.unique=function(){return this.g.unique};
function Kq(a,b,c){a=a.g.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return Jq(a).then(function(d){return tq(d,c)})}
function Lq(a,b){this.request=a;this.cursor=b}
function Jq(a){return sq(a).then(function(b){return b?new Lq(a,b):null})}
function Hq(a){a.cursor.continue(void 0);return Jq(a.request)}
Lq.prototype.delete=function(){return sq(this.cursor.delete()).then(function(){})};
Lq.prototype.update=function(a){return sq(this.cursor.update(a))};function Mq(a,b,c){return new Promise(function(d,e){function f(){r||(r=new vq(g.result,{closed:p}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.af,k=c.bf,l=c.Yg,m=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(q.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&q.dataLoss!=="none"&&Vp("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:Xp(a)});var u=f(),t=new Aq(g.transaction);m&&
m(u,function(y){return q.oldVersion<y&&q.newVersion>=y},t);
t.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){Vp("IDB_UNEXPECTEDLY_CLOSED",{dbName:Xp(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Nq(a,b,c){c=c===void 0?{}:c;return Mq(a,b,c)}
function Oq(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.g==1)return va(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.af)&&c.addEventListener("blocked",function(){e()}),A(g,rq(c),4);
if(g.g!=2)g.g=0,g.o=0;else throw f=wa(g),gq(f,a,"",-1);})}
;function Pq(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.m=0}
Pq.prototype.l=function(a,b,c){c=c===void 0?{}:c;return Nq(a,b,c)};
Pq.prototype.delete=function(a){a=a===void 0?{}:a;return Oq(this.name,a)};
function Qq(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Rq(a,b){if(!b)throw hq("openWithToken",Xp(a.name));return Sq(a)}
function Sq(a){function b(){var f,g,h,k,l,m,p,r,q,u;return B(function(t){switch(t.g){case 1:return g=(f=Error().stack)!=null?f:"",va(t,2),A(t,a.l(a.name,a.options.version,d),4);case 4:for(var y=h=t.l,C=a.options,P=[],ja=w(Object.keys(C.yb)),ca=ja.next();!ca.done;ca=ja.next()){ca=ca.value;var ib=C.yb[ca],Qi=ib.Jg===void 0?Number.MAX_VALUE:ib.Jg;!(y.g.version>=ib.Hb)||y.g.version>=Qi||y.g.objectStoreNames.contains(ca)||P.push(ca)}k=P;if(k.length===0){t.N(5);break}l=Object.keys(a.options.yb);m=h.objectStoreNames();
if(a.o<ho("ytidb_reopen_db_retries",0))return a.o++,h.close(),Up(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),t.return(b());if(!(a.m<ho("ytidb_remake_db_retries",1))){t.N(6);break}a.m++;return A(t,a.delete(),7);case 7:return Up(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),t.return(b());case 6:throw new dq(m,l);case 5:return t.return(h);case 2:p=wa(t);if(p instanceof DOMException?
p.name!=="VersionError":"DOMError"in self&&p instanceof DOMError?p.name!=="VersionError":!(p instanceof Object&&"message"in p)||p.message!=="An attempt was made to open a database using a lower version than the existing version."){t.N(8);break}return A(t,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=t.l;q=r.g.version;if(a.options.version!==void 0&&q>a.options.version+1)throw r.close(),a.i=!1,Qq(a,q);return t.return(r);case 8:throw c(),p instanceof Error&&!W("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),gq(p,a.name,"",(u=a.options.version)!=null?u:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw Qq(a);if(a.g)return a.g;var d={bf:function(f){f.close()},
closed:c,Yg:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var Tq=new Pq("YtIdbMeta",{yb:{databases:{Hb:1}},upgrade:function(a,b){b(1)&&xq(a,"databases",{keyPath:"actualName"})}});
function Uq(a,b){var c;return B(function(d){if(d.g==1)return A(d,Rq(Tq,b),2);c=d.l;return d.return(wq(c,["databases"],{qa:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return sq(f.g.put(a,void 0)).then(function(){})})}))})}
function Vq(a,b){var c;return B(function(d){if(d.g==1)return a?A(d,Rq(Tq,b),2):d.return();c=d.l;return d.return(c.delete("databases",a))})}
function Wq(a,b){var c,d;return B(function(e){return e.g==1?(c=[],A(e,Rq(Tq,b),2)):e.g!=3?(d=e.l,A(e,wq(d,["databases"],{qa:!0,mode:"readonly"},function(f){c.length=0;return Gq(f.objectStore("databases"),{},function(g){a(g.cursor.value)&&c.push(g.cursor.value);return Hq(g)})}),3)):e.return(c)})}
function Xq(a){return Wq(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
;var Yq,Zq=new function(){}(new function(){});
function $q(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=Rp();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=yo)f=/WebKit\/([0-9]+)/.exec(Xb()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Xb()),f=!(f&&parseInt(f[1],10)>=602));if(f||nc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
va(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return A(e,Uq(d,Zq),4);case 4:return A(e,Vq("yt-idb-test-do-not-use",Zq),5);case 5:return e.return(!0);case 2:return wa(e),e.return(!1)}})}
function ar(){if(Yq!==void 0)return Yq;Tp=!0;return Yq=$q().then(function(a){Tp=!1;var b;if((b=Qp())!=null&&b.g){var c;b={hasSucceededOnce:((c=Rp())==null?void 0:c.hasSucceededOnce)||a};var d;(d=Qp())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function br(){return E("ytglobal.idbToken_")||void 0}
function cr(){var a=br();return a?Promise.resolve(a):ar().then(function(b){(b=b?Zq:void 0)&&H("ytglobal.idbToken_",b);return b})}
;new cm;function dr(a){if(!fp())throw a=new X("AUTH_INVALID",{dbName:a}),Up(a),a;var b=gp();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function er(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.g){case 1:return f=(e=Error().stack)!=null?e:"",A(m,cr(),2);case 2:g=m.l;if(!g)throw h=hq("openDbImpl",a,b),W("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Up(h),h;Wp(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:dr(a);va(m,3);return A(m,Uq(k,g),5);case 5:return A(m,Nq(k.actualName,b,d),6);case 6:return m.return(m.l);case 3:return l=wa(m),va(m,7),A(m,Vq(k.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:wa(m);case 8:throw l;}})}
function fr(a,b,c){c=c===void 0?{}:c;return er(a,b,!1,c)}
function gr(a,b,c){c=c===void 0?{}:c;return er(a,b,!0,c)}
function hr(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.g==1)return A(e,cr(),2);if(e.g!=3){c=e.l;if(!c)return e.return();Wp(a);d=dr(a);return A(e,Oq(d.actualName,b),3)}return A(e,Vq(d.actualName,c),0)})}
function ir(a,b,c){a=a.map(function(d){return B(function(e){return e.g==1?A(e,Oq(d.actualName,b),2):A(e,Vq(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function jr(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.g==1)return A(d,cr(),2);if(d.g!=3){b=d.l;if(!b)return d.return();Wp("LogsDatabaseV2");return A(d,Xq(b),3)}c=d.l;return A(d,ir(c,a,b),0)})}
function kr(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.g==1)return A(d,cr(),2);if(d.g!=3){c=d.l;if(!c)return d.return();Wp(a);return A(d,Oq(a,b),3)}return A(d,Vq(a,c),0)})}
;function lr(a,b){Pq.call(this,a,b);this.options=b;Wp(a)}
z(lr,Pq);function mr(a,b){var c;return function(){c||(c=new lr(a,b));return c}}
lr.prototype.l=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?gr:fr)(a,b,Object.assign({},c))};
lr.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?kr:hr)(this.name,a)};
function nr(a,b){return mr(a,b)}
;var or={},pr=nr("ytGcfConfig",{yb:(or.coldConfigStore={Hb:1},or.hotConfigStore={Hb:1},or),shared:!1,upgrade:function(a,b){b(1)&&(Eq(xq(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Eq(xq(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function qr(a){return Rq(pr(),a)}
function rr(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},A(g,qr(c),2);case 2:return e=g.l,A(g,e.clear("hotConfigStore"),3);case 3:return A(g,zq(e,"hotConfigStore",d),4);case 4:return f=g.l,g.return(f)}})}
function sr(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},A(h,qr(d),2);case 2:return f=h.l,A(h,f.clear("coldConfigStore"),3);case 3:return A(h,zq(f,"coldConfigStore",e),4);case 4:return g=h.l,h.return(g)}})}
function tr(a){var b,c;return B(function(d){return d.g==1?A(d,qr(a),2):d.g!=3?(b=d.l,c=void 0,A(d,wq(b,["coldConfigStore"],{mode:"readwrite",qa:!0},function(e){return Kq(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
function ur(a){var b,c;return B(function(d){return d.g==1?A(d,qr(a),2):d.g!=3?(b=d.l,c=void 0,A(d,wq(b,["hotConfigStore"],{mode:"readwrite",qa:!0},function(e){return Kq(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
;function vr(){Sb.call(this);this.l=[];this.g=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.l=[].concat(x(a)),this.g=a):(this.g=[],H("yt.gcf.config.hotUpdateCallbacks",this.g))}
z(vr,Sb);vr.prototype.Ba=function(){for(var a=w(this.l),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.l.length=0;Sb.prototype.Ba.call(this)};function wr(){this.l=0;this.i=new vr}
function xr(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!W("start_client_gcf")){g.N(0);break}c&&(a.m=c,H("yt.gcf.config.hotConfigGroup",a.m||null));a.g(b);d=br();if(!d){g.N(3);break}if(c){g.N(4);break}return A(g,ur(d),5);case 5:e=g.l,c=(f=e)==null?void 0:f.config;case 4:return A(g,rr(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.g),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.g=0}})}
function yr(a,b,c){var d,e,f,g;return B(function(h){if(h.g==1){if(!W("start_client_gcf"))return h.N(0);a.coldHashData=b;H("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=br())?c?h.N(4):A(h,tr(d),5):h.N(0)}h.g!=4&&(e=h.l,c=(f=e)==null?void 0:f.config);if(!c)return h.N(0);g=c.configData;return A(h,sr(c,b,g,d),0)})}
wr.prototype.g=function(a){this.hotHashData=a;H("yt.gcf.config.hotHashData",this.hotHashData||null)};function zr(){return"INNERTUBE_API_KEY"in bo&&"INNERTUBE_API_VERSION"in bo}
function Ar(){return{cg:V("INNERTUBE_API_KEY"),dg:V("INNERTUBE_API_VERSION"),Yc:V("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),fe:V("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),eg:V("INNERTUBE_CONTEXT_CLIENT_NAME",1),ge:V("INNERTUBE_CONTEXT_CLIENT_VERSION"),ie:V("INNERTUBE_CONTEXT_HL"),he:V("INNERTUBE_CONTEXT_GL"),fg:V("INNERTUBE_HOST_OVERRIDE")||"",hg:!!V("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),gg:!!V("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:V("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Br(a){var b={client:{hl:a.ie,gl:a.he,clientName:a.fe,clientVersion:a.ge,configInfo:a.Yc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=V("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=io();c.length>0&&(b.request={internalExperimentFlags:c});Cr(a,void 0,b);Dr(void 0,b);Er(void 0,b);Fr(a,void 0,b);Gr(void 0,b);W("start_client_gcf")&&Hr(void 0,b);V("DELEGATED_SESSION_ID")&&!W("pageid_as_header_web")&&
(b.user={onBehalfOfUser:V("DELEGATED_SESSION_ID")});!W("fill_delegate_context_in_gel_killswitch")&&(a=V("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(vo(V("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;g==="cbrand"?e.deviceMake=h:g==="cmodel"?e.deviceModel=h:g==="cbr"?e.browserName=h:g==="cbrver"?e.browserVersion=
h:g==="cos"?e.osName=h:g==="cosver"?e.osVersion=h:g==="cplatform"&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Cr(a,b,c){a=a.fe;if(a==="WEB"||a==="MWEB"||a===1||a===2)if(b){c=Cf(b,Gn,96)||new Gn;var d=Xo();d=Object.keys(Qn).indexOf(d);d=d===-1?null:d;d!==null&&Kf(c,3,d);Df(b,Gn,96,c)}else c&&(c.client.mainAppWebInfo=(d=c.client.mainAppWebInfo)!=null?d:{},c.client.mainAppWebInfo.webDisplayMode=Xo())}
function Dr(a,b){var c=E("yt.embedded_player.embed_url");c&&(a?(b=Cf(a,Mn,7)||new Mn,L(b,4,c),Df(a,Mn,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Er(a,b){var c;if(W("web_log_memory_total_kbytes")&&((c=D.navigator)==null?0:c.deviceMemory)){var d;c=(d=D.navigator)==null?void 0:d.deviceMemory;a?wf(a,95,Oe(c*1E6)):b&&(b.client.memoryTotalKbytes=""+c*1E6)}}
function Fr(a,b,c){if(a.appInstallData)if(b){var d;c=(d=Cf(b,Fn,62))!=null?d:new Fn;L(c,6,a.appInstallData);Df(b,Fn,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Gr(a,b){a:{var c=dp();if(c){var d=$o[c.type||"unknown"]||"CONN_UNKNOWN";c=$o[c.effectiveType||"unknown"]||"CONN_UNKNOWN";d==="CONN_CELLULAR_UNKNOWN"&&c!=="CONN_UNKNOWN"&&(d=c);if(d!=="CONN_UNKNOWN")break a;if(c!=="CONN_UNKNOWN"){d=c;break a}}d=void 0}d&&(a?Kf(a,61,ap[d]):b&&(b.client.connectionType=d));W("web_log_effective_connection_type")&&(d=dp(),d=d!=null&&d.effectiveType?cp.hasOwnProperty(d.effectiveType)?cp[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?Kf(a,94,bp[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Ir(a,b,c){c=c===void 0?{}:c;var d={};V("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":V("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||V("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Nh||V("AUTHORIZATION");if(!b)if(a)b="Bearer "+E("gapi.auth.getToken")().Mh;else{Yo.g||(Yo.g=new Yo);a={};c=[];"SESSION_ID"in bo&&c.push({key:"u",value:V("SESSION_ID")});if(c=qg(c))a.Authorization=c,c=void 0,c===void 0&&(c=Number(V("SESSION_INDEX",0)),c=isNaN(c)?0:c),
W("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in bo||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in bo&&(a["X-Goog-PageId"]=V("DELEGATED_SESSION_ID"));W("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function Hr(a,b){if(!wr.g){var c=new wr;wr.g=c}c=wr.g;var d=Y()-c.l;if(c.l!==0&&d<ho("send_config_hash_timer"))c=void 0;else{d=E("yt.gcf.config.coldConfigData");var e=E("yt.gcf.config.hotHashData"),f=E("yt.gcf.config.coldHashData");d&&e&&f&&(c.l=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(d=e.coldConfigData,c=e.coldHashData,e=e.hotHashData,a){var g;b=(g=Cf(a,Fn,62))!=null?g:new Fn;g=L(b,1,d);L(g,3,c).g(e);Df(a,Fn,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},d&&(b.client.configInfo.coldConfigData=
d),c&&(b.client.configInfo.coldHashData=c),e&&(b.client.configInfo.hotHashData=e))}
;var Jr=typeof TextEncoder!=="undefined"?new TextEncoder:null,Kr=Jr?function(a){return Jr.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var Lr=E("ytPubsub2Pubsub2Instance")||new S;S.prototype.subscribe=S.prototype.subscribe;S.prototype.unsubscribeByKey=S.prototype.Fc;S.prototype.publish=S.prototype.ue;S.prototype.clear=S.prototype.clear;H("ytPubsub2Pubsub2Instance",Lr);H("ytPubsub2Pubsub2SubscribedKeys",E("ytPubsub2Pubsub2SubscribedKeys")||{});H("ytPubsub2Pubsub2TopicToKeys",E("ytPubsub2Pubsub2TopicToKeys")||{});H("ytPubsub2Pubsub2IsAsync",E("ytPubsub2Pubsub2IsAsync")||{});H("ytPubsub2Pubsub2SkipSubKey",null);function Mr(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={Ei:a,Di:b},(b=E("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var Nr=void 0,Or=void 0;function Pr(){if(!Or){var a=V("WORKER_SERIALIZATION_URL");Or=a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?$a(a):null:null}return Or||void 0}
function Qr(){var a=Pr();Nr||a===void 0||(Nr=new Worker(Ya(a),void 0));return Nr}
;var Rr=ho("max_body_size_to_compress",5E5),Sr=ho("min_body_size_to_compress",500),Tr=!0,Ur=0,Vr=0,Wr=ho("compression_performance_threshold_lr",250),Xr=ho("slow_compressions_before_abandon_count",4),Yr=!1,Zr=new Map,$r=1,as=!0;function bs(){if(typeof Worker==="function"&&Pr()&&!Yr){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Zr.get(c.key);d&&(cs(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Zr.delete(c.key))}},b=Qr();
b&&(b.addEventListener("message",a),b.onerror=function(){Zr.clear()},Yr=!0)}}
function ds(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:Y(),ticks:{},infos:{}};if(Tr)try{try{var g=(new Blob(b.split(""))).size}catch(m){oo(m),g=null}if(g!=null&&(g>Rr||g<Sr))d(a,c);else{if(W("gzip_gel_with_worker")&&(W("initial_gzip_use_main_thread")&&!as||!W("initial_gzip_use_main_thread"))){Yr||bs();var h=Qr();if(h&&!e){Zr.set($r,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:$r});$r++;return}}var k=Kr(b);b=(b=void 0,{});b.Df=!0;var l=new An(b);
l.push(k,!0);if(l.err)throw l.msg||Bm[l.err];cs(l.result,f,a,c,d)}}catch(m){oo(m),d(a,c)}else d(a,c)}
function cs(a,b,c,d,e){as=!1;var f=Y();b.ticks.gelc=f;Vr++;W("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Wr&&(Ur++,W("abandon_compression_after_N_slow_zips")?Vr===ho("compression_disable_point")&&Ur>Xr&&(Tr=!1):Tr=!1);W("gel_compression_csi_killswitch")||!W("log_gel_compression_latency")&&!W("log_gel_compression_latency_lr")||Mr("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function es(a){a=Object.assign({},a);delete a.Authorization;var b=qg();if(b){var c=new Pl;c.update(V("INNERTUBE_API_KEY"));c.update(b);a.hash=Yd(c.digest(),3)}return a}
;var fs;function gs(){fs||(fs=new Pp("yt.innertube"));return fs}
function hs(a,b,c,d){if(d)return null;d=gs().get("nextId",!0)||1;var e=gs().get("requests",!0)||{};e[d]={method:a,request:b,authState:es(c),requestTime:Math.round(Y())};gs().set("nextId",d+1,86400,!0);gs().set("requests",e,86400,!0);return d}
function is(a){var b=gs().get("requests",!0)||{};delete b[a];gs().set("requests",b,86400,!0)}
function js(a){var b=gs().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(Y())-d.requestTime<6E4)){var e=d.authState;var f=es(Ir(!1));a:{var g=void 0,h=void 0;for(h in e)if(!(h in f)||e[h]!==f[h]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),ks(a,d.method,e,{}));delete b[c]}}gs().set("requests",b,86400,!0)}}
;function ls(a){this.dc=this.g=!1;this.potentialEsfErrorCounter=this.l=0;this.handleError=function(){};
this.rb=function(){};
this.now=Date.now;this.Lb=!1;var b;this.Le=(b=a.Le)!=null?b:100;var c;this.Ce=(c=a.Ce)!=null?c:1;var d;this.ze=(d=a.ze)!=null?d:2592E6;var e;this.we=(e=a.we)!=null?e:12E4;var f;this.Be=(f=a.Be)!=null?f:5E3;var g;this.Z=(g=a.Z)!=null?g:void 0;this.lc=!!a.lc;var h;this.hc=(h=a.hc)!=null?h:.1;var k;this.xc=(k=a.xc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.rb&&(this.rb=a.rb);a.Lb&&(this.Lb=a.Lb);a.dc&&(this.dc=a.dc);this.aa=a.aa;this.Ea=a.Ea;this.fa=a.fa;this.ia=a.ia;this.sendFn=a.sendFn;
this.md=a.md;this.jd=a.jd;ms(this)&&(!this.aa||this.aa("networkless_logging"))&&ns(this)}
function ns(a){ms(a)&&!a.Lb&&(a.g=!0,a.lc&&Math.random()<=a.hc&&a.fa.df(a.Z),os(a),a.ia.ya()&&a.Wb(),a.ia.ra(a.md,a.Wb.bind(a)),a.ia.ra(a.jd,a.Jd.bind(a)))}
n=ls.prototype;n.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(ms(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.fa.set(d,this.Z).then(function(e){d.id=e;c.ia.ya()&&ps(c,d)}).catch(function(e){ps(c,d);
qs(c,e)})}else this.sendFn(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(ms(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.aa&&this.aa("nwl_skip_retry")&&(e.skipRetry=c);if(this.ia.ya()||this.aa&&this.aa("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(k.g==1)return A(k,d.fa.set(e,d.Z).catch(function(l){qs(d,l)}),2);
f(g,h);k.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.fa.set(e,this.Z).catch(function(g){d.sendFn(a,b,e.skipRetry);
qs(d,g)})}else this.sendFn(a,b,this.aa&&this.aa("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(ms(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.fa.ob(d.id,c.Z):e=!0;c.ia.fb&&c.aa&&c.aa("vss_network_hint")&&c.ia.fb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.fa.set(d,this.Z).then(function(g){d.id=g;e&&c.fa.ob(d.id,c.Z)}).catch(function(g){qs(c,g)})}else this.sendFn(a,b,void 0,!0)};
n.Wb=function(){var a=this;if(!ms(this))throw Error("IndexedDB is not supported: throttleSend");this.l||(this.l=this.Ea.Ha(function(){var b;return B(function(c){if(c.g==1)return A(c,a.fa.Wd("NEW",a.Z),2);if(c.g!=3)return b=c.l,b?A(c,ps(a,b),3):(a.Jd(),c.return());a.l&&(a.l=0,a.Wb());c.g=0})},this.Le))};
n.Jd=function(){this.Ea.xa(this.l);this.l=0};
function ps(a,b){var c;return B(function(d){switch(d.g){case 1:if(!ms(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.N(2);break}return A(d,a.fa.ug(b.id,a.Z),3);case 3:(c=d.l)||a.rb(Error("The request cannot be found in the database."));case 2:if(rs(a,b,a.ze)){d.N(4);break}a.rb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.N(5);break}return A(d,a.fa.ob(b.id,a.Z),5);case 5:return d.return();case 4:b.skipRetry||(b=ss(a,b));if(!b){d.N(0);
break}if(!b.skipRetry||b.id===void 0){d.N(8);break}return A(d,a.fa.ob(b.id,a.Z),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function ss(a,b){if(!ms(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.g){case 1:g=ts(f);(h=us(f))&&a.aa&&a.aa("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.aa&&a.aa("nwl_consider_error_code")&&g||a.aa&&!a.aa("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.xc)){m.N(2);break}if(!a.ia.Bc){m.N(3);break}return A(m,a.ia.Bc(),3);case 3:if(a.ia.ya()){m.N(2);break}c(e,f);if(!a.aa||!a.aa("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===
void 0){m.N(6);break}return A(m,a.fa.sd(b.id,a.Z,!1),6);case 6:return m.return();case 2:if(a.aa&&a.aa("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.xc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.N(8);break}return b.sendCount<a.Ce?A(m,a.fa.sd(b.id,a.Z,!0,h?!1:void 0),12):A(m,a.fa.ob(b.id,a.Z),8);case 12:a.Ea.Ha(function(){a.ia.ya()&&a.Wb()},a.Be);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.g==1)return((g=b)==null?void 0:g.id)===void 0?h.N(2):A(h,a.fa.ob(b.id,a.Z),2);a.ia.fb&&a.aa&&a.aa("vss_network_hint")&&a.ia.fb(!0);d(e,f);h.g=0})};
return b}
function rs(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function os(a){if(!ms(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.fa.Wd("QUEUED",a.Z).then(function(b){b&&!rs(a,b,a.we)?a.Ea.Ha(function(){return B(function(c){if(c.g==1)return b.id===void 0?c.N(2):A(c,a.fa.sd(b.id,a.Z),2);os(a);c.g=0})}):a.ia.ya()&&a.Wb()})}
function qs(a,b){a.Qe&&!a.ia.ya()?a.Qe(b):a.handleError(b)}
function ms(a){return!!a.Z||a.dc}
function ts(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function us(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var vs;
function ws(){if(vs)return vs();var a={};vs=nr("LogsDatabaseV2",{yb:(a.LogsRequestsStore={Hb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&xq(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),Eq(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return vs()}
;function xs(a){return Rq(ws(),a)}
function ys(a,b){var c,d,e,f;return B(function(g){if(g.g==1)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},A(g,xs(b),2);if(g.g!=3)return d=g.l,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:V("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),A(g,zq(d,"LogsRequestsStore",e),3);f=g.l;c.ticks.tc=Y();zs(c);return g.return(f)})}
function As(a,b){var c,d,e,f,g,h,k,l;return B(function(m){if(m.g==1)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},A(m,xs(b),2);if(m.g!=3)return d=m.l,e=V("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k="prev",W("use_fifo_for_networkless")&&(k="next"),l=void 0,A(m,wq(d,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(p){return Kq(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},function(r){r.cursor.value&&
(l=r.cursor.value,a==="NEW"&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=Y();zs(c);return m.return(l)})}
function Bs(a,b){var c;return B(function(d){if(d.g==1)return A(d,xs(b),2);c=d.l;return d.return(wq(c,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",sq(f.g.put(g,void 0)).then(function(){return g})})}))})}
function Cs(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.g==1)return A(f,xs(b),2);e=f.l;return f.return(wq(e,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),sq(h.g.put(k,void 0)).then(function(){return k})):lq.resolve(void 0)})}))})}
function Ds(a,b){var c;return B(function(d){if(d.g==1)return A(d,xs(b),2);c=d.l;return d.return(c.delete("LogsRequestsStore",a))})}
function Es(a){var b,c;return B(function(d){if(d.g==1)return A(d,xs(a),2);b=d.l;c=Y()-2592E6;return A(d,wq(b,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){return Gq(e.objectStore("LogsRequestsStore"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return Hq(f)})})}),0)})}
function Fs(){B(function(a){return A(a,jr(),0)})}
function zs(a){W("nwl_csi_killswitch")||Mr("networkless_performance",a,{sampleRate:1})}
;var Gs={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,
mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,
atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,
cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,
kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500};var Hs={},Is=nr("ServiceWorkerLogsDatabase",{yb:(Hs.SWHealthLog={Hb:1},Hs),shared:!0,upgrade:function(a,b){b(1)&&Eq(xq(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Js(a){return Rq(Is(),a)}
function Ks(a){var b,c;B(function(d){if(d.g==1)return A(d,Js(a),2);b=d.l;c=Y()-2592E6;return A(d,wq(b,["SWHealthLog"],{mode:"readwrite",qa:!0},function(e){return Gq(e.objectStore("SWHealthLog"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return Hq(f)})})}),0)})}
function Ls(a){var b;return B(function(c){if(c.g==1)return A(c,Js(a),2);b=c.l;return A(c,b.clear("SWHealthLog"),0)})}
;var Ms={},Ns=0;function Os(a){var b=new Image,c=""+Ns++;Ms[c]=b;b.onload=b.onerror=function(){delete Ms[c]};
b.src=a}
;var Ps;function Qs(){Ps||(Ps=new Pp("yt.offline"));return Ps}
function Rs(a){if(W("offline_error_handling")){var b=Qs().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Qs().set("errors",b,2592E3,!0)}}
;function Ss(){this.g=new Map;this.l=!1}
function Ts(){if(!Ss.g){var a=E("yt.networkRequestMonitor.instance")||new Ss;H("yt.networkRequestMonitor.instance",a);Ss.g=a}return Ss.g}
Ss.prototype.requestComplete=function(a,b){b&&(this.l=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
Ss.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:a===!1&&this.l?!0:null};
Ss.prototype.removeParams=function(a){return a.split("?")[0]};
Ss.prototype.removeParams=Ss.prototype.removeParams;Ss.prototype.isEndpointCFR=Ss.prototype.isEndpointCFR;Ss.prototype.requestComplete=Ss.prototype.requestComplete;Ss.getInstance=Ts;function Z(){Oc.call(this);var a=this;this.i=!1;this.l=ug();this.l.ra("networkstatus-online",function(){if(a.i&&W("offline_error_handling")){var b=Qs().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new ep(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;no(d)}Qs().set("errors",{},2592E3,!0)}}})}
z(Z,Oc);function Us(){if(!Z.g){var a=E("yt.networkStatusManager.instance")||new Z;H("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
n=Z.prototype;n.ya=function(){return this.l.ya()};
n.fb=function(a){this.l.l=a};
n.Bf=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
n.nf=function(){this.i=!0};
n.ra=function(a,b){return this.l.ra(a,b)};
n.Bc=function(a){a=sg(this.l,a);a.then(function(b){W("use_cfr_monitor")&&Ts().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Bc;Z.prototype.listen=Z.prototype.ra;Z.prototype.enableErrorFlushing=Z.prototype.nf;Z.prototype.getWindowStatus=Z.prototype.Bf;Z.prototype.networkStatusHint=Z.prototype.fb;Z.prototype.isNetworkAvailable=Z.prototype.ya;Z.getInstance=Us;function Vs(a){a=a===void 0?{}:a;Oc.call(this);var b=this;this.l=this.s=0;this.i=Us();var c=E("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.zc?(this.zc=a.zc,c("networkstatus-online",function(){Ws(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ws(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Pc(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Pc(b,"publicytnetworkstatus-offline")})))}
z(Vs,Oc);Vs.prototype.ya=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Vs.prototype.fb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Vs.prototype.Bc=function(a){var b=this,c;return B(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return W("skip_network_check_if_cfr")&&Ts().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.fb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ya())})):c?d.return(c(a)):d.return(!0)})};
function Ws(a,b){a.zc?a.l?(vg.xa(a.s),a.s=vg.Ha(function(){a.o!==b&&(Pc(a,b),a.o=b,a.l=Y())},a.zc-(Y()-a.l))):(Pc(a,b),a.o=b,a.l=Y()):Pc(a,b)}
;var Xs;function Ys(){var a=ls.call;Xs||(Xs=new Vs({ki:!0,Wh:!0}));a.call(ls,this,{fa:{df:Es,ob:Ds,Wd:As,ug:Bs,sd:Cs,set:ys},ia:Xs,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;oo(new ep(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else no(b)},
rb:oo,sendFn:Zs,now:Y,Qe:Rs,Ea:Op(),md:"publicytnetworkstatus-online",jd:"publicytnetworkstatus-offline",lc:!0,hc:.1,xc:ho("potential_esf_error_limit",10),aa:W,Lb:!(fp()&&Jb(document.location.toString())!=="www.youtube-nocookie.com")});this.i=new cm;W("networkless_immediately_drop_all_requests")&&Fs();kr("LogsDatabaseV2")}
z(Ys,ls);function $s(){var a=E("yt.networklessRequestController.instance");a||(a=new Ys,H("yt.networklessRequestController.instance",a),W("networkless_logging")&&cr().then(function(b){a.Z=b;ns(a);a.i.resolve();a.lc&&Math.random()<=a.hc&&a.Z&&Ks(a.Z);W("networkless_immediately_drop_sw_health_store")&&at(a)}));
return a}
Ys.prototype.writeThenSend=function(a,b){b||(b={});b=bt(a,b);fp()||(this.g=!1);ls.prototype.writeThenSend.call(this,a,b)};
Ys.prototype.sendThenWrite=function(a,b,c){b||(b={});b=bt(a,b);fp()||(this.g=!1);ls.prototype.sendThenWrite.call(this,a,b,c)};
Ys.prototype.sendAndWrite=function(a,b){b||(b={});b=bt(a,b);fp()||(this.g=!1);ls.prototype.sendAndWrite.call(this,a,b)};
Ys.prototype.awaitInitialization=function(){return this.i.promise};
function at(a){var b;B(function(c){if(!a.Z)throw b=hq("clearSWHealthLogsDb"),b;return c.return(Ls(a.Z).catch(function(d){a.handleError(d)}))})}
function Zs(a,b,c,d){d=d===void 0?!1:d;b=W("web_fp_via_jspb")?Object.assign({},b):b;W("use_cfr_monitor")&&ct(a,b);if(W("use_request_time_ms_header"))b.headers&&xo(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Ko(a,void 0,"POST",f,void 0);else if(V("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Ko(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new Pa({url:a});if(k.i&&k.l||k.m){var l=Ib(a.match(Hb)[5]||null),m;if(!(m=!l||!l.endsWith("/aclk"))){var p=a.search(Qb),r=Pb(a,0,"ri",p);if(r<0)var q=null;else{var u=a.indexOf("&",r);if(u<0||u>p)u=p;q=Gb(a.slice(r+3,u!==-1?u:0))}m=q!=="1"}var t=!m;break b}}catch(C){}t=!1}if(t){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var y=!0;break b}}catch(C){}y=!1}c=y?!0:!1}else c=!1;c||Os(a)}}else b.compress?
b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),ds(a,b.postBody,b,Oo,d)):ds(a,JSON.stringify(b.postParams),b,No,d):Oo(a,b)}
function bt(a,b){W("use_event_time_ms_header")&&xo(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(Y())));return b}
function ct(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Ts().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Ts().requestComplete(a,!0);d(e,f)}}
;var dt=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};H("ytNetworklessLoggingInitializationOptions",dt);function et(a){var b=this;this.config_=null;a?this.config_=a:zr()&&(this.config_=Ar());ip(function(){js(b)},5E3)}
et.prototype.isReady=function(){!this.config_&&zr()&&(this.config_=Ar());return!!this.config_};
function ks(a,b,c,d){function e(u){u=u===void 0?!1:u;var t;if(d.retry&&h!="www.youtube-nocookie.com"&&(u||W("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(t=hs(b,c,l,k)),t)){var y=g.onSuccess,C=g.onFetchSuccess;g.onSuccess=function(ca,ib){is(t);y(ca,ib)};
c.onFetchSuccess=function(ca,ib){is(t);C(ca,ib)}}try{if(u&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?$s().writeThenSend(q,g):$s().sendAndWrite(q,g);
else if(d.compress){var P=!d.networklessOptions.writeThenSend;if(g.postBody){var ja=g.postBody;typeof ja!=="string"&&(ja=JSON.stringify(g.postBody));ds(q,ja,g,Oo,P)}else ds(q,JSON.stringify(g.postParams),g,No,P)}else W("web_all_payloads_via_jspb")?Oo(q,g):No(q,g)}catch(ca){if(ca.name==="InvalidAccessError")t&&(is(t),t=0),oo(Error("An extension is blocking network request."));else throw ca;}t&&ip(function(){js(a)},5E3)}
!V("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&oo(new ep("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new ep("innertube xhrclient not ready",b,c,d);no(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(u,t){if(d.onSuccess)d.onSuccess(t)},
onFetchSuccess:function(u){if(d.onSuccess)d.onSuccess(u)},
onError:function(u,t){if(d.onError)d.onError(t)},
onFetchError:function(u){if(d.onError)d.onError(u)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.fg)&&(h=f);var k=a.config_.hg||!1,l=Ir(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.dg+"/"+b,p={alt:"json"},r=a.config_.gg&&f;r=r&&f.startsWith("Bearer");r||(p.key=a.config_.cg);var q=wo(""+h+m,p||{},!0);E("ytNetworklessLoggingInitializationOptions")&&
dt.isNwlInitialized?ar().then(function(u){e(u)}):e(!1)}
;var ft=0;H("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++ft});H("ytEventsEventsListeners",D.ytEventsEventsListeners||{});H("ytEventsEventsCounter",D.ytEventsEventsCounter||{count:0});function gt(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var ht=D.ytPubsubPubsubInstance||new S,it=D.ytPubsubPubsubSubscribedKeys||{},jt=D.ytPubsubPubsubTopicToKeys||{},kt=D.ytPubsubPubsubIsSynchronous||{};S.prototype.subscribe=S.prototype.subscribe;S.prototype.unsubscribeByKey=S.prototype.Fc;S.prototype.publish=S.prototype.ue;S.prototype.clear=S.prototype.clear;H("ytPubsubPubsubInstance",ht);H("ytPubsubPubsubTopicToKeys",jt);H("ytPubsubPubsubIsSynchronous",kt);H("ytPubsubPubsubSubscribedKeys",it);var lt=Symbol("injectionDeps");function mt(){this.key=wr}
function nt(){this.l=new Map;this.g=new Map}
nt.prototype.resolve=function(a){return a instanceof mt?ot(this,a.key,[],!0):ot(this,a,[])};
function ot(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.l.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.l.get(b);c.push(b);if(d.eh!==void 0)var e=d.eh;else if(d.dh)e=d[lt]?pt(a,d[lt],c):[],e=d.dh.apply(d,x(e));else if(d.bh){e=d.bh;var f=e[lt]?pt(a,e[lt],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.zi||a.g.set(b,e);return e}
function pt(a,b,c){return b?b.map(function(d){return d instanceof mt?ot(a,d.key,c,!0):ot(a,d,c)}):[]}
;var qt;function rt(){qt||(qt=new nt);return qt}
;var st=window;function tt(){var a,b;return"h5vcc"in st&&((a=st.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=st.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in st&&st.performance.mark&&st.performance.measure?2:0}
function ut(a){switch(tt()){case 1:st.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:st.performance.mark(a+"-start");break;case 0:break;default:Db()}}
function vt(a){switch(tt()){case 1:st.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";st.performance.mark(c);st.performance.measure(a,b,c);break;case 0:break;default:Db()}}
;var wt=W("web_enable_lifecycle_monitoring")&&tt()!==0,xt=W("web_enable_lifecycle_monitoring");function zt(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?Op():d;this.m=c;this.l=d;this.i=new cm;this.g=a;for(a={cb:0};a.cb<this.g.length;a={wc:void 0,cb:a.cb},a.cb++)a.wc=this.g[a.cb],c=function(e){return function(){e.wc.bd();b.g[e.cb].yc=!0;b.g.every(function(f){return f.yc===!0})&&b.i.resolve()}}(a),d=this.l.Za(c,At(this,a.wc)),this.g[a.cb]=Object.assign({},a.wc,{bd:c,
jobId:d})}
function Bt(a){var b=Array.from(a.g.keys()).sort(function(d,e){return At(a,a.g[e])-At(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],c.jobId===void 0||c.yc||(a.l.xa(c.jobId),a.l.Za(c.bd,10))}
zt.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.yc||this.l.xa(b.jobId),b.yc=!0;this.i.resolve()};
function At(a,b){var c;return(c=b.priority)!=null?c:a.m}
;function Ct(a){this.state=a;this.i=[];this.o=void 0;this.u={};wt&&ut(this.state)}
Ct.prototype.install=function(a){this.i.push(a);return this};
function Dt(a){wt&&vt(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&d.Va==="none"}):d.from===a.state&&d.Va==="none"});
if(b){a.l&&(Bt(a.l),a.l=void 0);xt&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";wt&&ut(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(Et(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function Et(a,b){var c=b.filter(function(e){return Ft(a,e)===10}),d=b.filter(function(e){return Ft(a,e)!==10});
return a.u.xi?function(){var e=Ea.apply(0,arguments);return B(function(f){if(f.g==1)return A(f,a.D.apply(a,[c].concat(x(e))),2);a.s.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Ea.apply(0,arguments);
a.F.apply(a,[c].concat(x(e)));a.s.apply(a,[d].concat(x(e)))}}
Ct.prototype.F=function(a){for(var b=Ea.apply(1,arguments),c=Op(),d=w(a),e=d.next(),f={};!e.done;f={Rb:void 0},e=d.next())f.Rb=e.value,c.Gb(function(g){return function(){Gt(g.Rb.name);g.Rb.Mc.apply(g.Rb,x(b));Ht(g.Rb.name)}}(f))};
Ct.prototype.D=function(a){var b=Ea.apply(1,arguments),c,d,e,f,g;return B(function(h){h.g==1&&(c=Op(),d=w(a),e=d.next(),f={});if(h.g!=3){if(e.done)return h.N(0);f.ub=e.value;f.Zb=void 0;g=function(k){return function(){Gt(k.ub.name);var l=k.ub.Mc.apply(k.ub,x(b));typeof(l==null?void 0:l.then)==="function"?k.Zb=l.then(function(){Ht(k.ub.name)}):Ht(k.ub.name)}}(f);
c.Gb(g);return f.Zb?A(h,f.Zb,3):h.N(3)}f={ub:void 0,Zb:void 0};e=d.next();return h.N(2)})};
Ct.prototype.s=function(a){var b=Ea.apply(1,arguments),c=this,d=a.map(function(e){return{bd:function(){Gt(e.name);e.Mc.apply(e,x(b));Ht(e.name)},
priority:Ft(c,e)}});
d.length&&(this.l=new zt(d))};
function Ft(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function Gt(a){wt&&a&&ut(a)}
function Ht(a){wt&&a&&vt(a)}
ea.Object.defineProperties(Ct.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function It(a){Ct.call(this,a===void 0?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Va:"application_navigating",action:this.A},{from:"application_navigating",Va:"none",action:this.B},{from:"application_navigating",Va:"application_navigating",action:function(){}},
{from:"none",Va:"none",action:function(){}}]}
var Jt;z(It,Ct);It.prototype.A=function(a,b){var c=this;this.g=ip(function(){c.m==="application_navigating"&&Dt(c)},5E3);
a(b==null?void 0:b.event)};
It.prototype.B=function(a,b){this.g&&(vg.xa(this.g),this.g=null);a(b==null?void 0:b.event)};
function Kt(){Jt||(Jt=new It);return Jt}
;var Lt=[];H("yt.logging.transport.getScrapedGelPayloads",function(){return Lt});function Mt(){this.store={};this.g={}}
Mt.prototype.storePayload=function(a,b){a=Nt(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
Mt.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Ot(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
Mt.prototype.extractMatchingEntries=function(a){a=Ot(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
Mt.prototype.getSequenceCount=function(a){a=Ot(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function Ot(a,b){var c=Nt(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(d.length<=1&&Nt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Pt(b.auth,g[0])){var h=b.isJspb;Pt(h===void 0?"undefined":h?"true":"false",g[1])&&Pt(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),Pt(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function Pt(a,b){return a===void 0||a==="undefined"?!0:a===b}
Mt.prototype.getSequenceCount=Mt.prototype.getSequenceCount;Mt.prototype.extractMatchingEntries=Mt.prototype.extractMatchingEntries;Mt.prototype.smartExtractMatchingEntries=Mt.prototype.smartExtractMatchingEntries;Mt.prototype.storePayload=Mt.prototype.storePayload;function Nt(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;var Qt=ho("initial_gel_batch_timeout",2E3),Rt=ho("gel_queue_timeout_max_ms",6E4),St=Math.pow(2,16)-1,Tt=ho("gel_min_batch_size",5),Ut=void 0;function Vt(){this.m=this.g=this.l=0;this.i=!1}
var Wt=new Vt,Xt=new Vt,Yt=new Vt,Zt=new Vt,$t,au=!0,bu=1,cu=new Map,du=D.ytLoggingTransportTokensToCttTargetIds_||{};H("ytLoggingTransportTokensToCttTargetIds_",du);var eu=D.ytLoggingTransportTokensToJspbCttTargetIds_||{};H("ytLoggingTransportTokensToJspbCttTargetIds_",eu);var fu={};function gu(){var a=E("yt.logging.ims");a||(a=new Mt,H("yt.logging.ims",a));return a}
function hu(a,b){if(a.endpoint==="log_event"){iu(a);var c=ju(a),d=ku(a.payload)||"",e=lu(d),f=200;if(e){if(e.enabled===!1&&!W("web_payload_policy_disabled_killswitch"))return;f=mu(e.tier);if(f===400){nu(a,b);return}}fu[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};gu().storePayload(e,a.payload);ou(b,c,!1,e,pu(d))}}
function qu(a,b,c){if(b.endpoint==="log_event"){iu(void 0,b);var d=ju(b,!0),e=lu(a),f=200;if(e){if(e.enabled===!1&&!W("web_payload_policy_disabled_killswitch"))return;f=mu(e.tier);if(f===400){ru(a,b,c);return}}fu[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};gu().storePayload(e,pf(b.payload));ou(c,d,!0,e,pu(a))}}
function ou(a,b,c,d,e){function f(){su(W("flush_only_full_queue")?b:void 0,c,d.tier)}
c=c===void 0?!1:c;e=e===void 0?!1:e;a&&(Ut=new a);a=ho("tvhtml5_logging_max_batch_ads_fork")||ho("web_logging_max_batch")||100;var g=Y(),h=tu(c,d.tier),k=h.m;e&&(h.i=!0);e=0;d&&(e=gu().getSequenceCount(d));e>=1E3?f():e>=a?$t||($t=uu(function(){f();$t=void 0},0)):g-k>=10&&(vu(c,d.tier),h.m=g)}
function nu(a,b){if(a.endpoint==="log_event"){iu(a);var c=ju(a),d=new Map;d.set(c,[a.payload]);var e=ku(a.payload)||"";b&&(Ut=new b);return new Bd(function(f,g){Ut&&Ut.isReady()?wu(d,Ut,f,g,{bypassNetworkless:!0},!0,pu(e)):f()})}}
function ru(a,b,c){if(b.endpoint==="log_event"){iu(void 0,b);var d=ju(b,!0),e=new Map;e.set(d,[pf(b.payload)]);c&&(Ut=new c);return new Bd(function(f){Ut&&Ut.isReady()?xu(e,Ut,f,{bypassNetworkless:!0},!0,pu(a)):f()})}}
function ju(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(b===void 0?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Xn;c.videoId?zf(d,1,Jf,Se(c.videoId)):c.playlistId&&zf(d,2,Jf,Se(c.playlistId));eu[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),du[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function su(a,b,c){var d={writeThenSend:!0};d=d===void 0?{}:d;b=b===void 0?!1:b;new Bd(function(e,f){var g=tu(b,c),h=g.i;g.i=!1;yu(g.l);yu(g.g);g.g=0;Ut&&Ut.isReady()?c===void 0&&W("enable_web_tiered_gel")?zu(e,f,d,a,b,300,h):zu(e,f,d,a,b,c,h):(vu(b,c),e())})}
function zu(a,b,c,d,e,f,g){var h=Ut;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},p={isJspb:e,cttAuthInfo:d};if(d!==void 0)e?(b=W("enable_web_tiered_gel")?gu().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):gu().extractMatchingEntries(p),k.set(d,b),xu(k,h,a,c,!1,g)):(k=W("enable_web_tiered_gel")?gu().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):gu().extractMatchingEntries(p),l.set(d,k),wu(l,h,
a,b,c,!1,g));else if(e){b=w(Object.keys(fu));for(l=b.next();!l.done;l=b.next())l=l.value,f=W("enable_web_tiered_gel")?gu().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):gu().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),f.length>0&&k.set(l,f),(W("web_fp_via_jspb_and_json")&&c.writeThenSend||!W("web_fp_via_jspb_and_json"))&&delete fu[l];xu(k,h,a,c,!1,g)}else{k=w(Object.keys(fu));for(m=k.next();!m.done;m=k.next())m=m.value,p=W("enable_web_tiered_gel")?gu().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):gu().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),p.length>0&&l.set(m,p),(W("web_fp_via_jspb_and_json")&&c.writeThenSend||!W("web_fp_via_jspb_and_json"))&&delete fu[m];wu(l,h,a,b,c,!1,g)}}
function vu(a,b){function c(){su(void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=tu(a,b),e=d===Zt||d===Yt?5E3:Rt;W("web_gel_timeout_cap")&&!d.g&&(e=uu(function(){c()},e),d.g=e);
yu(d.l);e=V("LOGGING_BATCH_TIMEOUT",ho("web_gel_debounce_ms",1E4));W("shorten_initial_gel_batch_timeout")&&au&&(e=Qt);e=uu(function(){ho("gel_min_batch_size")>0?gu().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Tt&&c():c()},e);
d.l=e}
function wu(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(Y()),k=a.size,l=Au(g);a=w(a);var m=a.next();for(g={};!m.done;g={hd:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,ld:void 0,kd:void 0},m=a.next()){var p=w(m.value);m=p.next().value;p=p.next().value;g.batchRequest=ub({context:Br(b.config_||Ar())});if(!Ja(p)&&!W("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=du[m])&&Bu(g.batchRequest,m,p);delete du[m];g.dangerousLogToVisitorSession=m===
"visitorOnlyApprovedKey";Cu(g.batchRequest,h,g.dangerousLogToVisitorSession);Du(e);g.ld=function(r){W("start_client_gcf")&&vg.Ha(function(){return B(function(q){return A(q,Eu(r),0)})});
k--;k||c()};
g.hd=0;g.kd=function(r){return function(){r.hd++;if(e.bypassNetworkless&&r.hd===1)try{ks(b,l,r.batchRequest,Fu({writeThenSend:!0},r.dangerousLogToVisitorSession,r.ld,r.kd,f)),au=!1}catch(q){no(q),d()}k--;k||c()}}(g);
try{ks(b,l,g.batchRequest,Fu(e,g.dangerousLogToVisitorSession,g.ld,g.kd,f)),au=!1}catch(r){no(r),d()}}}
function xu(a,b,c,d,e,f){d=d===void 0?{}:d;var g=Math.round(Y()),h={value:a.size},k=new Map([].concat(x(a)));k=w(k);for(var l=k.next();!l.done;l=k.next()){var m=w(l.value).next().value,p=a.get(m);l=new Yn;var r=b.config_||Ar(),q=new Pn,u=new In;L(u,1,r.ie);L(u,2,r.he);Kf(u,16,r.eg);L(u,17,r.ge);if(r.Yc){var t=r.Yc,y=new Fn;t.coldConfigData&&L(y,1,t.coldConfigData);t.appInstallData&&L(y,6,t.appInstallData);t.coldHashData&&L(y,3,t.coldHashData);t.hotHashData&&y.g(t.hotHashData);Df(u,Fn,62,y)}if((t=
D.devicePixelRatio)&&t!=1){if(t!=null&&typeof t!=="number")throw Error("Value of float/double field must be a number, found "+typeof t+": "+t);wf(u,65,t)}t=V("EXPERIMENTS_TOKEN","");t!==""&&L(u,54,t);t=io();if(t.length>0){y=new Ln;for(var C=0;C<t.length;C++){var P=new Jn;L(P,1,t[C].key);zf(P,2,Kn,Se(t[C].value));Gf(y,15,Jn,P)}Df(q,Ln,5,y)}Cr(r,u);Dr(q);Er(u);Fr(r,u);Gr(u);W("start_client_gcf")&&Hr(u);V("DELEGATED_SESSION_ID")&&!W("pageid_as_header_web")&&(r=new On,L(r,3,V("DELEGATED_SESSION_ID")));
!W("fill_delegate_context_in_gel_killswitch")&&(t=V("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(y=Cf(q,On,3)||new On,r=q,t=L(y,18,t),Df(r,On,3,t));r=u;t=w(Object.entries(vo(V("DEVICE",""))));for(y=t.next();!y.done;y=t.next())C=w(y.value),y=C.next().value,C=C.next().value,y==="cbrand"?L(r,12,C):y==="cmodel"?L(r,13,C):y==="cbr"?L(r,87,C):y==="cbrver"?L(r,88,C):y==="cos"?L(r,18,C):y==="cosver"?L(r,19,C):y==="cplatform"&&Kf(r,42,Zo(C));Df(q,In,1,u);Df(l,Pn,1,q);if(u=eu[m])a:{if(If(u,1))q=1;
else if(u.getPlaylistId())q=2;else break a;Df(l,Xn,4,u);u=Cf(l,Pn,1)||new Pn;r=Cf(u,On,3)||new On;t=new Nn;L(t,2,m);Kf(t,1,q);Gf(r,12,Nn,t);Df(u,On,3,r)}delete eu[m];m=m==="visitorOnlyApprovedKey";Gu()||wf(l,2,Oe(g));!m&&(q=V("EVENT_ID"))&&(u=Hu(),r=new Wn,L(r,1,q),wf(r,2,Oe(u)),Df(l,Wn,5,r));Du(d);if(W("jspb_serialize_with_worker")&&(q=Qr())&&d.writeThenSend){cu.set(bu,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:m,requestsOutstanding:h});q.postMessage({op:"gelBatchToSerialize",
batchRequest:pf(l),clientEvents:p,key:bu});bu++;break}if(p){q=[];for(u=0;u<p.length;u++)try{q.push(new Un(p[u]))}catch(ca){no(new ep("Transport failed to deserialize "+String(p[u])))}p=q}else p=[];p=w(p);for(q=p.next();!q.done;q=p.next())Gf(l,3,Un,q.value);p={startTime:Y(),ticks:{},infos:{}};q=void 0;q=q===void 0?Lf:q;Ce=!0;try{q!==Lf&&Uf(q);var ja=JSON.stringify(l.toJSON(),hf)}finally{Ce=!1}p.ticks.geljspc=Y();W("log_jspb_serialize_latency")&&Mr("gel_jspb_serialize",p,{sampleRate:.1});Iu(ja,b,c,
d,e,f,m,h)}}
function Iu(a,b,c,d,e,f,g,h){d=d===void 0?{}:d;h=h===void 0?{value:0}:h;f=Au(f);d=Fu(d,g,function(k){W("start_client_gcf")&&vg.Ha(function(){return B(function(l){return A(l,Eu(k),0)})});
h.value--;h.value||c()},function(){h.value--;
h.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;ks(b,f,"",d);au=!1}
function Du(a){W("always_send_and_write")&&(a.writeThenSend=!1)}
function Fu(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Ph:!!e,headers:{},postBodyFormat:"",postBody:"",compress:W("compress_gel")||W("compress_gel_lr")};Gu()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function Cu(a,b,c){Gu()||(a.requestTimeMs=String(b));W("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=V("EVENT_ID"))&&(c=Hu(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Hu(){var a=V("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*St/2));a++;a>St&&(a=1);co("BATCH_CLIENT_COUNTER",a);return a}
function Bu(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function iu(a,b){if(!E("yt.logging.transport.enableScrapingForTest")){var c=go("il_payload_scraping");if((c!==void 0?String(c):"")==="enable_il_payload_scraping")Lt=[],H("yt.logging.transport.enableScrapingForTest",!0),H("yt.logging.transport.scrapedPayloadsForTesting",Lt),H("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),H("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
H("yt.logging.transport.scrapeClientEvent",!0);else return}c=E("yt.logging.transport.scrapedPayloadsForTesting");var d=E("yt.logging.transport.payloadToScrape");b&&(b=E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);b=E("yt.logging.transport.scrapeClientEvent");if(d&&d.length>=1)for(var e=0;e<d.length;e++)if(a&&a.payload[d[e]])if(b)c.push(a.payload);else{var f=void 0;c.push(((f=a)==null?void 0:f.payload)[d[e]])}H("yt.logging.transport.scrapedPayloadsForTesting",
c)}
function Gu(){return W("use_request_time_ms_header")||W("lr_use_request_time_ms_header")}
function uu(a,b){return W("transport_use_scheduler")===!1?Fo(a,b):W("logging_avoid_blocking_during_navigation")||W("lr_logging_avoid_blocking_during_navigation")?ip(function(){if(Kt().m==="none")a();else{var c={};Kt().install((c.none={Mc:a},c))}},b):ip(a,b)}
function yu(a){W("transport_use_scheduler")?vg.xa(a):window.clearTimeout(a)}
function Eu(a){var b,c,d,e,f,g,h,k,l,m;return B(function(p){if(p.g==1){d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup;var r=d?d[En.name]:void 0;e=r;g=(f=d)==null?void 0:f.hotHashData;r=d?d[Dn.name]:void 0;h=r;l=(k=d)==null?void 0:k.coldHashData;return(m=rt().resolve(new mt))?g?e?A(p,xr(m,g,e),2):A(p,xr(m,g),2):p.N(2):p.return()}return l?h?A(p,yr(m,l,h),0):A(p,yr(m,l),0):p.N(0)})}
function tu(a,b){b=b===void 0?200:b;return a?b===300?Zt:Xt:b===300?Yt:Wt}
function lu(a){if(W("enable_web_tiered_gel")){a=Gs[a||""];var b,c;if(rt().resolve(new mt)==null)var d=void 0;else{var e=(d=E("yt.gcf.config.hotConfigGroup"))!=null?d:V("RAW_HOT_CONFIG_GROUP");d=e==null?void 0:(b=e.loggingHotConfig)==null?void 0:(c=b.eventLoggingConfig)==null?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c]}}
function ku(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Gs[b])return b}
function mu(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function pu(a){return a==="gelDebuggingEvent"}
function Au(a){return(a===void 0?0:a)&&W("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var Ju=D.ytLoggingGelSequenceIdObj_||{};H("ytLoggingGelSequenceIdObj_",Ju);function Ku(a){Ju[a]=a in Ju?Ju[a]+1:0;return Ju[a]}
;var Lu=[];var Mu=D.ytLoggingGelSequenceIdObj_||{};H("ytLoggingGelSequenceIdObj_",Mu);var Nu=D.ytLoggingDocDocumentNonce_;
if(!Nu){var Ou;a:{if(window.crypto&&window.crypto.getRandomValues)try{var Pu=Array(16),Qu=new Uint8Array(16);window.crypto.getRandomValues(Qu);for(var Ru=0;Ru<Pu.length;Ru++)Pu[Ru]=Qu[Ru];Ou=Pu;break a}catch(a){}for(var Su=Array(16),Tu=0;Tu<16;Tu++){for(var Uu=Date.now(),Vu=0;Vu<Uu%23;Vu++)Su[Tu]=Math.random();Su[Tu]=Math.floor(Math.random()*256)}if(Ao)for(var Wu=1,Xu=0;Xu<Ao.length;Xu++)Su[Wu%16]=Su[Wu%16]^Su[(Wu-1)%16]/4^Ao.charCodeAt(Xu),Wu++;Ou=Su}for(var Yu=Ou,Zu=[],$u=0;$u<Yu.length;$u++)Zu.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Yu[$u]&
63));Nu=Zu.join("");H("ytLoggingDocDocumentNonce_",Nu)}var av=Nu;function bv(a){return V("client-screen-nonce-store",{})[a===void 0?0:a]}
function cv(a,b){b=b===void 0?0:b;var c=V("client-screen-nonce-store");c||(c={},co("client-screen-nonce-store",c));c[b]=a}
function dv(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
H("yt_logging_screen.getRootVeType",function(a){return V(dv(a===void 0?0:a))});
function ev(){var a=V("csn-to-ctt-auth-info");a||(a={},co("csn-to-ctt-auth-info",a));return a}
function fv(a){a=bv(a===void 0?0:a);if(!a&&!V("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
H("yt_logging_screen.getCurrentCsn",fv);function gv(a,b,c){var d=ev();(c=fv(c))&&delete d[c];b&&(d[a]=b)}
H("yt_logging_screen.getCttAuthInfo",function(a){return ev()[a]});
H("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==bv(c)||b!==V(dv(c)))if(gv(a,d,c),cv(a,c),co(dv(c),b),b=function(){setTimeout(function(){if(a)if(W("web_time_via_jspb")){var e=new Rn;L(e,1,av);L(e,2,a);var f=W("jspb_sparse_encoded_pivot")?new Un([{}]):new Un;e!=null?Te(e,Rn):e=void 0;zf(f,111,Vn,e);var g=void 0;g=g===void 0?{}:g;e=!1;V("ytLoggingEventsDefaultDisabled",!1)&&(e=!0);e=e?null:et;g=g===void 0?{}:g;var h=Math.round(g.timestamp||Y());wf(f,1,Oe(h<Number.MAX_SAFE_INTEGER?
h:0));h=new Tn;if(g.lact)wf(h,1,Oe(isFinite(g.lact)?g.lact:-1));else if(g.timestamp)wf(h,1,Oe(-1));else{var k=gt();wf(h,1,Oe(isFinite(k)?k:-1))}if(g.sequenceGroup&&!W("web_gel_sequence_info_killswitch")){k=g.sequenceGroup;var l=Ku(k),m=new Sn;wf(m,2,Oe(l));L(m,1,k);Df(h,Sn,3,m);g.endOfSequence&&delete Mu[g.sequenceGroup]}Df(f,Tn,33,h);(g.sendIsolatedPayload?ru:qu)("foregroundHeartbeatScreenAssociated",{endpoint:"log_event",payload:f,cttAuthInfo:g.cttAuthInfo,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession},
e)}else h={clientDocumentNonce:av,clientScreenNonce:a},e=e===void 0?{}:e,f=et,V("ytLoggingEventsDefaultDisabled",!1)&&et===et&&(f=null),W("web_all_payloads_via_jspb")?(e.timestamp||(e.lact=gt(),e.timestamp=Y()),Lu.push({oi:"foregroundHeartbeatScreenAssociated",payload:h,options:e})):(e=e===void 0?{}:e,g={},k=Math.round(e.timestamp||Y()),g.eventTimeMs=k<Number.MAX_SAFE_INTEGER?k:0,g.foregroundHeartbeatScreenAssociated=h,h=gt(),g.context={lastActivityMs:String(e.timestamp||!isFinite(h)?-1:h)},e.sequenceGroup&&
!W("web_gel_sequence_info_killswitch")&&(h=g.context,k=e.sequenceGroup,k={index:Ku(k),groupKey:k},h.sequence=k,e.endOfSequence&&delete Ju[e.sequenceGroup]),(e.sendIsolatedPayload?nu:hu)({endpoint:"log_event",payload:g,cttAuthInfo:e.cttAuthInfo,dangerousLogToVisitorSession:e.dangerousLogToVisitorSession},f))},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var hv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function iv(a,b){var c=c===void 0?!0:c;var d=V("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Jb(window.location.href);e&&d.push(e);e=Jb(a);if(ob(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),nb(d,a),a=d.href)if(a=Kb(a),a=Lb(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:fv()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&jv(a,b,f)}else jv(a,b)}
function jv(a,b,c){a=kv(a);b=b?Nb(b):"";c=c||5;(og()||(Td||Ud)&&zo("applewebkit")&&!zo("version")&&(!zo("safari")||zo("gsa/"))||pc&&zo("version/")||!V("EOM_VISITOR_DATA"))&&jo(a,b,c)}
function kv(a){var b=a;a=w(hv);for(var c=a.next();!c.done;c=a.next()){for(var d=c.value,e=b.search(Qb),f=0,g=[];(c=Pb(b,f,d,e))>=0;)g.push(b.substring(f,c)),f=Math.min(b.indexOf("&",c)+1||e,e);g.push(b.slice(f));b=g.join("").replace(Rb,"$1")}for(c=a=0;c<b.length;++c)a=31*a+b.charCodeAt(c)>>>0;return"ST-"+a.toString(36)}
;new S;function lv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(V("INNERTUBE_CLIENT_NAME")==="WEB"||V("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
;function mv(a,b){b=b?{feature:b}:{};var c=V("EVENT_ID");c&&(b.ei=c,c=((c=document.getElementById("masthead-search"))?c.dataset?c.dataset[fo()]:c.getAttribute("data-clicktracking"):null)||"",b.ved=c,iv(a,b));b=E("yt.window.navigate");try{b(a)}catch(h){var d=d===void 0?{}:d;var e=e===void 0?"":e;var f=f===void 0?window:f;a=Ob(a,d);V("LOGGED_IN",!0)&&lv()&&(d=V("VALID_SESSION_TEMPDATA_DOMAINS",[]),(b=Jb(window.location.href))&&d.push(b),b=Jb(a),ob(d,b)>=0||!b&&a.lastIndexOf("/",0)==0?(d=Kb(a),(d=Lb(d))?
(d=kv(d),d=(d=mg.get(""+d,void 0)||null)?vo(d):{}):d=null):d=null,d==null&&(d={}),b=d,c=void 0,lv()?(c||(c=V("LOGIN_INFO")),c?(b.session_logininfo=c,b=!0):b=!1):b=!1,b&&iv(a,d));e=a+e;var g=g===void 0?eb:g;a:if(g=g===void 0?eb:g,e instanceof ab)g=e;else{for(a=0;a<g.length;++a)if(d=g[a],d instanceof cb&&d.og(e)){g=new ab(e);break a}g=void 0}f=f.location;g=mb(g||bb);g!==void 0&&(f.href=g)}}
;H("searchbox.yt.install",function(a,b,c,d,e,f,g){uh||(uh=new Ll);uh.install(a,b,c,d,e,f,g)});
H("yt.www.masthead.searchbox.initPolymer",function(a,b,c,d){var e=vg.Ha;if(a&&e){var f=V("SBOX_SETTINGS"),g=V("SBOX_LABELS");f&&g&&(a=E("searchbox.yt.install")(a,b,c,f,g,mv,d))&&e(a,100)}});}).call(this);
