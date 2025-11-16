// SHOW/HIDE LOGIN & LOGOUT BASED ON STATUS
window.onload = function () {
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    const isLoggedIn = localStorage.getItem("loggedIn");

    if (isLoggedIn === "true") {
        loginBtn.style.display = "none";
        logoutBtn.style.display = "inline-block";
    } else {
        loginBtn.style.display = "inline-block";
        logoutBtn.style.display = "none";
    }
};

// LOGOUT
document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("loggedIn");
    window.location.href = "html1.html";  // login/signup page
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    setLoggedIn();
});

document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
    setLoggedIn();
});
