//Counter Code
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    
    //Create a request
    var request=new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readystate==XMLHttpRequest.DONE)
        {
            //Take some action
            if(request.status==200)
            {
               var  counter=request.responseText;
               var span=document.getEleemntById('count');
               span.innerHTML=counter;
                
            }
        }
    };
    //Make request to the server
    request.open('GET','http://shreyashambhawi.imad.hasura-app.io/counter',true);
    request.send(null);
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