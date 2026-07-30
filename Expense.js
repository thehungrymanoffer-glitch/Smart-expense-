function addExpense(){


let name =
document.getElementById("expenseName").value;


let amount =
document.getElementById("expenseAmount").value;


let category =
document.getElementById("expenseCategory").value;



if(name=="" || amount==""){


alert("Enter Expense Details");

return;


}




let expense = {


id: Date.now(),

name:name,

amount:Number(amount),

category:category,

date:new Date().toISOString()


};





let list =

JSON.parse(
localStorage.getItem("expenses")
) || [];





list.push(expense);





localStorage.setItem(

"expenses",

JSON.stringify(list)

);





alert("Expense Added");





document.getElementById("expenseName").value="";

document.getElementById("expenseAmount").value="";





showExpense();


}








function showExpense(){



let box =
document.getElementById("expenseList");



if(!box) return;




let list =

JSON.parse(
localStorage.getItem("expenses")
) || [];



box.innerHTML="";




if(list.length==0){


box.innerHTML="No Expense";


return;


}






list.reverse().forEach(function(item){



box.innerHTML += `


<div class="card">


💸 ${item.name}


<br>


Amount: ₹${item.amount}


<br>


Category: ${item.category}


<br>


Date: ${new Date(item.date).toLocaleDateString()}



<br><br>



<button onclick="deleteExpense(${item.id})">

🗑 Delete

</button>



</div>


`;



});




}








function deleteExpense(id){



let list =

JSON.parse(
localStorage.getItem("expenses")
) || [];




list = list.filter(function(item){


return item.id != id;


});




localStorage.setItem(

"expenses",

JSON.stringify(list)

);




showExpense();



}








function goHome(){


window.location.href="../home.html";


}







showExpense();