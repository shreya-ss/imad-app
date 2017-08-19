//Counter Code
var button=document.getElementById('counter');
button.onclick=function(){
    
    //Create a request
    var request=new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange =function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
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


//Submit a new name

var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick= function(){
    //Make request to the server and send the name
    var request=new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange =function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            //Take some action
            if(request.status === 200)
            {
              //Capture a list of names and render it as a list
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=0 ; i<names.length ; i++){
                    list += '<li>' + names[i] + '</li>';
                }
                var ul=document.getElementById('namelist');
                ul.innerHTML = list;
                
            }
        }
    };
    //Make request to the server
    request.open('GET','http://shreyashambhawi.imad.hasura-app.io/submit-name?name='+name,true);
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