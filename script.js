function newbook() {
    var title_name = document.getElementById("Title")
    var Author_name = document.getElementById("Author")
    var newdiv=document.createElement("div")
    var par1 = document.createElement("p");
    var par2 = document.createElement("p");
    var buutt= document.createElement("button");
    buutt.textContent="remove";
    buutt.setAttribute("id","rem")
    par1.appendChild(document.createTextNode(title_name.value));
    par2.appendChild(document.createTextNode(Author_name.value));
    document.getElementById("list_container").appendChild(newdiv).appendChild(par1)
    document.getElementById("list_container").appendChild(newdiv).appendChild(par2)
    document.getElementById("list_container").appendChild(newdiv).appendChild(buutt)
}

//$(document).on('click','#rem',function(){alert("ssafasf")})
// document.getElementById("rem").addEventListener("click", remove_book());
// document.querySelector("#list_container").addEventListener('click', remove_book())
function remove() {
    alert("gggg")
}
