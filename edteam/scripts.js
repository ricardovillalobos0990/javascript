const saludar = (persona, sexo) => {
    let saludo = sexo === "m" ? "Bienvenido" : "Bienvenida"
    return `${saludo} ${persona}`
}

console.log(saludar("Ricardo", "m"));
console.log(saludar("Andres", "m"));
console.log(saludar("Villalobos", "f"));
console.log(saludar("Marulanda", "f"));