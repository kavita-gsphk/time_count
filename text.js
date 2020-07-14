var countDate = new Date("July 20,2020 00:00:00").getTime();
function date() {
	var now = new Date().getTime();
	var gap = countDate - now;
	var second = 1000;
	var minute = second * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var d = Math.floor(gap / day);
	var h = Math.floor((gap % day) / hour);
	var m = Math.floor((gap % hour) / minute);
	var s = Math.floor((gap % minute) / second);
	document.getElementById("day").innerHTML = d;
	document.getElementById("hour").innerHTML = h;
	document.getElementById("minute").innerHTML = m;
	document.getElementById("second").innerHTML = s;
}
setInterval(function () {
	date();
}, 1000);
