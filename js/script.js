// alert('v01: strona narazie pzystosowana do formatu portrait (pionowy) chociaz jest niezle responsywna (dopasowuje sie do kazdej rozdzielczosci). Czcionka którą zaproponował Patryk jest płatna. Potzebuje czasu by usiąść i ogarnac podstrony + skonsultowac sie z Toba czy forma strony oraz tresc podstron ci pasują. ')


//hamburer script
$(document).ready(function () {

  var animating = false;

  function menuToggle() {
    $(".mobile__page, .mobile__menu, .mobile__light").toggleClass("menu-active");
    $(".js-menuBtn").toggleClass("m--btn");
    $(document).off("click", ".mobile__content", closeNotFocusedMenu);
  };

  function closeNotFocusedMenu(e) {
    if (!$(e.target).closest(".mobile__menu").length) {
      menuToggle();
    }
  };

  $(document).on("click", ".js-menuBtn", function () {
    if (animating) return;
    menuToggle();
    $(document).on("click", ".mobile__content", closeNotFocusedMenu);
  });

  $(document).on("click", ".mobile__menu-item:not(.js-menuBtn)", function () {
    animating = true;
    var $this = $(this);
    var page = +$this.data("page");
    $(".js-menuBtn").removeClass("js-menuBtn");
    $(".mobile__page.active").removeClass("active");
    $this.addClass("js-menuBtn m--btn");
    $(".mobile__page-" + page).addClass("active");
    $(".mobile__page, .mobile__menu, .mobile__light").removeClass("menu-active");
    $(document).off("click", ".mobile__content", closeNotFocusedMenu);
    setTimeout(function () {
      $(".mobile__menu")[0].className = $(".mobile__menu")[0].className.replace(/\bpage-active-.*\b/gi, "");
      $(".mobile__menu").addClass("page-active-" + page);
      animating = false;
    }, 1000);
  });

});

//preloader
const preload = document.querySelector('.preloader');

preload.classList.add('show-preloader');
window.addEventListener('load', () => {
  preload.classList.remove('show-preloader');

  // setTimeout(() => {
  //   preload.classList.remove('show-preloader');
  // }, 2000);
});


//popup 

$(".modal").each(function () {
  $(this).wrap('<div class="overlay"></div>')
});

$(".open-modal").on('click', function (e) {
  e.preventDefault();
  e.stopImmediatePropagation;

  var $this = $(this),
    modal = $($this).data("modal");

  $(modal).parents(".overlay").addClass("open");
  setTimeout(function () {
    $(modal).addClass("open");
  }, 350);

  $(document).on('click', function (e) {
    var target = $(e.target);

    if ($(target).hasClass("overlay")) {
      $(target).find(".modal").each(function () {
        $(this).removeClass("open");
      });
      setTimeout(function () {
        $(target).removeClass("open");
      }, 350);
    }

  });

});

$(".close-modal").on('click', function (e) {
  e.preventDefault();
  e.stopImmediatePropagation;

  var $this = $(this),
    modal = $($this).data("modal");

  $(modal).removeClass("open");
  setTimeout(function () {
    $(modal).parents(".overlay").removeClass("open");
  }, 350);

});


//social
const plus = document.querySelector('.plus');
const fb = document.querySelector('.fb')
const ig = document.querySelector('.ig')
const malpa = document.querySelector('.malpa')
const ph = document.querySelector('.ph');

const social = function (e) {
  e.preventDefault()
  plus.classList.toggle('rotate')
  fb.classList.toggle('rotate')
  ig.classList.toggle('rotate')
  malpa.classList.toggle('rotate')
  ph.classList.toggle('rotate')
}

plus.addEventListener('click', social)

//wskazowski nav
const wskazowki = document.querySelector('.wsk');
const wskShowed = document.querySelector('.wskShowed')
const iks = document.querySelector('.iks')

const showPopNav = function (e) {
  e.preventDefault()
  wskShowed.classList.toggle('showed')

}

wskazowki.addEventListener('click', showPopNav)
iks.addEventListener('click', () => {
  wskShowed.classList.toggle('showed')
})