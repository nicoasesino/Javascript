let notas
let promedio
let programa = -1

function suma(numero1,numero2){
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

alert("Bienvenidos a la calculadora Mágica")
do {
    programa = Number(prompt("Que desea realizar \n 0 - Salir \n 1 - Calculadora de Promedios \n 2 - Calculadora"))
    if (programa === 1) {
        totalNotas = Number(prompt("ingrese el total de Notas para calcular su promedio"))
            for (var i = 0; i < totalNotas; i++) {
            notas = Number(prompt("ingrese la nota " +i))
            suma = suma + notas
            }
        promedio = suma / totalNotas
        alert('Su promedio final es ' +promedio)
    } else if (programa === 2)
        
        calculadora = Number(prompt("Que desea realizar \n 0 - Salir \n 1 - Sumar \n 2 - Restar  \n 3 - Multiplicar \n 4 - Dividir"))
        if (calculadora == 0){
            break
        }else if (calculadora == 1){
            numeroUno()
            numeroDos()
            alert("Su resultado a la suma es " +suma(numero1,numero2))
        }else if (calculadora == 2){
            numeroUno()
            numeroDos()
            alert("Su resultado a la resta es " +restar(numero1,numero2))
        }else if (calculadora == 3){
            numeroUno()
            numeroDos()
            alert("Su resultado a la multiplicacion es " +multiplicar(numero1,numero2))
        }else if (calculadora == 4){
            numeroUno()
            numeroDos()
            alert("Su resultado a la división es " +dividir(numero1,numero2))
        }
    
} while (programa != 0);













