"use strict";
const newContainer = document.getElementById("news-container");
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");
const pageNum = document.getElementById("page-num");
const btnSubmit = document.getElementById("btn-submit");
const inputsearch = document.getElementById("input-query");
let isValidate = true;
getDataNews("us", 1);
let totalResults = 0;

async function getDataNews(search, page) {
  try {
    //kết nối vs API
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&page=${page}&pageSize=${
        currentUser.pagesize ? currentUser.pagesize : 10
      }&apiKey=d1bf76383354462d9145799c46e6e239`
    );
    const data = await res.json();
    //totalResults = data.totalResults;
    console.log(data);
    renderData(data);
  } catch (err) {
    //thông báo lổi
    alert("ERROR:" + err.message);
  }
}
//hàm hiển thị tin
function renderData(data) {
  totalResults = data.totalResults;
  console.log(totalResults);
  chekNext();
  chekPrev();

  let html = "";
  data.articles.forEach((article) => {
    html += `
    <div class="card flex-row flex-wrap">
    <div class="card mb-3" style="">
      <div class="row no-gutters">
        <div class="col-md-4">
        <img
          src=${article.urlToImage}
          class="card-img"
         
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
         
          </div>
          <h5 class="card-title">
          ${article.title}
          </h5>
          <p class="card-text">
           ${article.content}
          </p>
          <a
            href="${article.url}"
            class="btn btn-primary"
            >View</a
          >
        </div>
        </div>
        </div>
        </div>
        `;
    newContainer.innerHTML = html;
  });
}
//Hàm kiểm tra Prev
function chekPrev() {
  if (pageNum.textContent == 1) {
    btnPrev.style.display = "none";
  } else {
    btnPrev.style.display = "block";
  }
}
//hàm kiểm tra Next
function chekNext() {
  if (pageNum.textContent == Math.ceil(totalResults / 5)) {
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "block";
  }
}
//bắt dự kiện nút Next
btnNext.addEventListener("click", function () {
  getDataNews("us", ++pageNum.textContent);
});
//bắt sự kiênh nut prev
btnPrev.addEventListener("click", function () {
  getDataNews("us", --pageNum.textContent);
});
// hàm valide từ khoá
function validate(user) {
  //Không có trường nào bị bỏ trống.

  if (user.search.trim().length === 0) {
    alert("Vui lòng nhập Từ khoá !");
    isValidate = false;
  } else {
    isValidate = true;
  }

  return isValidate;
}
//Bắt sự kiện nut search
btnSubmit.addEventListener("click", function () {
  const user = {
    search: inputsearch.value,
  };
  validate(user);
  getDataNews(user.search, 1);
  pageNum.textContent = 1;
  inputsearch.value = "";
});
