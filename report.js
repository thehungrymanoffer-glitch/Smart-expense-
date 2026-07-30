function goHome(){

    window.location.href="../home.html";

}





function loadReport(){


let expenses =

JSON.parse(
localStorage.getItem("expenses")
) || [];



let total = 0;


let category = {};



let today = new Date();



let daily = "";

let weekly = "";

let monthly = "";




expenses.forEach(function(item){



let amount = Number(item.amount);


total += amount;




// Category

let cat = item.category || "Other";


if(!category[cat]){

    category[cat]=0;

}


category[cat]+=amount;





let date = new Date(item.date);




let diff =
Math.floor(
(today-date)/(1000*60*60*24)
);





// Daily

if(diff==0){

daily +=

"📅 "+item.name+
" ₹"+amount+
"<br>";

}





// Weekly

if(diff>=0 && diff<=6){

weekly +=

"📆 "+item.name+
" ₹"+amount+
"<br>";

}





// Monthly

if(
date.getMonth()==today.getMonth()
&&
date.getFullYear()==today.getFullYear()
){

monthly +=

"🗓 "+item.name+
" ₹"+amount+
"<br>";

}




});






document.getElementById("reportTotal").innerHTML=

"₹"+total;






document.getElementById("dailyReport").innerHTML=

daily || "No Data";



document.getElementById("weeklyReport").innerHTML=

weekly || "No Data";



document.getElementById("monthlyReport").innerHTML=

monthly || "No Data";








let categoryBox =

document.getElementById("categoryReport");



categoryBox.innerHTML="";



for(let key in category){



categoryBox.innerHTML +=

"🍔 "+key+
" : ₹"+category[key]+
"<br>";



}



if(Object.keys(category).length==0){

categoryBox.innerHTML="No Data";

}



}





loadReport();