$(document).ready(function(){


$(".img-container").mouseenter(function(){
	$(this).find(".img-content").show();

});



$(".img-container").mouseleave(function(){
	$(this).find(".img-content").hide(800);


});

$(".i1 img-container").wrap($("<a>").attr("href", "test.html"));



});


