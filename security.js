function checkPassword(){


    let savedPassword =
    localStorage.getItem("password");



    if(!savedPassword){


        let newPassword =
        prompt("Create 4 Digit Password");



        if(newPassword && newPassword.length==4){


            localStorage.setItem(
                "password",
                newPassword
            );


            window.location.href="home.html";


        }
        else{


            alert(
            "Password must be 4 digit"
            );


        }


    }

    else{


        let input =
        prompt("Enter Password");



        if(input == savedPassword){


            window.location.href="home.html";


        }

        else{


            alert(
            "Wrong Password"
            );


        }


    }


}





function forgotPassword(){


    let reset =
    confirm(
    "Reset Password?"
    );



    if(reset){


        localStorage.removeItem(
            "password"
        );


        alert(
        "Password Reset. Create New Password"
        );


        location.reload();


    }


}