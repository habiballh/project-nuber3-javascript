let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let registerbtn = document.querySelector("#sing_up")

registerbtn.addEventListener("click", function (e) {
    e.preventDefault()
    if (username.value === "" || email.value === "" || password.value === "")
        alert("please fill all data")
    else {
        localStorage.setItem("username", username.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)

        setTimeout(() => {
            window.location = "login.html"
        }, 1500);
    }
})
