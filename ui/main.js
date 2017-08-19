//Counter Code
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    
    //Render the response to the HTML
    counter=counter+1;
    var sc=document.getElementById('count');
    sc.innerHTML=counter.toString();
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