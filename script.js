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
  {
    name: "Harry Potter",
    author: "J. K. Rowling",
    pages: 351,
    read: "Not read yet",
  },
  {
    name: "Darth Plagueis",
    author: "George Lucas",
    pages: 354,
    read: "Not read yet",
  },
];

class Book {
  constructor(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary() {
  myLibrary = [];
  const book = new Book(title.value, author.value, pages.value);
  myLibrary.push(book);
  viewLibrary();
}
