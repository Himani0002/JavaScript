
let user = JSON.parse(localStorage.getItem("signup")) || []

const handleUser = (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let loggedUser = user.filter((ele) => ele.email == email && ele.password == password)

    if (loggedUser.length == 1) {
        alert("logged in ")
        window.location.href = "/index.html"
       
    }
    else {

        window.location.href = "/pages/Signup.html"

    }



};

