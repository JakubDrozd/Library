window.addEventListener("load", viewLibrary);

const container = document.querySelector(".container");

const title = document.querySelector("#title");

const author = document.querySelector("#author");

const pages = document.querySelector("#pages");

const newbook = document
  .querySelector("#newbook")
  .addEventListener("click", addBookToLibrary);

function viewLibrary() {
  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    container.appendChild(bookDiv);
    bookDiv.innerHTML = `
      <h3>${book.name}</h3>
      <ul>
        <li>by ${book.author}</li>
        <li>${book.pages} pages</li>
      </ul>
      `;
    const readButton = document.createElement("button");
    bookDiv.appendChild(readButton);

    readButton.textContent = "Not read";
    readButton.style.width = "200px";
    readButton.style.textAlign = "center";
    readButton.style.backgroundColor = "green";
    readButton.style.border = "none";
    readButton.style.borderRadius = "10px";
    readButton.style.color = "white";
    readButton.style.fontWeight = "bold";
    readButton.style.marginBottom = "1rem";
    readButton.addEventListener("click", markRead);

    const deleteButton = document.createElement("button");
    bookDiv.appendChild(deleteButton);
    deleteButton.textContent = "X";
    deleteButton.style.width = "200px";
    deleteButton.style.textAlign = "center";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.border = "none";
    deleteButton.style.borderRadius = "10px";
    deleteButton.style.color = "white";
    deleteButton.style.fontWeight = "bold";
    deleteButton.addEventListener("click", deleteBook);
  });
}

function markRead(e) {
  if (e.target.textContent === "Not read") {
    const parent = e.target.parentElement;
    parent.style.backgroundColor = "lime";
    e.target.textContent = "Read";
  } else if (e.target.textContent === "Read") {
    const parent = e.target.parentElement;
    parent.style.backgroundColor = "white";
    e.target.textContent = "Not read";
  }
}

function deleteBook(e) {
  const parent = e.target.parentElement;
  parent.remove();
}

let myLibrary = [
  {
    name: "The Hobbit",
    author: "J.R.R Tolkien",
    pages: 295,
  },
  {
    name: "Harry Potter",
    author: "J. K. Rowling",
    pages: 351,
  },
  {
    name: "Darth Plagueis",
    author: "George Lucas",
    pages: 354,
  },
];

class Book {
  constructor(name, author, pages) {
    this.name = name ? name : "Unknown";
    this.author = author ? author : "Unknown";
    this.pages = pages ? pages : "Unknown";
  }
}

function addBookToLibrary() {
  const duplicate = myLibrary.find((book) => {
    if (book.name === title.value) {
      return true;
    }

    return false;
  });
  if (duplicate === undefined) {
    const book = new Book(title.value, author.value, pages.value);
    myLibrary.push(book);
    const bookDiv = document.createElement("div");
    container.appendChild(bookDiv);
    bookDiv.innerHTML = `
      <h3>${book.name}</h3>
      <ul>
        <li>by ${book.author}</li>
        <li>${book.pages} pages</li>
      </ul>
      `;
    const readButton = document.createElement("button");
    bookDiv.appendChild(readButton);
    readButton.textContent = "Not read";
    readButton.style.width = "150px";
    readButton.style.textAlign = "center";
    readButton.style.backgroundColor = "green";
    readButton.style.border = "none";
    readButton.style.borderRadius = "10px";
    readButton.style.color = "white";
    readButton.style.fontWeight = "bold";
    readButton.style.marginBottom = "0.2rem";
    readButton.addEventListener("click", markRead);

    const deleteButton = document.createElement("button");
    bookDiv.appendChild(deleteButton);
    deleteButton.textContent = "X";
    deleteButton.style.width = "40px";
    deleteButton.style.textAlign = "center";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.border = "none";
    deleteButton.style.borderRadius = "10px";
    deleteButton.style.color = "white";
    deleteButton.style.fontWeight = "bold";
    deleteButton.addEventListener("click", deleteBook);
    duplicatePara.textContent = "";
  } else {
    duplicatePara.textContent = "Book is already in library";
  }
}

const duplicatePara = document.querySelector(".duplicate");
