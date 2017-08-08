console.log('Loaded!');

    var img = document.getElementById("madi");
    var marginLeft = 0;
    img.onclick = function() {
        setInterval( function() {
            marginLeft += 1;
            img.style.marginLeft = marginLeft.toString() + "px";
        } , "50")};
