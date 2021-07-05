function newbook() {
    var title_name = document.getElementById("Title")
    var Author_name = document.getElementById("Author")
    //document.createElement("div")
    //var par1 = document.createElement('p')
    //var par2 = document.createElement('p')   
    //par1.appendChild(document.createTextNode("some text"));
    var newdiv=document.createElement("div")
    var par1 = document.createElement("p");
    var par2 = document.createElement("p");
    var buutt= document.createElement("button")
    par1.appendChild(document.createTextNode(title_name.value));
    par2.appendChild(document.createTextNode(Author_name.value));
    document.body.appendChild(newdiv).appendChild(par1)
    document.body.appendChild(newdiv).appendChild(par2)
    document.body.appendChild(newdiv).appendChild(buutt)
    // document.body.newdiv.appendChild(par1);
    // document.body.newdiv.appendChild(par2);
}
