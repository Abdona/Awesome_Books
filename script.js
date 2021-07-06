let Books=[];
function add_book(title,author) {
  Books.push({title,author,id:Math.floor(Math.random())})
  const par1 = document.createElement('p');
  const par2 = document.createElement('p');
  const remove_butt = document.createElement('button');
  remove_butt = 'remove';
  remove_butt.addEventListener('click',alert("hello"))
  par1.appendChild(document.createTextNode(Title.value));
  par2.appendChild(document.createTextNode(Author.value));
}
function Newbook() {
  const Title = document.getElementById('Title');
  const Author = document.getElementById('Author');
  const newdiv = document.createElement('div');
  // newdiv.setAttribute('id', 'book_infos');
  add_book(Title,Author);

  // document.getElementById('list_container').appendChild(newdiv).appendChild(par1);
  // document.getElementById('list_container').appendChild(newdiv).appendChild(par2);
  // document.getElementById('list_container').appendChild(newdiv).appendChild(buutt);
}
  console.log("Ssss")
  const sumbit_butt=document.getElementById("Submit");
  sumbit_butt.onclick= function() { console.log("dddd")}
  function Newbook_Remove() {
  const Book_Container = document.getElementById('book_infos');
  Book_Container.parentElement.removeChild(Book_Container);
}
