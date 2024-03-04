console.log("Hello World. ", 43, 409.23, true, false, ["saging", 43, true]);

console.log(typeof ("Hello World. "), typeof(696969696), typeof([saging]))

// string = "asd", "shshshhshs", "696"
// number = 12345, 40.2, 60.4
// booloean = true, false
// object = Array [], JSON {...}

let btnRegister = document.querySelector("#btnRegister");
let txtUsername = document.querySelector("#txtUsername");
let txtPassword = document.querySelector("#txtPassword");
let txtConfirmPassword = document.querySelector("#txtConfirmPassword");
let txtAge = document.querySelector("#txtAge");

btnRegister.onclick = function(){ 
    register(txtUsername.value);
}

function register (username, password, confirmPassword, age) {
    alert(username);
    //alert("Register button has been clicked.")

}