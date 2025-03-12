$(document).ready(function () {
  // Custom JS by SSDC
  var addToCart = $("#purchase");
  if (addToCart.hasClass("preordered")) {
    $("#purchase").text("PREORDER");
  }
  addToCart.on("click", function () {
    if (addToCart.hasClass("preordered")) {
      setTimeout(function () {
        $("#purchase").text("PREORDER");
      }, 800);
    }
  });
  $(".wetheme-dropdown__wrapper li").on("click", function () {
    if (addToCart.hasClass("preordered")) {
      $("#purchase").text("PREORDER");
    }
  });
  
  // Custom JS by TAMDEV

  $('#purchase').click(function (e) {
    $('#main-body').toggleClass('submitted-cart');
  })
  $('.cart-close-icon').click(function (e) {
    $('#main-body').removeClass('submitted-cart');
  })
  $('.slide-menu-cart').click(function (e) {
    $('#main-body').toggleClass('submitted-cart');
  })
  $('.slide-menu-mobile').click(function (e) {
    $('#main-body').toggleClass('open-menu-drawer');
  })
  $('.mobile-menu-close').click(function (e) {
    $('#main-body').removeClass('open-menu-drawer');
  })
  
  window.onscroll = function () {
    scrollHeader();
  };
  
  var header = document.getElementById("shopify-section-header");
  
  function scrollHeader() {
    if (window.pageYOffset > 30) {
      header.classList.add("has-sticky");
    } else {
      header.classList.remove("has-sticky");
    }
  }

  const leftSlideshow = $('.left-slideshow')
  const rightSlideshow = $('.right-slideshow')
  const productImage = $('.product-slider')
  const alternateSliderBanner = $('.alternate-slider-banner')

  // force replace comma to dot in price
  // function forceDot() {
  //   let formatMoney = $('.money');
  //   formatMoney.text().replace(/,/g, '.')
  // }
  // $(document).ready(function () {
  //   setTimeout(function () {
  //       let pricena = $('#price-field .money.conversion-bear-money').text();
  //       pricena = pricena.replace(/,/g, '.'); // Use the result of the replace method
  //       $('.money.conversion-bear-money').text(pricena)
  //       console.log(pricena)
  //   }, 5000);
  // });
  // $(window).on('load', function () {
  //   setTimeout(function () {
  //       let pricena = $('#price-field .money.conversion-bear-money').text();
  //       pricena = pricena.replace(/,/g, '.'); // Use the result of the replace method
  //       $('.money.conversion-bear-money').text(pricena)
  //       console.log(pricena)
  //   }, 5000);
  // })
  
  if (leftSlideshow.length) {
    leftSlideshow.owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      items: 1,
      nav: true,
      autoplay: true,
      autoplayTimeout: $('#left_slideshow_speed').val(),
      autoHeight: true,
      navText: [
          "<div class='nav-btn prev-slide'></div>",
          "<div class='nav-btn next-slide'></div>",
      ]
    })
  }

  $('.footer-grid-slide.hide-desktop').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
    nav: false,
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    autoHeight: true,
    navText: [
        "<div class='nav-btn prev-slide'></div>",
        "<div class='nav-btn next-slide'></div>",
    ]
  })

  if (rightSlideshow.length) {
    rightSlideshow.owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      items: 1,
      nav: true,
      autoplay: true,
      autoHeight: true,
      autoplayTimeout: $('#right_slideshow_speed').val(),
      navText: [
          "<div class='nav-btn prev-slide'></div>",
          "<div class='nav-btn next-slide'></div>",
      ]
    })
  }

  if (alternateSliderBanner.length) {
    alternateSliderBanner.owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      nav: true,
      navText: [
          "<div class='nav-btn prev-slide'></div>",
          "<div class='nav-btn next-slide'></div>",
      ]
    })
  }

  if (productImage.length) {
    productImage.owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      items: 1,
      nav: true,
      dots: true,
      autoHeight: true,
      navText: [
          "<div class='nav-btn prev-slide'></div>",
          "<div class='nav-btn next-slide'></div>",
      ]
    })
  }

  let sidebarNav = $('.nav-canvas-item');
  sidebarNav.click(function (event) {
    let dataNav = $(this).attr('data-nav');
    if ($(this).attr('aria-opened') == 'false'){
      $(this).attr('aria-opened', 'true');
      $('body').addClass('nav-canvas-active');
      $(`.nav-for-${dataNav}`).show()
    } else if ($(this).attr('aria-opened') == 'true') {
      $('body').removeClass('nav-canvas-active');
      $(this).attr('aria-opened', 'false');
      $('html').css('overflow-x', 'hidden');
      setTimeout(() => {
        $('html').css('overflow-x', '');
      }, 1000);
      $(`.nav-for-${dataNav}`).hide()
    }
  })

  const slideOverlay = $('#slideout-overlay')
  slideOverlay.click(function (event){
    console.log(event)
    $('body').removeClass('nav-canvas-active');
    sidebarNav.attr('aria-opened', 'false');
    $('html').css('overflow-x', 'hidden');
    setTimeout(() => {
      $('html').css('overflow-x', '');
    }, 1000);
    $('.nav-subnav').hide()
  })

  const sidenavMobile = $('.mobile-menu-sub');
  sidenavMobile.click(function (event) {
    if ($(this).attr('aria-canvas-open') == 'false'){
      // Close previously open menu
        $('.mobile-menu-sub[aria-canvas-open="true"]').attr('aria-canvas-open', 'false');
        $('body').removeClass('nav-canvas-active');
        $('.close-canvas').hide();
        $('.menu-close-icon').show();
        $('.mobile-menu-off-canvas').hide()
        
        // Open the clicked menu
        $(this).attr('aria-canvas-open', 'true');
        $('body').addClass('nav-canvas-active');
        $('.close-canvas').show();
        $('.menu-close-icon').hide();
        $(`.nav-menu-off-canvas-for-${$(this).attr('data-menu')}`).show();
    }
    event.stopPropagation();
  })

  const closeSideNav = $('.close-canvas');
  closeSideNav.click(function (event) {
    event.preventDefault();
    $('body').removeClass('nav-canvas-active');
    sidenavMobile.attr('aria-canvas-open', 'false');
    $('.mobile-menu-off-canvas').hide();
    $('.close-canvas').hide()
    $('.menu-close-icon').show()
  })

  var acc = document.getElementsByClassName("site-nav-accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(e) {
      e.preventDefault();
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = 300 + "px";
      }
    });
  }

});