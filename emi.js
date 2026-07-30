function addEMI(){


let name =
document.getElementById("emiName").value;


let amount =
document.getElementById("emiAmount").value;


let date =
document.getElementById("emiDate").value;



if(name=="" || amount==""){


alert("Please Enter EMI Details");

return;


}



let emi = {


id: Date.now(),

name:name,

amount:Number(amount),

date:date,

status:"Running"


};



let list =
JSON.parse(
localStorage.getItem("emiList")
) || [];



list.push(emi);



localStorage.setItem(
"emiList",
JSON.stringify(list)
);



alert("EMI Added");



document.getElementById("emiName").value="";

document.getElementById("emiAmount").value="";

document.getElementById("emiDate").value="";



showEMI();


}







function showEMI(){


let box =
document.getElementById("emiList");


if(!box) return;



let list =
JSON.parse(
localStorage.getItem("emiList")
) || [];



box.innerHTML="";



let total=0;



if(list.length==0){


box.innerHTML="No EMI Added";


return;


}




list.forEach(function(item){



total += Number(item.amount);



box.innerHTML += `


<div class="card">


💳 <b>${item.name}</b>

<br>

Amount: ₹${item.amount}

<br>

Due Date: ${item.date}

<br>

Status: ${item.status}


<br><br>


<button onclick="completeEMI(${item.id})">

✅ Complete

</button>



<button onclick="deleteEMI(${item.id})">

🗑 Delete

</button>


</div>


`;



});




box.innerHTML += `

<h3>
Total EMI: ₹${total}
</h3>

`;



}








function completeEMI(id){


let list =
JSON.parse(
localStorage.getItem("emiList")
) || [];



list.forEach(function(item){


if(item.id==id){

item.status="Completed";

}


});



localStorage.setItem(
"emiList",
JSON.stringify(list)
);



showEMI();



}








function deleteEMI(id){


let list =
JSON.parse(
localStorage.getItem("emiList")
) || [];



list =
list.filter(function(item){


return item.id!=id;


});



localStorage.setItem(
"emiList",
JSON.stringify(list)
);



showEMI();


}







function goHome(){


window.location.href="../home.html";


}




showEMI();