
$(document).ready(function(){
	$('#scrollbar1').tinyscrollbar();
	$('#scrollbarLast').tinyscrollbar();

	$('.clndr').clndr({
		showAdjacentMonths: false,
		weekOffset: 1,
		daysOfTheWeek: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
	});
});

$(function() {
    $('.nav-tabs li a').bind('click', function (e) {
		var number =$(this).attr('data-scroll');
	    setTimeout(function(){$('#'+number+'').tinyscrollbar();}, 500);
    });
});