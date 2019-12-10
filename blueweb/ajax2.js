document.querySelector("#boton").addEventListener("click", traerDatos)

function traerDatos() {

    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "catalogo.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            console.log("Estado");
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let res = document.querySelector("#respuesta")
            res.innerHTML = ""
            
            for (let valor of datos) {
                res.innerHTML += `
                <tr>
                    <th scope="row">${valor.id}</th>
                    <td>${valor.nombre}</td>
                    <td>${valor.estado ? "Habilitado" : "Deshabilitado " }</td>
                </tr>
                `
            }

        }
    }
}