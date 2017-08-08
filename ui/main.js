console.log('Loaded!');

    var img = document.getElementById("madi");
    var marginLeft = 0;
    img.onclick = function() {
        setInterval( function() {
            marginLeft += 1;
            img.style.marginLeft = marginLeft.toString() + "px";
        } , "50")};
        var button = document.getElementById('counter');
        button.onclick = function(){
        var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if(request.readystate==XMLHttpRequest.DONE)
            {
                if(request.status == 200){
                    var counter = request.responseText;
                    var span = document.getElemntById('counter');
                    span.innerHTML = counter.toString();
                }
            }
        };
        request.open('GET','http://venisavitri.imad.hasura-app.io/counter',true);
        request.send(null);
        
        };