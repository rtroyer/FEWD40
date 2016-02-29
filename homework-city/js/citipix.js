//here's my pseudo code
	//take user input
	//search for city variable, check if string has a match
	//display associated image
	//store user input
	//reset input

$(document).ready(function() {
  // begin doc ready

//click submit, search, display
$('#submit-btn').click(function background(){

	//set var city, take input
	var city = $('#city-type').val();
	console.log(city);

	var city = city.trim().toLowerCase();

	//checks string, displays image

		if ((city === 'new york') || (city === 'new york city') || (city === 'nyc')){		
				$('body').attr('class','nyc');
		
				
		} else if ((city === 'san francisco') || (city === 'sf') || (city === 'bay area')){
				$('body').attr('class','sf');
			

		} else if ((city === 'los angeles') || (city === 'la') || (city === 'lax')){
				$('body').attr('class','la');
			

		} else if ((city === "austin") || (city === "atx" )){
				$('body').attr('class','austin');
		

		} else if ((city === "sydney") || (city === "syd" )){
				$('body').attr('class','sydney');

		}

});

//reset input 

$('#city-type').val("");

// prevent page reload upon submission
$('#submit-btn').click(function(event) {
	event.preventDefault();
});


//end doc ready
});	

