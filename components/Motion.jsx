'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import site from '../site.config'

// All page motion: hero canvas, GSAP reveals, Lenis smooth scroll, cursor, menu, form.
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    var dead = false
    var offs = []
    var RAF = function (cb) { return dead ? 0 : requestAnimationFrame(cb) }
    var LST = function (e, f, o) { addEventListener(e, f, o); offs.push(function () { removeEventListener(e, f, o) }) };

(function(){
var $=function(s){return document.querySelector(s)},A=function(s){return [].slice.call(document.querySelectorAll(s))};

window.__clk=setInterval(function(){($('#clk')||{}).textContent='Nagpur '+new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit'})},1000);
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var FINE=matchMedia('(pointer:fine)').matches,LOW=(navigator.hardwareConcurrency||4)<=4,calm=rm||(function(){try{return localStorage.getItem('mo')==='off'}catch(e){return false}})(),prog=0,hv=true,mx=innerWidth/2,my=innerHeight/2,lm=0,intro=-9,lastT=0,t0=performance.now();
var hero=$('#hero'),hc=$('#ht'),hx=hc.getContext('2d'),him=$('#ph'),cells=[],HW=0,HH=0,hdw=1,hox=0;
function hreplay(){intro=calm?-9:(performance.now()-t0)/1000}
function hbuild(){if(!him.naturalWidth)return;
var d=Math.min(devicePixelRatio||1,2);HW=hero.clientWidth;HH=hero.clientHeight;hc.width=HW*d;hc.height=HH*d;hx.setTransform(d,0,0,d,0,0);
var G=(HW<600?3.6:5)+(LOW?1.2:0),mob=HW<800,ih=mob?HW*him.naturalHeight/him.naturalWidth:Math.min(HH*.8,HW*1.1),iw=ih*him.naturalWidth/him.naturalHeight;hox=(HW-iw)/2;hdw=iw;
var oy=mob?HH*.115:HH*.085,cols=Math.ceil(iw/G),rows=Math.ceil(ih/G),oc=document.createElement('canvas');oc.width=cols;oc.height=rows;him.style.left=hox+'px';him.style.top=oy+'px';him.style.width=iw+'px';him.style.height=ih+'px';
var o2=oc.getContext('2d');o2.drawImage(him,0,0,cols,rows);var q=o2.getImageData(0,0,cols,rows).data;cells=[];
for(var r=0;r<rows;r++)for(var c=0;c<cols;c++){var i=(r*cols+c)*4,L=(q[i]*.3+q[i+1]*.59+q[i+2]*.11)/255,AL=q[i+3]/255,nx=c/cols-.5,ny=r/rows-.5,m=Math.max(0,1-Math.pow(Math.hypot(nx*1.3,ny*1.05),2.3)*.45),rad=G*.8*Math.pow(Math.min(1,Math.max(0,(L-.1)/.55)),.85)*m*(AL>.5?1:0);
if(rad<.3)continue;cells.push({x:hox+c*G+G/2,y:oy+r*G+G/2,r:Math.min(rad,G*.6),d:Math.random(),s:Math.random()})}}
function hdraw(now){RAF(hdraw);if(!hv||document.hidden||!cells.length)return;
if(!calm)lastT=(now-t0)/1000;var t=lastT,hr=hc.getBoundingClientRect(),px=mx,py=my;
if(now-lm>2500||!FINE){px=hr.left+HW/2+Math.sin(t*.7)*HW*.16;py=hr.top+HH*.32+Math.cos(t*.9)*HH*.1}
var R=calm?0:(HW<600?90:130),cx2=px-hr.left,cy2=py-hr.top,beam=-9;hx.clearRect(0,0,HW,HH);var A1=new Path2D(),A2=new Path2D(),A3=new Path2D(),te=t-intro,ga=1-Math.min(1,Math.max(0,(te-1.3)/1.1)),pe=Math.min(1,Math.max(0,(te-1.1)/1.2));if(him.__pe!==pe){him.__pe=pe;him.style.opacity=pe}
for(var i=0;i<cells.length;i++){var c=cells[i],e=(t-intro-c.d)/.9;if(e<=0)continue;if(e>1)e=1;e=1-Math.pow(1-e,3);
var dx=c.x-cx2,dy=c.y-cy2,dd=Math.sqrt(dx*dx+dy*dy),nr=dd<R?1-dd/R:0,bm=Math.max(0,1-Math.abs((c.x-hox)/hdw-beam)*8),w=calm?0:Math.sin(t*1.7+c.x*.02+c.y*.014)*.16,
rr=c.r*e*(1+w+nr*.12)*1;if(rr<.25||(ga<.02&&nr<=0&&bm<.3))continue;var y=c.y,x=c.x+(dd>1?dx/dd*nr*7:0),P=nr>.8?A2:(nr>0?A3:A1);P.moveTo(x+rr,y);P.arc(x,y,rr,0,6.283)}
hx.fillStyle='rgba(242,238,230,'+(.88*ga)+')';hx.fill(A1);hx.fillStyle='rgba(242,238,230,.55)';hx.fill(A3);hx.fillStyle='rgba(255,150,105,.6)';hx.fill(A2)}
RAF(hdraw);(him.decode?him.decode():Promise.resolve()).then(hbuild,hbuild);
LST('resize',function(){clearTimeout(window.__rt);window.__rt=setTimeout(hbuild,150)});
LST('pointermove',function(e){mx=e.clientX;my=e.clientY;lm=performance.now()});
function setM(){var b=$('#mt');b.textContent=calm?'Motion · Off':'Motion · On';b.setAttribute('aria-pressed',calm);document.documentElement.classList.toggle('calm',calm)}setM();$('#mt').onclick=function(){calm=!calm;try{localStorage.setItem('mo',calm?'off':'on')}catch(e){}setM()};
$('#lbi').src=$('#cert img').src;
var mn=$('#mn'),lbx=$('#lb');mn.inert=true;
function frz(o){document.body.style.overflow=o?'hidden':'';if(window.__L){o?window.__L.stop():window.__L.start()}}
function T(o){mn.classList.toggle('on',o);mn.inert=!o;$('#mb').setAttribute('aria-expanded',o);frz(o)}
function LB(o){lbx.classList.toggle('on',o);frz(o)}
$('#mb').onclick=function(){T(!mn.classList.contains('on'))};$('#mx').onclick=function(){T(false)};
$('#cert').onclick=function(){LB(true)};lbx.onclick=function(){LB(false)};
LST('keydown',function(e){if(e.key==='Escape'){T(false);LB(false)}});
A('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var id=a.getAttribute('href');if(id!=='#top'&&!$(id))return;e.preventDefault();T(false);setTimeout(function(){var t=id==='#top'?0:$(id);if(window.__L)window.__L.scrollTo(t);else if(t===0)scrollTo({top:0,behavior:'smooth'});else t.scrollIntoView({behavior:'smooth'})},id==='#top'?0:400)})});
var tb=A('.tbn'),tp=A('.tpn');tb.forEach(function(b,i){b.onclick=function(){tb.forEach(function(x,j){x.classList.toggle('on',i===j);x.setAttribute('aria-selected',i===j)});tp.forEach(function(p,j){p.hidden=i!==j})}});
if(!rm){var dc=$('#dust'),dx=dc.getContext('2d'),DP=[],DW,DH;function rz(){DW=dc.width=dc.offsetWidth;DH=dc.height=dc.offsetHeight}rz();LST('resize',rz);for(var q=0;q<(LOW?28:60);q++)DP.push({x:Math.random(),y:Math.random(),r:Math.random()*1.4+.3,s:Math.random()*.0004+.0001,a:Math.random()*.6+.2});
(function f(){RAF(f);if(!hv||calm||document.hidden)return;dx.clearRect(0,0,DW,DH);DP.forEach(function(p){p.y-=p.s;if(p.y<0)p.y=1;dx.fillStyle='rgba(255,200,170,'+p.a*(.5+.5*Math.sin(p.y*20+p.x*9))+')';dx.beginPath();dx.arc(p.x*DW,p.y*DH,p.r,0,6.3);dx.fill()})})()}
var CFG={endpoint:'/api/contact',linkedin:site.linkedin};
var cf=$('#cf'),fs=$('#fs');
function er(el,m){el.parentNode.querySelector('.er').textContent=m||'';el.setAttribute('aria-invalid',m?'true':'false');return !m}
cf.addEventListener('submit',function(e){e.preventDefault();if($('#fw').value)return;var n=$('#fn'),em=$('#fe'),m=$('#fm');
var ok=er(n,n.value.trim().length<2?'Please enter your name':'');
ok=er(em,/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em.value.trim())?'':'Enter a valid email')&&ok;
ok=er(m,m.value.trim().length<10?'Message needs at least 10 characters':'')&&ok;
if(!ok){fs.textContent='';return}
var d={name:n.value.trim(),email:em.value.trim(),message:m.value.trim()};
var fb=function(){var t='Name: '+d.name+'\nEmail: '+d.email+'\n\n'+d.message;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){fs.textContent='Message copied. Paste it into the LinkedIn chat that just opened.'},function(){fs.textContent='Opening LinkedIn. Please paste your message there.'});window.open(CFG.linkedin,'_blank','noopener');cf.reset()};
fs.textContent='Sending…';fetch(CFG.endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)}).then(function(r){if(r.status===501){fb();return}if(!r.ok)throw 0;fs.textContent='Thank you, your message was sent.';cf.reset()}).catch(function(){fs.textContent='Could not send. Please try LinkedIn or Instagram.'})});
function show(){A('.rv').forEach(function(x){x.style.opacity=1;x.style.transform='none';x.style.filter='none'});A('.hero h1 i').forEach(function(x){x.style.transform='none'});A('#stt span').forEach(function(x){x.style.opacity=1});var p=$('#pre');if(p)p.remove()}
if(typeof gsap==='undefined'||rm){show();return}
gsap.registerPlugin(ScrollTrigger);
var st=$('#stt');st.innerHTML=st.textContent.split(' ').map(function(w){return '<span>'+w+'</span>'}).join(' ');
var L;if(typeof Lenis!=='undefined'){L=new Lenis({lerp:.08});window.__L=L;L.on('scroll',ScrollTrigger.update);var tk2=function(t){L.raf(t*1000)};gsap.ticker.add(tk2);offs.push(function(){gsap.ticker.remove(tk2)});gsap.ticker.lagSmoothing(0)}
gsap.to('#bar',{scaleX:1,ease:'none',scrollTrigger:{scrub:.3,start:0,end:'max'}});
var dot=$('#cd'),ring=$('#cr'),cx=0,cy=0,rx=0,ry=0;
LST('pointermove',function(e){cx=e.clientX;cy=e.clientY;gsap.set(dot,{x:cx,y:cy});mx=e.clientX;my=e.clientY});
gsap.ticker.add(function(){rx+=(cx-rx)*.16;ry+=(cy-ry)*.16;gsap.set(ring,{x:rx,y:ry})});
A('a,button').forEach(function(a){a.addEventListener('mouseenter',function(){gsap.to(ring,{scale:1.7,duration:.4})});a.addEventListener('mouseleave',function(){gsap.to(ring,{scale:1,duration:.4})})});
A('.cd').forEach(function(a){a.addEventListener('mouseenter',function(){ring.textContent='VIEW';gsap.to(ring,{scale:2,background:'#ff8a5b',duration:.4})});a.addEventListener('mouseleave',function(){ring.textContent='';gsap.to(ring,{scale:1,background:'transparent',duration:.4})})});
A('.mg').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.3,y:(e.clientY-r.top-r.height/2)*.4,duration:.4})});b.addEventListener('pointerleave',function(){gsap.to(b,{x:0,y:0,duration:.7,ease:'elastic.out(1,.4)'})})});
var pc=$('#pc'),o={v:0};intro=9e9;
function heroIn(){gsap.fromTo('.hero h1 i',{yPercent:105,y:0},{yPercent:0,y:0,duration:1.3,ease:'expo.out',stagger:.14,overwrite:true});gsap.fromTo('.hi,.hp,.hb a,.hov,.hside,.hfoot',{opacity:0,y:16},{opacity:1,y:0,duration:1,stagger:.08,ease:'power3.out',delay:.3,overwrite:true})}
var SEEN=false;try{SEEN=sessionStorage.getItem('pf')==='1';sessionStorage.setItem('pf','1')}catch(e){}var tl=gsap.timeline();
tl.to(o,{v:100,duration:SEEN?.01:.9,ease:'power2.inOut',onUpdate:function(){pc.textContent=Math.round(o.v)}})
.to('#pre',{yPercent:-100,duration:SEEN?.01:.7,ease:'expo.inOut',onComplete:function(){$('#pre').remove()}})
.add(function(){hreplay();heroIn()},SEEN?'>':'-=.5');
ScrollTrigger.create({trigger:'#hero',start:'top top',end:'bottom top',onUpdate:function(s){prog=s.progress},onToggle:function(s){hv=s.isActive}});
A('.rv').forEach(function(e){gsap.to(e,{opacity:1,y:0,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:e,start:'top 92%',once:true}})});
var vel=0,xx=0;if(L)L.on('scroll',function(e){vel=e.velocity});
gsap.ticker.add(function(){if(!calm)xx-=.6+Math.abs(vel)*.25;var w=$('#mq').scrollWidth/2;gsap.set('#mq',{x:xx%w})});
gsap.to('#stt span',{opacity:1,stagger:.1,ease:'none',scrollTrigger:{trigger:'#stt',start:'top 80%',end:'bottom 45%',scrub:true}});
gsap.fromTo('#ph2',{yPercent:-6},{yPercent:6,ease:'none',scrollTrigger:{trigger:'.ap',scrub:true}});
A('[data-n]').forEach(function(e){var n=+e.dataset.n,c={v:0};ScrollTrigger.create({trigger:e,start:'top 92%',once:true,onEnter:function(){gsap.to(c,{v:n,duration:1.6,ease:'power2.out',onUpdate:function(){e.textContent=(n%1?c.v.toFixed(1):Math.round(c.v))+e.dataset.s}})}})});
ScrollTrigger.matchMedia({'(min-width:801px)':function(){var tk=$('#tk');gsap.to(tk,{x:function(){return -(tk.scrollWidth-innerWidth)},ease:'none',scrollTrigger:{trigger:'#work',pin:true,scrub:1,end:function(){return '+='+tk.scrollWidth},invalidateOnRefresh:true}})}});
gsap.to('#tu',{scaleY:1,ease:'none',scrollTrigger:{trigger:'#tm',start:'top 70%',end:'bottom 70%',scrub:true}});
A('.sv').forEach(function(e){e.style.borderTopColor='transparent';gsap.fromTo(e,{borderTopColor:'rgba(255,255,255,0)'},{borderTopColor:'rgba(255,255,255,.09)',duration:1.4,scrollTrigger:{trigger:e,start:'top 90%'}})});
var navHid=false;ScrollTrigger.create({onUpdate:function(s){var h=s.direction===1&&scrollY>200;if(h!==navHid){navHid=h;gsap.to('#nv',{yPercent:h?-160:0,duration:.5,overwrite:true})}}});
gsap.from('.big',{yPercent:60,opacity:0,duration:1.4,ease:'expo.out',scrollTrigger:{trigger:'footer',start:'top 95%',once:true}});
var ld=function(){ScrollTrigger.refresh()};if(document.readyState==='complete')ld();else LST('load',ld);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(ld);
})();

    return function () {
      dead = true
      offs.forEach(function (f) { f() })
      clearInterval(window.__clk)
      clearTimeout(window.__rt)
      ScrollTrigger.getAll().forEach(function (t) { t.kill() })
      if (window.__L) { window.__L.destroy(); window.__L = null }
    }
  }, [])
  return null
}
