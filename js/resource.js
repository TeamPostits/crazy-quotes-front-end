var url = "http://localhost:8080/crazy-quotes/quotes";


$.get(url, function (data) {
	console.log(data);
	$(".quotes-container").html(data);
	alert("Load was performed.");
});