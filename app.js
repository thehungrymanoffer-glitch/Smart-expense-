function openPage(page){

    window.location.href = "pages/" + page;

}



function logout(){

    window.location.href = "index.html";

}







function saveSalary(){


    let salary =
    document.getElementById("salaryInput").value;



    if(salary==""){

        alert("Enter Salary");
        return;

    }



    localStorage.setItem(
        "salary",
        salary
    );



    loadHome();


}








function loadHome(){



// Salary

let salary =
Number(localStorage.getItem("salary")) || 0;



let salaryBox =
document.getElementById("salary");


if(salaryBox){

    salaryBox.innerHTML="₹"+salary;

}






// Expense

let expenses =
JSON.parse(localStorage.getItem("expenses")) || [];



let totalExpense = 0;


expenses.forEach(function(item){

    totalExpense += Number(item.amount);

});



let expenseBox =
document.getElementById("todayExpense");


if(expenseBox){

    expenseBox.innerHTML="₹"+totalExpense;

}








// EMI

let emiList =
JSON.parse(localStorage.getItem("emiList")) || [];



let totalEMI = 0;



let emiBox =
document.getElementById("emiSummary");



if(emiBox){


    emiBox.innerHTML="";


    emiList.forEach(function(item){


        totalEMI += Number(item.amount);



        emiBox.innerHTML +=

        "💳 "+item.name+
        "<br>₹"+item.amount+
        "<hr>";



    });



    if(emiList.length==0){

        emiBox.innerHTML="No EMI";

    }


}








// Rent


let rentList =
JSON.parse(localStorage.getItem("rentList")) || [];



let totalRent = 0;



let rentBox =
document.getElementById("rentSummary");



if(rentBox){


    rentBox.innerHTML="";


    rentList.forEach(function(item){


        totalRent += Number(item.amount);



        rentBox.innerHTML +=

        "🏠 "+item.name+
        "<br>₹"+item.amount+
        "<hr>";



    });



    if(rentList.length==0){

        rentBox.innerHTML="No Rent";

    }


}







// Budget


let monthlyBudget =

Number(
localStorage.getItem("monthlyBudget")
) || 0;



let usedBudget = totalExpense;



let remainingBudget =

monthlyBudget - usedBudget;



let dailyLimit =

remainingBudget / 30;



let mb =
document.getElementById("monthlyBudget");


let ub =
document.getElementById("homeUsedBudget");


let rb =
document.getElementById("homeRemainingBudget");


let dl =
document.getElementById("homeDailyLimit");



if(mb){

mb.innerHTML="₹"+monthlyBudget;

}



if(ub){

ub.innerHTML="₹"+usedBudget;

}



if(rb){

rb.innerHTML="₹"+remainingBudget;

}



if(dl){

dl.innerHTML="₹"+dailyLimit.toFixed(0);

}







// Available Balance


let balance =

salary -
totalEMI -
totalRent -
totalExpense;



let balanceBox =

document.getElementById("availableBalance");


if(balanceBox){

balanceBox.innerHTML="₹"+balance;

}







// Money Overview


let os =
document.getElementById("overviewSalary");


let oe =
document.getElementById("overviewEMI");


let or =
document.getElementById("overviewRent");


let ox =
document.getElementById("overviewExpense");


let ob =
document.getElementById("overviewBalance");



if(os){

os.innerHTML="₹"+salary;

}


if(oe){

oe.innerHTML="₹"+totalEMI;

}


if(or){

or.innerHTML="₹"+totalRent;

}


if(ox){

ox.innerHTML="₹"+totalExpense;

}


if(ob){

ob.innerHTML="₹"+balance;

}







// Saving Goals


let goals =

JSON.parse(localStorage.getItem("goals")) || [];



let goalBox =
document.getElementById("homeGoals");



if(goalBox){


goalBox.innerHTML="";


if(goals.length==0){


goalBox.innerHTML="No Goal";


}
else{


goals.forEach(function(goal){


goalBox.innerHTML +=


`
🎯 ${goal.name}

<br>

Target: ₹${goal.target}

<br>

Saved: ₹${goal.saved}

<br>

Remaining: ₹${goal.target-goal.saved}

<hr>
`;


});


}


}



}




loadHome();