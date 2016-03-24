$(document).ready(function() {
//begin doc ready

$(window).scroll(function(){

	// first thing

	if (isScrolledIntoView('#section-one')===true){
		$('body').css('background-color','#FADFEB');
		$('#nav li a').css('color','#000');
		$('#nav-1 a').css('color','#fff');

	} else {
		// something else
	}



	if (isScrolledIntoView('#section-two')===true){
		$('body').css('background-color','#ECE2F7');
		$('#nav li a').css('color','#000');
		$('#nav-2 a').css('color','#fff');

	} else {
		// something else
	}



	if (isScrolledIntoView('#section-three')===true){
		$('body').css('background-color','#DCEEFF');
		$('#nav li a').css('color','#000');
		$('#nav-3 a').css('color','#fff');

	} else {
		// something else
	}



	if (isScrolledIntoView('#section-four')===true){
		$('body').css('background-color','#DFF7E8');
		$('#nav li a').css('color','#000');
		$('#nav-4 a').css('color','#fff');

	} else {
		// something else
	}



	if (isScrolledIntoView('#section-five')===true){
		$('body').css('background-color','#FFF2CC');
		$('#nav li a').css('color','#000');
		$('#nav-5 a').css('color','#fff');
	} else {
		// something else
	}



	if (isScrolledIntoView('#section-six')===true){
		$('body').css('background-color','#FFE3CC');
		$('#nav li a').css('color','#000');
		$('#nav-6 a').css('color','#fff');
	} else {
		// something else
	}



	if (isScrolledIntoView('#section-seven')===true){
		$('body').css('background-color','#F4D9D9');
		$('#nav li a').css('color','#000');
		$('#nav-7 a').css('color','#fff');
	} else {
		// something else
	}

});








function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


//end doc ready
});