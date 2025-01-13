
    
    function validation(){
        
        var user = document.getElementById('user').value;
        var pass = document.getElementById('pass').value;
        var confpass = document.getElementById('confpass').value;
        var email = document.getElementById('email').value;
        var mobile = document.getElementById('mobile').value;

        var userr = document.getElementById('userr').innerHTML="";
        var passs = document.getElementById('passs').innerHTML="";
        var confpasss = document.getElementById('confpasss').innerHTML="";
        var emaill = document.getElementById('emaill').innerHTML="";
        var mobilee = document.getElementById('mobilee').innerHTML="";


        if(user == ""){
            document.getElementById("userr").innerHTML="please fill the user name.";
            return false;

        }
        if((user.length <=5) || (user.length > 20)){
            document.getElementById("userr").innerHTML = "the user length must be between 5to 20";
            return false;
        }
        if (!isNaN(user)){
            document.getElementById("userr").innerHTML = "enter characters only";
            return false;
        }
        if (pass == ""){
            document.getElementById('passs').innerHTML = "please enter your password";
            return false;
        }
        if((pass.length <= 5) || (pass.length > 20)){
            document.getElementById("passs").innerHTML = "the password length must be between 5to 20"; 
            return false;
        }
        if(pass != confpass){
            document.getElementById("confpasss").innerHTML = "password do not match";
            return false;
        }
        if (confpass == ""){
            document.getElementById('confpasss').innerHTML = "please enter your password";
            return false;
        }
        if(email == ""){            
            document.getElementById('emaill').innerHTML = "please enter your email address";
            return false;
        }
        if(email.indexOf('@') <= 0){            
            document.getElementById('emaill').innerHTML = "@ invalid position";
            return false;
        }
        if((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')){            
            document.getElementById('emaill').innerHTML = " . invalid position";
            return false;
        }
        if (mobile == ""){
            document.getElementById('mobilee').innerHTML = "please enter your mobile number";
            return false;
        }
        if (isNaN(mobile) ){
            document.getElementById('mobilee').innerHTML = "enter only digits";
            return false;
        }
        if (mobile.length != 10){
            document.getElementById('mobilee').innerHTML = "enter only 10 digits";
            return false;
        }

        signIn(user);
        return false;
    }
        function signIn(username){
        // var username = document.getElementById('username').value;
        alert( username + ", you are signed in successfully!")
        }

