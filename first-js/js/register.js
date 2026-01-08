function register() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const fullname = document.getElementById('fullname').value.trim();

    if (username === "" || password === "" || confirmPassword === "" || fullname === "") {
        alert("Please fill this up");
        return;
    }

    if (password !== confirmPassword) {
        alert("Wrong password: passwords do not match");
        return;
    }

    if (username === "Reinelle" && password === "nelle" && fullname === "Reinelle Trongco") {
        alert("Login successful");
    } else {
        alert("Username, full name, or password is incorrect");
    }
}
