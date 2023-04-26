

function subscribe(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if(name.length == 0){
        alert("Please enter your name.");
    }else if(email.length == 0){
        alert("Please enter your Email");
    }else{
        alert("Welcome " + name + ", to Nenadiriya family. Now you can get our latest news with " + email + ", email you provided.")
    }
}

