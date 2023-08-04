var username = document.getElementById("user");
var password = document.getElementById("password");
var checkbox = document.getElementById("showpssword");

// Storing the username and password in the local storage by using the set Item method
localStorage.setItem("USERNAME:", "Gauravkaushik");
localStorage.setItem("PASSWORD:", "12345");

// checking whether the input value os user and password are valid or not 

function ValidCredentials() {
    if (username.value == localStorage.getItem("USERNAME:") &&
        password.value == localStorage.getItem("PASSWORD:")) {
        alert("login allowed");
        location.assign("index.html");
    }
    else {
        alert("Login was unsuccessful, please check your username and password");
        return false;
    }
};

//Checking the state of checkbox , based on that we are showing the password
// if empty then show alert or make the state remain false
function Checkbox() {
    if (password.type === "password") {
        password.type = password.value;
    }
    if (password.value == "") {
        checkbox.checked = false;
        alert("You haven't entered anything yet!!");
    }
};









