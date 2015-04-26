



$(document).ready(function(){

	$("div").on("click", ".button", function(){
		console.log("hi!");
		var numSelected = $(this).attr("value"));
		console.log(numSelected);

	});


});