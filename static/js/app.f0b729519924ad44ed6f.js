webpackJsonp([1],{"2CNl":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a=s("raD+"),r=s("tLQV"),n=s("TXmL"),o=(s("feh1"),s("Xxa5")),l=s.n(o),c=s("exGp"),u=s.n(c),v=s("tqUj"),h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vk-navbar",[s("vk-navbar-nav",[s("vk-navbar-nav-item",{attrs:{title:"Fast SRT Subtitle Toolkit",active:"active"}})],1),s("vk-navbar-nav",{attrs:{slot:"right"},slot:"right"},[s("vk-navbar-nav-dropdown",{attrs:{title:"Language"}},[s("vk-navbar-nav-dropdown-nav",[s("vk-nav-item",{attrs:{title:"English"},on:{click:function(e){t.$i18n.locale="en"}}}),s("vk-nav-item",{attrs:{title:"繁體中文"},on:{click:function(e){t.$i18n.locale="zh-tw"}}}),s("vk-nav-item",{attrs:{title:"简体中文"},on:{click:function(e){t.$i18n.locale="zh-cn"}}})],1)],1),s("vk-navbar-nav-item",{attrs:{icon:"github",title:"GitHub",href:"https://github.com/dsh0416/fast-srt-subtitle"}})],1)],1)},staticRenderFns:[]};var d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vk-card",{staticClass:"shortcuts"},[s("vk-card-title",[t._v(t._s(t.$t("shortcuts")))]),s("p",[s("vk-label",{staticClass:"shortcut-label"},[t._v("K")]),s("span",{staticClass:"shortcut-text"},[t._v(t._s(t.$t("shortcutK")))])],1),s("p",[s("vk-label",{staticClass:"shortcut-label"},[t._v("L")]),s("span",{staticClass:"shortcut-text"},[t._v(t._s(t.$t("shortcutL")))])],1),s("p",[s("vk-label",{staticClass:"shortcut-label"},[t._v("U")]),s("span",{staticClass:"shortcut-text"},[t._v(t._s(t.$t("shortcutU")))])],1),s("p",[s("vk-label",{staticClass:"shortcut-label"},[t._v("P")]),s("span",{staticClass:"shortcut-text"},[t._v(t._s(t.$t("shortcutP")))])],1),s("p",[s("vk-label",{staticClass:"shortcut-label"},[t._v("I")]),s("span",{staticClass:"shortcut-text"},[t._v(t._s(t.$t("shortcutI")))])],1),s("p",[s("vk-label",{staticClass:"shortcut-label"},[t._v("O")]),s("span",{staticClass:"shortcut-text"},[t._v(t._s(t.$t("shortcutO")))])],1)],1)},staticRenderFns:[]};var p={name:"App",components:{Navbar:s("VU/8")({name:"Navbar"},h,!1,function(t){s("2CNl")},null,null).exports,Shortcut:s("VU/8")({name:"Shortcut"},d,!1,function(t){s("eDT6")},"data-v-fa3c6c92",null).exports},data:function(){return{modalText:"",modalShow:!1,stage:"prepare",subtitleText:"",subtitles:[],subtitleStarts:[],subtitleEnds:[],currentLine:null,nextLine:0,previousTiming:0,reactTime:.3,subtitleReview:""}},computed:{nextLines:function(){return this.subtitles.slice(this.nextLine,this.nextLine+4)}},beforeDestroy:function(){window.removeEventListener("keypress",this.keyHandler)},methods:{loadText:function(){this.$refs.textLoader.click()},loadVideo:function(){this.$refs.videoLoader.click()},readText:function(t){var e=this,s=t.target.files[0];this.subtitleText="";var i=new FileReader;i.onload=function(){e.subtitleText=i.result},i.readAsText(s)},readVideo:function(t){var e=t.target.files[0],s=URL.createObjectURL(e);this.$refs.source.src=s,this.$refs.video.load()},startEdit:function(){0===this.subtitleText.length?(this.modalShow=!0,this.modalText=this.$t("emptySubtitle")):(this.subtitles=this.subtitleText.split("\n"),this.subtitleStarts=new Array(this.subtitles.length).fill(null),this.subtitleEnds=new Array(this.subtitles.length).fill(null),this.stage="edit",window.addEventListener("keypress",this.keyHandler))},startReview:function(){window.removeEventListener("keypress",this.keyHandler),this.stage="review",this.$refs.video.currentTime=0,this.generateSubtitle(),this.updatePreview()},keyHandler:function(t){switch(String.fromCharCode(t.keyCode).toLowerCase()){case"k":null!==this.currentLine&&(this.subtitleEnds[this.currentLine]=this.$refs.video.currentTime-.01-this.reactTime),this.currentLine=this.nextLine,this.nextLine+=1,this.currentLine<this.subtitles.length?this.subtitleStarts[this.currentLine]=this.$refs.video.currentTime-this.reactTime:this.currentLine=null;break;case"l":null!==this.currentLine&&(this.subtitleEnds[this.currentLine]=this.$refs.video.currentTime-.01-this.reactTime),this.currentLine=null;break;case"u":this.$refs.video.currentTime-=3;break;case"p":this.$refs.video.currentTime+=3;break;case"i":this.nextLine>0&&(this.currentLine=this.nextLine-2,this.nextLine=this.nextLine-1),-1===this.currentLine&&(this.currentLine=null);break;case"o":this.nextLine<this.subtitles.length&&(this.currentLine=this.nextLine,this.nextLine=this.nextLine+1)}},timeFormat:function(t){return null===t?"00:00:00,000":(""+Math.floor(t/60/60)).padStart(2,"0")+":"+(""+Math.floor(t/60%60)).padStart(2,"0")+":"+(""+Math.floor(t%60)).padStart(2,"0")+","+(""+Math.floor(1e3*t%1e3)).padStart(3,"0")},generateSubtitle:function(){this.subtitleReview="";for(var t=0;t<this.subtitles.length;t+=1)this.subtitleReview+=t+1+"\n",this.subtitleReview+=this.timeFormat(this.subtitleStarts[t])+" --\x3e "+this.timeFormat(this.subtitleEnds[t])+"\n",this.subtitleReview+=this.subtitles[t]+"\n\n"},updatePreview:function(){var t=this;return u()(l.a.mark(function e(){var s,i,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=new Blob([t.subtitleReview],{type:"text/plain"}),e.prev=1,i=new v.a(s),e.next=5,i.getURL();case 5:a=e.sent,t.$refs.caption.src=a,t.$refs.caption.mode="showing",t.$refs.video.load(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),t.modalShow=!0,t.modalText=t.$t("invalidSrt");case 15:case"end":return e.stop()}},e,t,[[1,11]])}))()},saveSrt:function(){var t=this.$refs.download,e=new Blob([this.subtitleReview],{type:"text/plain"});t.href=URL.createObjectURL(e),t.download="result.srt",t.click()},saveVtt:function(){var t=this;return u()(l.a.mark(function e(){var s,i,a,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.$refs.download,i=new Blob([t.subtitleReview],{type:"text/plain"}),e.prev=2,a=new v.a(i),e.next=6,a.getURL();case 6:r=e.sent,s.href=r,s.download="result.vtt",s.click(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),t.modalShow=!0,t.modalText=t.$t("invalidSrt");case 16:case"end":return e.stop()}},e,t,[[2,12]])}))()}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("navbar"),s("vk-modal",{attrs:{show:t.modalShow},on:{"update:show":function(e){t.modalShow=e}}},[s("vk-modal-title",[t._v(t._s(t.$t("error")))]),s("p",[t._v(t._s(t.modalText))]),s("p",{staticClass:"uk-text-right"},[s("vk-button",{staticClass:"uk-margin-small-right",on:{click:function(e){t.modalShow=!1}}},[t._v(t._s(t.$t("close")))])],1)],1),s("div",{staticClass:"container"},[s("div",{staticClass:"panel"},["prepare"===t.stage?s("div",[s("input",{ref:"textLoader",staticClass:"hidden",attrs:{type:"file",accept:"text/plain"},on:{change:t.readText}}),s("vk-button",{on:{click:t.loadText}},[t._v(t._s(t.$t("loadTextFile")))]),s("div",{staticClass:"uk-margin"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.subtitleText,expression:"subtitleText"}],staticClass:"uk-textarea",attrs:{rows:"20"},domProps:{value:t.subtitleText},on:{input:function(e){e.target.composing||(t.subtitleText=e.target.value)}}})]),s("p",{staticClass:"uk-margin"},[t._v(t._s(t.$t("linesOfSubtitle"))+t._s(t.subtitleText.split("\n").length)+" "+t._s(t.$t("lines")))]),s("vk-button",{staticClass:"uk-margin",attrs:{type:"primary"},on:{click:t.startEdit}},[t._v(t._s(t.$t("startEditing")))])],1):t._e(),"edit"===t.stage?s("div",[s("h4",[t._v(t._s(t.$t("reactTime"))+t._s(t.reactTime)+"s")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.reactTime,expression:"reactTime"}],staticClass:"uk-range",attrs:{type:"range",min:"0.0",max:"1.0",step:"0.01"},domProps:{value:t.reactTime},on:{__r:function(e){t.reactTime=e.target.value}}}),s("h2",[t._v(t._s(t.$t("currentLine")))]),null===t.currentLine?s("h4",{staticClass:"alt-text"},[t._v(t._s(t.$t("emptyHint")))]):s("h4",[t._v(t._s(t.subtitles[t.currentLine]))]),s("h2",[t._v(t._s(t.$t("comingLines")))]),t._l(t.nextLines,function(e){return s("h4",{staticClass:"alt-text"},[t._v(t._s(e))])}),t.nextLines.length<4?s("h4",{staticClass:"alt-text"},[t._v(t._s(t.$t("eofHint")))]):t._e(),s("vk-button",{staticClass:"uk-margin",attrs:{type:"primary"},on:{click:t.startReview}},[t._v(t._s(t.$t("startReviewing")))])],2):t._e(),"review"===t.stage?s("div",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.subtitleReview,expression:"subtitleReview"}],staticClass:"uk-textarea",attrs:{rows:"20"},domProps:{value:t.subtitleReview},on:{input:function(e){e.target.composing||(t.subtitleReview=e.target.value)}}}),s("div",{staticClass:"uk-margin"},[s("vk-button",{on:{click:t.updatePreview}},[t._v(t._s(t.$t("updatePreview")))])],1),s("div",{staticClass:"uk-margin"},[s("vk-button",{attrs:{type:"primary"},on:{click:t.saveSrt}},[t._v(t._s(t.$t("saveSrt")))])],1),s("div",{staticClass:"uk-margin"},[s("vk-button",{attrs:{type:"primary"},on:{click:t.saveVtt}},[t._v(t._s(t.$t("saveVtt")))])],1),s("a",{ref:"download",staticClass:"hidden",attrs:{href:""}})]):t._e()]),s("div",{staticClass:"panel"},[s("input",{ref:"videoLoader",staticClass:"hidden",attrs:{type:"file",accept:"audio/mp4, video/mp4"},on:{change:t.readVideo}}),"prepare"===t.stage?s("vk-button",{on:{click:t.loadVideo}},[t._v(t._s(t.$t("loadVideo")))]):t._e(),s("video",{ref:"video",staticClass:"video uk-margin",attrs:{id:"player",controls:"controls"}},[s("source",{ref:"source",attrs:{type:"video/mp4",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}}),s("track",{ref:"caption",attrs:{default:"default",label:"Default",src:"/static/empty.vtt"}})]),s("shortcut",{directives:[{name:"show",rawName:"v-show",value:"edit"===t.stage,expression:"stage === 'edit'"}]})],1)]),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[this._v("Originially implemented by "),e("a",{attrs:{href:"https://github.com/wiwikuan/"}},[this._v("@wiwikuan")]),this._v(", and refactored by "),e("a",{attrs:{href:"https://github.com/dsh0416/"}},[this._v("@dsh0416")]),this._v(" with ❤️️.")])}]};var b=s("VU/8")(p,m,!1,function(t){s("jeom")},"data-v-303323ab",null).exports,f={en:{error:"Error",close:"Close",loadTextFile:"Load Text File",linesOfSubtitle:"Lines of Subtitle: ",lines:"line(s)",startEditing:"Start Editing",reactTime:"React Time: ",currentLine:"Current Line",emptyHint:"[Empty]",comingLines:"Coming Lines",eofHint:"[End of File]",startReviewing:"Start Reviewing",updatePreview:"Update Preview",saveSrt:"Save in SRT Format",saveVtt:"Save in WebVTT Format",loadVideo:"Load Video",emptySubtitle:"Subtitle cannot be empty",invalidSrt:"SRT file is invalid",shortcuts:"Shotcuts",shortcutK:"Switch to Next Line",shortcutL:"Stop Current Line",shortcutU:"Prev 3 Secs",shortcutP:"Skip 3 Secs",shortcutI:"Prev Line",shortcutO:"Skip Line"},"zh-cn":{error:"错误",close:"关闭",loadTextFile:"载入文字字幕",linesOfSubtitle:"字幕行数：",lines:" 行",startEditing:"开始编辑",reactTime:"反应时间：",currentLine:"当前字幕",emptyHint:"[空]",comingLines:"字幕预览",eofHint:"[文件结束]",startReviewing:"开始审阅",updatePreview:"更新预览",saveSrt:"保存为 SRT 文件",saveVtt:"保存为 WebVTT 文件",loadVideo:"载入视频",emptySubtitle:"字幕不能为空",invalidSrt:"SRT 文件不合法",shortcuts:"快捷键",shortcutK:"切换至下一行",shortcutL:"停止当前行",shortcutU:"后退 3 秒",shortcutP:"快进 3 秒",shortcutI:"返回上一行",shortcutO:"跳过当前行"},"zh-tw":{error:"錯誤",close:"關閉",loadTextFile:"加載文字字幕",linesOfSubtitle:"字幕行數：",lines:" 行",startEditing:"開始編輯",reactTime:"反應時間：",currentLine:"當前字幕",emptyHint:"[空]",comingLines:"字幕預覽",eofHint:"[檔案結束]",startReviewing:"開始審查",updatePreview:"更新預覽",saveSrt:"以 SRT 檔案存儲",saveVtt:"以 WebVTT 檔案存儲",saveFile:"儲藏檔案",loadVideo:"加載影片",emptySubtitle:"字幕不能爲空",invalidSrt:"SRT 檔案不合法",shortcuts:"快捷鍵",shortcutK:"切換到下一行",shortcutL:"停止當前行",shortcutU:"倒帶 3 秒",shortcutP:"快轉 3 秒",shortcutI:"返回上一行",shortcutO:"跳過當前行"}};i.a.use(a.a),i.a.use(r.a),i.a.use(n.a),i.a.config.productionTip=!1;var w=new n.a({locale:"en",messages:f});new i.a({el:"#app",components:{App:b},i18n:w,template:"<App/>"})},eDT6:function(t,e){},feh1:function(t,e){},jeom:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f0b729519924ad44ed6f.js.map