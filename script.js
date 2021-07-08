class BookList {
  constructor(Books){
    this.BookListCollection = Books;
  }
  clear(){
    localStorage.clear('library');
    document.getElementById('list_container').innerHTML='';
    this.BookListCollection=[];
  }
  
  AddBook(Book) {
    this.BookListCollection.push(Book);
    let TitleP = document.createElement('p');
    let AuthorP = document.createElement('p')
    let RButton = document.createElement('button')
    RButton.addEventListener('click', () => { this.RemoveBook(Book.id); });
    RButton.innerHTML = "Remove"
    RButton.setAttribute('id', Book.id) 
    let BookContainer = document.createElement('div')
    BookContainer.setAttribute('id', Book.id)
    TitleP.innerHTML = `Title:   ${Book.title}`
    AuthorP.innerHTML = `Author:   ${Book.author}`;
    document.getElementById('list_container').appendChild(BookContainer).appendChild(TitleP);
    document.getElementById('list_container').appendChild(BookContainer).appendChild(AuthorP);
    document.getElementById('list_container').appendChild(BookContainer).appendChild(RButton);
   }
   RemoveBook(BookId) {
    const BookContainer = document.getElementById(BookId);
    BookContainer.parentNode.removeChild(BookContainer);
    let BooksNew=[];
    for (let i in this.BookListCollection)
    {
      if(this.BookListCollection[i].id != BookId){
        BooksNew.push(this.BookListCollection[i]);
      }
    }
    this.BookListCollection = BooksNew;
    localStorage.clear();
    const BookList = JSON.stringify(BooksNew);
    // eslint-disable-next-line no-unused-vars
    localStorage.setItem('library', BookList);
  }
  AddToStorage()
  {
    localStorage.setItem('library',JSON.stringify(this.BookListCollection));
  }
  ShowBooks()
   {
     
  // /* eslint-disable */
  for (let i in this.BookListCollection)
  {
    const newdiv = document.createElement('div');
    newdiv.setAttribute('id', this.BookListCollection[i].id);
    const title = document.createElement('p');
    const author = document.createElement('p');
    const RemoveButt = document.createElement('button');
    RemoveButt.addEventListener('click', () => { this.RemoveBook(this.BookListCollection[i].id); });
    RemoveButt.textContent = 'remove';
    RemoveButt.setAttribute('id', this.BookListCollection[i].id);
    title.innerHTML = `Title:   ${this.BookListCollection[i].title}`;
    author.innerHTML = `Author:   ${this.BookListCollection[i].author}`;
    document.getElementById('list_container').appendChild(newdiv).appendChild(title);
    document.getElementById('list_container').appendChild(newdiv).appendChild(author);
    document.getElementById('list_container').appendChild(newdiv).appendChild(RemoveButt);
  }}
}
class Book {
  constructor(title,author,id){
    this.title = title;
    this.author = author;
    this.id = id;
  } 
}
let NewBookCollection = new BookList(JSON.parse(localStorage.getItem('library')) || []);
NewBookCollection.ShowBooks();
function AddNewbook() {
  const title = document.getElementById('Title');
  const author = document.getElementById('Author');
  const IdBook = Math.floor(Math.random() * 1000);
  let NewBook = new Book(title.value, author.value, IdBook);
  NewBookCollection.AddBook(NewBook);
  NewBookCollection.AddToStorage();
}
function Clear(params) {
  NewBookCollection.clear();
}