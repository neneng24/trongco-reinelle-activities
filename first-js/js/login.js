function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if((username == "Reinelle") && (password == "nelle")) {
         alert("Login successful");
    }

    else{
        alert("Username or password is incorrect");
    }
}