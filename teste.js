
// Menu Toggle
let toggle = document.querySelector(".toggle")
let navigation = document.querySelector(".navigation")
let main = document.querySelector(".main")

toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}



//controla a classe hovered a ser adicionada e retirada na lista de items
let list = document.querySelectorAll(".navigation li");

function activeLink(){
    list.forEach((item) =>
    item.classList.remove("hovered"));
    this.classList.add("hovered");
}

list.forEach((item) =>
item.addEventListener("mouseover",activeLink))