$(document).ready(function() {
//begin doc ready	

//read more, read less
$('#readmore-btn').click(function(e){ 
	e.preventDefault(); 
	$('.readmore').hide(); 
	$('#show-this-on-click').slideDown('slow');
	$('.readless').show(); 
});

$('#readless-btn').click(function(e){ 
	e.preventDefault(); 
	$('#show-this-on-click').slideUp('slow', function(){
	$('.readless').hide();
	$('.readmore').show();
});	

});

//learn more
$('.learnmore-btn').click(function(e){
	e.preventDefault()
	$('#learnmoretext').slideDown('slow', function(){
	$('.learnmore-btn').hide();
});

});

//sign up
$('#bottom-cta a').click(function(e){
	e.preventDefault()
});	

//end doc ready
});