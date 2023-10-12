function openSubject() {
    window.location.href = "../topic-page/index.html";
}
function openLogOut() {
    var logoutDropdown = document.getElementById("logoutDropdown");
    if (logoutDropdown.style.display === "block") {
        logoutDropdown.style.display = "none";
    } else {
        logoutDropdown.style.display = "block";
    }
}

function logout() {
    window.location.href = "../login-page/index.html";
}