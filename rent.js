function addRent(){


    let name =
    document.getElementById("rentName").value;


    let amount =
    document.getElementById("rentAmount").value;


    let date =
    document.getElementById("rentDate").value;



    if(name=="" || amount==""){


        alert("Fill Rent Details");

        return;

    }




    let rent = {


        id: Date.now(),

        name:name,

        amount:Number(amount),

        date:date


    };




    let rentList =

    JSON.parse(
        localStorage.getItem("rentList")
    ) || [];




    rentList.push(rent);



    localStorage.setItem(

        "rentList",

        JSON.stringify(rentList)

    );



    alert("Rent Added");


    loadRent();


}







function loadRent(){


    let box =
    document.getElementById("rentList");



    if(!box) return;



    let rentList =

    JSON.parse(
        localStorage.getItem("rentList")
    ) || [];



    box.innerHTML="";



    let total = 0;



    rentList.forEach(function(item){



        total += Number(item.amount);




        box.innerHTML += `


        <div class="card">


        🏠 ${item.name}


        <br>


        Amount: ₹${item.amount}


        <br>


        Due Date: ${item.date}



        <br><br>



        <button onclick="deleteRent(${item.id})">

        🗑 Delete

        </button>



        </div>


        `;


    });





    if(rentList.length==0){


        box.innerHTML="No Rent";


    }





    box.innerHTML += `


    <h3>

    Total Monthly Rent: ₹${total}

    </h3>


    `;


}








function deleteRent(id){



    let rentList =

    JSON.parse(
        localStorage.getItem("rentList")
    ) || [];




    rentList = rentList.filter(function(item){


        return item.id != id;


    });




    localStorage.setItem(

        "rentList",

        JSON.stringify(rentList)

    );



    loadRent();


}







function goHome(){


    window.location.href="../home.html";


}






loadRent();