
$(function(){



	console.log ('The dom is on!')









	function moveViaKeyPress(elementID,direction) {

		console.log('it works')

		if (direction == "up") {



			$(elementID).animate ({ 

				bottom:'+=500px',


			},100 ) 

			console.log('going up')

		} else if (direction=="down") {

			$(elementID).animate ({ 

				bottom:'+=250px',


			},100 ) 

			console.log('going down')


				
		} else if (direction=="right") {

			$(elementID).animate ({ 

				left:'+=20px',



			},100 )  


			// $('.missile').animate ({
			// 	left:'+=10px',
			// },100)

			console.log('going right')

			$

		} else if (direction=="left") {
			$(elementID).animate ({ 

				left:'-=20px',


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

				},500)

				// console.log('shoot')

				// $().animate ({ 

				// top:'+=250px',


				// },100 ) 


				var distance = $('.bad').offset().left - $('.missile').offset().left





				if ( distance <= 0.1 ) {

					

					$('.bad').css({'background-image': 'url("images/exp.png")' ,
					'position':'relative'})


					delay(500)

					

					


					$('.bad').remove()

					



				}






				// var pos= $ball.css('top')


		}



		// $('.bad').animate ({

		// 	left:'200px'



		// })



function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();

    $('.bad').animate({ left: newq[1] },1500, function(){
      animateDiv();        
    });
    
};

var move = animateDiv() 

// var distance = $('.bad').offset().left - $('.missile').offset().left





// if ( a  <= 50 ) {

// 	$('.bad').remove()
// }



























})