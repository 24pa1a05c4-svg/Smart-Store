const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const user = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        password: document.getElementById("password").value

    };

    try{

        const response = await fetch("http://localhost:3000/api/auth/register",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(user)

        });

        const data = await response.json();

        alert(data.message);

        if(data.success){

            window.location.href="login.html";

        }

    }
    catch(err){

        console.log(err);

        alert("Registration Failed");

    }

});