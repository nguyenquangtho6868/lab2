"use strict";
const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");
const btnSubmit = document.getElementById("btn-submit");
//bắt sự kiện nút setting

btnSubmit.addEventListener("click", function () {
  //gắn pageSize vs category cho user
  currentUser.pagesize = Number.parseInt(inputPageSize.value);
  currentUser.category = inputCategory.value;
  saveToStorage("currentUser", currentUser);
  //chuyển qua trang new
  window.location.href = "../pages/news.html";
});
