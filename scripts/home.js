"use strict";
const wellcometomassage = document.getElementById("welcome-message");
const loginmodal = document.getElementById("login-modal");
const maincontent = document.getElementById("main-content");
const btnLogout = document.getElementById("btn-logout");
displayHome();
//hàm block and none theo trạng thái đăng nhập
function displayHome() {
  if (currentUser) {
    loginmodal.style.display = "none";
    maincontent.style.display = "block";
    wellcometomassage.textContent = `Welcome ${currentUser.username}`;
  } else {
    loginmodal.style.display = "block";
    maincontent.style.display = "none";
  }
}
//bắt sự kiện nut logout
btnLogout.addEventListener("click", function () {
  console.log("ok");
  currentUser = null;
  saveToStorage("currentUser", currentUser);

  displayHome();
});
