// PAGE SWITCHER
function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
}

// SIGNUP
document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index1.html";
});

// LOGIN
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index1.html";
});

// SWITCH PAGES
document.getElementById("goToLogin").onclick = () => showPage("loginPage");
document.getElementById("goToSignup").onclick = () => showPage("signupPage");

// GOOGLE SIGN IN
document.getElementById("signupGoogleBtn").onclick = () =>
    document.getElementById("googleModal").classList.add("active");

document.getElementById("loginGoogleBtn").onclick = () =>
    document.getElementById("googleModal").classList.add("active");

function closeGoogleModal() {
    document.getElementById("googleModal").classList.remove("active");
}

function selectGoogleAccount(email) {
    closeGoogleModal();
    window.location.href = "index1.html";
}

// CLOSE WHEN CLICK OUTSIDE
document.getElementById("googleModal").addEventListener("click", function (e) {
    if (e.target === this) closeGoogleModal();
});
// Save login state when user logs in or signs up
function setLoggedIn() {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index1.html";
}

// Clear login state on logout
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "html1.html"; 
}
// Run only on main page
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginSignupBtn"); 
    const logoutBtn = document.getElementById("logoutBtn");

    if (localStorage.getItem("loggedIn") === "true") {
        loginBtn.style.display = "none";
        logoutBtn.style.display = "inline-block";
    } else {
        loginBtn.style.display = "inline-block";
        logoutBtn.style.display = "none";
    }

    logoutBtn.addEventListener("click", logout);
});
