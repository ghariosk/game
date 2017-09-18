 var count=0 
var hits =0 

var lifeBad = 5
var lifeMinion=1

var countBad=0
var countMinion=0

var countA=0

$(function(){



	console.log ('The dom is on!')


// $('#UFO').addClass('infinte')
// 	$('#UFO').addClass('animated')
// 	$('#UFO').addClass('fadeInUpBig')


// while ($('#UFO').length > 0 ) {

setInterval( function() {

	console.log('say hi')




	console.log('say hi 2')

	$('#main').append('<div class="minion bad2" > </div> ')


	

setInterval(function(){

		checkDistance($('.minion'))

},1000/24)





},4000)
	

// }





		












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



		


		// $('.bad2').animate ({

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





// var distance = $('.bad2').offset().left - $('.missile').offset().left


animateDivV($('.bad2'))

// if ( a  <= 50 ) {

	// $('.bad2').remove()
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

				// 			var distance_h = $('.bad2').offset().left - $('.missile').offset().left
				// var distance_v=$('.bad2').offset().top - $('.missile').offset().top

				// console.log(distance_v)



					


				// 	if ((distance_h <= 100 &&
				// 		 distance_h >= -100) &&
				// 		  (distance_v <= 100 &&
				// 		   distance_v >= -100)){

				// 		console.log('css !!')

				// 		// $('.bad2').css({'background-image': 'url("images/exp.png")'})

				// 		// $('.bad2').remove().delay(500)

				// 		$('.bad2').addClass('animated')

				// 		$('.bad2').addClass('jello')

				// 		$('.missile').hide(100)

				// 		$('div #counter').html('<p>'+ count +' </p>')
				// 		count+=1

				// 		distance_h=0
				// 		distance_v=0

				// 	}
				// },1000/24)


				








					



				






				// var pos= $ball.css('top')


		}


var checkDistance = function(enemy,life) {

	// $('.bad2').remove('jello')

	


	


	if ($('.missile').length > 0 ) {



	console.log('hi')

	var distance_h = $(enemy).offset().left - $('.missile').offset().left
	var distance_v=$(enemy).offset().top - $('.missile').offset().top

	console.log(distance_v)

		if ((distance_h <= 75   &&
			 distance_h >= -75) &&
			  (distance_v <= 75 &&
			   distance_v >= -75)) {

				$('.missile').remove()

				hits ++

				countA = countA + hits 


				if (countA < life) {

				

					


				
				$(enemy).addClass('animated')
				$(enemy).addClass('infinite')

				$(enemy).addClass('jello')


				// hits ++

				

				

				// var countA = hits
				
				count=count+hits

				hits =0



			



				
				$('div #counter').html('<p>' + count + '</p>')
				

				// $(enemy).remove







				} else {


					count=count+ hits
					hits=0
					countA=0

					$('div #counter').html('<p>' + count + '</p>')

					console.log('css !!')

				$(enemy).removeClass('jello')
				$(enemy).removeClass(enemy)

				$(enemy).css({'background-image': 'url("images/exp.png")'})
				$(enemy).addClass('animated')
				$(enemy).addClass('flash')

				// animateDivV($('.bad2')).stop()

				setTimeout(function() {

					// hits ++

					$(enemy).remove()


					
					

					return count
					



				},250)

				

				}



		} else {
			console.log('nothing')
		}

	}



// 	checkDistance($('.bad2'), $('.missile'), 250, removeChar)


// 				// $('div #counter').html('<p>'+ count +' </p>')

// 				// count+=1
				
		
// }, 1000) 
}


setInterval (function (){

	// checkDistance($('.bad'),lifeBad,countBad)
	checkDistance($('.minion'),lifeMinion)




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

