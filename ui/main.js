console.log('Loaded!');
//change text of main-text
var element=document.getElementById("main-text");
element.innerHTML= "New Value";

//MAking the image move when clicked on it
var img= document.getElementById("madi")
img.onclick = function () {
  img.style.marginLeft= '100px';
  
}; 