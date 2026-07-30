function saveUser(){


let name =
document.getElementById("userName").value;



if(name==""){

alert("Enter Name");

return;

}



localStorage.setItem(
"userName",
name
);



showUser();



}






function showUser(){


let name =
localStorage.getItem("userName") || "";



let box =
document.getElementById("showUser");



if(box){

box.innerHTML =
"Hello, "+name;

}


}








function savePassword(){


let pass =
document.getElementById("appPassword").value;



if(pass.length!=4){


alert("Enter 4 Digit Password");

return;


}



localStorage.setItem(
"appPassword",
pass
);



alert("Password Saved");


}








function saveTheme(){


let theme =
document.getElementById("themeSelect").value;



localStorage.setItem(
"theme",
theme
);



alert("Theme Saved");


applyTheme();


}







function applyTheme(){


let theme =
localStorage.getItem("theme");



if(theme=="dark"){


document.body.style.background="#222";

document.body.style.color="white";


}



else if(theme=="light"){


document.body.style.background="white";

document.body.style.color="black";


}


}




function clearData(){


let confirmDelete =
confirm(
"Delete All App Data?"
);



if(confirmDelete){


localStorage.clear();


alert("All Data Deleted");


window.location.href="../home.html";


}



}







function goHome(){


window.location.href="../home.html";


}





showUser();

applyTheme();