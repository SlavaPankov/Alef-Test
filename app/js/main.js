(()=>{var e={936:()=>{var e=document.querySelector(".products__add-btn"),t=document.querySelector(".products__favorite"),n=document.querySelector(".top-content__heading").textContent;function o(e,t,n){var o,c;return o='\n    <div class="modal">\n      Товар "'.concat(e,'"\n      в количестве ').concat(t," единиц(ы) добавлен в ").concat(n,"\n    </div>\n  "),(c=document.createElement("template")).innerHTML=o.trim(),c.content.firstChild}document.addEventListener("click",(function(c){var r=document.querySelector(".products__count").value;if(c.target===e){var l=o(n,r,"корзину");document.querySelector("body").append(l),setTimeout((function(){l.style.opacity=0}),1500),setTimeout((function(){l.remove()}),1800)}if(c.target===t){var u=o(n,r,"избранное");document.querySelector(".products__favorite-icon").classList.toggle("fill-white"),document.querySelector("body").append(u),setTimeout((function(){u.style.opacity=0}),1500),setTimeout((function(){u.remove()}),1800)}})),e.addEventListener("click",(function(){}))},524:()=>{!function(){var e,t,n,o,c,r=null===(e=document)||void 0===e?void 0:e.querySelectorAll(".burger"),l=null===(t=document)||void 0===t?void 0:t.querySelector(".burger-nav"),u=null===(n=document)||void 0===n?void 0:n.querySelectorAll(".burger-close"),i=null===(o=document)||void 0===o?void 0:o.querySelector(".header-bottom"),a=null===(c=document)||void 0===c?void 0:c.querySelectorAll(".burger__line"),s=document.querySelector(".nav--320"),d=document.querySelector(".nav__cross--320");r.forEach((function(e){null==e||e.addEventListener("click",(function(e){null==l||l.classList.toggle("menu-active"),null==s||s.classList.toggle("open--320"),a.forEach((function(e){e.classList.toggle("line-red")}))})),null==e||e.addEventListener("keydown",(function(e){13===e.which&&(null==l||l.classList.toggle("menu-active"),a.forEach((function(e){e.classList.toggle("line-red")})))}))})),u.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),null==l||l.classList.remove("menu-active"),null==s||s.classList.remove("open--320"),a.forEach((function(e){e.classList.toggle("line-red")}))}))})),null==d||d.addEventListener("click",(function(){null==s||s.classList.remove("open--320"),a.forEach((function(e){e.classList.toggle("line-red")}))}));var v=pageYOffset;document.addEventListener("scroll",(function(e){v<pageYOffset?(i.classList.add("hide"),v=pageYOffset):(i.classList.remove("hide"),v=pageYOffset),0===pageYOffset&&(i.classList.remove("hide"),v=pageYOffset)}))}()},941:()=>{var e,t,n,o=null===(e=document)||void 0===e?void 0:e.querySelectorAll(".top-content__picture"),c=null===(t=document)||void 0===t?void 0:t.querySelectorAll(".top-content__small");null===(n=document)||void 0===n||n.querySelectorAll(".top-content__item"),c.forEach((function(e){e.addEventListener("click",(function(){o.forEach((function(t){t.classList.remove("picture-acitve"),t.dataset.target===e.dataset.path&&t.classList.add("picture-acitve")}))}))}))},365:()=>{var e=document.querySelector(".products__btn-plus"),t=document.querySelector(".products__btn-minus"),n=document.querySelector(".products__count");e.addEventListener("click",(function(){var e=+n.value;e++,n.setAttribute("value",e),n.value=e})),t.addEventListener("click",(function(){if(+n.value<=1)n.value=1;else{var e=+n.value;e--,n.value=e}}))},817:()=>{var e=document.querySelector(".form"),t=document.querySelector(".form__input"),n=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,o=document.querySelector(".form__cross");e.addEventListener("submit",(function(o){o.preventDefault();var c,r=t.value;!1===n.test(r)?(t.before(((c=document.createElement("template")).innerHTML='\n    <div class="error-msg">\n      Введите корректный e-mail\n    </div>\n  '.trim(),c.content.firstChild)),t.classList.add("error")):e.submit()})),e.addEventListener("input",(function(){var e=t.value;!0===n.test(e)&&(document.querySelector(".error-msg").remove(),t.classList.remove("error"))})),o.addEventListener("click",(function(){t.value=""}))}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{"use strict";n(524),n(941),n(365),n(936),n(817)})()})();