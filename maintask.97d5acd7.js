!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequirea610;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequirea610=r);var o=r("bpxeT"),i=r("2TvXO"),s=r("5IjG7"),c=r("h6c0i"),l=r("dWsfZ"),d=document.getElementById("search-form"),u=document.querySelector("input"),f=document.querySelector(".gallery"),p=document.querySelector(".load-more"),g=new(0,l.default),m=new(e(s))(".gallery a");function h(){return y.apply(this,arguments)}function y(){return(y=e(o)(e(i).mark((function t(){var n,a,r,o,s,l;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.getImages();case 3:n=e.sent,a=n.data.hits,r=Math.ceil(n.data.totalHits/g.perPage),0===n.data.totalHits&&c.Notify.failure("Sorry, there are no images matching your search query. Please try again."),1===g.page&&0!==n.data.totalHits&&(p.classList.remove("is-hidden"),c.Notify.info("Hooray! We found ".concat(n.data.totalHits," images."))),g.page===r&&(p.classList.add("is-hidden"),c.Notify.warning("We're sorry, but you've reached the end of search results.")),0!==n.data.totalHits&&(o=a.map((function(e){return'\n                <div class="photo-card">\n                      <a href="'.concat(e.largeImageURL,'">\n                          <img src="').concat(e.webformatURL,'" alt="').concat(e.tags,'" loading="lazy"/>\n                      </a>\n                      <div class="info">\n                           <p class="info-item"><b>Likes</b>').concat(e.likes,'</p>\n                           <p class="info-item"><b>Views</b>').concat(e.views,'</p>\n                           <p class="info-item"><b>Comments</b>').concat(e.comments,'</p>\n                           <p class="info-item"><b>Downloads</b>').concat(e.downloads,"</p>\n                      </div>\n                </div>")})),f.insertAdjacentHTML("beforeend",o.join("")),1!==g.page&&(s=document.querySelector(".gallery").firstElementChild.getBoundingClientRect(),l=s.height,window.scrollBy({top:2*l,behavior:"smooth"})),g.nextPage(),m.refresh()),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}d.addEventListener("submit",(function(e){e.preventDefault();var t=u.value.trim();if(""===t)return;p.classList.add("is-hidden"),f.innerHTML="",g.resetPage(),g.searchQuery=t,h()})),p.classList.add("is-hidden"),p.addEventListener("click",h)}();
//# sourceMappingURL=maintask.97d5acd7.js.map
