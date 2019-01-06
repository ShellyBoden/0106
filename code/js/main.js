
$(function () { 

	var flightpath = {
						entry : {
							curviness: 1.5,
							autoRotate: true,
							values: [
									{x: 1400,	y: 0}
								]
						}
					};
					// init controller
					var controller = new ScrollMagic.Controller();

					// create tween
					var tween = new TimelineMax()
						.add(TweenMax.to($("#scissors"),5000000000, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}));
//								.add(TweenMax.to($("#scissors"), 3, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

					// build scene
					var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 600, offset: 100})
									.setPin("#target")
									.setTween(tween)
									.addIndicators() // add indicators (requires plugin)
									.addTo(controller);

	var flightpath_1 = {
						entry : {
							// curviness: 1.5,
							// autoRotate: true,
							values: [
									{x: 0,	y: 500}
								]
						}
					};
					// init controller
					var controller_1 = new ScrollMagic.Controller();

					// create tween
					var tween_1 = new TimelineMax()
						.add(TweenMax.to($("#cloth_2"),5000000000, {css:{bezier:flightpath_1.entry}, ease:Power1.easeInOut}));
//								.add(TweenMax.to($("#scissors"), 3, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

					// build scene
					var scene_1 = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 600, offset: 100})
									.setPin("#target")
									.setTween(tween_1)
									.addIndicators() // add indicators (requires plugin)
									.addTo(controller_1);


//------------------------------------------------
					var  scissorspath= {
						entry : {
							curviness: 1.5,
							autoRotate: true,
							values: [
									{x: 1800,	y: 0}
								]
						}
					};
					// init controller
					var controller_scissorspath = new ScrollMagic.Controller();

					// create tween
					var tween_scissorspath = new TimelineMax()
						.add(TweenMax.to($("#scissors"),5000000000, {css:{bezier:scissorspath.entry}, ease:Power1.easeInOut}));
					//								.add(TweenMax.to($("#scissors"), 3, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

					// build scene
					var scene_scissorspath = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 180, offset: 100})
									.setPin("#target")
									.setTween(tween_scissorspath)
									.addIndicators() // add indicators (requires plugin)
									.addTo(controller_scissorspath);
//------------------------------------------------
					var clothpath = {
						entry : {
							// curviness: 1.5,
							// autoRotate: true,
							values: [
									{x: 0,	y: 1000}
								]
						}
					};
					// init controller
					var controller_clothpath = new ScrollMagic.Controller();

					// create tween
					var tween_clothpath = new TimelineMax()
						.add(TweenMax.to($("#cloth_2"),5000000000, {css:{bezier:clothpath.entry}, ease:Power1.easeInOut}));
					//								.add(TweenMax.to($("#scissors"), 3, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

					// build scene
					var scene_clothpath = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 180, offset: 100})
									.setPin("#target")
									.setTween(tween_clothpath)
									.addIndicators() // add indicators (requires plugin)
									.addTo(controller_clothpath);
//---------------------------------------------------------------------------
//------------------------------------------------
					// init controller
					var controller_clothpath_2 = new ScrollMagic.Controller();

					// build scene
					var scene_clothpath_2 = new ScrollMagic.Scene({triggerElement: "#trigger2"})
									// trigger a velocity opaticy animation
									.setVelocity("#cloth_2", {opacity: 0}, {duration: 400})
									.addIndicators() // add indicators (requires plugin)
									.addTo(controller_clothpath_2);
//---------------------------------------------------------------------------
})		
	
	

