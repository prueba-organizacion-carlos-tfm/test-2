import{_ as g,a2 as f,o as e,c as t,F as _,L as u,C as l,z as s,t as c,a as y}from"./framework.d07c0f7d.js";import{g as w,s as k}from"./index.0a6ae047.js";const m={data(){return{general:[],show:!1,role:null}},props:{data:{type:String,required:!0}},computed:{buttonLabel(){return this.show?"Hide":"Show"}},methods:{toggleShow(n){this.show=!this.show}},async beforeMount(){if(w().length!==0){const n=k.getters.userData;this.role=n.role;let a=await f(()=>import(this.data),[]);this.general=a.default.data}}},v={key:0},x={key:0},S=["href"],b={key:0},C=["onClick"],D={key:0},L={key:1};function V(n,a,B,E,o,h){return e(),t("div",null,[o.role!==null||o.role==="owner"?(e(),t("ul",v,[(e(!0),t(_,null,u(o.general,(i,d)=>(e(),t("li",{key:d},[s("h2",null,c(i.text),1),s("ul",null,[(e(!0),t(_,null,u(i.items,(r,p)=>(e(),t("div",{key:p},[!r.hidden&&o.role!==null||o.role==="owner"?(e(),t("li",x,[s("a",{href:r.link},c(r.text),9,S),y("     "),o.role==="owner"?(e(),t("div",b,[s("button",{class:"eyebtn",onClick:N=>h.toggleShow(r)},[r.hidden?(e(),t("span",D," Hide ")):(e(),t("span",L," Show "))],8,C)])):l("",!0)])):l("",!0)]))),128))])]))),128))])):l("",!0)])}const H=g(m,[["render",V]]);export{H as g};
