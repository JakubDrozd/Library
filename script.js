const container = document.querySelector(".container");

class Book {
  constructor(name, author, pages) {
    this.name = name ? name : "Unknown";
    this.author = author ? author : "Unknown";
    this.pages = pages ? pages : "Unknown";
  }
  addBookToLibrary() {
    if (!checkForDuplicate(myLibrary)) {
      const newBook = new Book(title.value, author.value, pages.value);
      myLibrary.push(newBook);
      generateCard(this.title.value, author.value, pages.value);
    }
  }
  deleteBook(e) {
    const parent = e.target.parentElement;
    parent.remove();
  }
}

const newBookButton = document
  .querySelector("#newbook")
  .addEventListener("click", Book.addBookToLibrary);

let myLibrary = [
  new Book("The Hobbit", "J.R.R Tolkien", 295),
  new Book("Harry Potter", "J. K. Rowling", 351),
  new Book("Darth Plagueis", "George Lucas", 354),
];

const createCard = (title, author, pages) => {
  const el = document.createElement("div");
  container.appendChild(el);
  el.innerHTML = `
    <h3>${title}</h3>
    <ul>
      <li>by ${author}</li>
      <li>${pages} pages</li>
    </ul>
    `;

  const readButton = document.createElement("button");
  el.appendChild(readButton);
  readButton.classList.add("read-button");
  readButton.textContent = "Not read";

  const deleteButton = document.createElement("button");
  el.appendChild(deleteButton);
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Remove from library";
  return { el };
};

window.addEventListener(
  "load",
  myLibrary.forEach((book) => createCard(book.title, book.author, book.pages))
);

function checkForDuplicate(array) {
  array.find((book) => {
    if (book.name === title.value) {
      return true;
    }
    return false;
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
