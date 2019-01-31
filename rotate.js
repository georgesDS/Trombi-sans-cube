

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block"; 
   
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// Code Carroussel


/*
* Flux 3D Carousel
* Author: Dean Coulter
* Licensed under the MIT license
* 
* Version 0.1
*/

(function($){
$.fn.carousel3d = function(args){

  var el = ({
    carousel_frame: $(this)
  });

  var size = el.carousel_frame.children().size(); 
  var panelSize = el.carousel_frame.width();
  var translateZ = Math.round( ( panelSize / 2 ) / Math.tan( Math.PI / size ) );

  el.carousel_frame.css({
    "transform": "rotateY(0deg) translateZ(-"+translateZ+"px)"
  })

  var rotateY = 0;
  var rotate_int = 100;
  var ry =  378.5/size;
  var box = 0;

  function animate_slider(){
    rotateY = ry*rotate_int;
    $("#test").text(rotateY+", "+rotate_int+", ");
    
    for(i=0;i<size;i++){
      var z = (rotate_int*ry)+(i*ry);   
      el.carousel_frame.children("figure:eq("+i+")").css({
        "transform":"rotateY("+z+"deg ) translateZ("+translateZ+"px)"
      });
    }
    
    rotateY = 0;
    box = 0; // reset rotateY, ready for re-use
  }

  animate_slider();

  $(".next").on("click", function(){
    rotate_int -=1;
    animate_slider();
  });

  $(".prev").on("click", function(){
    rotate_int +=1;
    animate_slider();
  });

  el.carousel_frame.children().on("click", function(){
    new_int = -1*$(this).index();
    if(new_int < rotate_int+(-1*(size/2)) ){
      rotate_int = size + new_int;
    } else {
      rotate_int = new_int;
    }

    animate_slider();
  }); 

}
})(jQuery);


