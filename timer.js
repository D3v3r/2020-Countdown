﻿var start = new Date(Date.UTC(2018,11,31,15)),
	end = new Date(Date.UTC(2019,11,31,15)),
	now = new Date(); // get current date

// time
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function percentage(){
	now = new Date(); // get current date
	var _percentage = (( ( now - start ) / ( end - start ) ) * 100)
	if( _percentage < 100 )
		document.getElementById('percentage').innerHTML = _percentage.toFixed(10) + "%";
	//100% 달성시
	else
		document.getElementById('percentage').innerHTML =  "100%";
}

timer = setInterval(percentage, 1000);

function showRemaining() {
	var now = new Date(); // get current date
	var distance = end - now; // difference between end and start
	
	// once date comes
	if (distance < 0) {
		clearInterval(timer);
		document.getElementById('days').innerHTML = '0';
		document.getElementById('hrs').innerHTML = '0';
		document.getElementById('mins').innerHTML = '0';
		document.getElementById('secs').innerHTML = '0';
		document.getElementById('countdownNote2').innerHTML = "2020";
		document.body.style.minWidth = "1100px";
		return;
	}else{
	
		// calculate times
		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);
	
		// output times
		document.getElementById('days').innerHTML = days;
		document.getElementById('hrs').innerHTML = hours;
		document.getElementById('mins').innerHTML = minutes;
		document.getElementById('secs').innerHTML = seconds;
		
	}
}
// update every second
timer = setInterval(showRemaining, 1000);