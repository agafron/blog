function dateTimeSet() {
	setInterval(function () {
     	var dateNow = new Date().getDate() + "/" + ((new Date().getMonth() +1)<10?("0" + (new Date().getMonth() +1)):(new Date().getMonth() +1)) + "/" + new Date().getFullYear();
  		var timeNow = ((new Date().getHours())<10?("0" + new Date().getHours()):(new Date().getHours())).toString() + ":" + ((new Date().getMinutes())<10?("0" + new Date().getMinutes()):(new Date().getMinutes())).toString() + ":" + ((new Date().getSeconds())<10?("0" + new Date().getSeconds()):(new Date().getSeconds())).toString();
    return ("Дата: " + dateNow + " время: " + timeNow);
     }, 1000);
     }

     function dateTimeSet() {
	setInterval(function () {
     	var dateNow = new Date().getDate() + "/" + ((new Date().getMonth() +1)<10?("0" + (new Date().getMonth() +1)):(new Date().getMonth() +1)) + "/" + new Date().getFullYear();
  		var timeNow = ((new Date().getHours())<10?("0" + new Date().getHours()):(new Date().getHours())).toString() + ":" + ((new Date().getMinutes())<10?("0" + new Date().getMinutes()):(new Date().getMinutes())).toString() + ":" + ((new Date().getSeconds())<10?("0" + new Date().getSeconds()):(new Date().getSeconds())).toString();
    return alert("Дата: " + dateNow + " время: " + timeNow);
     }, 1000);
     }