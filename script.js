function newbook() {
    var title_name = document.getElementById(Title)
    var Author_name = document.getElementById(Author)
    var newdiv = document.createElement("div")
    newdiv.appendChild(title_name)
    newdiv.appendChild(Author_name) 
    console.log("test")  
    
}

const button_selector = document.getElementById("Add")

button_selector.addEventListener (onclick, newbook())