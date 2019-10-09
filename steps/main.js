

$(".text-wrapper").lettering();


function fadeSlideRight(index,delay=6000){
  var animate1 = anime.timeline({
    loop: false,
    autoplay: false,
  });
  animate1.add({
    targets: '.animejs-fade-slide-right-'+index+' span span',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 200,
    delay: function(el, i) {
        return 20 * (i+1) + delay
    }
  });
  return animate1;
}

var fsRight1 = fadeSlideRight(1);
var fsRight2 = fadeSlideRight(2);
var fsRight3 = fadeSlideRight(3);
var fsRight4 = fadeSlideRight(4);

function animateAll(){
  fsRight1.play();
  fsRight2.play();
  fsRight3.play();
  fsRight4.play();
}
function resetAll(){
  fsRight1.restart();
  fsRight2.restart();
  fsRight3.restart();
  fsRight4.restart();
}



window.addEventListener("load", function() {
  document.querySelector('body').classList.add('loaded');

  var listClassIndices = function(name,i,n){
    var str ="";
    for (x = i; x <= n; x++) {
      str += name+"-"+i+", ";
    }
    return str.substring(0, str.length - 2); 
  }

  var bindIdtoAnimateClass = function(name){
    $('#'+name).addClass(name);
  }

  var bindIdstoAnimateClass = function(name,i,n){
    $(listClassIndices('#'+name, i, n)).addClass(name);
  }

    window.iFrameResizer = {
      targetOrigin: '*',
      onMessage: function(message) 
      {
          var messageData = JSON.parse(message);    
          if(messageData["verticalDisplayRatio"]>0){
            $('#animate-steps-fade-right-1').addClass('animate-steps-fade-right');
            $('#animate-steps-fade-right-2').addClass('animate-steps-fade-right');
            $('#animate-steps-fade-right-3').addClass('animate-steps-fade-right');
            $('#animate-steps-scale-1').addClass('animate-steps-scale');
            $('#animate-steps-scale-2').addClass('animate-steps-scale');
            $('#animate-steps-scale-3').addClass('animate-steps-scale');
            $('#animate-steps-scale-4').addClass('animate-steps-scale');
            $('#animate-steps-scale-5').addClass('animate-steps-scale');
            $('#animate-steps-text-focus-1').addClass('animate-steps-text-focus');
            $('#animate-steps-text-focus-2').addClass('animate-steps-text-focus');
            $('#animate-steps-text-focus-3').addClass('animate-steps-text-focus');
            $('#animate-steps-text-focus-4').addClass('animate-steps-text-focus');
            $('#animate-steps-text-focus-5').addClass('animate-steps-text-focus');
            $('#animate-steps-fade-down-1').addClass('animate-steps-fade-down');
            $('#animate-steps-fade-down-2').addClass('animate-steps-fade-down');
            $('#animate-steps-fade-left-1').addClass('animate-steps-fade-left');
            $('#animate-steps-fade-left-2').addClass('animate-steps-fade-left');
            $('#animate-steps-fade-left-3').addClass('animate-steps-fade-left');
            animateAll(); 
          }
      },        
  } 
});