var formulario = document.getElementById("formulario");
var respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function (events) {
    events.preventDefault();
    console.log(" Me diste un Click");

    var datos = new FormData(formulario);

    console.log(datos)
    console.log(datos.get("user"))
    console.log(datos.get("pass"))

    fetch('post.php', {
        method: 'POST',
        body: datos
    })

        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data === "error") {
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Llena todos los campos
                </div>
                `
            } else {
                respuesta.innerHTML = `
                <div class="alert alert-success" role="alert">
                    ${data}
                </div>
                `
            }
        })
})