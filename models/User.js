"use strict";
// Tạo Class User
class User {
  constructor(firstname, lastname, username, password, pagesize, category) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    this.pagesize = pagesize;
    this.category = category;
  }
}
//tạo class Task
class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}
