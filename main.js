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
var restart = true

var upgrade = false

var words1 = "Millions of light years away, the Galaxy of Sparta is under attack… "
var words2 = "The evil monkeys are attempting to invade your homespace in their flying saucers again. There are also rumours they have perfected their biological weapon, and created giant toxic octopuses that they now venerate as gods. Your job today, officer, is to eliminate as much of them as possible. Also try and take down these creatures they have made."
var words3="Good luck!"
var words4="Use the keyboard to navigate the spaceship :"
var words5= "a —> go left "
var words6= "d —> go right " 
var words7= "space —> fire "
var words8= "To optimise performance :"
var words9= "Put the browser in full screen mode."
var words10= "Set the keyboard repeat to fast ! "


var i = 0
var a=1

// $('.missile')=$('.missile')

	// var timer = setInterval( function(){ 
	// 		// click = new Audio("click.mp3"); // buffers automatically when created
	// 		// click.play();
	// 		$('#script').append('<p>'+ words1.charAt(i)+ '</p>' )
	// 	i++

	// 	if (i > words1.length) clearInterval(timer); {


	// 		if (i > words1.length) {
	// 			$('#script').append('<br><br>')
	// 		a=1
	// 		i=0}

	// 	}	
	// 	},90)


	var typing = function (array,turn,clear) {
	
		
		if (turn===a) {

			
			// click = new Audio("click.mp3"); // buffers automatically when created
			// click.play();
			$('#script').append('<p>'+ array.charAt(i)+ '</p>' )
			i++


			if (i >= array.length) clearInterval(clear); {

				if (i >= array.length) {
						console.log('it works')

					$('#script').append('<br><br>')
					a=turn+1
					i=0
				}
			}	
		} 
	}







	// typing(words2,2)
	// typing(words3,3)



	
	// var timer2 = setInterval( function(){ 
	// 	console.log('happening')

	// 	if (a===1) {

			
	// 		// click = new Audio("click.mp3"); // buffers automatically when created
	// 		// click.play();
	// 		$('#script').append('<p>'+ words4.charAt(i)+ '</p>' )

	// 		i++

	// 		if (i >= words2.length) clearInterval(timer2); {

	// 			// $('#script').append('<br><br>')
	// 			// $('#script').append('<p>'+ words3.charAt(i)+ '</p>' )


	// 		}	

		
	// 	} 

		

		
	// 	},90)

	



	// var timer3 = setInterval( function(){ 
	// 		click = new Audio("click.mp3"); // buffers automatically when created
	// 		click.play();
	// 		$('#script').append('<p>'+ words3.charAt(i)+ '</p>' )
	// 	i++

	// 	if (i >= words1.length) clearInterval(timer); {

	// 	}	
	// 	},90)








// console.log($myArray1)




$(function(){


	

		





	console.log ('The dom is on!')


	$.fn.extend({
	    animateCss: function (animationName) {
	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            $(this).removeClass('animated ' + animationName);
	        });
	        return this;
    	}
	});

	$('#logo').animateCss('bounceInDown');

	$('#start').animateCss('bounceInLeft');

	$('#instruction').animateCss('bounceInRight');

	setTimeout ( function () {$('#logo').animateCss('tada')},1500);


	$('#instruction').on('click' , function () {

		$('#instruction').css({'display' : "none"});
		$('#script').slideDown();

		var timer1 = setInterval( function () { typing(words1,1,timer1)}  , 45)

		var timer2 = setInterval ( function () {typing (words2, 2 , timer2 )} , 45)

		var timer3 = setInterval (function () {typing(words3, 3 , timer3 )}, 45)

		var timer4 = setInterval( function () { typing(words4,4,timer4)}  , 45)

		var timer5 = setInterval ( function () {typing (words5, 5 , timer5 )} , 45)

		var timer6 = setInterval (function () {typing(words6, 6 , timer6 )}, 45)

		var timer7 = setInterval( function () { typing(words7,7,timer7)}  , 45)

		var timer8 = setInterval ( function () {typing (words8, 8 , timer8 )} , 45)

		var timer9 = setInterval (function () {typing(words9, 9 , timer9 )}, 45)

		var timer10 = setInterval (function () {typing(words10,10,timer10)} , 45)

	})


	$('#script').on('click', function() {
		$(this).slideUp(50)

		setTimeout(function (){ 


		$('#instruction').css({'display' : "block"})

	   },300)
	})




$start=$('#start')


setInterval(function(){
	if (restart===false) {

		hits =0 
		lifeBad = 5
		lifeMinion=1
		lifeUFO=3
		countBad=0
		countMinion=0
		countA=0
		id ="0"
		bossTime=0
		restart = true
		count=0
		$('#start').off()
		$('.hidden').css({"display" :'block' })
		$('#restart').css({'display' : 'none'})
		$('.textRestart').css({'display' : 'none' })
		$('#logo').css({'display' : 'block'})
		// $('#script').css({'display' : 'block'})
		$('#main').prepend('<div id="UFO"> </div> ')
		$('#life').prepend('<div id="tick1"> </div> <div id="tick2"> </div> <div id="tick3"> </div>')
		$('#counter').html('<p id="score">' + count + '</p>')
		$('.bad2').remove()
		$('.attack').remove()
		upgrade=false


		// spawn()

	var spawn = setInterval (function() {
		if (count%10 >= 0 && count >= 10 && bossTime ==2 ) {
			$('#main').append('<div class="bad bad2"> </div>')
			var laugh = new Audio("laugh.mp3"); // buffers automatically when created
			laugh.play()
			bossTime=1
		} else if (bossTime===1) {//nothing
		} else if (bossTime===0) {
			$('#main').append('<div class="minion bad2" id="'+id + '"> </div> ')
			id ++
			return id
		}
	},4000)



	}
},1000/24)




$start.on('click', function() {
	$('#start').css({"display" : "none"});
	$('.hidden').css({"display" :'block' });
	$('#script').css({'display' : 'none'})
	$('#instruction').css({'display' : 'none'})

	setTimeout(function () {$('#logo').animate({left:'2px',top:'50px',width:'300px',height:'200px'},500)},50);






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

	var spawn = setInterval (function() {
		if (count%10 >= 0 && count >= 10 && bossTime ==2 ) {
			$('#main').append('<div class="bad bad2"> </div>')
			var laugh = new Audio("laugh.mp3"); // buffers automatically when created
			laugh.play()
			bossTime=1
		} else if (bossTime===1) {//nothing
		} else if (bossTime===0) {
			$('#main').append('<div class="minion bad2" id="'+id + '"> </div> ')
			id ++
			return id
		}
	},4000)


	setInterval(function(){

		animateDivH($('.bad'))
		// animateDivV($('.minion'))

	},1000/24)





	// function moveViaKeyPress(elementID,direction) {
	// 	if (direction == "up") {
	// 		$(elementID).animate ({ 
	// 			bottom:'+=500px',
	// 			},100 ) 
	// 		console.log('going up')
	// 		elementID.css({'transform' : 'rotate3d(0,1,0,60deg)'})
	// 	} else if (direction=="right") {
	// 		if (parseFloat(elementID.css('left').replace('px','')) < -20 || parseFloat(elementID.css('left').replace('px','')) >560) {
	// 			console.log('too far right')
	// 		} else {
	// 			$(elementID).animate ({ 
	// 				left:'+=10px',
	// 			},0.1 )
	// 		}  
	// 			// $(elementID).css({ 'transform' : 'rotate3d(0,1,0,-50deg)'})}
	// 			// $('.missile').animate ({
	// 			// 	left:'+=10px',
	// 			// },100)
	// 			// console.log('going right')
	// 	} else if (direction=="left") {
	// 		if (parseFloat(elementID.css('left').replace('px','')) < 0 || parseFloat(elementID.css('left').replace('px','')) >(580) ) {
	// 			console.log('too far left')
	// 		} else { 
	// 			$(elementID).animate ({ 
	// 				left:'-=10px',
	// 			},0.1 )
	// 		}
	// 	}
	// }


			// $(elementID).css({ 'transform' : 'rotate3d(1,1,0,-50deg)'}) 

			// $(elementID).addClass('animated')

			// $(elementID).addClass('flipInY') 
			// $('.missile').animate ({

			// 	left:'-=10px',
			// },100)
	
// 


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




	function launchMissile() {

		// $('.missile')=$('.missile')

		// $('.missile')=$('.missile')

		

		// if ( parseFloat($('.missile').css('bottom').replace('px','') < 350 )) {
		// 	console.log('reloading')



		 	

		 

		 if ($('.missile').length == 0) {

		 	console.log('working')

			var laser = new Audio("laser.mp3"); // buffers automatically when created
			laser.play();

			var b = $("#UFO").position().left

			

			$('#main').append("<div class='missile'> </div>")

			 if (upgrade === true) {

		 	
		 		$('.missile').html('<div id="right"> </div> <div id="left"> </div>')
		 		console.log('hey')
		 		$('.missile').css({"width" : "30px"})
		 		$('.missile').css({"background-color" : "transparent" , "box-shadow":"none" , "opacity" : "1"})
				$('.missile').css({'left' :  b + 19  }) 

				$('.missile').animate({
					bottom:'1000px',

				},250)

		 	}	

			$('.missile').css({'left' :  b + 23  }) 

			

			$('.missile').animate({
				bottom:'1000px',

			},500)




		}
	}




// var laser = new Audio("laser.mp3"); // buffers automatically when created
// 		laser.play();
// 		var b = $("#UFO").position().left
		
// 		$('#main').append('<div class="missile"  </div>')
// 		$('.missile').css({'left' : b + 23 } )
// 		var $p = $('p')
// 		$('.missile').animate({
// 			bottom:'1000px'

// 		},500)  


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
				$tick.remove()
				lifeUFO --
				if (lifeUFO===0) {

		


					alert('Defeated! Press x to replay')
					youLose()
				}
			}	
		})
	},1000/24)



	setInterval(function(){
		$('.bad').each(function() {
			if ($('.missile').length > 0 ) {
				var distance_h = $(this).offset().left - $('.missile').offset().left
				var distance_v= $(this).offset().top - $('.missile').offset().top
			
				if (Math.abs(distance_h) <= 100   &&
				
				  Math.abs(distance_v) <= 100 ) {
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
						$('div #counter').html('<p class="score">' + count + '</p>')
					} else {
						var exp = new Audio("exp.mp3"); // buffers automatically when created
						exp.play();
						count=count+ hits
						if (count > 15 ) {upgrade=true}
						hits=0
						countA=0
						$('div #counter').html('<p class="score">' + count + '</p>')
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
					}
				}	
			}
		})
	},1000/24)


	var youLose = function () {
		if (lifeUFO === 0) {
			clearInterval(spawn)
			$('#UFO').remove()
			$('.hidden').css({"display" :'none' })
			$('#logo').css({'display' : 'none'})
			$('.textRestart').css({'display' : "block"})
			$('#restart').css({'display' : 'block'})
			$('#restart').on('click', function () {restart=false})
			$('#script').css({'display' : "none"})
			$('.textRestart').append('<p> Your final score is '+ count + '</p>' )
		}
	}

	setInterval(function(){ 

		var hit ="url('file:///Users/tech-a44/homework/game/images/exp.png')"
		$('.minion').each(function() {
			if (parseFloat($(this).css('top').replace('px','')) > 1200  ) {
					$(this).remove()
					console.log('nothing')
			}
			var distance_h1 = $(this).offset().left - $('#UFO').offset().left
			var distance_v2= $(this).offset().top - $('#UFO').offset().top
			if (    (distance_h1 <= 35 &&
					distance_h1 >= -35)&&
					(distance_v2 <= 35 &&
					distance_v2 >= -35 && 
					$(this).hasClass('bounceOutDown')===false)) {
				var $tick = $('#tick'+lifeUFO)
				$(this).remove()
				$tick.toggle(1000)
				lifeUFO --
				youLose()
			}
			if ($('.missile').length > 0 && $(this).hasClass('tomato') ==false)  {
				var distance_h = $(this).offset().left - $('.missile').offset().left
				var distance_v= $(this).offset().top - $('.missile').offset().top
				console.log(distance_h)
				if ((Math.abs(distance_h) <= 35) &&
					 Math.abs(distance_v) <= 35) {
					$('.missile').remove()
					hits ++
					countA = countA + hits 
					if (countA < 1) {
						$(this).addClass('animated')
						$(this).addClass('infinite')
						$(this).addClass('jello')
						count=count+hits
						hits =0
						$('div #counter').html('<p class="score">' + count + '</p>')
					} else {
						var exp = new Audio("exp.mp3"); // buffers automatically when created
						exp.play();
						count=count+ hits
						if (count > 15 ) {upgrade=true}
						hits=0
						countA=0
						$('div #counter').html('<p class="score">' + count + '</p>')
						$(this).removeClass('jello')
						$(this).css({'background-image': 'url("images/exp.png")'})
						$(this).addClass('tomato')
						$(this).addClass('animated')
						$(this).addClass('bounceOutDown')
						if (count%10===0 && count!=0) {bossTime=2}
					}
				}
			}

		})

	},1000/100)

	setInterval (function (){
		if ($('.missile').length >0 && parseFloat($('.missile').css('bottom').replace('px','')) > 600 ) {
			$('.missile').remove() }

	},1000/24)
})

})



