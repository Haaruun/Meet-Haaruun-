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



	$(window).keypress(function(e) {
		var video = document.getElementById('video');
  if (e.which == 32) {
    if (video.paused == true)
      video.play();
    else
      video.pause();
  }
});

	$(document).keyup(function(evt) {
    if (evt.keyCode == 32) {
       $('h1').toggleClass('op');
}
  });


});