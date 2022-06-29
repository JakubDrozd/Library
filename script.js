const container = document.querySelector(".container");

window.onload = function viewLibrary() {
  let i = 1;
  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add(`book`);
    bookDiv.classList.add(`book${i}`);
    container.appendChild(bookDiv);
    bookDiv.innerHTML += `
    <h3>${book.name}</h3>
    <ul>
      <li>by ${book.author}</li>
      <li>${book.pages} pages</li>
      <li>Status: ${book.read}</li>
    </ul>
    `;
    i++;
  });
};

let myLibrary = [
  {
    name: "The Hobbit",
    author: "J.R.R Tolkien",
    pages: 295,
    read: "Not read yet",
  },
];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

let harryPotter = new Book(
  "Harry Potter",
  "J. K. Rowling",
  351,
  "Not read yet"
);

myLibrary.push(harryPotter);
