function reback(){var e=$(".appshow_outer"),t=$(".appArea_c"),s=t[0].offsetHeight,i=$(".appshow_inner");for(supi=0;supi<e.length;supi++){if(e[supi].flg1){var n=$(".cross_imgend");t[supi].style.top="0px",supi+1!=e.length&&(t[supi].style.top="0px",e[supi+1].style.marginTop=parseInt(e[supi+1].style.marginTop.replace("px"))-s+"px"),supi!=i.length-1&&(i[supi+1].style.borderTop=" 1px solid #e9e9e9"),e[supi].flg1=!1,n[0].className="cross_img"}flg2=!1}}window.onload=function(){function e(){}new appTouch({tContain:"appArea_c",tMove:"moveArea1",tMove2:"moveArea_c"},e)};var appTouch=function(e,t){this.touchContain=e.tContain,this.touchMove=e.tMove,this.touchMove2=e.tMove2,this.callbackfn=t,this.move()};appTouch.prototype={move:function(){function e(e,t,s){e.addEventListener?e.addEventListener(t,s,!1):e.attachEvent?e.attachEvent("on"+t,s):e["on"+t]=s}function t(e){e.preventDefault&&e.preventDefault(),e.returnValue=!1}function s(e){var s=this.index;y=d[s][1];for(var i=0;i<d.length;i++)i!=s&&(d[i][1].style.left=0);t(e),m=!0,e.touches&&(e=e.touches[0]),v=e.clientX,g=y.style.left,H=v,M=(new Date).getTime(),D=!0}function n(e){if(m){t(e),e.touches&&(e=e.touches[0]),x=e.clientX-v;var s=g.replace("px","");y.style.left=x+parseInt(s)+"px",(parseInt(y.style.left.replace("px",""))>0||parseInt(y.style.left.replace("px",""))<_)&&(y.style.left=.5*x+parseInt(s)+"px");var i=(new Date).getTime();D=!0,i-M>300&&(M=i,H=e.clientx)}}function l(e){function s(){l>0&&x>0?(y.style.left=left-1+"px",l--):l>0&&0>x?(y.style.left=parseInt(y.style.left.replace("px",""))+1+"px",l--):clearInterval(a)}function i(){l>0?(m&&clearInterval(a),y.style.left=parseInt(y.style.left.replace("px",""))-5+"px",l-=5):(clearInterval(a),I=0)}function n(){l>0?(m&&clearInterval(a),y.style.left=parseInt(y.style.left.replace("px",""))+2+"px",l-=2):(clearInterval(a),I=0)}if(t(e),_=0-(y.offsetWidth-T),e.touches&&(e=e.touches[0]),m=!1,y.flg=!1,parseInt(y.style.left.replace("px",""))>0?I=1:parseInt(y.style.left.replace("px",""))<_&&(I=2),Math.abs(x)<50&&!I)var l=Math.abs(parseInt(y.style.left.replace("px",""))-parseInt(g.replace("px",""))),a=setInterval(s,20);else if(1==I)var l=parseInt(y.style.left.replace("px","")),a=setInterval(i,1);else if(2==I)var l=Math.abs(parseInt(y.style.left.replace("px",""))-_),a=setInterval(n,1);x=0}function a(e){function t(){l>0?(A[n].style.top=parseInt(A[n].style.top.replace("px"))+5+"px",n+1!=N.length&&(N[n+1].style.marginTop=C+5+"px"),C+=5,l-=5):(l=A[0].offsetHeight,C=0,clearInterval(o),N[n].flg1=!0,flg2=!1)}function s(){l>0?(A[n].style.top=parseInt(A[n].style.top.replace("px"))-2+"px",n+1!=N.length&&(N[n+1].style.marginTop=parseInt(N[n+1].style.marginTop.replace("px"))-5+"px"),l-=5):(l=A[0].offsetHeight,C=0,clearInterval(a),N[n].flg1=!1,flg2=!1,A[n].style.top="0px",n!=W.length-1&&(W[n+1].style.borderTop=" 1px solid #e9e9e9"))}var i=e.offsetTop-(A[0].offsetHeight-N[0].offsetHeight),n=e.index,l=A[0].offsetHeight;if(e.flg1){L[n].className="cross_img";var a=setInterval(s,1);STime=FTime,n!=W.length-1&&(W[n+1].style.borderTop="1px solid #e9e9e9"),A[n].style.zIndex="1"}else{A[n].style.top=i-5+"px",L[n].className="cross_imgend";var o=setInterval(t,1);n!=W.length-1&&(W[n+1].style.borderTop="1px solid #d3d3d3"),STime=FTime,A[n].style.zIndex="1"}}function e(e,t,s){e.addEventListener?e.addEventListener(t,s,!1):e.attachEvent?e.attachEvent("on"+t,s):e["on"+t]=s}function t(e){e.preventDefault&&e.preventDefault(),e.returnValue=!1}function o(e){startY=e.touches[0].clientY}function p(e){b=e.touches[0].clientY-startY}function r(e){if(0==b&&(FTime=(new Date).getTime(),t(e),Math.abs(STime-FTime)>800)){var s=A[0].offsetHeight,i=this.index;for(supi=0;supi<N.length;supi++)N[supi].flg1&&supi!=i&&(console.log(supi+"=="+i),A[supi].style.top="0px",supi+1!=N.length&&(A[supi].style.top="0px",N[supi+1].style.marginTop=parseInt(N[supi+1].style.marginTop.replace("px"))-s+"px"),supi!=W.length-1&&(W[supi+1].style.borderTop=" 1px solid #e9e9e9"),N[supi].flg1=!1,L[supi].className="cross_img"),flg2=!1;a(this)}b=0}function c(e){var t=e.index,s=document.body.clientHeight;z[t].src=X+t+".jpg",F[0].style.visibility="visible",Y[t].style.visibility="visible",Y[t].style.marginTop=.09*s+(.91*s-Y[t].offsetHeight)/2+"px",Y[t].style.zIndex="200";var i=Y[t].offsetTop,n=Y[t].offsetLeft;k[0].style.visibility="visible",k[0].style.marginLeft=n+Y[t].offsetWidth-k[0].offsetWidth/2+"px",k[0].style.marginTop=i-k[0].offsetHeight/2+"px",loc=t}function f(){F[0].style.visibility="hidden",Y[loc].style.visibility="hidden",k[0].style.visibility="hidden"}function u(e){S=(new Date).getTime(),ssl=e.clientX}function h(){var e=(new Date).getTime(),t=e-S;1500>=t&&0==x&&c(this)}for(var v,g,y=(document.getElementById(this.touchContain),document.getElementById(this.touchMove)),d=(this.callbackfn,[]),m=!1,x=0,I=0,T=document.body.offsetWidth,b=(y.offsetWidth,0),_=0-(y.offsetWidth-T),w=$(".moveArea_c"),E=0;E<w.length;E++)E&&(w[E].style.width=T+"px");for(function(e,t){for(var s=document.getElementsByTagName("div"),i=0,n=0,l=0;l<s.length;l++)if(s[l].className==e){var a=[];s[l].index=i++,a.push(s[l]);for(var o=s[l].getElementsByTagName("div"),p=0;p<o.length;p++)o[p].className==t&&(o[p].index=n++),a.push(o[p]);d.push(a)}}(this.touchContain,this.touchMove2),i=0;i<d.length;i++)e(d[i][0],"touchstart",s),e(d[i][0],"touchmove",n),e(d[i][0],"touchend",l);var M=0,H=0,D=!1,N=$(".appshow_outer"),A=$(".appArea_c"),L=$(".cross_img"),W=$(".appshow_inner"),C=0;flg2=!0,STime=0,timera=0,function(){for(var t=0;t<N.length;t++)e(N[t],"touchstart",o),e(N[t],"touchmove",p),e(N[t],"touchend",r),N[t].index=t,N[t].flg1=!1}();for(var B=$(".app_image"),F=$(".overspread"),S=0,Y=$(".picture"),k=$(".picture_close"),z=$(".appshow_picture"),X="./img/appshow/",V=0;V<B.length;V++)e(B[V],"touchstart",u),e(B[V],"touchend",h),B[V].index=V;e(F[0],"touchstart",f),e(k[0],"touchstart",f);for(var j=0;j<z.length;j++)e(z[j],"touchstart",f)}};