(function(){"use strict";var e={4673:function(e,n,t){var r=t(5130),o=t(6768),u=t(4232);const i={id:"app"},a=["href"];function l(e,n,t,r,l,c){return(0,o.uX)(),(0,o.CE)("div",i,[n[3]||(n[3]=(0,o.Lk)("header",null,[(0,o.Lk)("h1",null,"KIKK COMPASS"),(0,o.Lk)("p",{class:"sous-titre"},"RIDE FREELY NOT LOSTLY ")],-1)),(0,o.Lk)("div",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.eventData,((e,n)=>((0,o.uX)(),(0,o.CE)("div",{key:n},[(0,o.Lk)("h2",null,(0,u.v_)(n),1),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e,(e=>((0,o.uX)(),(0,o.CE)("a",{key:e.name,href:e.link,target:"_blank"},(0,u.v_)(e.name),9,a)))),128))])))),128)),n[0]||(n[0]=(0,o.Lk)("h2",null,null,-1)),n[1]||(n[1]=(0,o.Lk)("h2",null,null,-1)),n[2]||(n[2]=(0,o.Lk)("span",{class:"program"},[(0,o.Lk)("a",{href:"https://www.kikk.be/schedule/"},"(see the schedule)")],-1))]),n[4]||(n[4]=(0,o.Lk)("footer",null,[(0,o.Lk)("p",{class:"sous-titre"},"A NON-MAP ON"),(0,o.Lk)("h1",null,"DERIVE"),(0,o.Lk)("p",{class:"sous-titre"},"MADE BY HÉRÉTIQUE ")],-1))])}var c=t(4373),f={data(){return{eventData:null}},created(){this.fetchEventData()},methods:{fetchEventData(){c.A.get("/events.json").then((e=>{this.eventData=e.data})).catch((e=>{console.error("Error fetching the event data:",e)}))}}},s=t(1241);const h=(0,s.A)(f,[["render",l]]);var v=h;const d=document.createElement("link");d.rel="stylesheet",d.href="https://use.typekit.net/zqs1zmf.css",document.head.appendChild(d),(0,r.Ef)(v).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={exports:{}};return e[r].call(u.exports,u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,u){if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],u=e[f][2];for(var a=!0,l=0;l<r.length;l++)(!1&u||i>=u)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(a=!1,u<i&&(i=u));if(a){e.splice(f--,1);var c=o();void 0!==c&&(n=c)}}return n}u=u||0;for(var f=e.length;f>0&&e[f-1][2]>u;f--)e[f]=e[f-1];e[f]=[r,o,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,u,i=r[0],a=r[1],l=r[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(l)var f=l(t)}for(n&&n(r);c<i.length;c++)u=i[c],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(f)},r=self["webpackChunkkikk_derive_vue"]=self["webpackChunkkikk_derive_vue"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(4673)}));r=t.O(r)})();
//# sourceMappingURL=app.bb31623e.js.map