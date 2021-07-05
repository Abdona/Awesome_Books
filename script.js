function newbook() {
    var title_name = document.getElementById("Title")
    var Author_name = document.getElementById("Author")
    
    var newdiv=document.createElement("div")
    var par1 = document.createElement("p");
    var par2 = document.createElement("p");
    var buutt= document.createElement("button")
    buutt.textContent = "Remove";
    buutt.setAttribute("class", "Remove")
    par1.appendChild(document.createTextNode(title_name.value));
    par2.appendChild(document.createTextNode(Author_name.value));
    document.body.appendChild(newdiv).appendChild(par1)
    document.body.appendChild(newdiv).appendChild(par2)
    document.body.appendChild(newdiv).appendChild(buutt)
    
}

function newbook_remove () {
    let book_infos = document.querySelector("p")
    book_infos.parentElement.removeChild(book_infos);
    
}

const remove_button = document.getElementsByClassName("Remove");
remove_button.addEventListener(onclick, newbook_remove())