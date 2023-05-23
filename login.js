const username = document.querySelector("#name")
const password = document.querySelector("#password")

let UserArr = ['Pearl','Phalya','Payal','Parv']
let PassArr = ['Pearl','Phalya','Payal','Parv']

function UsernameError(){
    username.style.border = "2px solid rgb(255,0,0)"
    document.querySelector("#usernameError").textContent = "Username doesn't match"
}

function PasswordError(){
    password.style.border = "2px solid rgb(255,0,0)"
    document.querySelector("#passwordError").textContent = "Incorrect Password"
}

function reset(){
    document.querySelector("#usernameError").textContent = ""
    document.querySelector("#passwordError").textContent = ""
    username.style.border = "2px solid rgb(0,0,0)"
    password.style.border = "2px solid rgb(0,0,0)"
}

function authenticate(){
    reset()
    let user = false
    let pass = false
    for (let i = 0; i < UserArr.length; i++) {
        if (username.value==UserArr[i]){
            if(password.value==PassArr[i]){
                console.log("Authenticated")
                window.location.assign("attend.html")
                user = false
                pass = false
            }
            else{
                pass = true
            }
        }else{
            user = true
        }
    }

    if(user==true){
        UsernameError()
    }
    if(pass == true){
        PasswordError()
    }
}