$(function(){
	var button = $('#nav-button'),
		navWrapper = $('.nav-wrapper'),
		plus = $('#plus');
var i = 0;

TweenMax.set(navWrapper, {scale:0});

button.on('click', function(){
	if (i%2==0){
		let tl = new TimelineMax();
	 	tl.to(navWrapper, 0.7, {
	 		scale:1,
	 		ease: Elastic.easeOut.config(1, 0.3)
	 	})
	 	.to(plus, 0.4, {
	 		transformOrigin:'50% 50%',
	 		rotation:45,
	 		ease: Elastic.easeOut.config(1, 0.3)
	 	},'-=0.6')
	 	i++


	}
	else {
		let tl = new TimelineMax();
		tl.to(navWrapper, 0.3, {
			scale:0,
			ease:Linear.easeNone
		})
		.to(plus, 0.4, {
	 		transformOrigin:'50% 50%',
	 		rotation:0,
	 		ease: Elastic.easeOut.config(1, 0.3)
	 	},'-=0.2')
		i++
	}
})



})

// #00A1FF
// #33B4FF
// #66C7FF
// #99DAFF
// #CCECFF