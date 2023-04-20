$(function () {

  $('.wrapper .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
    $('.wrapper .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  $('.tab1').on('click', function () {
    $('.intro').removeClass('active');
    $('.intro2').addClass('active');
    $('.intro3').addClass('active');
    $('.intro').removeClass('h_active');
    // $('.intro').removeClass('b_active');
  });
  $('.tab2').on('click', function () {
    $('.intro2').removeClass('active');
    $('.intro').addClass('active');
    $('.intro3').addClass('active');
    $('.intro').removeClass('h_active');
    // $('.intro').removeClass('b_active');
  });
  $('.tab3').on('click', function () {
    $('.intro3').removeClass('active');
    $('.intro2').addClass('active');
    $('.intro').addClass('active');
    $('.intro').removeClass('h_active');
    // $('.intro').removeClass('b_active');
  });
  $('.tab4').on('click', function () {
    $('.intro').addClass('h_active');
    // $('body').addClass('b_active');
  });
  $('.tab5').on('click', function () {
    $('.intro').addClass('h_active');
    // $('body').addClass('b_active');
  });
  $('.tab6').on('click', function () {
    $('.intro').addClass('h_active');
    // $('body').addClass('b_active');
  });
  $('.tab7').on('click', function () {
    $('.intro').addClass('h_active');
    // $('body').addClass('b_active');
  });

  $('.search--right__item').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.search--right__items').find('.search--right__item').removeClass('active');
    $(this).addClass('active');
    return false;
  });

  $('.rashet__choice-item').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.rashet__choice-items').find('.rashet__choice-item').removeClass('active');
    $(this).addClass('active');
    return false;
  });

  $('.total__filter button').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.total__filter').find('button').removeClass('active');
    $(this).addClass('active');
    return false;
  });

  $('.total__choice-btn').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.total__choice-btns').find('.total__choice-btn').removeClass('active');
    $(this).addClass('active');
    return false;
  });

  $('#switch').click(function () {
    $("#switch").toggleClass("checkLight");
  });
  $('#switch1').click(function () {
    $("#switch1").toggleClass("checkLight");
  });
  $('#switch2').click(function () {
    $("#switch2").toggleClass("checkLight");
  });
  $('#switch3').click(function () {
    $("#switch3").toggleClass("checkLight");
  });

  if($('select').length) {
    $('select').styler();
  }
  

  $(".accordion-item__line").click(function () {
    var container = $(this).parents(".accordion-list__item");
    var answer = container.find(".accordion-item");
    answer.toggleClass("accordion-item--opened");
  });




  // var $classLoop = $('.tab'),
  //   i = 0;
  // setInterval(function () {
  //   $classLoop.removeClass('active').filter($classLoop[i]).toggleClass('active');
  //   i < $classLoop.length - 1 ? i++ : i = 0;
  // }, 2000);

 
  // Modal Call
  $('body').on('click', '.callBtnJs', function() {
    $('body').find('.modalBgJs').addClass('active');
    $('body').find('.modalWrapJs').addClass('active');
    $('body').find('.modalCallJs').removeClass('hidden');
    $('body').find('.modalThxJs').removeClass('active');
  });
  
  // close modal
  $(document).mouseup(function (e){
    var modalCallJs = $(".modalCallJs");
    if (!modalCallJs.is(e.target) && modalCallJs.has(e.target).length === 0) {
      $('body').find('.modalBgJs').removeClass('active');
      $('body').find('.modalWrapJs').removeClass('active');
    }
  });

  $('body').on('focus', '.modalWrapJs input', function() {
    if($(this).val().length < 4){
      $(this).val('+380');
    }
  });

  // modalBtnJs
  $('body').on('click', '.modalBtnJs', function() {
    var value = $(this).val();
    if($('.modalWrapJs input').val().length > 12){
      $(".modalCallJs").removeClass('error');
      $('body').find('.modalCallJs').addClass('hidden');
      $('body').find('.modalThxJs').addClass('active');
    } else {
      $(".modalCallJs").addClass('error');
      return false;
    }
  });

  // Modal filter
  $('body').on('click', '.filterBtnJs', function(){
    $('body').find('.modalBgFilterJs').addClass('active');
    $('body').find('.filterModalWrapJs').addClass('active');
  });
  // close filter modal
  $(document).mouseup(function (e){
    var filterModalJs = $(".filterModalJs");
    if (!filterModalJs.is(e.target) && filterModalJs.has(e.target).length === 0) {
      $('body').find('.modalBgFilterJs').removeClass('active');
      $('body').find('.filterModalWrapJs').removeClass('active');
    }
  });

  // Modal edit
  $('body').on('click', '.editBtnJs', function(){
    $('body').find('.modalBgEditJs').addClass('active');
    $('body').find('.editModalWrapJs').addClass('active');
  });
  // close edit modal
  $(document).mouseup(function (e){
    var editModalJs = $(".editModalJs");
    if (!editModalJs.is(e.target) && editModalJs.has(e.target).length === 0) {
      $('body').find('.modalBgEditJs').removeClass('active');
      $('body').find('.editModalWrapJs').removeClass('active');
    }
  });
  $('body').on('click', '.closeBtnJs', function(){
    $('body').find('.modal-bg').removeClass('active');
    $('body').find('.modal-wrap').removeClass('active');
  });

  // Modal buy
  $('body').on('click', '.buyBtnJs', function(){
    $('body').find('.modalBgBuyJs').addClass('active');
    $('body').find('.buyModalWrapJs').addClass('active');
  });
  // close buy modal
  $(document).mouseup(function (e){
    var buyModalJs = $(".buyModalJs");
    if (!buyModalJs.is(e.target) && buyModalJs.has(e.target).length === 0) {
      $('body').find('.modalBgBuyJs').removeClass('active');
      $('body').find('.buyModalWrapJs').removeClass('active');
    }
  });

  // better price modal
  $('body').on('click', '.betterBtnJs', function(){
    $('body').find('.modalBgBetterJs').addClass('active');
    $('body').find('.betterModalWrapJs').addClass('active');
  });
  // close better price modal
  $(document).mouseup(function (e){
    var betterModalJs = $(".betterModalJs");
    if (!betterModalJs.is(e.target) && betterModalJs.has(e.target).length === 0) {
      $('body').find('.modalBgBetterJs').removeClass('active');
      $('body').find('.betterModalWrapJs').removeClass('active');
    }
  });
  
  // tabs
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.registration__tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});

function slowScroll(id) {
  var offset = 0;
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 1200);
  return false;
}

$('.reviews__items').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        // centerMode: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        // centerMode: true,
      }
    }
  ]
});


// var no_active_delay = 3; // Количество секунд простоя мыши, при котором пользователь считается неактивным
// var now_no_active = 0; // Текущее количество секунд простоя мыши
// setInterval("now_no_active++;", 1000); // Каждую секунду увеличиваем количество секунд простоя мыши
// setInterval("updateChat()", 1000); // Запускаем функцию updateChat() через определённый интервал
// document.onmousemove = activeUser; // Ставим обработчик на движение курсора мыши
// function activeUser() {
//   now_no_active = 0; // Обнуляем счётчик простоя секунд
// }
// function updateChat() {
//   if (now_no_active >= no_active_delay) { // Проверяем не превышен ли "предел активности" пользователя
//     // alert("Пользователь не активен"); // В реальности стоит убрать, а здесь дано как доказательство того, что всё работает




//     return;
//   }

// }



