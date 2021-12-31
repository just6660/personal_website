let myLibrary = [];

const addBtn = document.querySelector("[data-add]");
const table = document.querySelector("[data-table-body]");
const main = document.querySelector("[data-main]");
const form = document.querySelector("[data-form]");
const submitBtn = document.querySelector("[data-submit]");
const returnBtn = document.querySelector("[data-return]");
const newtitle = document.querySelector("#title");
const newauthor = document.querySelector("#author");
const newpages = document.querySelector("#pages");

let Book = class {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
};
/*
function Book(title,author,pages,isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}
*/
function addBookToLibrary(obj) {
  myLibrary.push(obj);
}

function createDeleteTh(index) {
  let deleteTh = document.createElement("th");
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    myLibrary.splice(index, 1);
    updateDisplay();
  });
  deleteTh.appendChild(deleteBtn);
  return deleteTh;
}

function createReadTh(index) {
  let readTh = document.createElement("th");
  let readBtn = document.createElement("button");
  readBtn.textContent = "Change Read Status";
  readBtn.addEventListener("click", () => {
    if (myLibrary[index].isRead == "Yes") {
      myLibrary[index].isRead = "No";
    } else myLibrary[index].isRead = "Yes";
    updateDisplay();
  });

  readTh.appendChild(readBtn);
  return readTh;
}

function updateDisplay() {
  table.textContent = "";
  document.getElementById("formid").reset();
  myLibrary.forEach((book, index) => {
    let row = document.createElement("tr");
    Object.keys(book).forEach((prop) => {
      let cols = document.createElement("th");
      cols.textContent = book[prop];
      row.appendChild(cols);
    });
    row.appendChild(createDeleteTh(index));
    row.appendChild(createReadTh(index));
    table.appendChild(row);
  });
}

addBtn.addEventListener("click", () => {
  main.classList.toggle("hidden");
  form.classList.toggle("hidden");
});

returnBtn.addEventListener("click", () => {
  main.classList.toggle("hidden");
  form.classList.toggle("hidden");
});

submitBtn.addEventListener("click", () => {
  const radio = document.querySelector('input[name="isRead"]:checked');
  newBook = new Book(
    newtitle.value,
    newauthor.value,
    newpages.value,
    radio.value
  );
  addBookToLibrary(newBook);
  updateDisplay();
  main.classList.toggle("hidden");
  form.classList.toggle("hidden");
});

const book1 = new Book("Oryx and Crake", "Margaret Atwood", "400", "Yes");
const book2 = new Book("1984", "George Orwell", "328", "Yes");
addBookToLibrary(book1);
addBookToLibrary(book2);
updateDisplay();
console.log(myLibrary);
