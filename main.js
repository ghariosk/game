
var count =0

$(function(){



	console.log ('The dom is on!')


// $('#UFO').addClass('infinte')
// 	$('#UFO').addClass('animated')
// 	$('#UFO').addClass('fadeInUpBig')
	





		












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


		// 	$(document).keypress(function(e){ var $ufo = $('#UFO')
		// 	switch(e.which){
		// 		case 97 : moveViaKeyPress($ufo,'left');
		// 			break;

				

		// 		case 100 : moveViaKeyPress($ufo,'right');
		// 			break;


				

		// 		case 32 : launchMissile()
		// 			break;
		// 	}
		// }) 



		


		// $('.bad').animate ({

		// 	left:'200px'



		// })



function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $('#main').height() - 100;
    var w = $('#main').width() - 100;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

var animateDivV = function animateDiv(){
    var newq = makeNewPosition();
    $('.bad').animate({  left: newq[1] }, function(){
      animateDiv();        
    });
    
};





// var distance = $('.bad').offset().left - $('.missile').offset().left


animateDivV($('.bad'))

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


// /// key detection (better to use addEventListener, but this will do)
// $('body').onkeyup = 
// $('body').onkeydown = function(e){
//   var kc = e.keyCode || e.which;
//   keys[kc] = e.type == 'keydown';
// };


	$(document).keypress(function(e){ var $ufo = $('#UFO')
			switch(e.which){
				case 97 : detectMoveCharacter(1) // moveViaKeyPress($ufo,'left');
					break;

				

				case 100 : detectMoveCharacter(-1) // moveViaKeyPress($ufo,'right');
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

var move = function (characterx) {


return $("#UFO").css("left").replace("px","") + 1*characterx + "px"

}


var detectMoveCharacter = function (b) {

	if (b === 1) {
		$('#UFO').css( {'left' : '-=15' } )

	} else if (b === -1) {
		$('#UFO').css({ 'left': '+=15' })
	}

}


setInterval( function() {



var detectMoveCharacter = function (b) {

	if (b === 1) {
		$('#UFO').css( {'left' : '-=15' } )

	} else if (b === -1) {
		$('#UFO').css({ 'left': '+=15' })
	}

}



},1000/24)


















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

				// checkDistance()



				// if (parseFloat($('.missile').css('bottom').replace('px','')) > 600 ) {
				// 	$('.missile').remove()
				// } else {

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


				








					



				






				// var pos= $ball.css('top')


		}


var checkDistance = function() {

	// $('.bad').remove('jello')

	


	if ($('.missile').length > 0 ) {

	console.log('hi')

	var distance_h = $('.bad').offset().left - $('.missile').offset().left
	var distance_v=$('.bad').offset().top - $('.missile').offset().top
	console.log(distance_v)

		if ((distance_h <= 100   &&
			 distance_h >= -100) &&
			  (distance_v <= 100 &&
			   distance_v >= -100)) {


				if (count < 5) {


				
				$('.bad').addClass('animated')
				$('.bad').addClass('infinite')

				$('.bad').addClass('jello')
				
				count ++
				
				$('div #counter').html('<p>'+ count +' </p>')
				

				$('.missile').remove()





				} else {

					console.log('css !!')

					$('.bad').removeClass('jello')

				$('.bad').css({'background-image': 'url("images/exp.png")'})
				$('.bad').addClass('animated')
				$('.bad').addClass('flash')

				setTimeout(function() {

					$('.bad').remove()


				},2000)

				

				}



		} else {
			console.log('nothing')
		}

	}



// 	checkDistance($('.bad'), $('.missile'), 250, removeChar)


// 				// $('div #counter').html('<p>'+ count +' </p>')

// 				// count+=1
				
		
// }, 1000) 
}


setInterval (function (){

	checkDistance()


	if ($('.missile').length >0 && parseFloat($('.missile').css('bottom').replace('px','')) > 600 ) {
					$('.missile').remove() }

},1000/24)


// setInterval(function(){
// 	console.log('hi')

// },500)

// // 

// var checkDistance = function (object1, object2, distance, action ) {

// 		var distance_h = object1.offset().left - object2.offset().left
// 		var distance_v=object1.offset().top - object2.offset().top
// 		console.log(distance_v)

// 		if ((distance_h <= distance   &&
// 			 distance_h >= -distance) &&
// 			  (distance_v <= distance &&
// 			   distance_v >= -distance)) {

// 			action







// 		} 

// }

// var removeChar= function(object1,object2,char) {
// 	object1.remove()
// 	object2.remove()
// 	object1.css({'background-image': 'url("images/exp.png")'})

// }














})

