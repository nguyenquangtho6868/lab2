"use strict";

// Người dùng đã đăng nhập
if (currentUser) {
  const todoList = document.getElementById("todo-list");
  const btnAdd = document.getElementById("btn-add");
  const inputTask = document.getElementById("input-task");

  displayTodoList();

  // Hàm hiển thị Todo List
  function displayTodoList() {
    let html = "";
    // Từ mảng todoArr lọc các task của user đang đăng nhập
    todoArr
      .filter((todo) => todo.owner === currentUser.username)
      .forEach(function (todo) {
        html += `
        <li class=${todo.isDone ? "checked" : ""} >${
          todo.task
        }<span class = "close"  >x</span></li>`;
      });
    todoList.innerHTML = html;

    // Thêm các sự kiện
    eventToggleTasks();
    eventDeleteTasks();
  }

  // Thêm sự kiện cho nút Add để thêm task
  btnAdd.addEventListener("click", function () {
    // Kiểm tra đã nhập task hay chưa
    if (inputTask.value.trim().length === 0) {
      alert("Cần nhập nhiệm vụ!");
    } else {
      console.log(currentUser.username);
      let todo = new Task(inputTask.value, currentUser.username, false);
      // Thêm task mới vào todoArr
      todoArr.push(todo);
      // Lưu todoArr vào localStorage
      saveToStorage("todoArr", todoArr);
      // Hiển thị lại list nhiệm vụ
      displayTodoList();
      // Reset dữ liệu trong form nhập
      inputTask.value = "";
    }
  });

  // Hàm Toggle Task (đã làm hay chưa làm)
  function eventToggleTasks() {
    document.querySelectorAll("#todo-list li").forEach(function (liEl) {
      liEl.addEventListener("click", function (e) {
        if (e.target !== liEl.children[0]) {
          console.log(e.target);
          console.log(liEl.children);
          liEl.classList.toggle("checked");
          const todo = todoArr.find(
            (todoItem) =>
              todoItem.owner === currentUser.username &&
              todoItem.task === liEl.textContent.slice(0, -1)
          );
          console.log(liEl.textContent.length);
          todo.isDone = liEl.classList.contains("checked") ? true : false;

          // Lưu cập nhật vào localStorage
          saveToStorage("todoArr", todoArr);
        }
      });
    });
  }

  // Hàm xóa Task lựa chọn
  function eventDeleteTasks() {
    document.querySelectorAll("#todo-list .close").forEach(function (closeEl) {
      closeEl.addEventListener("click", function () {
        // Xác nhận xóa hay không
        const isDelete = confirm("Bạn chắc chắn muốn xóa?");
        if (isDelete) {
          // Xác định vị trí task cần xóa trong todoArr
          const index = todoArr.findIndex(
            (item) =>
              item.owner === currentUser.username &&
              item.task === closeEl.parentElement.textContent.slice(0, -1)
          );

          // Xóa task khỏi todoArr
          todoArr.splice(index, 1);
          // Cập nhật lại localStorage
          saveToStorage("todoArr", todoArr);
          // Hiển thị lại Todo list
          displayTodoList();
        }
      });
    });
  }
} else {
  alert("Cần đăng nhập để truy cập ứng dụng");
  window.location.href = "../index.html";
}
