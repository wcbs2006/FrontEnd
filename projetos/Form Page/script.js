let email = document.getElementById("email")
let password = document.getElementById("password")
let submit = document.getElementById("submit")
let emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
let passwordRegex =  /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/



email.addEventListener("input", (event) => { 
    event.preventDefault()

})

// submit.addEventListener("submit", (event) => {
// event.preventDefault();

// if(email==emailRegex || email!=null){
//     return submit
// }else{
//     alert("E-mail inválido")
// }

// })

