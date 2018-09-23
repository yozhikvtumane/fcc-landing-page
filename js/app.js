document.addEventListener("DOMContentLoaded", function() {
	var x = document.getElementById('header').clientHeight;
	console.log(x + "px");
	document.body.style.marginTop = x + "px";

	window.onresize = function() {
		var x = document.getElementById('header').clientHeight;
		console.log(x + "px");
		document.body.style.marginTop = x + "px";
	}
});