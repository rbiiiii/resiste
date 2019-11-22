// Source credit: http://thenewcode.com/279/Rotate-Elements-on-Scroll-with-JavaScript

var cube = document.getElementById('cube'),
    scene = document.getElementById('scene'),
    baseUnit = 70,
    deg = 0,
    mouseX = 0;

;(function(){

  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  
  throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function(){
  deg = baseUnit+window.pageYOffset/20;
  cube.style.transform = "rotate3d(10,2,2,-" + deg + "deg)";
})