import{a as S,S as b,i as s}from"./assets/vendor-BaxowRp9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();async function u(n,o){return(await S.get("https://pixabay.com/api/",{params:{key:"56410922-8c14f1efbc474126a654fcfe4",q:`${n}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:15}})).data}const f=document.querySelector(".gallery");let q=new b(".gallery a");const m=document.querySelector(".loader"),p=document.querySelector(".load-more");function h(n){const o=n.map(e=>`<a href="${e.largeImageURL}" class="gallery-link"
          ><img
            src="${e.webformatURL}"
            alt="${e.tags}"
            title=""
          />
          <div class="image-info">
            <div>
              <span>Likes</span>
              <p>${e.likes}</p>
            </div>
            <div>
              <span>Views</span>
              <p>${e.views}</p>
            </div>
            <div>
              <span>Comments</span>
              <p>${e.comments}</p>
            </div>
            <div>
              <span>Downloads</span>
              <p>${e.downloads}</p>
            </div>
          </div>
        </a>`);f.insertAdjacentHTML("beforeend",o.join("")),q.refresh()}function M(){f.innerHTML=""}function y(){m.classList.remove("hidden")}function l(){m.classList.add("hidden")}function B(){p.classList.remove("hidden")}function g(){p.classList.add("hidden")}const L=document.querySelector(".form"),P=L.querySelector('[name="search-text"]'),$=document.querySelector(".load-more");L.addEventListener("submit",O);let a=1,v=1;const E=15;let i="";async function O(n){if(a=1,g(),n.preventDefault(),M(),y(),i=P.value.trim(),i){let o=[];try{const e=await u(i,a);if(e.totalHits===0||e.hits.length===0){s.error({message:"There are not Images"});return}v=Math.ceil(e.totalHits/E),o=e.hits,h(o),w()}catch{s.error({message:"Something went wrong with request"})}finally{l()}}else l(),s.error({message:"Please input some word"})}$.addEventListener("click",x);async function x(){y();try{w();const n=await u(i,a);h(n.hits)}catch{s.error({message:"Something went wrong with request"})}finally{l()}}function w(){if(v<=a)g(),s.error({message:"We're sorry, but you've reached the end of search results."});else{B(),a++;const o=document.querySelector(".gallery-link").getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
