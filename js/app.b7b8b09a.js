(function(e){function t(t){for(var o,a,c=t[0],l=t[1],s=t[2],d=0,p=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/reader/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-alert",{attrs:{type:"error",dismissible:"",elevation:"24"},model:{value:e.error,callback:function(t){e.error=t},expression:"error"}},[e._v("Failed loading file, try other one")]),n("v-btn",{style:e.cancelButtonStyle,attrs:{fixed:"",elevation:"2",fab:""},on:{click:e.cancelSelection}},[n("v-icon",[e._v("mdi-cancel")])],1),n("v-main",[n("v-container",{staticStyle:{height:"100%",width:"100%"},attrs:{id:"container"}},[n("div",{directives:[{name:"scroll",rawName:"v-scroll",value:e.handleScroll,expression:"handleScroll"}],ref:"content",attrs:{id:"content"},domProps:{innerHTML:e._s(e.text)}})])],1),n("v-dialog",{attrs:{width:"90%",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("div",{staticClass:"dictionary",domProps:{innerHTML:e._s(e.dictionaryEntry)}})])],1),n("v-bottom-sheet",{attrs:{inset:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({staticStyle:{top:"10px",right:"10px"},attrs:{large:"",fab:"",absolute:"",top:"",right:"",fixed:""}},"v-btn",r,!1),o),[n("v-icon",[e._v("mdi-cog")])],1)]}}])},[n("v-sheet",{attrs:{height:"200px"}},[n("v-file-input",{attrs:{"truncate-length":"200",chips:"",flat:"",accept:"text/html",placeholder:"Choose html file"},on:{change:e.fileChanged}})],1)],1)],1)},i=[],a=n("1da1"),c=(n("96cf"),n("498a"),n("d3b7"),n("25f0"),n("2ca0"),n("159b"),n("a6f4")),l=n("f7fe"),s=n.n(l),u=n("bc3a"),d=n.n(u);function p(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}var f=Object(c["b"])({setup:function(){var e,t=Object(c["e"])(""),n=Object(c["e"])(!1),o=Object(c["e"])({}),r=Object(c["e"])(!1),i=Object(c["e"])(""),l=Object(c["e"])({top:"0px",left:"0px",visibility:"hidden"}),u=!1,f=function(e){var o=new FileReader;try{o.readAsText(e,"UTF-8")}catch(r){console.log(r),n.value=!0}o.onload=function(e){t.value=e.target.result,window.localStorage.setItem("currentbook",e.target.result)},o.onerror=function(e){n.value=!0,console.error(e)}},g=function(e){window.localStorage.setItem("scrollHeight",window.scrollY)},m=function(){u=!0},v=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var n,o,a,c,s,p,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e!==document.getSelection().toString().trim()){t.next=2;break}return t.abrupt("return");case 2:if(e=document.getSelection().toString().trim(),console.log(e),(e.startsWith("l’")||e.startsWith("d’"))&&(e=e.substring(2)),!(e.length>0)){t.next=25;break}return n=document.getSelection().getRangeAt(0).getBoundingClientRect(),u=!1,l.value={top:n.top-56-10+"px",left:n.left+"px",visibility:"visible"},t.next=11,d.a.get("https://cors.bridged.cc/https://www.collinsdictionary.com/dictionary/french-english/"+e);case 11:o=t.sent,a='<div class="cB cB-def dictionary biling"',c='<div class=" copyright">',s=o.data.toString().indexOf(a),p=o.data.toString().lastIndexOf(c),f=document.createElement("div"),f.innerHTML=o.data.toString().substring(s,p),f.getElementsByClassName("title_frequency_container").forEach((function(e){e.remove()})),f.getElementsByClassName("copyright").forEach((function(e){return e.remove()})),i.value=f.innerHTML,f.remove(),setTimeout((function(){document.getElementsByClassName("audio_play_button").forEach((function(e){e.className="v-icon notranslate mdi mdi-play-circle",e.addEventListener("click",(function(){new Audio(e.getAttribute("data-src-mp3")).play()}))})),document.getElementsByClassName("verbtable").forEach((function(e){e.setAttribute("target","_blank")})),document.getElementsByClassName("ref").forEach((function(e){e.setAttribute("target","_blank")}))}),50),!u&&i.value.length>""&&(r.value=!0),l.value={visibility:"hidden"};case 25:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=p()?v:s()(v,1e3);return document.addEventListener("selectionchange",b),Object(c["d"])((function(){window.localStorage.getItem("currentbook")&&(t.value=window.localStorage.getItem("currentbook")),window.localStorage.getItem("scrollHeight")&&Object(c["c"])((function(){return window.scroll(0,window.localStorage.getItem("scrollHeight"))}))})),{error:n,text:t,content:o,dialog:r,dictionaryEntry:i,cancelButtonStyle:l,cancelSelection:m,handleScroll:g,fileChanged:f}}}),g=f,m=(n("5c0b"),n("2877")),v=n("6544"),b=n.n(v),h=n("0798"),w=n("7496"),y=n("288c"),k=n("8336"),x=n("b0af"),S=n("a523"),j=n("169a"),O=n("23a7"),_=n("132d"),E=n("f6c4"),B=n("8dd9"),C=n("269a"),A=n.n(C),V=n("f977"),z=Object(m["a"])(g,r,i,!1,null,null,null),N=z.exports;b()(z,{VAlert:h["a"],VApp:w["a"],VBottomSheet:y["a"],VBtn:k["a"],VCard:x["a"],VContainer:S["a"],VDialog:j["a"],VFileInput:O["a"],VIcon:_["a"],VMain:E["a"],VSheet:B["a"]}),A()(z,{Scroll:V["a"]});var T=n("f309");o["default"].use(T["a"]);var I=new T["a"]({}),M=n("9483");Object(M["a"])("".concat("/reader/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["default"].use(c["a"]),o["default"].config.productionTip=!1,new o["default"]({vuetify:I,render:function(e){return e(N)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.b7b8b09a.js.map