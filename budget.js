function saveBudget(){


let amount =
document.getElementById("budgetAmount").value;



if(amount==""){


alert("Enter Budget Amount");

return;


}



localStorage.setItem(

"monthlyBudget",

amount

);



alert("Budget Saved");


loadBudget();


}







function loadBudget(){



let budget =

Number(
localStorage.getItem("monthlyBudget")
) || 0;





let expenses =

JSON.parse(
localStorage.getItem("expenses")
) || [];





let used = 0;



expenses.forEach(function(item){


used += Number(item.amount);


});






let remaining =

budget - used;





let daily =

remaining / 30;







document.getElementById("showBudget").innerHTML =

"₹" + budget;



document.getElementById("usedBudget").innerHTML =

"₹" + used;



document.getElementById("remainingBudget").innerHTML =

"₹" + remaining.toFixed(0);



document.getElementById("dailyLimit").innerHTML =

"₹" + daily.toFixed(0);







let warning =

document.getElementById("budgetWarning");





if(remaining < 0){


warning.innerHTML =

"⚠️ Budget Over";


}

else if(remaining < budget*0.2){


warning.innerHTML =

"⚠️ Low Budget";


}

else{


warning.innerHTML =

"✅ Budget Safe";


}




}







function goHome(){


window.location.href="../home.html";


}





loadBudget();