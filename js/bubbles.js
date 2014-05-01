	var controller;
	$(document).ready(function($) {
		// init controller
		controller = new ScrollMagic({vertical: true});

		// build tween
		var tween = new TimelineMax ()
			.add([
				TweenMax.fromTo(".bubble", 1, {top: 300}, {top: -150, ease: Linear.easeNone}),
				// TweenMax.fromTo("#parallaxText .layer2", 1, {scale: 2, autoAlpha: 0.3, top: 150}, {top: -175, ease: Linear.easeNone})
			]);

		// build scene
		var firstBubble = new ScrollScene({triggerElement: "#yoga-headstand-legs", duration: $(window).height()})
						.setTween(tween)
						.addTo(controller);
		var secondBubble = new ScrollScene({triggerElement: "#yoga-headstand-legs", duration: $(window).height()})
						.setTween(tween)
						.addTo(controller);
		var thirdBubble = new ScrollScene({triggerElement: "#yoga-headstand-legs", duration: $(window).height()})
						.setTween(tween)
						.addTo(controller);
		var forthBubble = new ScrollScene({triggerElement: "#yoga-headstand-legs", duration: $(window).height()})
						.setTween(tween)
						.addTo(controller);

	});
