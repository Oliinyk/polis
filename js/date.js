// this one uses classes
$(function() {
  $('body').on('focus', ".from, .to", function() {
      $('.from,.to').datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          dateFormat: 'dd.mm.yy',
          numberOfMonths: 2,
          onClose: function(selectedDate) {
              if ($(this).hasClass('from')){
               var theOtherDate = $(this).closest('label').next('label').find('.to');
               $(theOtherDate).datepicker("option", "minDate", selectedDate);
              } else {
               var theOtherDate = $(this).closest('label').prev('label').find('.from');
              $(theOtherDate).datepicker("option", "maxDate", selectedDate);	
              }
              //$(this).valid();// for validate plugin
          }
      });
   })
});

( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.uk = {
	closeText: "Закрити",
	prevText: "&#x3C;",
	nextText: "&#x3E;",
	currentText: "Сьогодні",
	monthNames: [ "Січень","Лютий","Березень","Квітень","Травень","Червень",
	"Липень","Серпень","Вересень","Жовтень","Листопад","Грудень" ],
	monthNamesShort: [ "Січ","Лют","Бер","Кві","Тра","Чер",
	"Лип","Сер","Вер","Жов","Лис","Гру" ],
	dayNames: [ "неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота" ],
	dayNamesShort: [ "нед","пнд","вів","срд","чтв","птн","сбт" ],
	dayNamesMin: [ "Нд","Пн","Вт","Ср","Чт","Пт","Сб" ],
	weekHeader: "Тиж",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.uk );

return datepicker.regional.uk;

} ) );


$(function() {
	$(".dateOfBirth").datepicker();
});

//this is the baic version with ids
// $(function() {
//   $("#from").datepicker({
//       defaultDate: "+1w",
//       changeMonth: true,
//       dateFormat: 'dd.mm.yy',
//       numberOfMonths: 2,
//       onClose: function(selectedDate) {
//           $("#to").datepicker("option", "minDate", selectedDate);
         
//       }
//   });
//   $("#to").datepicker({
//       defaultDate: "+1w",
//       changeMonth: true,
//       dateFormat: 'dd.mm.yy',
//       numberOfMonths: 2,
//       onClose: function(selectedDate) {
//           $("#from").datepicker("option", "maxDate", selectedDate);
          
//       }
//   });
// });

// $(function() {
// var formNameIncrement = 0;
// var formNameValue = 0;
//   $("body").on("click", ".add", function(e) {
//       var mytarget = $(this).closest('.clonable').find('.clone:last');
//       var myparent = $(this).closest('.clonable');
//       var theCloneHtml = '<div class="clone" id="cloneID' + formNameIncrement + '">';
//       var theCloneId = 'cloneID' + formNameIncrement;
//       myparent.addClass('data-added');
//       mytarget.after($(theCloneHtml).append('<div class="input-row"><label class="ib"> <span class="label"> Date 2 :From</span><input class="from inp" type="text" name="datefrom[]"></label><label class="ib"> <span class="label"> Date 2 : To </span><input class="to inp" type="text" name="dateto[]" ></label></div>'));
//       $(theCloneId).hide().fadeIn('slow');
//       formNameIncrement++;
//       e.preventDefault();
//   });

// // when delete  is clicked
//   $("body").on("click", ".delete", function(e) {
//       var mynum = $(this).closest('.clonable').find('.clone').length;
//       var mytarget = $(this).closest('.clonable').find('.clone:last');
//       var myparent = $(this).closest('.clonable');
//       if (mynum === 2) {
//           myparent.removeClass('data-added')
//       }
//       mytarget.fadeOut();
//       mytarget.remove();
//       e.preventDefault();

//   });
// });