const container = document.querySelector(".container");

const newBookTitle = document.getElementById("title");
const newBookAuthor = document.getElementById("author");
const newBookPages = document.getElementById("pages");

let newBookTitleValue = "";

newBookTitle.addEventListener("change", (e) => {
  newBookTitleValue = e.target.value;
});

class Book {
  constructor(title, author, pages) {
    this.title = title ? title : "Unknown";
    this.author = author ? author : "Unknown";
    this.pages = pages ? pages : "Unknown";
  }
  addBookToLibrary() {
    if (!myLibrary.find((book) => book.title === newBookTitleValue)) {
      const newBook = new Book(title.value, author.value, pages.value);
      myLibrary.push(newBook);
      createCard(title.value, author.value, pages.value);
      duplicatePara.textContent = "";
    } else {
      duplicatePara.textContent = "This book is already in library";
    }
  }
}

const newBookButton = document
  .querySelector("#newbook")
  .addEventListener(
    "click",
    new Book(newBookTitle, newBookAuthor, newBookPages).addBookToLibrary
  );

let myLibrary = [
  new Book("The Hobbit", "J.R.R Tolkien", 295),
  new Book("Harry Potter", "J. K. Rowling", 351),
  new Book("Darth Plagueis", "George Lucas", 354),
];

const createCard = (title, author, pages) => {
  //CREATE CARD
  const el = document.createElement("div");
  container.appendChild(el);
  el.innerHTML = `
    <h3 value='${title}'>${title}</h3>
    <ul>
      <li>by ${author}</li>
      <li>${pages} pages</li>
    </ul>
    `;
  //READ-BUTTON
  const readButton = document.createElement("button");
  el.appendChild(readButton);
  readButton.classList.add("read-button");
  readButton.textContent = "Not read";
  readButton.addEventListener("click", markRead);
  //DELETE-BUTTON
  const deleteButton = document.createElement("button");
  el.appendChild(deleteButton);
  deleteButton.setAttribute("value", title);
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Remove from library";
  deleteButton.addEventListener("click", deleteBook);
  return { el };
};

//RENDERING BOOKS
window.addEventListener(
  "load",
  myLibrary.forEach((book) => createCard(book.title, book.author, book.pages))
);

//CHECK IF BOOK IS IN LIBRARY
function checkForDuplicate() {
  myLibrary.find((book) => {
    if (book.title === newBookTitle) {
      return true;
    } else {
      return false;
    }
  });
}

//MARK READ
function markRead(e) {
  if (e.target.textContent === "Not read") {
    const parent = e.target.parentElement;
    parent.style.backgroundColor = "lime";
    e.target.textContent = "Read";
  } else if (e.target.textContent === "Read") {
    const parent = e.target.parentElement;
    parent.style.backgroundColor = "#f0eef1";
    e.target.textContent = "Not read";
  }
}

function deleteBook(e) {
  const index = myLibrary.findIndex((book) => book.name === e.target.value);
  myLibrary.splice(index, 1);
  const parent = e.target.parentElement;
  parent.remove();
}

const duplicatePara = document.querySelector(".duplicate");

// MODAL ----------------------------------------------------------

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal === null) return;

  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal === null) {
    return;
  }
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
