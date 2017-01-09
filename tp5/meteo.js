window.onload = function () {
	document.getElementById("bt1").addEventListener("click", function () {
		var city = document.getElementById("city").value;
		searchCity(city);

	})
	document.getElementById("GPS").addEventListener("click", function () {
		navigator.geolocation.getCurrentPosition(searchLatLn);

	})
}
function searchCity(_city) {
	console.log('searchCity', 'Hello from' + _city);
	var request = new XMLHttpRequest();
	request.open('GET', 'https://demo.bilelz.fr/owmap/?q=' + _city + '&units=metric&appid=ae3e8be45d47ccd5941b17ff8f3aba94', true);
	request.onload = function () {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			var resp = request.responseText;
			//document.getElementById("result").innerHTML = resp;
			var responseJSON = JSON.parse(request.responseText);
			var icon = responseJSON.weather[0].icon;
			var temp = responseJSON.weather[0].main;
			var temper = responseJSON.main.temp;
			var humidity = responseJSON.main.humidity;
			var cloud = responseJSON.clouds.all;
			var wind = responseJSON.wind.speed;
			var deg = responseJSON.wind.deg;
			var name = responseJSON.name;
			var date = new Date(responseJSON.dt * 1000);
			var hour = date.getHours();
			var minute = "0" + date.getMinutes();
			var seconds = "0" + date.getSeconds();
			var formattedTime = "@ " + hour + ":" + minute.substr(-2) + ":" + seconds.substr(-2);
			/* document.getElementById("result").innerHTML = responseJSON.name + " " + responseJSON.main.temp +" K°";  */
			//document.getElementById("temperature").innerHTML = icon + temp + humidity + cloud + wind + temper + name + formattedTime;
			document.getElementById("icon").src="https://openweathermap.org/img/w/" + icon + ".png";
			//$("#icon").attr("src", "http://openweathermap.org/img/w/" + icon + ".png");
			document.getElementById("country").innerHTML = name;
			document.getElementById("temper").innerHTML = temper + "°C";
			document.getElementById("maintemp").innerHTML = temp;
			document.getElementById("time").innerHTML = formattedTime;
			document.getElementById("Humidity").innerHTML = humidity + "%";
			document.getElementById("Cloud").innerHTML = cloud + "%";
			document.getElementById("Wind").innerHTML = wind + "m/s/";
			document.getElementById("degwind").className="wi wi-wind towards"+deg+"-deg";
			document.getElementById("map").src="https://maps.googleapis.com/maps/api/staticmap?size=500x400&zoom=7&center="+name+"&markers="+name;
			document.getElementById("result").style.display="initial";

		} else {
			// console.log("** An error occurred during the transaction");
			// We reached our target server, but it returned an error

		}
	};

	request.onerror = function () {
		console.log("** An error occurred during the transaction");
	};

	request.send();
}
function searchLatLn(position) {
	console.log(searchLatLn, 'Hello from' + position.coords.latitude + ',');
	var request = new XMLHttpRequest();
	request.open('GET', 'https://demo.bilelz.fr/owmap/?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=metric&appid=ae3e8be45d47ccd5941b17ff8f3aba94', true);
	request.onload = function () {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			var resp = request.responseText;
			//document.getElementById("result").innerHTML = resp;
			var responseJSON = JSON.parse(request.responseText);
			var icon = responseJSON.weather[0].icon;
			var temp = responseJSON.weather[0].main;
			var temper = responseJSON.main.temp;
			var humidity = responseJSON.main.humidity;
			var cloud = responseJSON.clouds.all;
			var wind = responseJSON.wind.speed;
			var deg = responseJSON.wind.deg;
			var name = responseJSON.name;
			var date = new Date(responseJSON.dt * 1000);
			var hour = date.getHours();
			var minute = "0" + date.getMinutes();
			var seconds = "0" + date.getSeconds();
			var formattedTime = "@ " + hour + ":" + minute.substr(-2) + ":" + seconds.substr(-2);
			/* document.getElementById("result").innerHTML = responseJSON.name + " " + responseJSON.main.temp +" K°";  */
			//document.getElementById("temperature").innerHTML = icon + temp + humidity + cloud + wind + temper + name + formattedTime;
			//("icon").attr("src", "http://openweathermap.org/img/w/" + icon + ".png");
			//('map').attr("src", "http://maps.googleapis.com/maps/api/staticmap?markers=" + position.coords.latitude + "," + position.coords.longitude + "&size=500x400&zoom=7");
			document.getElementById("icon").src="https://openweathermap.org/img/w/" + icon + ".png";
			document.getElementById("map").src="https://maps.googleapis.com/maps/api/staticmap?markers=" + position.coords.latitude + "," + position.coords.longitude + "&size=500x400&zoom=7";
			document.getElementById("country").innerHTML = name;
			document.getElementById("city").innerHTML = name;
			document.getElementById("temper").innerHTML = temper + "°C";
			document.getElementById("maintemp").innerHTML = temp;
			document.getElementById("degwind").className="wi wi-wind towards"+deg+"-deg";
			document.getElementById("time").innerHTML = formattedTime;
			document.getElementById("Humidity").innerHTML = humidity + "%";
			document.getElementById("Cloud").innerHTML = cloud + "%";
			document.getElementById("Wind").innerHTML = wind + "m/s/";
			document.getElementById("result").style.display="initial";

		} else {
			// console.log("** An error occurred during the transaction");
			// We reached our target server, but it returned an error

		}
	};

	request.onerror = function () {
		console.log("** An error occurred during the transaction");
	};

	request.send();

} 
