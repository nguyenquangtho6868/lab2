"use strict";
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const btnSubmit = document.getElementById("btn-submit");
let isValidate = true;
//bắt sự kiện nút log in
btnSubmit.addEventListener("click", function () {
  const user = {
    password: inputPassword.value,
    username: inputUsername.value,
  };

  validate(user);
  console.log(isValidate);
  if (isValidate) {
    const user = userArr.find(
      (item) =>
        item.username === inputUsername.value &&
        item.password === inputPassword.value
    );
    if (user) {
      console.log(user);
      alert("Đăng nhập thành công !");
      saveToStorage("currentUser", user);
      window.location.href = "../index.html";
    } else {
      alert("Thông tin đăng nhập không đúng");
    }
  }
});
//hàm validate login
function validate(user) {
  //Không có trường nào bị bỏ trống.

  if (user.username.trim().length === 0) {
    alert("Vui lòng nhập User Name !");
    isValidate = false;
  } else {
    isValidate = true;
  }
  if (user.password.trim().length === 0) {
    alert("Vui lòng nhập Password !");
    isValidate = false;
  } else {
    isValidate = true;
  }

  return isValidate;
}
