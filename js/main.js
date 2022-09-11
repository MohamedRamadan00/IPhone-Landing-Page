/** events*/
let img = document.querySelector('.imgg'),
    bc = document.querySelector('.body');
function change(phone){
    img.src = phone;
}
function changeColor(color){
    bc.style.background = color;
}
//slide show
//array contain all image
//function slideshow
let i = 0;
let simg=["./img/0.png","./img/1.png","./img/2.png","./img/3.png","./img/4.png"];

//expression function
let slide = function(){
    document.slide.src = simg[i];
    if(i < simg.length - 1 ){
        i++;
    }else{
        i=0 ; 
    }
    setTimeout("slide()" , 3000);
}
slide();