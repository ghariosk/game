
var count =0

$(function(){



	console.log ('The dom is on!')


$('#UFO').addClass('infinte')
	$('#UFO').addClass('animated')
	$('#UFO').addClass('fadeInUpBig')
	$('#UFO').addClass('animated')

	$('#UFO').addClass('fadeInRight')






		












	function moveViaKeyPress(elementID,direction) {

		// console.log('it works')

		if (direction == "up") {


		


			$(elementID).animate ({ 

				bottom:'+=500px',


			},100 ) 

			console.log('going up')

			elementID.css({'transform' : 'rotate3d(0,1,0,60deg)'})

		} else if (direction=="down") {

			$(elementID).animate ({ 

				bottom:'+=250px',


			},0.1) 

			console.log('going down')


				
		} else if (direction=="right") {

			if (parseFloat(elementID.css('left').replace('px','')) < -20 || parseFloat(elementID.css('left').replace('px','')) >560) {

				console.log('too far right')

				


			

			} else { $(elementID).animate ({ 

				left:'+=10px',
				},0.1 )  

				// $(elementID).css({ 'transform' : 'rotate3d(0,1,0,-50deg)'}) 
			}


			// $('.missile').animate ({
			// 	left:'+=10px',
			// },100)

			// console.log('going right')

			

		} else if (direction=="left") {


			if (parseFloat(elementID.css('left').replace('px','')) < 0 || parseFloat(elementID.css('left').replace('px','')) >(580) ) {

				console.log('too far left')

			} else { $(elementID).animate ({ 

				left:'-=10px',



			},0.1 )

			// $(elementID).css({ 'transform' : 'rotate3d(1,1,0,-50deg)'}) 

			// $(elementID).addClass('animated')

			// $(elementID).addClass('flipInY') 
			}


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
			switch(e.which){
				case 97 : moveViaKeyPress($ufo,'left');
					break;

				

				case 100 : moveViaKeyPress($ufo,'right');
					break;


				

				case 32 : launchMissile()
					break;
			}
		}) 



		


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

	function animateDiv(element){
	    var newq = makeNewPosition();

	    var move= $(element).animate({ left: newq[1],  top: '1000px',



	},10000, function(){


	      animateDiv();  

	    //   var distance = $('.bad').offset().left - $('.missile').offset().left





					// if ( distance <= 0.1 ) {

					// 	move.stop()
					// }


	    });
};





// var distance = $('.bad').offset().left - $('.missile').offset().left


animateDiv($('.bad'))

// if ( a  <= 50 ) {

	// $('.bad').remove()
// }


/// store key codes and currently pressed ones
// var keys = {

//     keysLeft: '97';
//     keysRight: '100';
//   }

/// store reference to character's position and element
var $character = $("#UFO")


/// key detection (better to use addEventListener, but this will do)
$('body').onkeyup = 
$('body').onkeydown = function(e){
  var kc = e.keyCode || e.which;
  keys[kc] = e.type == 'keydown';
};


	$(document).keypress(function(e){ var $ufo = $('#UFO')
			switch(e.which){
				case 97 : var a =1  // moveViaKeyPress($ufo,'left');
					break;

				

				case 100 : var a =2 // moveViaKeyPress($ufo,'right');
					break;


				

				case 32 : launchMissile()
				e.preventDefault()
					break;
			}
		}) 

/// character movement update
// var moveCharacter = function(dx){


//   var characterx

//  characterx += dx||0;

//  $character.css('left') = characterx + 'px';

// };

// /// character control
// var detectCharacterMovement = function(){
//   if ( a=1 ) {
//     moveCharacter(-1);
//   }
//   else if( a=2 ) {
//     moveCharacter(1);
//   } else {}


// };

// /// game loop
// setInterval(function(){
//   detectCharacterMovement();
// }, 500);


















	setInterval(function(){



	
	






	},1000/24)



function launchMissile() {


				var laser = new Audio("laser.mp3"); // buffers automatically when created


				laser.play();


				var b = $("#UFO").position().left

				// console.log(b)
				$('#main').append('<div class="missile"  </div>')

				// style="left : $("#UFO").position().left;">


				$('.missile').css({'left' : b + 23 } )




				var $p = $('p')



				if (parseFloat($('.missile').css('bottom').replace('px','')) > 600 ) {
					$('.missile').remove()
				} else {

				$('.missile').animate({

					bottom:'1000px'

				},500)  

				// console.log('shoot')

				// $().animate ({ 

				// top:'+=250px',


				// },100 ) 


			



				// while (true) { 

				// 	setInterval(function(){ 

				// 			var distance_h = $('.bad').offset().left - $('.missile').offset().left
				// var distance_v=$('.bad').offset().top - $('.missile').offset().top

				// console.log(distance_v)



					


				// 	if ((distance_h <= 100 &&
				// 		 distance_h >= -100) &&
				// 		  (distance_v <= 100 &&
				// 		   distance_v >= -100)){

				// 		console.log('css !!')

				// 		// $('.bad').css({'background-image': 'url("images/exp.png")'})

				// 		// $('.bad').remove().delay(500)

				// 		$('.bad').addClass('animated')

				// 		$('.bad').addClass('jello')

				// 		$('.missile').hide(100)

				// 		$('div #counter').html('<p>'+ count +' </p>')
				// 		count+=1

				// 		distance_h=0
				// 		distance_v=0

				// 	}
				// },1000/24)


				}








					



				






				// var pos= $ball.css('top')


		}


var collision = setInterval() ( function() {

	// console.log('hi')
	// var distance_h = $('.bad').offset().left - $('.missile').offset().left
	// var distance_v=$('.bad').offset().top - $('.missile').offset().top
	// console.log(distance_v)

	// 	if ((distance_h <= 100   &&
	// 		 distance_h >= -100) &&
	// 		  (distance_v <= 100 &&
	// 		   distance_v >= -100)) {

	// 			console.log('css !!')

	// 			// $('.bad').css({'background-image': 'url("images/exp.png")'})

	// 			// $('.bad').remove().delay(500)

	// 			$('.bad').addClass('animated')

	// 			$('.bad').addClass('jello')
	// 			$('.missile').hide(100)



	checkDistance($('.bad'), $('.missile'), 250, removeChar)


				// $('div #counter').html('<p>'+ count +' </p>')

				// count+=1
				
		// }
}, 1000)


// setInterval(function(){
// 	console.log('hi')

// },500)

// // 

var checkDistance = function (object1, object2, distance, action ) {

		var distance_h = object1.offset().left - object2.offset().left
		var distance_v=object1.offset().top - object2.offset().top
		console.log(distance_v)

		if ((distance_h <= distance   &&
			 distance_h >= -distance) &&
			  (distance_v <= distance &&
			   distance_v >= -distance)) {

			action







		} 

}

var removeChar= function(object1,object2,char) {
	object1.remove()
	object2.remove()
	object1.css({'background-image': 'url("images/exp.png")'})

}














})

