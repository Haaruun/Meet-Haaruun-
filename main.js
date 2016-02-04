// 
$(function(){


var Video = document.getElementById('Video');
var playPause = document.getElementById('playPause');    
var Seek = document.getElementById('inputSeek');
//var mute = document.getElementById('mute');
var Volume = document.getElementById('inputVolume');
//var fullScreen = document.getElementById('fullscreen');    




  $('#playPause').click(function(){
       if (Video.paused){
            Video.play();
            $('#playPause').html('| |');
        }else{
            Video.pause();
            $('#playPause').html('▶');
        }        
});

    
   var muteBtn = document.getElementById('mute');
muteBtn.addEventListener('click', function(){
	if(Video.muted == false){
		Video.muted = true;
        $('#mute').html('<i class="fa fa-volume-off"></i>');
	}else{
		Video.muted = false;
        $('#mute').html('<i class="fa fa-volume-up"></i>');

	}
});
    
    inputVolume.addEventListener("change", function(){
        Video.volume = inputVolume.value;
    });
    
    
    
    
// var fullScreen = document.getElementById('fullscreen');
// fullScreen.addEventListener('click', function(){
// 	if(Video.requestFullscreen){
// 		Video.requestFullscreen();
//         $('main').addClass('full');
//          $('.con').addClass('maincon');
// 	}else if (Video.mozRequestFullScreen) {
//     Video.mozRequestFullScreen(); // Firefox
//         $('main').addClass('full');
//          $('.con').addClass('maincon');
//   } else if (Video.webkitRequestFullscreen) {
//     Video.webkitRequestFullscreen(); // Chrome and Safari
//        $('.con').addClass('maincon');
//   }
// });
    
    
    
    Video.addEventListener('timeupdate', function(){
        var pct = Video.currentTime / Video.duration * 100;
        Seek.value = pct;
         
        Video.onended = function(e) {
        $('#playPause').html('▶');
           Seek.value = 0;
        };
        
        
    });
    
    
    Seek.addEventListener('change', function(){
        var videoTime = Seek.value * Video.duration / 100;
        Video.currentTime = videoTime;
    });
      
  

     

setTimeout(function(){
   $('.wrap').fadeOut('fast');
  }, 4500);



  
});
