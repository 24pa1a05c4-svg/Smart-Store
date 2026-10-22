const form = document.getElementById("loginForm");


form.addEventListener("submit", async (e) => {

    e.preventDefault();


    const user = {

        email: document.getElementById("email").value.trim(),

        password: document.getElementById("password").value

    };


    try {

        const response = await fetch(
            "/api/auth/login",
            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(user)

            }
        );


        const data = await response.json();


        console.log("LOGIN RESPONSE:", data);


        alert(data.message);


        if (data.success) {

            // Save JWT token
            localStorage.setItem(
                "token",
                data.token
            );


            // Save user information
            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );


            window.location.href = "products.html";

        }

    }

    catch (err) {

        console.log("LOGIN ERROR:", err);

        alert("Login Failed");

    }

});