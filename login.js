function checkPassword(){


let enteredPassword =

document.getElementById("loginPassword").value;



let savedPassword =

localStorage.getItem("appPassword");





// যদি password set না করা থাকে

if(!savedPassword){


window.location.href="home.html";


return;


}






if(enteredPassword == savedPassword){



localStorage.setItem(
"login",
"true"
);



window.location.href="home.html";



}

else{


document.getElementById("loginMessage").innerHTML =

"❌ Wrong Password";


}



}








function showUser(){


let name =

localStorage.getItem("userName") || "User";



let box =

document.getElementById("welcomeUser");



if(box){

box.innerHTML =

"Welcome, "+name;


}



}



showUser();