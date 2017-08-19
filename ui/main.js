//Counter Code
var button=document.getElementById('counter');
button.onclick=function(){
    
    //Create a request
    var request=new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange =function(){ 
        if(request.readyState === XMLHttpRequest.DONE)
        {
        alert('HELLO');
            //Take some action
            if(request.status === 200)
            {
               var  counter=request.responseText;
               //alert("HELLO");
               var span=document.getElementById('countme');
               span.innerHTML = counter.toString();
                
            }
        }
    };
    //Make request to the server
    request.open('GET','http://shreyashambhawi.imad.hasura-app.io/counter',true);
    request.send();
};



/** @@@@@@@@@@@@   OLD CODE  @@@@@@@@@@@@@@@

console.log('Loaded!');

//Change text of a div

var element = document.getElementById("main-text")
element.innerHTML = "New Value :P"

//Move image

/*var img = document.getElementById("madi")
img.onclick=function(){
    img.style.marginLeft="100px"
}

//Gradually move image

var img = document.getElementById("madi")

var marginLeft=0;

function moveRight(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
}

img.onclick=function(){
    var interval=setInterval(moveRight,50)
}
*/