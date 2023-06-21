// jquery
$(function() {
  // ページャー
  $('.items-fl').paginathing({
    perPage: 24,
    prevText: '<i class="fas fa-angle-left"></i>',
    nextText: '<i class="fas fa-angle-right"></i>',
    activeClass: 'navi-active',
  });

});

// アコーディオン

// slideUp
const slideUp = (el, duration = 300) => {
  el.style.height = el.offsetHeight + "px";
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  setTimeout(() => {
    el.style.display = "none";
    el.style.removeProperty("height");
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
};

// slideDown
const slideDown = (el, duration = 300) => {
  el.style.removeProperty("display");
  let display = window.getComputedStyle(el).display;
  if (display === "none") {
    display = "block";
  }
  el.style.display = display;
  let height = el.offsetHeight;
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.height = height + "px";
  el.style.removeProperty("padding-top");
  el.style.removeProperty("padding-bottom");
  el.style.removeProperty("margin-top");
  el.style.removeProperty("margin-bottom");
  setTimeout(() => {
    el.style.removeProperty("height");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
};

// slideToggle
const slideToggle = (el, duration = 300) => {
  if (window.getComputedStyle(el).display === "none") {
    return slideDown(el, duration);
  } else {
    return slideUp(el, duration);
  }
};

//.search-formのDOM取得
const form = document.querySelector('.search-form');

// .search-area-btnのDOM取得
const slideToggleBtn = document.querySelector(".search-area-btn");

// UIのDOM取得
const slideToggleBtnUi = document.querySelector(".search-area-btn-ui");

// 追記
//
const lineupNavBtn = document.querySelector(".line-up");

//
const lineupNavBtnImg = document.querySelector(".line-up-arrow");

//
const lineupNav = document.querySelector(".line-up-nav");

//
const header = document.querySelector(".site-header");


// アコーディオン実行
slideToggleBtn.addEventListener("click", () => {
  slideToggle(form, 300);
  slideToggleBtnUi.classList.toggle('is-active');
});

//headerのアコーディオン
if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {

lineupNavBtn.addEventListener("mouseenter", () => {
  slideDown(lineupNav, 300);
  lineupNavBtnImg.classList.add('is-active');
  header.classList.add('is-active');
});

lineupNavBtn.addEventListener("mouseleave", () => {
  slideUp(lineupNav, 300);
  lineupNavBtnImg.classList.remove('is-active');
  header.classList.remove('is-active');
});

}
//SP時無効

// searchformのリセットボタン
function searchFormReset() {
  document.searchform.reset();
}

// ハンバーガー
const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.menu');

ham.addEventListener('click', function () {

  ham.classList.toggle('active-menu');
  nav.classList.toggle('active-menu');

});
