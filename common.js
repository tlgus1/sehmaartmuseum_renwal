let menu = ['01/<br>새로운 미술의 <br>변종과 변이', '02/<br>KB 열린박물관<br>미술관지원사업', '03/<br>꽃보다 당신:<br>문화가 있는 날']
let mySwiper = new Swiper('.swiper-container', {
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop:true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + '</span>';
    },
  },
})

// swiper sec2 

var swiper = new Swiper(".mySwiper.sec2", {
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
  pagination: {
    el: ".pag2",
  },
  loop: true
});

// swiper sec5

var swiper = new Swiper(".mySwiper.sec5", {
  slidesPerView: 2.5,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop:true,
  navigation: {
    nextEl: ".next5",
    prevEl: ".prev5",
  },
});


// tab menu

$(function(){
  $('.sec6_tab li').click(function(){

    $('.sec6_tab li').removeClass('on');
    $('.sec6_noti').removeClass('on')

    $(this).addClass('on')
    $("#"+$(this).data('id')).addClass('on');
  })
})



let menu2 = ['01/', '02/', '03/']
let mySwiper2 = new Swiper('.swiper-container.mo', {
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop:true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination.mo',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu2[index]) + '</span>';
    },
  },
})

$(function(){
  $('.fa-solid fa-bars').click(function(){
    $('.toggle').fadetoggle()
  })
})