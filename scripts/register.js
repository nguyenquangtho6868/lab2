"use strict";
const inputFirstname = document.getElementById("input-firstname");
const inputLastname = document.getElementById("input-lastname");
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPasswordConfirm = document.getElementById("input-password-confirm");
const btnSubmit = document.getElementById("btn-submit");
let isValidate = true;
console.log(isValidate);

//Bắt sự kiện nut submit
btnSubmit.addEventListener("click", function () {
  console.log("ok");

  const user = new User(
    inputFirstname.value,
    inputLastname.value,
    inputUsername.value,
    inputPassword.value
  );
  console.log(user);
  console.log(userArr);

  //kiểm tra validate
  validate(user);
  console.log(isValidate);

  if (isValidate) {
    //thêm user vào mảng
    userArr.push(user);
    saveToStorage("userArr", userArr);
    console.log(userArr);
    alert("Đăng ký thành công");
    window.location.href = "../pages/login.html";
  }
});
//hàm validate đky
function validate(user) {
  //Không có trường nào bị bỏ trống.
  if (user.firstname.trim().length === 0) {
    alert("Vui lòng nhập First Name !");
    isValidate = false;
  }
  if (user.lastname.trim().length === 0) {
    alert("Vui lòng nhập Last Name !");
    isValidate = false;
  }
  if (user.username.trim().lastname === 0) {
    alert("Vui lòng nhập User Name !");
    isValidate = false;
  }
  if (user.password.trim().length === 0) {
    alert("Vui lòng nhập Password !");
    isValidate = false;
  }
  if (inputPasswordConfirm.value.trim() === "") {
    alert("Vui lòng nhập PonfirmPassword !");
    isValidate = false;
  }
  // Username không được trùng với Username của các người dùng trước đó.
  if (
    !userArr.every((item) => (item.userName !== user.userName ? true : false))
  ) {
    alert("Username đã được dùng!");
    isValidate = false;
  }
  if (user.password !== inputPasswordConfirm.value) {
    alert("Password và Confirm Password không giống nhau.");
    isValidate = false;
  } else {
    isValidate = true;
  }
  if (user.password.length <= 8) {
    alert("Password phải có nhiều hơn 8 ký tự.");
    isValidate = false;
  }
  return isValidate;
}
