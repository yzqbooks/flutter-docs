"use strict";(self.webpackChunkflutter_docs=self.webpackChunkflutter_docs||[]).push([[6237],{6237:(e,t,l)=>{l.r(t),l.d(t,{default:()=>y});var a=l(48888),s=l(59511),r=l(35027),u=l(14966),n=l(23239),c=l(77652),o=l(43839),v=l(6808),i=l(51979),h=l(70399),p=l(98808);const d=(0,u._aR)("search-pro-history-results",[]);var y=(0,v.aZ)({name:"SearchResult",props:{query:{type:String,required:!0}},emits:{close:()=>!0,updateQuery:e=>!0},setup(e,{emit:t}){const l=(0,a.Vi)(),y=(0,i.tv)(),m=(0,a.I)(),g=(0,h.zT)(p.a),{history:H,addHistory:f,removeHistory:k}=(()=>{const{historyCount:e}=p.s;return{history:d,addHistory:t=>{d.value.length<e?d.value=[t,...d.value]:d.value=[t,...d.value.slice(0,e-1)]},removeHistory:e=>{d.value=[...d.value.slice(0,e),...d.value.slice(e+1)]}}})(),w=(0,o.Vh)(e,"query"),{results:C,searching:b}=(e=>{const t=(0,a.I)(),l=(0,o.iH)(!1),s=(0,o.iH)([]);let r;const u=(0,n.DI)((e=>{l.value=!0,null==r||r.terminate(),e?(r=new Worker(`/flutter-docs/${p.s.worker}`,{}),r.addEventListener("message",(({data:e})=>{s.value=e,l.value=!1})),r.postMessage({query:e,routeLocale:t.value})):(s.value=[],l.value=!1)}),p.s.delay);return(0,v.YP)([e,t],(()=>u(e.value)),{immediate:!0}),{searching:l,results:s}})(w),D=(0,o.iH)(0),q=(0,o.iH)(0),P=(0,o.iH)(),R=(0,v.Fl)((()=>C.value.length>0)),S=(0,v.Fl)((()=>C.value[D.value]||null)),$=e=>e.map((e=>(0,s.HD)(e)?e:(0,v.h)(e[0],e[1]))),A=e=>{if("custom"===e.type){const t=p.d[e.index]||"$content",[l,a=""]=(0,r.PO)(t)?t[m.value].split("$content"):t.split("$content");return $([l,...e.display,a])}return $(e.display)},I=()=>{D.value=0,q.value=0,t("updateQuery",""),t("close")};return(0,v.bv)((()=>{(0,u.ORN)("keydown",(e=>{if(R.value)if("ArrowUp"===e.key)q.value>0?q.value=q.value-1:(D.value=D.value>0?D.value-1:C.value.length-1,q.value=S.value.contents.length-1);else if("ArrowDown"===e.key)q.value<S.value.contents.length-1?q.value=q.value+1:(D.value=D.value<C.value.length-1?D.value+1:0,q.value=0);else if("Enter"===e.key){const e=S.value.contents[q.value];l.value.path!==e.path&&(f(e),y.push(e.path),I())}})),(0,c.Qp)(P.value,{reserveScrollBarGap:!0})})),(0,v.Ah)((()=>{(0,c.tP)()})),()=>(0,v.h)("div",{class:["search-pro-result",{empty:""===w.value?0===H.value.length:!R.value}],ref:P},""===w.value?H.value.length?(0,v.h)("ul",{class:"search-pro-result-list"},(0,v.h)("li",{class:"search-pro-result-list-item"},[(0,v.h)("div",{class:"search-pro-result-title"},g.value.history),H.value.map(((e,t)=>(0,v.h)(i.rH,{to:e.path,class:["search-pro-result-item",{active:q.value===t}],onClick:()=>{I()}},(()=>[(0,v.h)(p.H,{class:"search-pro-result-type"}),(0,v.h)("div",{class:"search-pro-result-content"},["content"===e.type&&e.header?(0,v.h)("div",{class:"content-header"},e.header):null,(0,v.h)("div",A(e))]),(0,v.h)("button",{class:"search-pro-close-icon",onClick:e=>{e.preventDefault(),e.stopPropagation(),k(t)}},(0,v.h)(p.C))]))))])):g.value.emptyHistory:b.value?(0,v.h)(p.S,{hint:g.value.searching}):R.value?(0,v.h)("ul",{class:"search-pro-result-list"},C.value.map((({title:e,contents:t},l)=>{const a=D.value===l;return(0,v.h)("li",{class:["search-pro-result-list-item",{active:a}]},[(0,v.h)("div",{class:"search-pro-result-title"},e||"Documentation"),t.map(((e,t)=>{const l=a&&q.value===t;return(0,v.h)(i.rH,{to:e.path,class:["search-pro-result-item",{active:l,"aria-selected":l}],onClick:()=>{f(e),I()}},(()=>["content"===e.type?null:(0,v.h)("title"===e.type?p.T:"heading"===e.type?p.b:p.c,{class:"search-pro-result-type"}),(0,v.h)("div",{class:"search-pro-result-content"},["content"===e.type&&e.header?(0,v.h)("div",{class:"content-header"},e.header):null,(0,v.h)("div",A(e))])]))}))])}))):g.value.emptyResult)}})}}]);