var arreglo = [1, 2, 3];

console.log(arreglo);

// var objeto = {
//     nombre: "Html",
//     duracion: 25,
//     estado: false,
//     arr: [1,"Hola", 3],
//     capitulos: {
//         nombre: "Avengers",
//         horas: 22
//     }
// }

// console.log(objeto.capitulos.nombre);

var arrayObjetos = [
    {
        nombre: "Html",
        estado: true
    },
    {
        nombre: "Css",
        estado: true
    },
    {
        nombre: "JS",
        estado: false
    }
]

// console.log(arrayObjetos[0].nombre);
var dolar = [{ "fecha": "2019-12-06T03:00:00.000Z", "valor": 784.25 }, { "fecha": "2019-12-05T03:00:00.000Z", "valor": 796.75 }, { "fecha": "2019-12-04T03:00:00.000Z", "valor": 802.44 }, { "fecha": "2019-12-03T03:00:00.000Z", "valor": 804.29 }, { "fecha": "2019-12-02T03:00:00.000Z", "valor": 812.13 }, { "fecha": "2019-11-29T03:00:00.000Z", "valor": 828.25 }, { "fecha": "2019-11-28T03:00:00.000Z", "valor": 806.3 }, { "fecha": "2019-11-27T03:00:00.000Z", "valor": 793.49 }, { "fecha": "2019-11-26T03:00:00.000Z", "valor": 791.16 }, { "fecha": "2019-11-25T03:00:00.000Z", "valor": 795.94 }, { "fecha": "2019-11-22T03:00:00.000Z", "valor": 795.14 }, { "fecha": "2019-11-21T03:00:00.000Z", "valor": 797.17 }, { "fecha": "2019-11-20T03:00:00.000Z", "valor": 782.71 }, { "fecha": "2019-11-19T03:00:00.000Z", "valor": 773.81 }, { "fecha": "2019-11-18T03:00:00.000Z", "valor": 782.82 }, { "fecha": "2019-11-15T03:00:00.000Z", "valor": 801.83 }, { "fecha": "2019-11-14T03:00:00.000Z", "valor": 794.51 }, { "fecha": "2019-11-13T03:00:00.000Z", "valor": 783.72 }, { "fecha": "2019-11-12T03:00:00.000Z", "valor": 756.08 }, { "fecha": "2019-11-11T03:00:00.000Z", "valor": 746.23 }, { "fecha": "2019-11-08T03:00:00.000Z", "valor": 740.23 }, { "fecha": "2019-11-07T03:00:00.000Z", "valor": 743.65 }, { "fecha": "2019-11-06T03:00:00.000Z", "valor": 745.85 }, { "fecha": "2019-11-05T03:00:00.000Z", "valor": 736.66 }, { "fecha": "2019-11-04T03:00:00.000Z", "valor": 735.05 }, { "fecha": "2019-10-30T03:00:00.000Z", "valor": 726.34 }, { "fecha": "2019-10-29T03:00:00.000Z", "valor": 724.37 }, { "fecha": "2019-10-28T03:00:00.000Z", "valor": 725.87 }, { "fecha": "2019-10-25T03:00:00.000Z", "valor": 723.43 }, { "fecha": "2019-10-24T03:00:00.000Z", "valor": 726.15 }, { "fecha": "2019-10-23T03:00:00.000Z", "valor": 726.24 }]

for (let i of dolar) {
    console.log(i.fecha);
}