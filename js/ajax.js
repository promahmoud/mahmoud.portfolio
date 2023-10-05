$(document).on("click", '.open_modal', function (e) {

  //Put the code from above here.  
  // https://stackoverflow.com/questions/25515936/perform-curl-request-in-javascript
  var url = $(this).attr("data-href");
  let project_title = $(this).attr('data-title');
  let data_class_name = $(this).attr('data-classname');
  $('.modal-ajax-content').addClass(data_class_name);

  $.ajax({
    url: url,
    dataType: "html",
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", "Bearer 6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5")
    },
    success: function (data) {
      // alert(data);
      // $(".modal-body").html(data).fadeIn();
      $(".modal-ajax-content").html(data);
      $('.project_title').html(project_title);

      //process the JSON data etc
    }
  });

/***-------------------------------------------------------------------- */
// ------> When modal is open <-------------
/***-------------------------------------------------------------------- */

  $('.modal').on('shown.bs.modal', function () {
    // slider works
    // $('.art-app-wrapper').addClass('modalBlur'); 

    var modal_swiper = new Swiper(`.${data_class_name} .modal-works-slider`, {
      slidesPerView: 3,
      spaceBetween: 30,
      observer: true,
      observeParents: true,
      speed: 1600,
      autoplay: {
        delay: 4000,
      },
      autoplaySpeed: 5000,
      pagination: {
        el: ".swiper-pagination-modal",
        clickable: true,
      },
      navigation: {
        nextEl: ".art-works-swiper-next-modal",
        prevEl: ".art-works-swiper-prev-modal",
      },
      breakpoints: {
        1500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1,
        },
      },


    },modal_swiper);
    console.log(`${modal_swiper} swiper looded`);

    
    // pause swiper slide when hove on -->
    $(`.${data_class_name} .modal-works-slider`).hover(function () {
      modal_swiper.autoplay.stop();
      // console.log('slider stopped');
    }, function () {
      modal_swiper.autoplay.start();
      // console.log('slider started again');
    });
    // https://stackoverflow.com/questions/47238245/stop-swiper-slide-autoplay-on-mouse-enter-and-start-autoplay-on-mouse-leave


  });

  /***-------------------------------------------------------------------- */
// ------> When modal is close <-------------
/***-------------------------------------------------------------------- */
  //Remove modal
  $('.modal').on('hide.bs.modal', function (e) {
    // to remove blur 
    // $('.art-app-wrapper').removeClass('modalBlur');
    $('.modal-ajax-content').removeClass(data_class_name);

    $('body').removeClass('modal-open');
  });


});








