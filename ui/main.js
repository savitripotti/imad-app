  var button = document.getElementById('counter');

    var counter = 0;   
      button.onclick = function(){
         function(){ 
             counter = counter + 1;
           var span = document.getElemntById('count');
             span.innerHTML = counter.toString();
         }
      };