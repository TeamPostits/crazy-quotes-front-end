var url = "http://localhost:8080/crazy-quotes/quotes";

$.get(url, function (data) {
	console.log(data);
	$(".quotes").append(data);
});

var loginform = $('#loginForm');
loginform.validate({
	rules: {
		email: {
			required: true,
			email: true
		},
		password: {
			required: true,
			minlength: 6
		}

	}
});
$("#loginForm").submit(function (event) {
	event.preventDefault();
	$.post(url, $('#loginForm').serialize()).done(function () {
		$.get(url, function (data) {
			console.log(data);
			$(".quotes").append(data);
		});
	});
	$('.quotes-container').css({
		'display': 'block'
	});

});

$('#signup').click(function () {

	$('.quotes-container').show();
});