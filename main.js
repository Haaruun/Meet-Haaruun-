$(function(){
	$('.button').hover(function(){
		$(this).toggleClass('turn');
	});

	

	$('.button').click(function(){
		var video = document.getElementById('video');
		if(video.paused){
 		video.play();
 		$('h1').css('display', 'none');
	}else{
		video.pause();
		$('h1').css('display', 'block');
	}

	});



	

});