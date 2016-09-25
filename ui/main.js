console.log('Loaded!');
//change text of main-text
var element=document.getElementById("main-text");
element.innerHTML= "New Value";

//MAking the image move when clicked on it
var img= document.getElementById("madi")
var marginleft= 0;
function moveRight(){
    marginleft=marginleft + 10;
    img.style.marginLeft= marginleft +"px";
    
}
img.onclick = function () {
  //Every 100mili-second, apply moveright  function
  var interval= setInterval(moveRight, 100);
}; 