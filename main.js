 var count=0
var hits =0 

var lifeBad = 5
var lifeMinion=1
var lifeUFO=3

var countBad=0
var countMinion=0

var countA=0



var id ="0"

var bossTime=0


$(function(){


$('#logo').addClass('animated')
$('#logo').addClass('bounceInDown')


function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $('#main').height() - 100;
    var w = $('#main').width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w*0.8);
    
    return [nh,nw];    
    
}


var animateDivV = function animateDiv(element){
    var newq = makeNewPosition();
    $(element).animate({  left: newq[1] ,top :'+=30px'}, function(){
    	animateDiv(element)
           
    });
    
};

var animateDivH = function (element) {
	var newq = makeNewPosition();
    $(element).animate({  left: newq[1]}, function(){
    	animateDivH(element)
           
    });

};











	console.log ('The dom is on!')




setInterval (function() {



	if (count%10===0 && count!==0) {

		$('#main').append('<div class="bad bad2"> </div>')

		var laugh = new Audio("laugh.mp3"); // buffers automatically when created


		laugh.play()
		count=0

		bossTime=1

	} else if (bossTime===1) {




	



	} else if (bossTime===0) {

	$('#main').append('<div class="minion bad2" id="'+id + '"> </div> ')
	
	id ++
	return id

    }


	


},4000)


setInterval(function(){
	animateDivH($('.bad'))
	animateDivV($('.minion'))






	


},1000/24)





function moveViaKeyPress(elementID,direction) {
		if (direction == "up") {


		


			$(elementID).animate ({ 

				bottom:'+=500px',


			},100 ) 

			console.log('going up')

			elementID.css({'transform' : 'rotate3d(0,1,0,60deg)'})


				
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

	
	}





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






  // animateDiv($('.bad'); 




// var distance = $('.bad2').offset().left - $('.missile').offset().left





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






function bossAttack() {
	

	var bossAttack = $('.bad').position().left


	$('#main').append('<div class="attack attack1">  </div>')

	$('#main').append('<div class="attack attack2">  </div>')
	$('#main').append('<div class="attack attack3">  </div>')


	$('.attack').css({'left': bossAttack+60 })




	$('.attack1').animate({

		top: '1000px'
	

	},1200)


	$('.attack2').animate({
		top:'1000px' ,
		left:'+=300px'

	},1200)

	$('.attack3').animate({


		top:'1000px' , 

		left:'-=300px'
	},1200)




}




setInterval(function() {

	

	bossAttack()



},2000)



setInterval(function() {
	animateDivH($('.bad'))

},1000/24)







	// setInterval(function(){



	
	






	// },1000/24)



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
				
}

setInterval(function() {

	

	 $('.attack').each(function() {


	if (parseFloat($(this).css('top').replace('px','')) > 1200 ) {

			$(this).remove()
			console.log('nothing')
	}

 	var distance_h1 = $(this).offset().left - $('#UFO').offset().left
	var distance_v2= $(this).offset().top - $('#UFO').offset().top

	if ((distance_h1 <= 35   &&
			 distance_h1 >= -35) &&
			  (distance_v2 <= 35 &&
			   distance_v2 >= -35)) {



		var $tick = $('#tick'+lifeUFO)

		$tick.delay(2000).fadeOut(3000)

		// $(this).remove()

		$tick.addClass('animated')

		$tick.addClass('bounceOutUp')






		// $tick.remove()

		lifeUFO --

		if (lifeUFO===0) {

			$('#UFO').remove()
			alert('Defeated! Press x to replay')
		}

	}	

})

},1000/24)

setInterval(function(){

	 $('.bad').each(function() {

	if ($('.missile').length > 0 ) {




	

	var distance_h = $(this).offset().left - $('.missile').offset().left
	var distance_v= $(this).offset().top - $('.missile').offset().top

	console.log(distance_v)
	console.log(distance_h)

		if ((distance_h <= 100   &&
			 distance_h >= -100) &&
			  (distance_v <= 100 &&
			   distance_v >= -100)) {


				console.log('does it work')


				$('.missile').remove()

				hits ++

				countA = countA + hits 


				if (countA < 5) {

				

					


				
				$(this).addClass('animated')
				$(this).addClass('infinite')

				$(this).addClass('jello')


			

				

				

			
				
				count=count+hits

				hits =0



			



				
				$('div #counter').html('<p>' + count + '</p>')
				
				} else {

					var exp = new Audio("exp.mp3"); // buffers automatically when created


					exp.play();



					count=count+ hits
					hits=0
					countA=0

					$('div #counter').html('<p>' + count + '</p>')

					console.log('css !!')

					$(this).removeClass('jello')


			
				

					$(this).css({'background-image': 'url("images/exp.png")'})

					// $(this).addClass('animated')

					// $(this).addClass('flash')

					// $(this).slideUp(200)

					// setTimeout(function() {

					// 	console.log('removing')
					// animateDivV($this).stop()
						$(this).delay(2000).remove()

						bossTime=0
						
					// },1)
				}



	
			}	
		}


})

},1000/24)







setInterval(function(){ 

 $('.minion').each(function() {

 		if (parseFloat($(this).css('top').replace('px','')) > 1200  ) {

			$(this).remove()
			console.log('nothing')
		}


 	


	console.log('working')

		


		




	var distance_h1 = $(this).offset().left - $('#UFO').offset().left
	var distance_v2= $(this).offset().top - $('#UFO').offset().top

	if ((distance_h1 <= 35   &&
			 distance_h1 >= -35) &&
			  (distance_v2 <= 35 &&
			   distance_v2 >= -35 && $(this).hasClass('bounceOutDown')===false)) {

		var $tick = $('#tick'+lifeUFO)

		$(this).remove()





		// $tick.addClass('animated')
		// $tick.addClass('bounceOutUp')

		$tick.toggle(1000)

		lifeUFO --

		if (lifeUFO===0) {

			$('#UFO').remove()
			alert('Defeated! Press x to replay')
		}

		
		

		}





	


	if ($('.missile').length > 0 ) {




	

	var distance_h = $(this).offset().left - $('.missile').offset().left
	var distance_v= $(this).offset().top - $('.missile').offset().top

	console.log(distance_v)
	console.log(distance_h)

		if ((distance_h <= 35   &&
			 distance_h >= -35) &&
			  (distance_v <= 35 &&
			   distance_v >= -35)) {


				console.log('does it work')


				$('.missile').remove()

				hits ++

				countA = countA + hits 


				if (countA < 1) {

				

					


				
				$(this).addClass('animated')
				$(this).addClass('infinite')

				$(this).addClass('jello')


			

				

				

			
				
				count=count+hits

				hits =0



			



				
				$('div #counter').html('<p>' + count + '</p>')
				
				} else {

					var exp = new Audio("exp.mp3"); // buffers automatically when created


					exp.play();



					count=count+ hits
					hits=0
					countA=0

					$('div #counter').html('<p>' + count + '</p>')

					console.log('css !!')

					$(this).removeClass('jello')

					if (count===10) {

						bossTime=1
					}


			
				

					$(this).css({'background-image': 'url("images/exp.png")'}).delay(200)

					$(this).addClass('animated')

					$(this).addClass('bounceOutDown')

					// $(this).addClass('animated')

					// $(this).addClass('flash')

					// $(this).slideUp(200)

					// setTimeout(function() {

					// 	console.log('removing')
					// animateDivV($this).stop()
						// $(this).delay(2000).remove()
						
					// },1)
				}



	
			}	
		}


})

},1000/24)









setInterval (function (){



if ($('.missile').length >0 && parseFloat($('.missile').css('bottom').replace('px','')) > 600 ) {
					$('.missile').remove() }


	
		// var a = checkDistance($('#0'),lifeMinion)
		
		// var b = checkDistance($('#2'),lifeMinion)
		// var c = checkDistance($('#3'),lifeMinion)
		// checkDistance($('#4'),lifeMinion)
		// checkDistance($('#5'),lifeMinion)



			// checkDistance($('.minion')).each()
},1000/24)



// setInterval(function(){ 


// for (var i =0 ; i<id+10 ; i++) {



// 		setInterval( function(){
// 			checkDistance($("'#"+i+ "'"))
// 		},1000/24)
	

// }

// },1000/24)



// setInterval (function (){
 
// 	// checkDistance($('.bad'),lifeBad,countBad)
// 	// checkDistance($('.minion'),lifeMinion)



	
// 		var a = checkDistance($('#1'),lifeMinion)
		
// 		var b = checkDistance($('#2'),lifeMinion)
// 	},1000/24)





// function checkMinion (enemy) {
// 	setInterval (function() {
// 		checkDistance(enemy,lifeMinion)
// 	},1000/24)
// }

// checkMinion($('#0'))






// setInterval(function(){

// 	var a = checkDistance($('#0'),lifeMinion)
// },1000/24)

// setInterval(function(){

// 	var a = checkDistance($('#1'),lifeMinion)
// },1000/24)



// setInterval(function(){

// 	var a = checkDistance($('#2'),lifeMinion)
// },1000/24)

// setInterval(function(){

// 	var a = checkDistance($('#3'),lifeMinion)
// },1000/24)


// setInterval(function(){

// 	var a = checkDistance($('#4'),lifeMinion)
// },1000/24)

// setInterval(function(){

// 	var a = checkDistance($('#5'),lifeMinion)
// },1000/24)





















})

