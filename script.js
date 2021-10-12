var city = window.prompt("Enter your Location: ");
	$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&APPID=dda2a371af56a0c32c679a75203f4b06", function(data){
	console.log(data);
	var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	$('.icon').attr('src', icon);
	var temp = data.main.temp;
	var tempmax = data.main.temp_max;
	var tempmin = data.main.temp_min;
	$('.temp').append(temp + "&#x2103;");
	$('.temp-max').append("Max Temperature :- "+tempmax + "&#x2103;");
	$('.temp-min').append("Min Temperature :- "+tempmin + "&#x2103;");
	var weather = data.weather[0].main;
	$('.weather').append(weather);
	var weatherloc = data.name;
	$('.weather-report').append("Weather Report of " + weatherloc + " is : ");
});

function refresh(){
	location.reload();
}