console.log('Loaded!');





    var img = document.getElementById("madi");
    var marginRight = 0;
    img.onclick = function() {
        setInterval( function() {
            marginRight += 5;
            img.style.marginRight = marginRight.toString() + "px";
        } , "50")};
    

