import{a as w,S,i as c}from"./assets/vendor-BaxowRp9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function u(n,o){return(await w.get("https://pixabay.com/api/",{params:{key:"56410922-8c14f1efbc474126a654fcfe4",q:`${n}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:15}})).data}const f=document.querySelector(".gallery");let b=new S(".gallery a");const p=document.querySelector(".loader"),m=document.querySelector(".load-more");function h(n){const o=n.map(t=>`<a href="${t.largeImageURL}" class="gallery-link"
          ><img
            src="${t.webformatURL}"
            alt="${t.tags}"
            title=""
          />
          <div class="image-info">
            <div>
              <span>Likes</span>
              <p>${t.likes}</p>
            </div>
            <div>
              <span>Views</span>
              <p>${t.views}</p>
            </div>
            <div>
              <span>Comments</span>
              <p>${t.comments}</p>
            </div>
            <div>
              <span>Downloads</span>
              <p>${t.downloads}</p>
            </div>
          </div>
        </a>`);f.insertAdjacentHTML("beforeend",o.join("")),b.refresh()}function q(){f.innerHTML=""}function y(){p.classList.remove("hidden")}function l(){p.classList.add("hidden")}function B(){m.classList.remove("hidden")}function M(){m.classList.add("hidden")}const g=document.querySelector(".form"),P=g.querySelector('[name="search-text"]'),$=document.querySelector(".load-more");g.addEventListener("submit",O);let s=1,L=1;const E=15;let a="";function O(n){if(s=1,n.preventDefault(),q(),y(),a=P.value.trim(),a){let o=[];u(a,s).then(t=>{L=t.totalHits/E,o=t.hits,h(o)}).catch(t=>{c.error({message:"Something went wrong with request"})}).finally(()=>{l(),v()})}else l(),c.error({message:"Please input some word"})}$.addEventListener("click",x);function x(){y(),u(a,s).then(n=>{h(n.hits),v()}),l()}function v(){if(L<=s)M(),c.error({message:"We're sorry, but you've reached the end of search results."});else{B(),s++;const o=document.querySelector(".gallery-link").getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
