console.log('Loaded!');

//to move the object
var img = document.getElementById("madi");
var marginLeft = 0;

img.onClick = function(){
setInterval(function  () {
    marginLeft+= 10;
    img.style.marginLeft = marginLeft.toString() + 'px';
}
, 100);
};

