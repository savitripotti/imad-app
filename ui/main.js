        var submit = document.getElementById('submit_btn');
        submit.onclick=function(){
             var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if(request.readyState === XMLHttpRequest.DONE)
            {
                if(request.status === 200){
                     var username = document.getElementById('username').value;
                     var password = document.getElementById('password').value;
                  console.log('user logged in');
                 alert('logged in successfully');
                }
                else if(request.status === 403){
                    alert('username/password is invalid');
                }
               else if(request.stauts === 500){
                   alert('some internal error');
               }     
                }
        };
         console.log(username);
         console.log(password);
         request.open('POST','http://venisavitri.imad.hasura-app.io/login' ,true);
         request.setRequestHeader('Content-Type','application/json');
        
        request.send(JSON.stringify({username: username , password: password}));
        
        };

           
                   console.log('ok');
    
