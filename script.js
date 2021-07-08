/* eslint max-classes-per-file: ["error", 2] */
class BookList {
  constructor(Books) {
    this.bookListCollection = Books;
  }

  clear() {
    localStorage.clear('library');
    document.getElementById('list_container').innerHTML = '';
    this.bookListCollection = [];
  }

  addBook(Book) {
    this.bookListCollection.push(Book);
    const TitleP = document.createElement('p');
    const AuthorP = document.createElement('p');
    const RButton = document.createElement('button');
    RButton.addEventListener('click', () => { this.RemoveBook(Book.id); });
    RButton.innerHTML = 'Remove';
    RButton.setAttribute('id', Book.id);
    const BookContainer = document.createElement('div');
    BookContainer.setAttribute('id', Book.id);
    TitleP.innerHTML = `Title:   ${Book.title}`;
    AuthorP.innerHTML = `Author:   ${Book.author}`;
    document.getElementById('list_container').appendChild(BookContainer).appendChild(TitleP);
    document.getElementById('list_container').appendChild(BookContainer).appendChild(AuthorP);
    document.getElementById('list_container').appendChild(BookContainer).appendChild(RButton);
  }

  RemoveBook(BookId) {
    const BookContainer = document.getElementById(BookId);
    BookContainer.parentNode.removeChild(BookContainer);
    const BooksNew = [];
    /* eslint-disable */
    for (const i in this.bookListCollection) {
      if (this.bookListCollection[i].id !== BookId) {
        BooksNew.push(this.bookListCollection[i]);
      }
    }
     /* eslint-enable */
    this.bookListCollection = BooksNew;
    localStorage.clear();
    const BookList = JSON.stringify(BooksNew);
    // eslint-disable-next-line no-unused-vars
    localStorage.setItem('library', BookList);
  }

  AddToStorage() {
    localStorage.setItem('library', JSON.stringify(this.bookListCollection));
  }
  /* eslint-disable */
  ShowBooks() {
    for (const i in this.bookListCollection) {
      const newdiv = document.createElement('div');
      newdiv.setAttribute('id', this.bookListCollection[i].id);
      const title = document.createElement('p');
      const author = document.createElement('p');
      const RemoveButt = document.createElement('button');
      RemoveButt.addEventListener('click', () => { this.RemoveBook(this.bookListCollection[i].id); });
      RemoveButt.textContent = 'remove';
      RemoveButt.setAttribute('id', this.bookListCollection[i].id);
      title.innerHTML = `Title:   ${this.bookListCollection[i].title}`;
      author.innerHTML = `Author:   ${this.bookListCollection[i].author}`;
      document.getElementById('list_container').appendChild(newdiv).appendChild(title);
      document.getElementById('list_container').appendChild(newdiv).appendChild(author);
      document.getElementById('list_container').appendChild(newdiv).appendChild(RemoveButt);
    }
  }
}
class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}
 /* eslint-enable */
const NewBookCollection = new BookList(JSON.parse(localStorage.getItem('library')) || []);
NewBookCollection.ShowBooks();
function AddNewbook() {
  const title = document.getElementById('Title');
  const author = document.getElementById('Author');
  const IdBook = Math.floor(Math.random() * 1000);
  const NewBook = new Book(title.value, author.value, IdBook);
  NewBookCollection.addBook(NewBook);
  NewBookCollection.AddToStorage();
}
function Clear() {
  NewBookCollection.clear();
}
document.getElementById('AddNewbook').onclick = AddNewbook;
document.getElementById('Clear').onclick = Clear;
