function newbook() {
    let Title = document.getElementById("Title")
    let Author = document.getElementById("Author")
    let newdiv = document.createElement("div")
    newdiv.setAttribute("id", "book_infos")
    let par1 = document.createElement("p");
    let par2 = document.createElement("p");
    let buutt = document.createElement("button");
    buutt.textContent = "remove";
    buutt.setAttribute("id", "rem")
    par1.appendChild(document.createTextNode(Title.value));
    par2.appendChild(document.createTextNode(Author.value));
    document.getElementById("list_container").appendChild(newdiv).appendChild(par1)
    document.getElementById("list_container").appendChild(newdiv).appendChild(par2)
    document.getElementById("list_container").appendChild(newdiv).appendChild(buutt)
}

function newbook_remove() {
    let book_container = document.getElementById("book_infos");
    book_container.parentElement.removeChild(book_container)
}

