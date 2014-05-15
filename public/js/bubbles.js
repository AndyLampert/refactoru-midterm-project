var controller;
$(document).ready(function($) {
	// init controller
	controller = new ScrollMagic({vertical: true});

	// build tween
	var tween = new TimelineMax ()
		.add([
			// TweenMax.fromTo(".bubble", 1, {top: 400}, {top: -250, ease: Linear.easeNone}),
			// TweenMax.fromTo("#parallaxText .layer2", 1, {scale: 2, autoAlpha: 0.3, top: 150}, {top: -175, ease: Linear.easeNone})
		]);

	var expandBtn = new TimelineMax ()
		.add([

		]);

	// build scene
	var firstBubble = new ScrollScene({triggerElement: "#yoga-headstand-legs", duration: $(window).height()})
					.setTween(TweenMax.fromTo(".bubble:eq(0)", 1, {top: 1000}, {top: -350, ease: Linear.easeNone}))
					.addTo(controller);
	var secondBubble = new ScrollScene({triggerElement: "#snowboard-girl", duration: $(window).height()})
					.setTween(TweenMax.fromTo(".bubble:eq(1)", 1, {top: 1000}, {top: -350, ease: Linear.easeNone}))
					.addTo(controller);
	var thirdBubble = new ScrollScene({triggerElement: "#yoga-faraway", duration: $(window).height()})
					.setTween(TweenMax.fromTo(".bubble:eq(2)", 1, {top: 1000}, {top: -350, ease: Linear.easeNone}))
					.addTo(controller);
});
