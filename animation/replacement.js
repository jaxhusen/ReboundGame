var imgArray = new Array();

for(i = 0; i < 4; i++){
    imgArray[i] = new Image();
    imgArray[i].src = 'images/fotboll' + i + '.jpg';
}

var counter = 0;

function rotate(){
    if(counter > imgArray.length-1)
    counter = 0;
    document.getElementById('ball').src = imgArray[counter].src;
    counter ++;
    setTimeout('rotate()', 1000);
}

window.addEventListener('load', rotate);