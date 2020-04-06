var clock_elem = document.getElementById("clock");
var dow_elem = document.getElementById("dow");
var dom_elem = document.getElementById("dom");

function displayTime() {

	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var dow = currentTime.getDay();
	var dom = currentTime.getDate();
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	var meridiem = "AM";
	if (hours > 12) {
		hours = hours - 12;
		meridiem = "PM";
	}
	if (hours == 0) {
		hours = 12;
	}
	
	if (dow == 1) {
		dow = "MONDAY";
	}

	if (dom == 6) {
		dom = "April 06,2020";
	}

	var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;

	clock_elem.innerText = timeString;
	dow_elem.innerText = dow;
	dom_elem.innerText = dom;
}
displayTime();
setInterval(displayTime, 1000);