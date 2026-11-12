/* v0.3: no-page-change quick tools and stable studio context */
(function(){
const studio=document.getElementById('studio');if(!studio)return;
const toolbar=studio.querySelector('.toolbar');
const bar=document.createElement('div');bar.className='jj-quickbar';bar.setAttribute('aria-label','工作台快捷工具');
const caption=document.createElement('span');caption.className='jj-caption';caption.textContent='快速工具';bar.append(caption);
const tools=[['sources','來源管理'],['audio','AudioDesk'],['broadcast','播出設定'],['ecostream','EcoStream']];
const backdrop=document.createElement('div');backdrop.className='jj-drawer-backdrop';backdrop.hidden=true;
const drawer=document.createElement('aside');drawer.className='jj-drawer';drawer.hidden=true;drawer.setAttribute('role','dialog');drawer.setAttribute('aria-modal','true');drawer.setAttribute('aria-label','工作台工具');
const head=document.createElement('div');head.className='jj-drawer-head';
const title=document.createElement('h2');const close=document.createElement('button');close.className='jj-close';close.textContent='關閉 ✕';close.setAttribute('aria-label','關閉工具面板');head.append(title,close);
const desc=document.createElement('p');desc.textContent='保留直播工作台與節目狀態；此面板僅供 UI 模擬操作。';
const inner=document.createElement('div');inner.className='jj-inner';drawer.append(head,desc,inner);document.body.append(backdrop,drawer);
let origin=null,active=null;
function hide(){if(drawer.hidden)return;drawer.hidden=true;backdrop.hidden=true;inner.replaceChildren();document.body.style.removeProperty('overflow');bar.querySelectorAll('button').forEach(x=>x.setAttribute('aria-expanded','false'));active=null;if(origin&&origin.isConnected)origin.focus();}
function show(id,button){if(active===id){hide();return}active=id;origin=button;title.textContent=tools.find(x=>x[0]===id)[1];inner.replaceChildren();const original=document.getElementById(id);if(!original)return;
const clone=original.cloneNode(true);clone.removeAttribute('id');clone.classList.add('active');clone.style.display='block';
clone.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));
clone.querySelectorAll('button').forEach(el=>{el.disabled=true;el.title='請前往完整工作區操作';});
clone.querySelectorAll('input,select').forEach(el=>{el.disabled=true;});
inner.append(clone);
const open=document.createElement('button');open.className='jj-close';open.textContent='開啟完整'+title.textContent+'頁面';open.addEventListener('click',()=>{hide();const target=document.querySelector('#nav [data-page="'+id+'"]');target?.click();});inner.append(open);
drawer.hidden=false;backdrop.hidden=false;document.body.style.overflow='hidden';bar.querySelectorAll('button').forEach(x=>x.setAttribute('aria-expanded',String(x===button)));close.focus();
}
tools.forEach(([id,label])=>{const b=document.createElement('button');b.type='button';b.textContent=label;b.setAttribute('aria-expanded','false');b.addEventListener('click',()=>show(id,b));bar.append(b)});
if(toolbar)toolbar.insertAdjacentElement('afterend',bar);else studio.prepend(bar);
close.addEventListener('click',hide);backdrop.addEventListener('click',hide);
document.addEventListener('keydown',e=>{if(e.key==='Escape')hide()});
document.querySelectorAll('#nav [data-page]').forEach(b=>b.addEventListener('click',hide));
const status=document.createElement('div');status.className='jj-pinned-status';status.innerHTML='<span class="jj-onair">● DEMO / 非真實直播</span><span>PGM <strong id="jj-pgm-label">CAM 01</strong></span><span>25s 安全緩衝：<strong>規劃中</strong></span>';
bar.insertAdjacentElement('beforebegin',status);
const pgm=document.getElementById('programTitle');if(pgm){new MutationObserver(()=>{document.getElementById('jj-pgm-label').textContent=pgm.textContent}).observe(pgm,{childList:true,characterData:true,subtree:true});document.getElementById('jj-pgm-label').textContent=pgm.textContent}
})();
