window.addEventListener("load", viewLibrary);

const container = document.querySelector(".container");

const title = document.querySelector("#title");

const author = document.querySelector("#author");

const pages = document.querySelector("#pages");

const newbook = document
  .querySelector("#newbook")
  .addEventListener("click", addBookToLibrary);

function viewLibrary() {
  let i = 1;
  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add(`book`);
    bookDiv.classList.add(`book${i}`);
    container.appendChild(bookDiv);
    bookDiv.innerHTML = `
      <h3>${book.name}</h3>
      <ul>
        <li>by ${book.author}</li>
        <li>${book.pages} pages</li>
        <li>${book.read}</li>
      </ul>
      `;
    i++;
  });
}

let myLibrary = [
  {
    name: "The Hobbit",
    author: "J.R.R Tolkien",
    pages: 295,
    read: "Not read yet",
  },
];

let queue = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  myLibrary = [];
  const book = new Book(title.value, author.value, pages.value);
  myLibrary.push(book);
  viewLibrary();
}

let harryPotter = new Book(
  "Harry Potter",
  "J. K. Rowling",
  351,
  "Not read yet"
);

myLibrary.push(harryPotter);
