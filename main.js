
$(function(){



	console.log ('The dom is on!')









	function moveViaKeyPress(elementID,direction) {

		console.log('it works')

		if (direction == "up") {



			$(elementID).animate ({ 

				bottom:'+=250px',


			},100 ) 

			console.log('going up')

		} else if (direction=="down") {

			$(elementID).animate ({ 

				bottom:'+=250px',


			},100 ) 

			console.log('going down')


				
		} else if (direction=="right") {

			$(elementID).animate ({ 

				left:'+=10px',



			},100 )  


			// $('.missile').animate ({
			// 	left:'+=10px',
			// },100)

			console.log('going right')

			$

		} else if (direction=="left") {
			$(elementID).animate ({ 

				left:'-=10px',


			},100 ) 


			// $('.missile').animate ({

			// 	left:'-=10px',
			// },100)



			console.log('going left')




		}

		var $pos = $('#small-ball').position()

		
	}




		// $(document).keypress(function(e){ var $ball = $('#small-ball')
		// 	switch(e.which)
		// 	{
		// 		case 97 : moveViaKeyPress($ball,'left');
		// 			break;

		// 		case 115 : moveViaKeyPress($ball,'down');
		// 			break;

		// 		case 100 : moveViaKeyPress($ball,'right');
		// 			break;

		// 		case 119 : moveViaKeyPress($ball,'up');

		// 			break;

		// 		case 32 : launchMissile()
		// 			break;
		// 	}
		// }) 


			$(document).keypress(function(e){ var $ufo = $('#UFO')
			switch(e.which)
			{
				case 97 : moveViaKeyPress($ufo,'left');
					break;

				

				case 100 : moveViaKeyPress($ufo,'right');
					break;


				

				case 32 : launchMissile()
					break;
			}
		}) 



		function launchMissile() {

				var b = $("#UFO").position().left

				console.log(b)
				$('#main').append('<div class="missile"  </div>')

				// style="left : $("#UFO").position().left;">


				$('.missile').css({'left' : b + 10 } )




				var $p = $('p')

				$('.missile').animate({
					bottom:'1000px'

				},2000)

				// console.log('shoot')

				// $().animate ({ 

				// top:'+=250px',


				// },100 ) 





				// var pos= $ball.css('top')


		}










})