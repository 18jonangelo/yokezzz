// if(scroll_start > offset.top) {
//       $(".navbar-fixed-top").addClass("fixednav");
//   } else {
//       $('.navbar-fixed-top').removeClass("fixednav");
//   }


//
// $(window).scroll(function () {
// if ($(window).scrollTop() >= 50) {
// $('.navbar').css('background','white');
// } else {
// $('.navbar').css('background','transparent');
// }
// });
//
// function checkScroll(){
//     var startY = $('.navbar').height() * 2; //The point where the navbar changes in px
//
//     if($(window).scrollTop() > startY){
//         $('.navbar').addClass("scrolled");
//     }else{
//         $('.navbar').removeClass("scrolled");
//     }
// }
//
// if($('.navbar').length > 0){
//     $(window).on("scroll load resize", function(){
//         checkScroll();
//     });
// }
//
// $(window).scroll(function(){
// 	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
// });



$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".navbar").css("background" , "blue");
	  }

	  else{
		  $(".navbar").css("background" , "#333");  	
	  }
  })
})
