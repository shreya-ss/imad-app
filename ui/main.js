console.log('Loaded!');

//Change text of a div

var element = document.getElementById("main-text")
element.innerHTML = "New Value :P"

//Move image

var img = document.getElementById("madi")
img.onclick=function(){
    img.style.marginLeft="100px"
}