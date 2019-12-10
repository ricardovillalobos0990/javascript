const btnadd = document.querySelector("#botonadd");
const buttons = document.querySelector("#botones");
const bgd = document.querySelector("#bg");
var numero = "",
numero = "11" + 1;
console.log(numero);
numero = "11" - 1;
console.log(numero);


(() => {
    btnadd.addEventListener("click", addBtn);
    buttons.addEventListener("mouseover", delegacion);
})()

function delegacion(e) {
    e.preventDefault();
    const colorBoton = e.target.classList[1];
    if (colorBoton == "btn-primary") {
        bgd.className = "bg-primary";
    } else if (colorBoton == "btn-secondary") {
        bgd.className = "bg-secondary";
    } else if (colorBoton == "btn-success") {
        bgd.className = "bg-success";
    } else if (colorBoton == "btn-danger") {
        bgd.className = "bg-danger";
    } else if (colorBoton == "btn-warning") {
        bgd.className = "bg-warning";
    }
}

function addBtn(e) {
    e.preventDefault();
    buttons.innerHTML =
        `
        <button class="btn btn-primary "> primary </button>
        <button class="btn btn-secondary"> secondary </button>
        <button class="btn btn-success"> success </button>
        <button class="btn btn-danger"> danger </button>
        <button class="btn btn-warning"> warning </button>
    `
}