$(document).ready(function(){
	$(".pacman").hide();
	$(".heart").hide();

	$(".circle").click(function(){
		$(".circle").hide();
		$(".pacman").show();
	});
	$(".pacman").click(function() {
		$(".heart").show();
		var left = $(window).width() - $('.heart').width();
		$(".heart").css({
 			left: 0
		}).animate({
    		left: left
    	}, "slow",);
    });
var button_elem = document.getElementById("switch");

button_elem.onclick = function(event){
console.log("you clicked me!");
if (document.body.classList.contains("night")) {
			document.body.classList.remove("night");
			document.body.classList.add("day");
		} else {
			document.body.classList.remove("day");
			document.body.classList.add("night");
		}
}
});