setTimeout(function(){


let password =

localStorage.getItem("appPassword");



if(password){


window.location.href="index.html";


}
else{


window.location.href="home.html";


}



},3000);