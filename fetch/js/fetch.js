async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const output = document.getElementById("output");

    if (!username || !password) {
        output.textContent = "Please enter username and password.";
        return;
    }

    try {
        const response = await fetch("http://localhost/api/login.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Login failed");
        }


        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", username);

        output.textContent = "Login successful. Redirecting...";

        // Redirect
        setTimeout(() => {
            window.location.href = "student_list.html";
        }, 800);

    } catch (error) {
        output.textContent = "❌ " + error.message;
    }
}
