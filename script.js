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
        <li>${book.read}</li>
      </ul>
      `;
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
  });
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
  constructor(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = "Not read yet";
  }
  markRead() {
    if (this.read === "Not read yet") {
      this.read = "Read";
    } else {
      this.read = "Not read yet";
    }
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
        <li>${book.read}</li>
      </ul>
      `;
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
