let Books = [];
const BookList = JSON.stringify(Books);
let SavedData = localStorage.setItem('library', BookList);

function NewbookRemove(RButton) {
  // const ID = GetClickedId();
  const BookContainer = document.getElementById(RButton.id);

  BookContainer.parentNode.removeChild(BookContainer);
  Books = Books.filter((item) => {
    if (item.id !== RButton.id) {
      return item;
    }
    
  });
  localStorage.clear(SavedData);
  const BookList = JSON.stringify(Books);
  SavedData = localStorage.setItem('library', BookList);
}
function ShowBook(div, p1, p2, rmvbutt) {
  document.getElementById('list_container').appendChild(div).appendChild(p1);
  document.getElementById('list_container').appendChild(div).appendChild(p2);
  document.getElementById('list_container').appendChild(div).appendChild(rmvbutt);
}
// eslint-disable-next-line no-unused-vars
function Newbook() {
  const Title = document.getElementById('Title');
  const Author = document.getElementById('Author');
  const IdBook = Math.floor(Math.random() * 1000);
  Books.push({ title: Title.value, author: Author.value, id: IdBook });
  const newdiv = document.createElement('div');
  newdiv.setAttribute('id', IdBook);
  const par1 = document.createElement('p');
  const par2 = document.createElement('p');
  const RemoveButt = document.createElement('button');
  RemoveButt.addEventListener('click', () => { NewbookRemove(RemoveButt); });
  RemoveButt.textContent = 'remove';
  RemoveButt.setAttribute('id', IdBook);
  par1.appendChild(document.createTextNode(Title.value));
  par2.appendChild(document.createTextNode(Author.value));
  ShowBook(newdiv, par1, par2, RemoveButt);
}