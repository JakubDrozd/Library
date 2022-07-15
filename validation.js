const form = document.getElementById("myForm");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const pagesValue = pages.value.trim();
  if (titleValue === "") {
    setErrorFor(title, `Title cannot be blank`);
  }
}

function setErrorFor(input, message) {
  const small = input.parentElement.querySelector("small");
  small.innerText = message;
}
