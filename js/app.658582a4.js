(function(){"use strict";var e={8898:function(e,n,t){var r=t(5130),u=t(6768),o=t(4232);const i={id:"app"},a=["href"];function l(e,n,t,r,l,c){return(0,u.uX)(),(0,u.CE)("div",i,[n[3]||(n[3]=(0,u.Lk)("header",null,[(0,u.Lk)("h1",null,"KIKK COMPASS"),(0,u.Lk)("p",{class:"sous-titre"},"RIDE FREELY NOT LOSTLY ")],-1)),(0,u.Lk)("div",null,[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(l.eventData,((e,n)=>((0,u.uX)(),(0,u.CE)("div",{key:n},[(0,u.Lk)("h2",null,(0,o.v_)(n),1),((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(e,(e=>((0,u.uX)(),(0,u.CE)("a",{key:e.name,href:e.link,target:"_blank"},(0,o.v_)(e.name),9,a)))),128))])))),128)),n[0]||(n[0]=(0,u.Lk)("h2",null,null,-1)),n[1]||(n[1]=(0,u.Lk)("h2",null,null,-1)),n[2]||(n[2]=(0,u.Lk)("span",{class:"program"},[(0,u.Lk)("a",{href:"https://www.kikk.be/schedule/"},"(see the schedule)")],-1))]),n[4]||(n[4]=(0,u.Lk)("footer",null,[(0,u.Lk)("p",{class:"sous-titre"},"A NON-MAP ON"),(0,u.Lk)("h1",null,"DERIVE"),(0,u.Lk)("p",{class:"sous-titre"},"MADE BY HÉRÉTIQUE ")],-1))])}var c=t(4373),f={data(){return{eventData:null}},created(){this.fetchEventData()},methods:{fetchEventData(){c.A.get("/kikk-derive-vue/events.json").then((e=>{this.eventData=e.data})).catch((e=>{console.error("Error fetching the event data:",e)}))}}},s=t(1241);const h=(0,s.A)(f,[["render",l]]);var v=h;const d=document.createElement("link");d.rel="stylesheet",d.href="https://use.typekit.net/zqs1zmf.css",document.head.appendChild(d),(0,r.Ef)(v).mount("#app")}},n={};function t(r){var u=n[r];if(void 0!==u)return u.exports;var o=n[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,r,u,o){if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],u=e[f][1],o=e[f][2];for(var a=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(a=!1,o<i&&(i=o));if(a){e.splice(f--,1);var c=u();void 0!==c&&(n=c)}}return n}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[r,u,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var u,o,i=r[0],a=r[1],l=r[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(u in a)t.o(a,u)&&(t.m[u]=a[u]);if(l)var f=l(t)}for(n&&n(r);c<i.length;c++)o=i[c],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(f)},r=self["webpackChunkkikk_derive_vue"]=self["webpackChunkkikk_derive_vue"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(8898)}));r=t.O(r)})();
//# sourceMappingURL=app.658582a4.js.map