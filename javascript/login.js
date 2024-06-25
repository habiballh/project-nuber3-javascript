
let username = document.querySelector("#username")
let password = document.querySelector("#password")
let login  = document.querySelector("#sing_in")
  
getuser = localStorage.getItem("username")
getpass = localStorage.getItem("password")

login.addEventListener("click",function(e){
e.preventDefault()
    if(username.value===""||password.value==="")
        alert("please fill the data")
    else{
      if(getuser.trim() === username.value && getpass.trim() === password.value){

        setTimeout(() => {
            window.location= "html.html"
        }, 1000);
    }else {
      alert("username or password is wrong")
      }
    
    }
})