console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML="new value";
//to move the object
var img = document.getElementById('madi');
var marginLeft = '0';
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft.toString() + 'px';
}

img.onClick = function(){
    var interval = setInterval(moveRight, 100);
};

