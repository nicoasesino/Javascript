let nota
let programa = -1
let promedio
let suma = 0
let informacion

function sumas(numero1,numero2){
    let resultado = numero1 + numero2
    return resultado
}
function multiplicar(numero1,numero2){
    let resultado = numero1 * numero2
    return resultado
}
function restar(numero1,numero2){
    let resultado = numero1 - numero2
    return resultado
}
function dividir(numero1,numero2){
    let resultado = numero1 / numero2
    return resultado
}

function numeroUno(){
    numero1 = Number(prompt("Ingrese el primer numero"))
    return numero1
    
}
function numeroDos(){
    numero2 = Number(prompt("Ingrese el primer numero"))
    return numero2
}
function calculaPromedios(){
    totalNotas = parseInt(prompt("ingrese el total de Notas para calcular su promedio"))
    for (var i = 0; i < totalNotas; i++) {
        nota = parseFloat(prompt("ingrese la nota " +i))
        suma = suma + nota
    }
    promedio = suma / totalNotas
    alert("Su promedio final es " +promedio)
    if (promedio < 4,0 || promedio < 4)  {
        document.write("<h1 class='lindo'>Usted reprobo el ramo</h1>")
    } else {
        document.write("<h1 class='lindo'>Usted aprobo el ramo</h1>")
    }
}

const arrayPersona1 = {
    nombre: "",
    edad: 0,
    ramo: "",
    notas: 0,
    promedio: 0,
}
const arrayPersona2 = {
    nombre: "",
    edad: 0,
    ramo: "",
    notas: 0,
    promedio: 0,
}

function ingresarPersona1() {
    arrayPersona1.nombre = String(prompt("Ingrese su Nombre"))
    arrayPersona1.apellido = String(prompt("Ingrese su Apellido"))
    arrayPersona1.edad = Number(prompt("Ingrese su Edad")) 
    arrayPersona1.ramo = String(prompt("Ingrese su Ramo")) 
    informacion = alert("Datos ingresados : \nSu nombre es : " + arrayPersona1.nombre + " " + arrayPersona1.apellido + " \nSu edad es : " + arrayPersona1.edad + " \nSu ramo es : " + arrayPersona1.ramo)
}

do {
    programa = Number(prompt("Bienvenidos a la calculadora Mágica\nDebes introducir tus datos antes de ocupar la aplicacion\n Nombre - Edad - Ramo \nIngresa tu opcion\n 0 - Salir\n 1 - Registrarte"))

    if (programa === 1){
        ingresarPersona1()
        if (informacion === " "){
            alert("Error, No ingresaste ningun dato")
        } else {
            calculaPromedios()
        }
    }else {
        break
    }

    
} while (programa != 0);









// do {
//     programa = Number(prompt("Que desea realizar \n 0 - Salir \n 1 - Calculadora de Promedios \n 2 - Calculadora"))
//     if (programa === 1) {
//         calculaPromedios()
//     } else if (programa === 2)
        
//         calculadora = Number(prompt("Que desea realizar \n 0 - Salir \n 1 - Sumar \n 2 - Restar  \n 3 - Multiplicar \n 4 - Dividir"))
//         if (calculadora == 0){
//             break
//         }else if (calculadora == 1){
//             numeroUno()
//             numeroDos()
//             alert("Su resultado a la suma es " +sumas(numero1,numero2))
//         }else if (calculadora == 2){
//             numeroUno()
//             numeroDos()
//             alert("Su resultado a la resta es " +restar(numero1,numero2))
//         }else if (calculadora == 3){
//             numeroUno()
//             numeroDos()
//             alert("Su resultado a la multiplicacion es " +multiplicar(numero1,numero2))
//         }else if (calculadora == 4){
//             numeroUno()
//             numeroDos()
//             alert("Su resultado a la división es " +dividir(numero1,numero2))
//         }
    
// } while (programa != 0);













