(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35e1ad05"],{"06c5":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("a630"),r("fb6a"),r("b0c0"),r("d3b7"),r("25f0"),r("3ca3");function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},3835:function(t,e,r){"use strict";function n(t){if(Array.isArray(t))return t}r.d(e,"a",(function(){return c}));r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");function a(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(n=(o=c.next()).done);n=!0)if(r.push(o.value),e&&r.length===e)break}catch(u){a=!0,i=u}finally{try{n||null==c["return"]||c["return"]()}finally{if(a)throw i}}return r}}var i=r("06c5");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){return n(t)||a(t,e)||Object(i["a"])(t,e)||o()}},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),i=r("1c7e"),o=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:a})},b85c:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");var n=r("06c5");function a(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=Object(n["a"])(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){u=!0,o=t},f:function(){try{c||null==r["return"]||r["return"]()}finally{if(u)throw o}}}}},d28b:function(t,e,r){var n=r("746f");n("iterator")},da5c:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("form",[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.name,expression:"currentUser.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:t.currentUser.name},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"name",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[t._v("Image")]),t.currentUser.image?r("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:t.currentUser.image,width:"200",height:"200"}}):t._e(),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:t.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{"after-submit":t.handleAfterSubmit}},[t._v(" Submit ")])])])},a=[],i=(r("b0c0"),r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("3835")),o=r("b85c"),c=r("5530"),u={currentUser:{id:1,name:"管理者",email:"root@example.com",image:"https://i.pravatar.cc/300",isAdmin:!0},isAuthenticated:!0},s={name:"userEdit",data:function(){return{currentuser:{id:"",name:"",email:"",image:"",isAdmin:1},hey:""}},created:function(){var t=this.$route.params.id;this.fetchUser(t)},methods:{fetchUser:function(t){console.log("user的id是",t),console.log("這是",this);var e=u.currentUser,r=e.image,n=e.name;this.currentUser=Object(c["a"])(Object(c["a"])({},this.currentUser),{},{image:r,name:n})},handleFileChange:function(t){var e=t.target.files;if(0===e.length)this.currentUser.image="";else{var r=window.URL.createObjectURL(e[0]);this.currentimage=r,console.log("差別",r)}},handleAfterSubmit:function(t){var e,r=t.target,n=new FormData(r),a=Object(o["a"])(n.entries());try{for(a.s();!(e=a.n()).done;){var c=Object(i["a"])(e.value,2),u=c[0],s=c[1];console.log(u+": "+s)}}catch(l){a.e(l)}finally{a.f()}}}},l=s,f=r("2877"),d=Object(f["a"])(l,n,a,!1,null,null,null);e["default"]=d.exports},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),i=r("da84"),o=r("5135"),c=r("861d"),u=r("9bf2").f,s=r("e893"),l=i.Symbol;if(a&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};s(d,l);var m=d.prototype=l.prototype;m.constructor=d;var b=m.toString,v="Symbol(test)"==String(l("test")),h=/^Symbol\((.*)\)[^)]+$/;u(m,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=b.call(t);if(o(f,t))return"";var r=v?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),i=r("e8b5"),o=r("23cb"),c=r("50c4"),u=r("fc6a"),s=r("8418"),l=r("b622"),f=r("1dde"),d=r("ae40"),m=f("slice"),b=d("slice",{ACCESSORS:!0,0:0,1:2}),v=l("species"),h=[].slice,p=Math.max;n({target:"Array",proto:!0,forced:!m||!b},{slice:function(t,e){var r,n,l,f=u(this),d=c(f.length),m=o(t,d),b=o(void 0===e?d:e,d);if(i(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return h.call(f,m,b);for(n=new(void 0===r?Array:r)(p(b-m,0)),l=0;m<b;m++,l++)m in f&&s(n,l,f[m]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-35e1ad05.a83ee2e4.js.map