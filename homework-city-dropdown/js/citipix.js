//here's my pseudo code
	//click on dropdown, see list of cities
	//take user select
	//search for city variable, check if string has a match
	//display associated image
	//reset select

$(document).ready(function() {

  // begin doc ready

//dropdown of cities
var citySelect = ['nyc', 'sf', 'la', 'atx', 'syd'];
for(i=0; i<citySelect.length; i++){
	console.log(citySelect[i]);
	$('#city-select').append("<option>"+citySelect[i]+'</option>');  
}

	//set var city, take input
	$("#city-select").change(function() {

	var city = $('#city-select').val();
	console.log(city);

	//checks string, displays image

		if (city === 'nyc'){		
				$('body').attr('class','nyc');
		
				
		} else if (city === 'sf'){
				$('body').attr('class','sf');
			

		} else if (city === 'la'){
				$('body').attr('class','la');
			

		} else if (city === "atx"){
				$('body').attr('class','austin');
		

		} else if (city === "syd"){
				$('body').attr('class','sydney');

		}

//end doc ready
});	

});
