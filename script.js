function newbook() {
    var title_name = document.getElementById("Title")
    var Author_name = document.getElementById("Author")
    var newdiv = document.createElement("div")
    newdiv.setAttribute("id", "book_infos")
    var par1 = document.createElement("p");
    var par2 = document.createElement("p");
    var buutt = document.createElement("button");
    buutt.textContent = "remove";
    buutt.setAttribute("id", "rem")
    par1.appendChild(document.createTextNode(title_name.value));
    par2.appendChild(document.createTextNode(Author_name.value));
    document.getElementById("list_container").appendChild(newdiv).appendChild(par1)
    document.getElementById("list_container").appendChild(newdiv).appendChild(par2)
    document.getElementById("list_container").appendChild(newdiv).appendChild(buutt)
}

function newbook_remove() {
    var book_container = document.getElementById("book_infos");
    book_container.parentElement.removeChild(book_container)
}

