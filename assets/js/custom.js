
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      //    console.log(window.scrollY,window.scrollX)
      if (window.scrollY > 50) {
        document.querySelector(".main-topnav").classList.add("fixedTop");
        // add padding top to show content behind navbar
        // navbar_height = document.querySelector('.navbar').offsetHeight;
        // document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.querySelector(".main-topnav").classList.remove("fixedTop");
        // remove padding top from body
        // document.body.style.paddingTop = '0';
      }
    });
  });

$( document ).ready(function() {

    if($('.InHome').length ){
        $('.homeBanner').addClass('homeClass')
     }
    $(".navbar-light .dmenu").hover(
        function () {
          $(this).find(".sm-menu").first().stop(true, true).slideDown(150);
        },
        function () {
          $(this).find(".sm-menu").first().stop(true, true).slideUp(105);
        }
      );

    let arrow = [
        '<img src="../assets/images/shared/slider-right-arrow.svg" />',
        '<img src="../assets/images/shared/slider-left-arrow.svg" />',
      ]
      $('.owl-carousel-centerIn').owlCarousel({
        loop:false,
        margin:24,
        nav:true,
        rtl: true,
        navText: arrow,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1100:{
                items:3
            },
            1300:{
                items:4
            }
        }
    })
    // end owl center

    $('.owl-carousel-partners').owlCarousel({
        loop:false,
        margin:24,
        nav:true,
        dots:false,
        rtl: true,
        navText: arrow,
        autoplay:false,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            // 600:{
            //     items:3
            // },
            1000:{
                items:3
            },
            1400:{
                items:4
            }
        }
    })
    // end ready
    $('.owl-carousel-banner').owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        rtl: true,
        items:1,
    })


    $('.owl-carousel-fields').owlCarousel({
      margin:60,
      nav:true,
      dots:true,
      rtl: true,
      navText: arrow,
      // center:true,
      startPosition:2,
      // stagePadding:183,
      stagePadding:170,
      responsive:{
          0:{
              items:2
          },
          // 600:{
          //     items:3
          // },
          1000:{
              items:3
          },
          1400:{
              items:1
          }
      }
  })









    // end ready






    AOS.init({
        duration: 1000,
    });



});

// contrastMode
$(".top-functions .colors").on("click", function (e) {
    console.log("colors");
    $("html").toggleClass("contrast");
    e.stopPropagation();
   
  });


    /* --- Font sizing Function --- */
    $('.top-functions .increase').click(function(){
        console.log("increase");
        modifyFontSize('html','increase');
      });
      $('.top-functions .decrease').click(function(){
        console.log("dec");
        modifyFontSize('html','decrease')
      });

        /*----Font sizing Function ---*/
  function modifyFontSize(MyElement,flag){

    var HtmlElement = $(MyElement);
    var currentFontSize = parseInt (HtmlElement.css('font-size'));
    
    if (flag =='increase' & currentFontSize < 19 )
        currentFontSize += 1;
    else if (flag == 'decrease' & currentFontSize >= 16 )
        currentFontSize -= 1;
    else if (flag == 'reset')
    currentFontSize = 16;

    HtmlElement.css('font-size', currentFontSize);

    // console.log(currentFontSize);

  }





  $(".topNav .slide-nav").on("click", function (e) {
    console.log("slideeeeeeeee");
    $(".bannerBg").toggleClass("slide-me");
    e.stopPropagation();
   
  });