(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["portfolio-home"],{"129e":function(t,e,n){},"1fbb":function(t,e,n){"use strict";var i=n("6767"),o=n.n(i);o.a},"498a":function(t,e,n){"use strict";var i=n("23e7"),o=n("58a8").trim,r=n("c8d2");i({target:"String",proto:!0,forced:r("trim")},{trim:function(){return o(this)}})},"4e75":function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),o=n("5899"),r="["+o+"]",a=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),c=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},6767:function(t,e,n){},7472:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("Terminal")],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"terminal"},[n("Past"),n("Present")],1)},a=[],s=n("f3f3"),c=n("2f62"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"past"},[t._l(t.visibleInteractions,(function(e,i){return[n("div",{key:i,staticClass:"interaction"},[n("Prompt",{attrs:{directory:e.context.directory}}),[t._v(t._s(e.input.command))],n(e.output.component,{tag:"component",staticClass:"output",attrs:{argv:e.output.argv}})],2)]}))],2)},u=[],m=(n("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"prompt",class:t.promptClasses},[n("span",{staticClass:"big"},[t._v(" [guest@suningyao "),n("span",{staticClass:"directory"},[t._v(t._s(t.directory))]),t._v("]$")]),n("span",{staticClass:"small"},[n("span",{staticClass:"directory"},[t._v(t._s(t.directory))]),t._v("$")])])}),d=[],f={name:"Prompt",props:{directory:{type:String,required:!0},isActive:{type:Boolean}},computed:{promptClasses:function(){return[{active:this.isActive}]}}},p=f,y=(n("775b"),n("2877")),h=Object(y["a"])(p,m,d,!1,null,"3c4fbf9e",null),v=h.exports,b=n("ac3a"),k={name:"Past",components:Object(s["a"])({Prompt:v},b["a"]),computed:Object(s["a"])({visibleInteractions:function(){return this.interactionHistory.filter((function(t){return t.isVisible}))}},Object(c["e"])("portfolio",["interactionHistory"]))},C=k,x=(n("c003"),Object(y["a"])(C,l,u,!1,null,"bc8a1b54",null)),g=x.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"present",attrs:{title:"[Ctrl + Shift + C] Focus on the terminal input."},on:{click:t.takeFocus}},[n("label",{staticClass:"prompt-label",attrs:{for:"command-field"}},[n("Prompt",{attrs:{directory:t.currentNode.name,"is-active":""}})],1),n("input",{directives:[{name:"shortkey",rawName:"v-shortkey.focus",value:["ctrl","shift","c"],expression:"['ctrl', 'shift', 'c']",modifiers:{focus:!0}},{name:"model",rawName:"v-model",value:t.command,expression:"command"}],ref:"commandField",staticClass:"command-field",style:t.commandFieldStyles,attrs:{id:"command-field",type:"text",autocomplete:"off",autocapitalize:"off",spellcheck:"false"},domProps:{value:t.command},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.loseFocus(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"arrow-up",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.traverseHistoryUp(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"arrow-down",void 0,e.key,void 0)||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.traverseHistoryDown(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.autocompleteCommand(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.submitCommand(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"c",void 0,e.key,void 0)?null:e.shiftKey&&e.ctrlKey?e.altKey||e.metaKey?null:(e.preventDefault(),t.cancelCommand(e)):null}],keyup:function(e){return e.stopPropagation(),t.processKeyup(e)},input:[function(e){e.target.composing||(t.command=e.target.value)},function(e){return e.stopPropagation(),t.processInput(e)}],click:function(e){return e.stopPropagation(),t.processClick(e)}}}),n("span",{staticClass:"faux-caret",style:t.fauxCaretStyles})])},_=[],O=(n("498a"),{name:"Present",components:{Prompt:v},data:function(){return{reactivityHack:0,command:"",traversal:{index:0,backup:""}}},computed:Object(s["a"])({commandFieldStyles:function(){return{"--characters-filled":"".concat(this.command.length,"ch")}},fauxCaretStyles:function(){return{"--characters-displaced":"".concat(this.caretPosition-this.command.length,"ch")}},caretPosition:function(){if(this.reactivityHack)return this.$refs.commandField.selectionStart}},Object(c["e"])("portfolio",["currentNode","interactionHistory","isProcessing"])),watch:{interactionHistory:function(){this.scrollToCommandField()},isProcessing:function(){this.scrollToCommandField()}},methods:Object(s["a"])({takeFocus:function(){this.$refs.commandField.focus(),this.$refs.commandField.setSelectionRange(this.command.length,this.command.length),this.reactivityHack++},loseFocus:function(){this.$refs.commandField.blur()},traverseHistoryUp:function(){if(this.traversal.index!==this.interactionHistory.length){0===this.traversal.index&&(this.traversal.backup=this.command),this.traversal.index++;var t=this.interactionHistory.length-this.traversal.index;this.command=this.interactionHistory[t].input.command}},traverseHistoryDown:function(){if(0!==this.traversal.index)if(this.traversal.index--,0===this.traversal.index)this.command=this.traversal.backup;else{var t=this.interactionHistory.length-this.traversal.index;this.command=this.interactionHistory[t].input.command}},resetTraversal:function(){this.traversal={index:0,backup:""}},autocompleteCommand:function(){""===this.command?this.command="help":console.log("Request to autocomplete:",this.command)},submitCommand:function(){this.command.trim()&&(this.runCommand({command:this.command.substring(0)}),this.command="",this.resetTraversal())},cancelCommand:function(){this.command="",this.resetTraversal()},processKeyup:function(){this.reactivityHack++},processInput:function(){this.reactivityHack++},processClick:function(){this.reactivityHack++},scrollToCommandField:function(){this.$nextTick((function(){document.body.scrollIntoView({behavior:"smooth",block:"end"})}))}},Object(c["b"])("portfolio",["runCommand"])),mounted:function(){this.reactivityHack++}}),H=O,F=(n("f12d"),Object(y["a"])(H,K,_,!1,null,"3afdd0a3",null)),P=F.exports,j={name:"Terminal",components:{Past:g,Present:P},computed:Object(s["a"])({},Object(c["e"])("portfolio",["isFirstRun"])),methods:Object(s["a"])(Object(s["a"])({},Object(c["d"])("portfolio",["setTree","setIsFirstRun"])),Object(c["b"])("portfolio",["runCommand"])),created:function(){this.isFirstRun&&(this.runCommand({command:"intro"}),this.runCommand({command:"help"}),this.setIsFirstRun({isFirstRun:!1}))}},w=j,$=(n("1fbb"),Object(y["a"])(w,r,a,!1,null,"5e8a24ec",null)),T=$.exports,S={name:"Home",components:{Terminal:T}},R=S,D=Object(y["a"])(R,i,o,!1,null,null,null);e["default"]=D.exports},"775b":function(t,e,n){"use strict";var i=n("94fb"),o=n.n(i);o.a},"94fb":function(t,e,n){},c003:function(t,e,n){"use strict";var i=n("129e"),o=n.n(i);o.a},c8d2:function(t,e,n){var i=n("d039"),o=n("5899"),r="​᠎";t.exports=function(t){return i((function(){return!!o[t]()||r[t]()!=r||o[t].name!==t}))}},f12d:function(t,e,n){"use strict";var i=n("4e75"),o=n.n(i);o.a}}]);
//# sourceMappingURL=portfolio-home.d94baf2c.js.map