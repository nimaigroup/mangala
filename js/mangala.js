$(document).ready(function() {
	console.log("mangala_btn.js loaded");
	
	
	
	

	var $box = $('.box');

	var bellSound = $("#bellSound")[0];
	

	function playBell() {
		bellSound.currentTime= 0;
		bellSound.play();
	}

	function moveBox(e) {
		TweenMax.staggerTo($box, .2, {
			css : {
				left : e.pageX,
				top : e.pageY
			}
		}, 0.2);
	};

	$(window).on('mousemove', moveBox);

	$("body").css("background-color", "white");

	var mFade = new TimelineMax({
		repeat : 0,
		repeatDelay : 0
	});

	mFade.add(TweenMax.staggerFrom(".m_logo", .09, {
		scale : 4,
		opacity : 0,
		ease : Back.easeOut,
		paused : false
	}, .05));

	mFade.add(TweenMax.staggerTo(".logo-m", .2, {
		scale : .96,
		ease : Back.easeOut
	}, .05));

	mFade.add(TweenMax.staggerTo(".logo-m", .02, {
		scale : 1,
		ease : Back.easeOut
	}, .05));

	// mFade.add(TweenMax.staggerFrom(".m_logo", .08, {scale:4, autoAlpha:0,  rotationX:360,  transformOrigin:"100% 50%", ease:Back.easeOut, reversed:false}, .08));

	$(".link.soundcloud").click(function() {
		console.log(".link.soundcloud Pressed");
		playBell();
		mFade.play();
		
	});

	$(".link.facebook").click(function() {
		console.log(".link.soundcloud Pressed");
		playBell();
		mFade.reverse();
	});

	$("#testBtn1").click(function() {
		console.log("#testBtn1 Pressed");
		playBell();
		if (mFade.reversed()) {
			mFade.play();
		} else {
			mFade.reverse();
		}

	});

	$(".icon-logo").click(function(e) {
		e.preventDefault();
		console.log(".icon-logo Button Pressed");
		TweenMax.to(".m_logo", 2, {
			opacity : 100
		});

	});

	$("body").click(function(event) {
		$("#log").html("clicked: " + event.target.nodeName);

	});
	
	$(".link").click(function() {

	});

});
