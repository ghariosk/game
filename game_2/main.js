var myArray=['hello' ,'hi' , 'html' , 'javascript' ]



$( function() {

	console.log ('The dom is on!')

// $('.button').on('click' , function() {

// 	console.log('hi')
// })


// 3




var $button=$('#button')



$button.click (function () {

	console.log('hi')

	
})


function hi () {

	console.log('hi')


}





	function hello () {

		var b = $('#text').val()

		console.log (b)

		if (b===$('#word').text()) {
			console.log('k')
			$('p').remove()
		}
	}

})

