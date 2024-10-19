
let user = JSON.parse(localStorage.getItem("signup")) || []

const signup = (e) => {
  e.preventDefault()
  let data = {
    email: document.getElementById("email").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    country: document.getElementById("country").value,
    image: document.getElementById("image").value
  }

  if ((data.email == null || data.email.length == 0) || (data.password == null || data.password.length == 0) || (data.username == null || data.username.length == 0)) {
    alert("Please enter valid data")
    return
  }

  user.push(data)
  localStorage.setItem("signup", JSON.stringify(user))

  window.location.href = "/index.html"
}
document.querySelector("#signup").addEventListener("submit", signup)