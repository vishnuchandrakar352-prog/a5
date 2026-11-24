(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var nw=$('tk-now');if(nw){var t=function(){var d=new Date();nw.textContent=[d.getHours(),d.getMinutes(),d.getSeconds()].map(function(x){return String(x).padStart(2,'0');}).join(':');};t();setInterval(t,1000);}
var bb=[].slice.call(document.querySelectorAll('#bt-s button'));function bt(v){var b=v/3600;bb.forEach(function(x){var on=+x.dataset.v===v;x.classList.toggle('on',on);x.setAttribute('aria-pressed',on);});
 $('bt-b').textContent=b;$('bt-m').textContent=Math.round(1000/b)+' ms';$('bt-d').textContent=(v*24).toLocaleString();$('bt-hz').textContent=(b/2)+' Hz';$('bt-ps').textContent=b+' ticks / second';
 var h=$('bt-h');h.style.animation='none';void h.getBoundingClientRect();h.style.animation='tkstep 60s steps('+(b*60)+') infinite';
 $('bt-n').textContent=v===18000?'A classic, slower beat found in many vintage watches. The seconds hand visibly stutters.':v===21600?'A common modern beat: robust, efficient and long-lasting.':v===28800?'The most popular beat today: a smooth sweep with good stability.':'A high beat: the smoothest sweep, but parts wear a little faster and need more power.';}
if(bb.length){bb.forEach(function(x){x.addEventListener('click',function(){bt(+x.dataset.v);});});bt(28800);}
var mt=0;function dr(){var s=+$('dr-s').value,d=+$('dr-d').value,r=s/d;var rs=(r>0?'+':'')+(Math.abs(r)<1?r.toFixed(2):r.toFixed(1));$('dr-sv').textContent=(s>0?'+':'')+s;$('dr-dv').textContent=d;$('dr-r').textContent=rs;
 var p=Math.max(-30,Math.min(30,r));$('dr-p').style.left=((p+30)/60*100)+'%';$('dr-mo').textContent=(r*30>0?'+':'')+Math.round(r*30)+' s';var y=r*365;$('dr-y').textContent=(y>0?'+':'')+(Math.abs(y)>=60?(y/60).toFixed(1)+' min':Math.round(y)+' s');
 var a=Math.abs(r),v;if(mt){v=a<=.5?'Excellent for quartz: well within typical tolerances.':a<=1?'Normal for quartz.':'Fast or slow for quartz. The battery may be low, or it may need a check.';}
 else{v=(r>=-4&&r<=6)?'Chronometer-level: within the common −4 to +6 s/day standard.':a<=15?'Good for a mechanical watch. Most run within ±15 s/day.':a<=30?'Running outside normal range. A watchmaker can regulate it.':'Well off. It may be magnetised or due for a service.';}$('dr-v').textContent=v;}
if($('dr-s')){$('dr-s').addEventListener('input',dr);$('dr-d').addEventListener('input',dr);var mb=[].slice.call(document.querySelectorAll('#dr-m button'));mb.forEach(function(x){x.setAttribute('aria-pressed',x.classList.contains('on'));x.addEventListener('click',function(){mt=+x.dataset.v;mb.forEach(function(o){o.classList.toggle('on',o===x);o.setAttribute('aria-pressed',o===x);});dr();});});dr();}
})();
