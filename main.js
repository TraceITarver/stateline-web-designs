document.getElementById('y').textContent=new Date().getFullYear();
const m=document.querySelector('.menu'),n=document.getElementById('links');
m.onclick=()=>{const o=n.classList.toggle('open');m.setAttribute('aria-expanded',o)};
n.querySelectorAll('a').forEach(a=>a.onclick=()=>n.classList.remove('open'));
const EMAIL='[your email]';
document.getElementById('f').onsubmit=e=>{e.preventDefault();const d=new FormData(e.target);
if(EMAIL.startsWith('[')){document.getElementById('st').textContent='Thanks! (Demo form — contact email not set up yet.)';return}
location.href=`mailto:${EMAIL}?subject=${encodeURIComponent('Quote request from '+d.get('name'))}&body=${encodeURIComponent(d.get('msg')+'\n\nReply to: '+d.get('email'))}`};
