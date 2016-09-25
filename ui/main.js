//console.log('Loaded!');
//change text of main-text
//var element=document.getElementById("main-text");
//element.innerHTML= "New Value";

//MAking the image move when clicked on it
//var img= document.getElementById("madi")
//var marginleft= 0;
//function moveRight(){
  //  marginleft=marginleft + 3;
    //img.style.marginLeft= marginleft +"px";
    
//}
//img.onclick = function () {
  //Every 100mili-second, apply moveright  function
 // var interval= setInterval(moveRight, 50);
// };


var button = document.getElementById('counter');

button.onclick = function() {
    //Create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and set it in the variable
    
    request.onreadystatechange = function() {
        if(request.readyState == XMLHttpRequest.DONE) {
            //Take some action
            if(request.status == 200){
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
        //not done yet
    };
    
    
    request.open('GET', 'http://harshtutsy.imad.hasura-app.io/counter' , true );
    request.send(null);
};