console.log('Loaded!');


`<button>Click me to move image</button>`;

'<img src="ui/madi.png" id="image" />';


    var img = document.getElementById("madi");
    var marginLeft = 0;
    img.onclick = function() {
        setInterval( function() {
            marginLeft += 10;
            img.style.marginLeft = marginLeft.toString() + "px";
        } , "100")};
    

