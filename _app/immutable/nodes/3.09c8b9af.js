import{s as ye,n as Ee,e as we,o as Me,f as fe,r as je}from"../chunks/scheduler.1f6706a1.js";import{S as Ae,i as Re,s as C,g as v,z as Ne,f as o,c as H,h as d,j as b,A as ee,k as l,a as X,x as e,m as z,H as Se,n as F,D as Oe,o as ne,C as qe,y as Te}from"../chunks/index.fb444567.js";import{g as Pe,f as De,e as xe,s as Ge}from"../chunks/Constants.e3c409ee.js";import{b as Le}from"../chunks/paths.26e25dc0.js";import{p as Ue}from"../chunks/stores.881e7872.js";const{document:me}=Pe;function Ie(a,t,r){const s=a.slice();return s[14]=t[r],s}function ke(a){let t,r='<div class="nucleobase svelte-tmb1x1"></div> <div class="nucleobase svelte-tmb1x1"></div> <div class="nucleobase svelte-tmb1x1"></div> <div class="nucleobase svelte-tmb1x1"></div> <div class="nucleobase svelte-tmb1x1"></div> <div class="nucleobase svelte-tmb1x1"></div> <div class="nucleobase svelte-tmb1x1"></div> <div class="nucleobase svelte-tmb1x1"></div> <div class="nucleobase svelte-tmb1x1"></div> <div class="nucleobase svelte-tmb1x1"></div>';return{c(){t=v("div"),t.innerHTML=r,this.h()},l(s){t=d(s,"DIV",{class:!0,"data-svelte-h":!0}),ee(t)!=="svelte-1vxv50n"&&(t.innerHTML=r),this.h()},h(){l(t,"class","DNA_cont svelte-tmb1x1")},m(s,p){X(s,t,p)},d(s){s&&o(t)}}}function Ce(a){let t,r,s,p=a[1].title+"",L,E,h,i,f,u=(De[a[1].start.split("T")[0]]??a[1].start.split("T")[0])+"",_,V,x,N,R=a[1].start.split("T")[1].split("+")[0]+" - "+a[1].end.split("T")[1].split("+")[0],S,m,n,T,w="Objectifs :",O,q,B,Q=a[1].objectives.join("")+"",M,D,j,A,P,J,G,y,Y,te,oe,U,Z,he='<strong class="svelte-tmb1x1">Liste de lecture :</strong>',ce,K,W=xe(a[4]),I=[];for(let c=0;c<W.length;c+=1)I[c]=He(Ie(a,W,c));return{c(){t=v("div"),r=v("div"),s=v("h1"),L=z(p),E=C(),h=v("div"),i=v("div"),f=z("🗓️ "),_=z(u),V=C(),x=v("div"),N=z("🕣 "),S=z(R),m=C(),n=v("div"),T=v("strong"),T.textContent=w,O=C(),q=v("div"),B=new Se(!1),M=C(),D=v("div"),j=v("div"),A=v("div"),P=v("strong"),J=z(a[2]),G=C(),y=v("video"),Y=v("track"),oe=C(),U=v("div"),Z=v("div"),Z.innerHTML=he,ce=C(),K=v("div");for(let c=0;c<I.length;c+=1)I[c].c();this.h()},l(c){t=d(c,"DIV",{class:!0});var k=b(t);r=d(k,"DIV",{class:!0});var g=b(r);s=d(g,"H1",{class:!0});var $=b(s);L=F($,p),$.forEach(o),E=H(g),h=d(g,"DIV",{class:!0});var se=b(h);i=d(se,"DIV",{class:!0});var ve=b(i);f=F(ve,"🗓️ "),_=F(ve,u),ve.forEach(o),V=H(se),x=d(se,"DIV",{class:!0});var de=b(x);N=F(de,"🕣 "),S=F(de,R),de.forEach(o),se.forEach(o),g.forEach(o),m=H(k),n=d(k,"DIV",{class:!0});var le=b(n);T=d(le,"STRONG",{class:!0,"data-svelte-h":!0}),ee(T)!=="svelte-1jn7qe7"&&(T.textContent=w),O=H(le),q=d(le,"DIV",{class:!0});var _e=b(q);B=Oe(_e,!1),_e.forEach(o),le.forEach(o),k.forEach(o),M=H(c),D=d(c,"DIV",{class:!0});var ae=b(D);j=d(ae,"DIV",{class:!0});var ie=b(j);A=d(ie,"DIV",{class:!0});var be=b(A);P=d(be,"STRONG",{class:!0});var pe=b(P);J=F(pe,a[2]),pe.forEach(o),be.forEach(o),G=H(ie),y=d(ie,"VIDEO",{class:!0,src:!0});var ge=b(y);Y=d(ge,"TRACK",{kind:!0,class:!0}),ge.forEach(o),ie.forEach(o),oe=H(ae),U=d(ae,"DIV",{class:!0});var re=b(U);Z=d(re,"DIV",{class:!0,"data-svelte-h":!0}),ee(Z)!=="svelte-1qyb1c1"&&(Z.innerHTML=he),ce=H(re),K=d(re,"DIV",{class:!0});var Ve=b(K);for(let ue=0;ue<I.length;ue+=1)I[ue].l(Ve);Ve.forEach(o),re.forEach(o),ae.forEach(o),this.h()},h(){l(s,"class","svelte-tmb1x1"),l(i,"class","svelte-tmb1x1"),l(x,"class","svelte-tmb1x1"),l(h,"class","date-time subtitle svelte-tmb1x1"),l(r,"class","session-header svelte-tmb1x1"),l(T,"class","svelte-tmb1x1"),B.a=null,l(q,"class","svelte-tmb1x1"),l(n,"class","objectives svelte-tmb1x1"),l(t,"class","detail svelte-tmb1x1"),l(P,"class","svelte-tmb1x1"),l(A,"class","svelte-tmb1x1"),l(Y,"kind","captions"),l(Y,"class","svelte-tmb1x1"),y.controls=!0,l(y,"class","video-player svelte-tmb1x1"),fe(y.src,te=a[3])||l(y,"src",te),l(j,"class","video-container svelte-tmb1x1"),l(Z,"class","svelte-tmb1x1"),l(K,"class","playlist svelte-tmb1x1"),l(U,"class","playlist-container svelte-tmb1x1"),l(D,"class","media svelte-tmb1x1")},m(c,k){X(c,t,k),e(t,r),e(r,s),e(s,L),e(r,E),e(r,h),e(h,i),e(i,f),e(i,_),e(h,V),e(h,x),e(x,N),e(x,S),e(t,m),e(t,n),e(n,T),e(n,O),e(n,q),B.m(Q,q),X(c,M,k),X(c,D,k),e(D,j),e(j,A),e(A,P),e(P,J),e(j,G),e(j,y),e(y,Y),e(D,oe),e(D,U),e(U,Z),e(U,ce),e(U,K);for(let g=0;g<I.length;g+=1)I[g]&&I[g].m(K,null)},p(c,k){if(k&2&&p!==(p=c[1].title+"")&&ne(L,p),k&2&&u!==(u=(De[c[1].start.split("T")[0]]??c[1].start.split("T")[0])+"")&&ne(_,u),k&2&&R!==(R=c[1].start.split("T")[1].split("+")[0]+" - "+c[1].end.split("T")[1].split("+")[0])&&ne(S,R),k&2&&Q!==(Q=c[1].objectives.join("")+"")&&B.p(Q),k&4&&ne(J,c[2]),k&8&&!fe(y.src,te=c[3])&&l(y,"src",te),k&120){W=xe(c[4]);let g;for(g=0;g<W.length;g+=1){const $=Ie(c,W,g);I[g]?I[g].p($,k):(I[g]=He($),I[g].c(),I[g].m(K,null))}for(;g<I.length;g+=1)I[g].d(1);I.length=W.length}},d(c){c&&(o(t),o(M),o(D)),qe(I,c)}}}function He(a){let t,r,s,p,L,E,h,i,f=a[14].title+"",u,_,V,x,N=a[14].start+"",R,S,m,n='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="svg-icon svelte-tmb1x1" xmlns="http://www.w3.org/2000/svg"><path d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z" fill="currentColor" class="svelte-tmb1x1"></path><path d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z" fill="currentColor" class="svelte-tmb1x1"></path></svg> <div class="svelte-tmb1x1">Télécharger</div>',T,w,O,q;function B(){return a[7](a[14])}function Q(){return a[8](a[14])}return{c(){t=v("div"),r=v("div"),s=v("img"),L=C(),E=v("div"),h=v("div"),i=v("strong"),u=z(f),_=C(),V=v("div"),x=v("span"),R=z(N),S=C(),m=v("button"),m.innerHTML=n,T=C(),this.h()},l(M){t=d(M,"DIV",{class:!0});var D=b(t);r=d(D,"DIV",{class:!0});var j=b(r);s=d(j,"IMG",{class:!0,src:!0,alt:!0}),j.forEach(o),L=H(D),E=d(D,"DIV",{class:!0});var A=b(E);h=d(A,"DIV",{class:!0});var P=b(h);i=d(P,"STRONG",{class:!0});var J=b(i);u=F(J,f),J.forEach(o),P.forEach(o),_=H(A),V=d(A,"DIV",{class:!0});var G=b(V);x=d(G,"SPAN",{class:!0});var y=b(x);R=F(y,N),y.forEach(o),S=H(G),m=d(G,"BUTTON",{type:!0,title:!0,class:!0,"data-svelte-h":!0}),ee(m)!=="svelte-okigmr"&&(m.innerHTML=n),G.forEach(o),A.forEach(o),T=H(D),D.forEach(o),this.h()},h(){l(s,"class","thumbnail svelte-tmb1x1"),fe(s.src,p=a[14].thumbnail)||l(s,"src",p),l(s,"alt",a[14].title),l(r,"class","thumbnail-container svelte-tmb1x1"),l(i,"class","svelte-tmb1x1"),l(h,"class","svelte-tmb1x1"),l(x,"class","svelte-tmb1x1"),l(m,"type","button"),l(m,"title","Télécharger"),l(m,"class","btn-download svelte-tmb1x1"),l(V,"class","subtitle svelte-tmb1x1"),l(E,"class","video-details svelte-tmb1x1"),l(t,"class",w="playlist-item "+(a[14].url==a[3]?"selected":"")+" svelte-tmb1x1")},m(M,D){X(M,t,D),e(t,r),e(r,s),e(t,L),e(t,E),e(E,h),e(h,i),e(i,u),e(E,_),e(E,V),e(V,x),e(x,R),e(V,S),e(V,m),e(t,T),O||(q=[Te(m,"click",B),Te(t,"click",Q)],O=!0)},p(M,D){a=M,D&8&&w!==(w="playlist-item "+(a[14].url==a[3]?"selected":"")+" svelte-tmb1x1")&&l(t,"class",w)},d(M){M&&o(t),O=!1,je(q)}}}function ze(a){let t,r,s,p,L='<i class="gg-chevron-left svelte-tmb1x1"></i> Retour',E,h;me.title=t=a[1]?a[1].title:"JFR 2023";let i=a[0]&&ke(),f=!a[0]&&a[1]&&Ce(a);return{c(){r=C(),s=v("main"),p=v("a"),p.innerHTML=L,E=C(),i&&i.c(),h=C(),f&&f.c(),this.h()},l(u){Ne("svelte-4fbbz6",me.head).forEach(o),r=H(u),s=d(u,"MAIN",{class:!0});var V=b(s);p=d(V,"A",{href:!0,class:!0,"data-svelte-h":!0}),ee(p)!=="svelte-1su23mt"&&(p.innerHTML=L),E=H(V),i&&i.l(V),h=H(V),f&&f.l(V),V.forEach(o),this.h()},h(){l(p,"href",Le+"/"),l(p,"class","one-liner svelte-tmb1x1"),l(s,"class","svelte-tmb1x1")},m(u,_){X(u,r,_),X(u,s,_),e(s,p),e(s,E),i&&i.m(s,null),e(s,h),f&&f.m(s,null)},p(u,[_]){_&2&&t!==(t=u[1]?u[1].title:"JFR 2023")&&(me.title=t),u[0]?i||(i=ke(),i.c(),i.m(s,h)):i&&(i.d(1),i=null),!u[0]&&u[1]?f?f.p(u,_):(f=Ce(u),f.c(),f.m(s,null)):f&&(f.d(1),f=null)},i:Ee,o:Ee,d(u){u&&(o(r),o(s)),i&&i.d(),f&&f.d()}}}function Fe(a,t,r){let s;we(a,Ue,m=>r(11,s=m));const p=s.url.searchParams;let L;p&&(L=p.get("id"));let E=!0,h,i,f,u,_=[];const V=m=>{var n=new XMLHttpRequest;return n.open("HEAD",m,!1),n.send(),n.status!=404},x=(m,n)=>{r(2,f=m),r(3,u=n)},N=(m,n)=>{const T=document.createElement("a");T.href=n;const w=n.split("."),O="."+w[w.length-1];T.download=Ge(m)+O,T.target="_blank",document.body.appendChild(T),T.click(),document.body.removeChild(T)};return Me(async()=>{h=await(await fetch(`${Le}/json/${L}.json`)).json(),r(1,i=h.data.event);for(const n of i.schedule.items)n.vod&&n.vod.media&&n.vod.media.element&&n.vod.media.element.sources&&_.push({title:n.title,url:n.vod.media.element.sources[0].uri,thumbnail:n.vod.media.thumbnail,start:n.start.split("T")[1].split("+")[0]});if(i.picture){const n=i.picture.split("/video/")[0]+"/video/y_1080p_4000kb.mp4";!_.some(w=>w.url===n)&&V(n)&&_.push({title:"[Unlisted Video]",url:n,thumbnail:i.picture,start:i.start.split("T")[1].split("+")[0]})}_.length>0&&(r(2,f=_[0].title),r(3,u=_[0].url)),r(0,E=!1)}),[E,i,f,u,_,x,N,m=>N(m.title,m.url),m=>x(m.title,m.url)]}class Qe extends Ae{constructor(t){super(),Re(this,t,Fe,ze,ye,{})}}export{Qe as component};
