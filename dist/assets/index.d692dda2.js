import{i as v,g as S,d as j,s as l,v as I,r as g,u as L,a as R,j as A,b as C,c as m,e as d,H as E,n as O,W as P,R as k,f as z}from"./vendor.a2caceb2.js";const D=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};D();const H={apiKey:"AIzaSyASnzUbtorvyhRAv_Ykd2KAELTemSsjREY",authDomain:"gallerytypescript.firebaseapp.com",projectId:"gallerytypescript",storageBucket:"gallerytypescript.appspot.com",messagingSenderId:"796061163378",appId:"1:796061163378:web:346d76114dc7e486d3c7eb"},x=v(H),h=S(x),y=j(x),T=l.div`
    width: 100%;
    min-height: 100vh;

    background-color: #222;
    color: #fff;
`,B=l.div`
    width: 100%;
    max-width: 1440px;

    height: 100%;
    padding: 30px;

    display: flex;
    flex-direction: column;

    gap: 15px;
`,F=l.div`
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;

    border: solid 1px #fff;
    padding: 5px;
    border-radius: 5px;
`,K=l.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;

    gap: 15px;

    @media screen and (max-width: 600px){
        justify-content: center;
    }

`,M=l.div`
    min-width: 256px;
    min-height: 256px;

    max-width: 256px;
    max-height: 256px;


    @media screen and (max-width: 600px){
        min-width: 100%;
        max-width: 100%;
        width: 100%;
    }


    img{
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: center center;

        border: solid 1px #fff;
        border-radius: 5px;
    }
    
`,N=async n=>{const o=I(),a=g(h,"images/"+o);n!=null&&L(a,n).then(async e=>{console.log(e);const t=g(h,e.metadata.fullPath),s=e.metadata.contentType,p=await R(t);U({type:s,url:p,id:o})})},U=async n=>{const o=await A(C(y,"images",n.id),n);console.log(o)},i=m.exports.jsx,f=m.exports.jsxs,W=()=>{const[n,o]=d.exports.useState(!1);d.exports.useState([]);const[a,c]=d.exports.useState(),[e,t]=d.exports.useState(!0),[s,p]=d.exports.useState([]);d.exports.useEffect(()=>{o(!0),E(O(y,"images"),r=>{if(s.length===r.size)return o(!1);p([]),r.forEach(b=>{p(w=>[...w,b.data()])}),o(!1),t(!0)})},[]);const u=()=>{t(!1),N(a?a[0]:null)};return n?i("h1",{children:"Carregando!"}):(console.log(s),i(T,{children:f(B,{children:[e?f(F,{children:[i("input",{type:"file",onChange:r=>c(r.target.files)}),i("button",{onClick:u,children:"Colocar"})]}):i("b",{children:"Subindo"}),i(K,{children:s==null?void 0:s.map(r=>i(M,{children:i("img",{src:r.url})},r.id))})]})}))};var Y=P`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`;k.render(f(z.StrictMode,{children:[i(W,{}),i(Y,{})]}),document.getElementById("root"));
