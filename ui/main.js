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


//submit name

var submit= document.getElementById("submit_btn");
submit.onclick = function() {
    //Make request to server and send name
    //capture list of name and render it as a list
    
     var request = new XMLHttpRequest();
    
    //capture the response and set it in the variable
    
    request.onreadystatechange = function() {
        if(request.readyState == XMLHttpRequest.DONE) {
            //Take some action
            if(request.status == 200){
                var names = response.requestText;
                names= JSON.parse(names);
                var list = '';
                for (var i=0; i < names.length; i++) {
                    list += '<li>' + names[i] + '</li>'; 
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
        //not done yet
    };
    
    var nameinput = document.getElementById("name");
    var name = nameinput.value;
    request.open('GET', 'http://harshtutsy.imad.hasura-app.io/submit-name?name=' + name , true );
    request.send(null);
    
    
    
    
}












