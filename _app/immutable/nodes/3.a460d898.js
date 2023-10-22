import{s as we,n as Ee,e as Me,o as je,f as pe,r as Ae}from"../chunks/scheduler.1f6706a1.js";import{S as Re,i as Se,s as H,g as d,z as Ne,f as o,c as L,h as v,j as m,A as ee,k as l,a as Q,x as e,m as F,H as Oe,n as B,D as qe,o as ne,C as Pe,y as Te}from"../chunks/index.fb444567.js";import{g as Ge,f as ke,e as De,s as Ue}from"../chunks/Constants.e3c409ee.js";import{b as ye}from"../chunks/paths.b919be59.js";import{p as ze}from"../chunks/stores.29e29bde.js";const{document:he}=Ge;function Ie(i,t,r){const s=i.slice();return s[14]=t[r],s}function Ce(i){let t,r='<div class="ls-particles ls-part-1 svelte-s4puht"></div> <div class="ls-particles ls-part-2 svelte-s4puht"></div> <div class="ls-particles ls-part-3 svelte-s4puht"></div> <div class="ls-particles ls-part-4 svelte-s4puht"></div> <div class="ls-particles ls-part-5 svelte-s4puht"></div> <div class="lightsaber ls-left ls-green svelte-s4puht"></div> <div class="lightsaber ls-right ls-red svelte-s4puht"></div>';return{c(){t=d("div"),t.innerHTML=r,this.h()},l(s){t=v(s,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),ee(t)!=="svelte-13d7tsk"&&(t.innerHTML=r),this.h()},h(){l(t,"id","loader"),l(t,"class","svelte-s4puht")},m(s,g){Q(s,t,g)},d(s){s&&o(t)}}}function He(i){let t,r,s,g=i[1].title+"",y,E,f,a,p,h=(ke[i[1].start.split("T")[0]]??i[1].start.split("T")[0])+"",_,V,D,N,S=i[1].start.split("T")[1].split("+")[0]+" - "+i[1].end.split("T")[1].split("+")[0],O,u,n,T,M="Objectifs :",q,P,J,W=i[1].objectives.join("")+"",j,k,A,R,G,Z,U,w,$,te,oe,z,K,fe='<strong class="svelte-s4puht">Liste de lecture :</strong>',ce,X,Y=De(i[4]),I=[];for(let c=0;c<Y.length;c+=1)I[c]=Le(Ie(i,Y,c));return{c(){t=d("div"),r=d("div"),s=d("h1"),y=F(g),E=H(),f=d("div"),a=d("div"),p=F("🗓️ "),_=F(h),V=H(),D=d("div"),N=F("🕣 "),O=F(S),u=H(),n=d("div"),T=d("strong"),T.textContent=M,q=H(),P=d("div"),J=new Oe(!1),j=H(),k=d("div"),A=d("div"),R=d("div"),G=d("strong"),Z=F(i[2]),U=H(),w=d("video"),$=d("track"),oe=H(),z=d("div"),K=d("div"),K.innerHTML=fe,ce=H(),X=d("div");for(let c=0;c<I.length;c+=1)I[c].c();this.h()},l(c){t=v(c,"DIV",{class:!0});var C=m(t);r=v(C,"DIV",{class:!0});var b=m(r);s=v(b,"H1",{class:!0});var x=m(s);y=B(x,g),x.forEach(o),E=L(b),f=v(b,"DIV",{class:!0});var se=m(f);a=v(se,"DIV",{class:!0});var de=m(a);p=B(de,"🗓️ "),_=B(de,h),de.forEach(o),V=L(se),D=v(se,"DIV",{class:!0});var ve=m(D);N=B(ve,"🕣 "),O=B(ve,S),ve.forEach(o),se.forEach(o),b.forEach(o),u=L(C),n=v(C,"DIV",{class:!0});var le=m(n);T=v(le,"STRONG",{class:!0,"data-svelte-h":!0}),ee(T)!=="svelte-1jn7qe7"&&(T.textContent=M),q=L(le),P=v(le,"DIV",{class:!0});var _e=m(P);J=qe(_e,!1),_e.forEach(o),le.forEach(o),C.forEach(o),j=L(c),k=v(c,"DIV",{class:!0});var ae=m(k);A=v(ae,"DIV",{class:!0});var ie=m(A);R=v(ie,"DIV",{class:!0});var me=m(R);G=v(me,"STRONG",{class:!0});var ge=m(G);Z=B(ge,i[2]),ge.forEach(o),me.forEach(o),U=L(ie),w=v(ie,"VIDEO",{class:!0,src:!0});var be=m(w);$=v(be,"TRACK",{kind:!0,class:!0}),be.forEach(o),ie.forEach(o),oe=L(ae),z=v(ae,"DIV",{class:!0});var re=m(z);K=v(re,"DIV",{class:!0,"data-svelte-h":!0}),ee(K)!=="svelte-1qyb1c1"&&(K.innerHTML=fe),ce=L(re),X=v(re,"DIV",{class:!0});var Ve=m(X);for(let ue=0;ue<I.length;ue+=1)I[ue].l(Ve);Ve.forEach(o),re.forEach(o),ae.forEach(o),this.h()},h(){l(s,"class","svelte-s4puht"),l(a,"class","svelte-s4puht"),l(D,"class","svelte-s4puht"),l(f,"class","date-time subtitle svelte-s4puht"),l(r,"class","session-header svelte-s4puht"),l(T,"class","svelte-s4puht"),J.a=null,l(P,"class","svelte-s4puht"),l(n,"class","objectives svelte-s4puht"),l(t,"class","detail svelte-s4puht"),l(G,"class","svelte-s4puht"),l(R,"class","svelte-s4puht"),l($,"kind","captions"),l($,"class","svelte-s4puht"),w.controls=!0,l(w,"class","video-player svelte-s4puht"),pe(w.src,te=i[3])||l(w,"src",te),l(A,"class","video-container svelte-s4puht"),l(K,"class","svelte-s4puht"),l(X,"class","playlist svelte-s4puht"),l(z,"class","playlist-container svelte-s4puht"),l(k,"class","media svelte-s4puht")},m(c,C){Q(c,t,C),e(t,r),e(r,s),e(s,y),e(r,E),e(r,f),e(f,a),e(a,p),e(a,_),e(f,V),e(f,D),e(D,N),e(D,O),e(t,u),e(t,n),e(n,T),e(n,q),e(n,P),J.m(W,P),Q(c,j,C),Q(c,k,C),e(k,A),e(A,R),e(R,G),e(G,Z),e(A,U),e(A,w),e(w,$),e(k,oe),e(k,z),e(z,K),e(z,ce),e(z,X);for(let b=0;b<I.length;b+=1)I[b]&&I[b].m(X,null)},p(c,C){if(C&2&&g!==(g=c[1].title+"")&&ne(y,g),C&2&&h!==(h=(ke[c[1].start.split("T")[0]]??c[1].start.split("T")[0])+"")&&ne(_,h),C&2&&S!==(S=c[1].start.split("T")[1].split("+")[0]+" - "+c[1].end.split("T")[1].split("+")[0])&&ne(O,S),C&2&&W!==(W=c[1].objectives.join("")+"")&&J.p(W),C&4&&ne(Z,c[2]),C&8&&!pe(w.src,te=c[3])&&l(w,"src",te),C&120){Y=De(c[4]);let b;for(b=0;b<Y.length;b+=1){const x=Ie(c,Y,b);I[b]?I[b].p(x,C):(I[b]=Le(x),I[b].c(),I[b].m(X,null))}for(;b<I.length;b+=1)I[b].d(1);I.length=Y.length}},d(c){c&&(o(t),o(j),o(k)),Pe(I,c)}}}function Le(i){let t,r,s,g,y,E,f,a,p=i[14].title+"",h,_,V,D,N=i[14].start+"",S,O,u,n='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="svg-icon svelte-s4puht" xmlns="http://www.w3.org/2000/svg"><path d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z" fill="currentColor" class="svelte-s4puht"></path><path d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z" fill="currentColor" class="svelte-s4puht"></path></svg> <div class="svelte-s4puht">Télécharger</div>',T,M,q,P;function J(){return i[7](i[14])}function W(){return i[8](i[14])}return{c(){t=d("div"),r=d("div"),s=d("img"),y=H(),E=d("div"),f=d("div"),a=d("strong"),h=F(p),_=H(),V=d("div"),D=d("span"),S=F(N),O=H(),u=d("button"),u.innerHTML=n,T=H(),this.h()},l(j){t=v(j,"DIV",{class:!0});var k=m(t);r=v(k,"DIV",{class:!0});var A=m(r);s=v(A,"IMG",{class:!0,src:!0,alt:!0}),A.forEach(o),y=L(k),E=v(k,"DIV",{class:!0});var R=m(E);f=v(R,"DIV",{class:!0});var G=m(f);a=v(G,"STRONG",{class:!0});var Z=m(a);h=B(Z,p),Z.forEach(o),G.forEach(o),_=L(R),V=v(R,"DIV",{class:!0});var U=m(V);D=v(U,"SPAN",{class:!0});var w=m(D);S=B(w,N),w.forEach(o),O=L(U),u=v(U,"BUTTON",{type:!0,title:!0,class:!0,"data-svelte-h":!0}),ee(u)!=="svelte-okigmr"&&(u.innerHTML=n),U.forEach(o),R.forEach(o),T=L(k),k.forEach(o),this.h()},h(){l(s,"class","thumbnail svelte-s4puht"),pe(s.src,g=i[14].thumbnail)||l(s,"src",g),l(s,"alt",i[14].title),l(r,"class","thumbnail-container svelte-s4puht"),l(a,"class","svelte-s4puht"),l(f,"class","svelte-s4puht"),l(D,"class","svelte-s4puht"),l(u,"type","button"),l(u,"title","Télécharger"),l(u,"class","btn-download svelte-s4puht"),l(V,"class","subtitle svelte-s4puht"),l(E,"class","video-details svelte-s4puht"),l(t,"class",M="playlist-item "+(i[14].url==i[3]?"selected":"")+" svelte-s4puht")},m(j,k){Q(j,t,k),e(t,r),e(r,s),e(t,y),e(t,E),e(E,f),e(f,a),e(a,h),e(E,_),e(E,V),e(V,D),e(D,S),e(V,O),e(V,u),e(t,T),q||(P=[Te(u,"click",J),Te(t,"click",W)],q=!0)},p(j,k){i=j,k&8&&M!==(M="playlist-item "+(i[14].url==i[3]?"selected":"")+" svelte-s4puht")&&l(t,"class",M)},d(j){j&&o(t),q=!1,Ae(P)}}}function Fe(i){let t,r,s,g,y='<i class="gg-chevron-left svelte-s4puht"></i> Retour',E,f;he.title=t=i[1]?i[1].title:"JFR 2023";let a=i[0]&&Ce(),p=i[1]&&He(i);return{c(){r=H(),s=d("main"),g=d("a"),g.innerHTML=y,E=H(),a&&a.c(),f=H(),p&&p.c(),this.h()},l(h){Ne("svelte-4fbbz6",he.head).forEach(o),r=L(h),s=v(h,"MAIN",{class:!0});var V=m(s);g=v(V,"A",{href:!0,class:!0,"data-svelte-h":!0}),ee(g)!=="svelte-1su23mt"&&(g.innerHTML=y),E=L(V),a&&a.l(V),f=L(V),p&&p.l(V),V.forEach(o),this.h()},h(){l(g,"href",ye+"/"),l(g,"class","one-liner svelte-s4puht"),l(s,"class","svelte-s4puht")},m(h,_){Q(h,r,_),Q(h,s,_),e(s,g),e(s,E),a&&a.m(s,null),e(s,f),p&&p.m(s,null)},p(h,[_]){_&2&&t!==(t=h[1]?h[1].title:"JFR 2023")&&(he.title=t),h[0]?a||(a=Ce(),a.c(),a.m(s,f)):a&&(a.d(1),a=null),h[1]?p?p.p(h,_):(p=He(h),p.c(),p.m(s,null)):p&&(p.d(1),p=null)},i:Ee,o:Ee,d(h){h&&(o(r),o(s)),a&&a.d(),p&&p.d()}}}function Be(i,t,r){let s;Me(i,ze,u=>r(11,s=u));const g=s.url.searchParams;let y;g&&(y=g.get("id"));let E=!0,f,a,p,h,_=[];const V=u=>{var n=new XMLHttpRequest;return n.open("HEAD",u,!1),n.send(),n.status!=404},D=(u,n)=>{r(2,p=u),r(3,h=n)},N=(u,n)=>{const T=document.createElement("a");T.href=n;const M=n.split("."),q="."+M[M.length-1];T.download=Ue(u)+q,T.target="_blank",document.body.appendChild(T),T.click(),document.body.removeChild(T)};return je(async()=>{f=await(await fetch(`${ye}/json/${y}.json`)).json(),r(1,a=f.data.event);for(const n of a.schedule.items)n.vod&&n.vod.media&&n.vod.media.element&&n.vod.media.element.sources&&_.push({title:n.title,url:n.vod.media.element.sources[0].uri,thumbnail:n.vod.media.thumbnail,start:n.start.split("T")[1].split("+")[0]});if(a.picture){const n=a.picture.split("/video/")[0]+"/video/y_1080p_4000kb.mp4";!_.some(M=>M.url===n)&&V(n)&&_.push({title:"[Unlisted Video]",url:n,thumbnail:a.picture,start:a.start.split("T")[1].split("+")[0]})}_.length>0&&(r(2,p=_[0].title),r(3,h=_[0].url)),r(0,E=!1)}),[E,a,p,h,_,D,N,u=>N(u.title,u.url),u=>D(u.title,u.url)]}class We extends Re{constructor(t){super(),Se(this,t,Be,Fe,we,{})}}export{We as component};
