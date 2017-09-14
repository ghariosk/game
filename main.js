$(function(){

	console.log ('The dom is on!')

var $ball = $('#small-ball')


$ball.keypress(function(){

	$(this).animate ({
		right:'+=1px',
	})
})



$( "#other" ).click(function() {
  $( "#target" ).keypress();
});  





function moveViaKeyPress (elementID) {

	console.log('it works')

	$(elementID).animate ({ 

		top:'+=5px',


	},5)  
} 

$(document).keypress(function(e){
	switch(e.which)
	{
		case 97 : moveViaKeyPress($ball);
			break;

		case 115 : moveViaKeyPress($ball);
			break;

		case 100 : moveViaKeyPress($ball);
			break;

		case 103 : moveViaKeyPress($ball);
	}
})   




})