let Books = [];
function NewbookRemove(RButton) {
  const BookContainer = document.getElementById(RButton.id);
  BookContainer.parentNode.removeChild(BookContainer);
  /* eslint-disable */ 
  const BooksNew = Books.filter(function (item) {
    return item.id != RButton.id;
  });
  /* eslint-enable */
  Books = BooksNew;
  localStorage.clear();
  const BookList = JSON.stringify(BooksNew);
  // eslint-disable-next-line no-unused-vars
  localStorage.setItem('library', BookList);
}
// eslint-disable-next-line no-unused-vars
function Clear() {
  localStorage.clear();
  Books = [];
}
function CreateHtml(IdBook) {
  const newdiv = document.createElement('div');
  newdiv.setAttribute('id', IdBook);
  const title = document.createElement('p');
  const author = document.createElement('p');
  const RemoveButt = document.createElement('button');
  RemoveButt.addEventListener('click', () => { NewbookRemove(RemoveButt); });
  RemoveButt.textContent = 'remove';
  RemoveButt.setAttribute('id', IdBook);
  return [newdiv, title, author, RemoveButt];
}
function SaveLocally(BookArray) {
  const BookList = JSON.stringify(BookArray);
  localStorage.setItem('library', BookList);
}
function RetrieveOld() {
  Books = JSON.parse(localStorage.getItem('library')) || [];
  SaveLocally(Books);
}

function ShowBook() {
  RetrieveOld();
  const BooksCurrent = JSON.parse(localStorage.getItem('library'));
  /* eslint-disable */
  BooksCurrent.forEach(element => {
    const x = CreateHtml(element.id);
    x[1].innerHTML = `Title:   ${element.title}`
    x[2].innerHTML = `Author:   ${element.author}`;
    document.getElementById('list_container').appendChild(x[0]).appendChild(x[1]);
    document.getElementById('list_container').appendChild(x[0]).appendChild(x[2]);
    document.getElementById('list_container').appendChild(x[0]).appendChild(x[3]);
  });
  /* eslint-enable */
}
// eslint-disable-next-line no-unused-vars
function Newbook() {
  const Title = document.getElementById('Title');
  const Author = document.getElementById('Author');
  const IdBook = Math.floor(Math.random() * 1000);
  Books.push({ title: Title.value, author: Author.value, id: IdBook });
  SaveLocally(Books);
  const x = CreateHtml(IdBook);
  x[1].innerHTML = `Title:      ${Title.value}`;
  x[2].innerHTML = `Author:      ${Author.value}`;
  document.getElementById('list_container').appendChild(x[0]).appendChild(x[1]);
  document.getElementById('list_container').appendChild(x[0]).appendChild(x[2]);
  document.getElementById('list_container').appendChild(x[0]).appendChild(x[3]);
}
ShowBook();
