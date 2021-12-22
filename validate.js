document.querySelector("button").addEventListener("click",validate);

function validate(){
var firstname=document.getElementById("fname").value;
var lastname=document.getElementById("lname").value;
var email=document.getElementById("email").value;
var password=document.getElementById("pass").value;

if((firstname=="")){
document.querySelector(".fn").classList.add("error-display");
setTimeout(function(){
    document.querySelector(".fn").classList.remove("error-display");
},2000);
}else if(/^[A-Za-z]+$/.test(firstname)){

    if(firstname.length<3){
        document.querySelector(".fn").classList.add("error-display");
        setTimeout(function(){
            document.querySelector(".fn").classList.remove("error-display");
        },2000);
    }
}else{
    document.querySelector(".fn").classList.add("error-display");
    setTimeout(function(){
        document.querySelector(".fn").classList.remove("error-display");
    },2000);
    return (false)
}


if((lastname=="")){
    document.querySelector(".ln").classList.add("error-display");
    setTimeout(function(){
        document.querySelector(".ln").classList.remove("error-display");
    },2000);
    }else if(/^[A-Za-z]+$/.test(lastname)){


    }else{
        document.querySelector(".ln").classList.add("error-display");
    setTimeout(function(){
        document.querySelector(".ln").classList.remove("error-display");
    },2000);

    }

if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    
        return (true)
  }else{
    document.querySelector(".em").classList.add("error-display");
    setTimeout(function(){
        document.querySelector(".em").classList.remove("error-display");
    },2000);
   
  }
  if(password.length<3){
    document.querySelector(".pa").classList.add("error-display");
    setTimeout(function(){
        document.querySelector(".pa").classList.remove("error-display");
    },2000);
}


 
}


