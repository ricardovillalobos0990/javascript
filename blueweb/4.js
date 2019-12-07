var h1 = document.getElementById("titulo");
var p1 = document.getElementById("parrafo");
var boton = document.getElementById("boton");
// var parrafo = document.getElementsByClassName('lead');
// console.log(parrafo);

function cambiar() {
    h1.style.color = "red";
    p1.style.color = "blue";
}

boton.addEventListener("click", function(){
    console.log("Hola");
});
boton.addEventListener("mouseover", function(){
    console.log(" Hola Mouse");
});
boton.addEventListener("mouseout", function(){
    console.log("Chao Mouse");
});

boton.onclick = cambiar;