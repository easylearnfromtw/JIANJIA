
/* v0.2: addressable multi-view navigation. Preserve existing demo controls. */
(function(){
const names={studio:'直播工作台',sources:'設備與來源',audio:'音訊控制',broadcast:'播出與錄製',ecostream:'EcoStream 節能',newsroom:'新聞編輯室'};
const buttons=[...document.querySelectorAll('#nav [data-page]')];
function route(page,push){
if(!names[page])page='studio';
document.querySelectorAll('section.page').forEach(el=>{el.classList.toggle('active',el.id===page);el.hidden=el.id!==page;});
buttons.forEach(el=>{const active=el.dataset.page===page;el.classList.toggle('active',active);el.setAttribute('aria-current',active?'page':'false');});
const title=document.getElementById('heading');if(title)title.textContent=names[page];
document.title=names[page]+' · JIANJIA';
if(push&&location.hash!=='#/'+page)history.pushState({page},'', '#/'+page);
window.scrollTo({top:0,behavior:'instant'});
}
buttons.forEach(btn=>{btn.setAttribute('aria-label',btn.querySelector('span')?.textContent||btn.dataset.page);btn.addEventListener('click',()=>route(btn.dataset.page,true));});
document.querySelectorAll('[data-goto]').forEach(btn=>btn.addEventListener('click',()=>route(btn.dataset.goto,true)));
window.addEventListener('hashchange',()=>route(location.hash.replace(/^#\/?/,''),false));
window.addEventListener('popstate',()=>route(location.hash.replace(/^#\/?/,''),false));
route(location.hash.replace(/^#\/?/,''),false);
})();
