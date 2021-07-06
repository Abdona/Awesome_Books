function Newbook() {
  const Title = document.getElementById('Title');
  const Author = document.getElementById('Author');
  const newdiv = document.createElement('div');
  newdiv.setAttribute('id', 'book_infos');
  const par1 = document.createElement('p');
  const par2 = document.createElement('p');
  const buutt = document.createElement('button');
  buutt.textContent = 'remove';
  buutt.setAttribute('id', 'rem');
  par1.appendChild(document.createTextNode(Title.value));
  par2.appendChild(document.createTextNode(Author.value));
  document.getElementById('list_container').appendChild(newdiv).appendChild(par1);
  document.getElementById('list_container').appendChild(newdiv).appendChild(par2);
  document.getElementById('list_container').appendChild(newdiv).appendChild(buutt);
}

function Newbook_Remove() {
  const Book_Container = document.getElementById('book_infos');
  Book_Container.parentElement.removeChild(Book_Container);
}
