// console.log("Hola Mundo");

document.querySelector("#boton").addEventListener("click", traerDatos)

function traerDatos() {
    var xhttp = new XMLHttpRequest;

    xhttp.open("GET", "texto.txt", true);

    xhttp.send()

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText)
            document.querySelector("#boton1").innerHTML = this.responseText
        }
    }
}