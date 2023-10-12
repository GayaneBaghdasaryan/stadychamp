
function auth() {
  const email = document.querySelector('.email').value;
  const password = document.querySelector('.password').value;

  if (email === "samsmith@mail.com" && password === "12345") {
    window.location.href = "../home-page/index.html";
  } else {
    alert("Login failed. Please check your credentials.");
  }
};
function openSingUp(){
  window.location.href = "../singup-page/index.html";
}
