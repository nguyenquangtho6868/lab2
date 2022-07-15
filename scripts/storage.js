"use strict";
//Hàm lưu giữ liệu
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
//Hàm lấy dữ liệu

function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
//Lấy dữ liệu user từ localStorage
const users = getFromStorage("userArr") ? getFromStorage("userArr") : [];
//chuyển đối từ Object sang class Instance
const userArr = users.map((user) => parseUser(user));
//lấy giữ liêu todo từ localStorage
const todo = getFromStorage("todoArr") ? getFromStorage("todoArr") : [];
//chuyển đối từ Object sang class Instance

const todoArr = todo.map((tasks) => parseTask(tasks));

//lấy dữ liệu đăng nhập
let currentUser = getFromStorage("currentUser")
  ? parseUser(getFromStorage("currentUser"))
  : null;

console.log(currentUser);
//lấy dữ lieu todo

//hàm để chuyển từ JS Object sang Class Instance
function parseUser(userData) {
  const user = new User(
    userData.firstname,
    userData.lastname,
    userData.username,
    userData.password,
    userData.pagesize,
    userData.category
  );

  return user;
}
function parseTask(taskdata) {
  const tasks = new Task(taskdata.task, taskdata.owner, taskdata.isDone);

  return tasks;
}
