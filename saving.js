function createGoal(){

    let name =
    document.getElementById("goalName").value;


    let target =
    document.getElementById("targetAmount").value;



    if(name=="" || target==""){

        alert("Fill all details");

        return;

    }



    let goals =
    JSON.parse(
        localStorage.getItem("goals")
    ) || [];



    let goal = {

        id: Date.now(),

        name:name,

        target:Number(target),

        saved:0

    };



    goals.push(goal);



    localStorage.setItem(
        "goals",
        JSON.stringify(goals)
    );



    alert("Goal Created");


    loadGoals();


}





function loadGoals(){


    let goals =
    JSON.parse(
        localStorage.getItem("goals")
    ) || [];



    let list =
    document.getElementById("goalList");


    let select =
    document.getElementById("goalSelect");



    list.innerHTML="";

    select.innerHTML="";



    if(goals.length==0){

        list.innerHTML="No Goal";

        return;

    }





    goals.forEach(function(goal){



        list.innerHTML += `

        <div class="card">

        🎯 ${goal.name}

        <br>

        Target: ₹${goal.target}

        <br>

        Saved: ₹${goal.saved}

        <br>

        Remaining: ₹${goal.target - goal.saved}


        </div>

        `;




        select.innerHTML += `

        <option value="${goal.id}">

        ${goal.name}

        </option>

        `;



    });


}





function addMoney(){


    let id =
    document.getElementById("goalSelect").value;


    let amount =
    document.getElementById("saveAmount").value;



    if(amount==""){

        alert("Enter Amount");

        return;

    }




    let goals =
    JSON.parse(
        localStorage.getItem("goals")
    ) || [];



    goals.forEach(function(goal){


        if(goal.id == id){

            goal.saved += Number(amount);

        }


    });




    localStorage.setItem(

        "goals",

        JSON.stringify(goals)

    );



    alert("Money Added");


    loadGoals();


}





function goHome(){

    window.location.href="../home.html";

}





loadGoals();