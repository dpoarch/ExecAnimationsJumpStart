

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

animateAll();