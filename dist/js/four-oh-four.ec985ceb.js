(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["four-oh-four"],{"49b1":function(t){t.exports=JSON.parse('{"home":"Hi! I am Suning Yao, a software engineer who writes well-documented code, builds accessible interfaces and ships delightful apps.","portfolio":"Hi! I am Suning Yao, a software engineer among other things. If you would like to know more about my work, you should start here.","blog":"Hi! I am Suning Yao, a software engineer who also loves to write. This is my blog and I regularly post stuff that you might enjoy.","contact":"Hi! I am Suning Yao, a software engineer who is always up for a solving a challenging problem or implementing an interesting idea.","about":"\'Hi! I am Suning Yao, a coffee-loving software engineer among other things. If you want to know more about me, you should start here.","fourOhFour":"You\'re lost, aren\'t you? Hi lost! I am Suning Yao, a software engineer who built this site and is not ashamed of that joke at all."}')},a824:function(t,e,o){t.exports=o.p+"img/error.f941776e.svg"},cbd1:function(t,e,o){"use strict";var r=o("e05d"),a=o.n(r);a.a},da28:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{attrs:{id:"four-oh-four"}},[o("section",{on:{click:t.toggleDrawing,mousemove:t.drawErrorWithMouse,touchstart:t.drawErrorWithTouch,touchmove:t.drawErrorWithTouch}},[o("canvas",{ref:"errorCanvas",staticClass:"error-place"}),o("div",{staticClass:"imagery"},[o("img",{ref:"errorImage",attrs:{width:t.errorImage.width,height:t.errorImage.height,src:t.errorImage.source,alt:"Windows 98 error message"}})]),o("footer",[o("p",{attrs:{title:"Gotcha!"}},[t._v(" You seem lost. Go "),o("RouterLink",{attrs:{tabindex:"0",to:{name:"home"},title:"[H] Go to the homepage."}},[t._v(" home")]),t._v("? ")],1)])])])},a=[],i=(o("4160"),o("d81d"),o("159b"),o("49b1")),n=o("a824"),s=o.n(n),h={name:"FourOhFour",metaInfo:{title:"404",meta:["description","og:description"].map((function(t){return{name:t,content:i.fourOhFour}}))},data:function(){return{isDrawing:!0,canvas:null,context:null,errorImage:{source:s.a,width:240,height:135}}},methods:{setupCanvas:function(){var t=window.devicePixelRatio||1,e=window.innerWidth,o=window.innerHeight;this.canvas.width=t*e,this.canvas.height=t*o,this.canvas.style.width="".concat(e,"px"),this.canvas.style.height="".concat(o,"px"),this.context=this.canvas.getContext("2d"),this.context.scale(t,t)},toggleDrawing:function(){this.isDrawing=!this.isDrawing},drawErrorWithMouse:function(t){this.drawError(t.clientX,t.clientY)},drawErrorWithTouch:function(t){var e=this;t.touches.forEach((function(t){e.drawError(t.pageX,t.pageY)}))},drawError:function(t,e){this.isDrawing&&this.context.drawImage(this.$refs.errorImage,t-this.errorImage.width/2,e-16,this.errorImage.width,this.errorImage.height)}},mounted:function(){this.canvas=this.$refs.errorCanvas,this.setupCanvas(),window.addEventListener("resize",this.setupCanvas)}},u=h,c=(o("cbd1"),o("2877")),g=Object(c["a"])(u,r,a,!1,null,"c9c30228",null);e["default"]=g.exports},e05d:function(t,e,o){}}]);
//# sourceMappingURL=four-oh-four.ec985ceb.js.map