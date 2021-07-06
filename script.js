const Books = [];
function NewbookRemove(RButton) {
  // const ID = GetClickedId();
  const BookContainer = document.getElementById(RButton.id);
  BookContainer.parentNode.removeChild(BookContainer);
}
function Newbook() {
  const Title = document.getElementById('Title');
  const Author = document.getElementById('Author');
  const IdBook = Math.floor(Math.random() * 1000);
  Books.push({ title: Title.value, author: Author.value, id: IdBook });
  // const BookLength = document.createElement('p');
  // BookLength.appendChild(document.createTextNode(Books.length));
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
  // document.getElementById('list_container').appendChild(newdiv).appendChild(BookLength);
  document.getElementById('list_container').appendChild(newdiv).appendChild(par1);
  document.getElementById('list_container').appendChild(newdiv).appendChild(par2);
  document.getElementById('list_container').appendChild(newdiv).appendChild(RemoveButt);
}