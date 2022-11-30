let notas
let promedio
let multiplicacion
let suma = 0
let programa = -1

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
            numero1 = Number(prompt("Ingrese el primer numero"))
            numero2 = Number(prompt("Ingrese el segundo numero"))
            resultado = numero1 + numero2
            alert("Su resultado a la suma es " +resultado)
        }else if (calculadora == 2){
            numero1 = Number(prompt("Ingrese el primer numero"))
            numero2 = Number(prompt("Ingrese el segundo numero"))
            resultado = numero1 - numero2
            alert("Su resultado a la resta es " +resultado)
        }else if (calculadora == 3){
            numero1 = Number(prompt("Ingrese el primer numero"))
            numero2 = Number(prompt("Ingrese el segundo numero"))
            resultado = numero1 * numero2
            alert("Su resultado a la multiplicacion es " +resultado)
        }else if (calculadora == 4){
            numero1 = Number(prompt("Ingrese el primer numero"))
            numero2 = Number(prompt("Ingrese el segundo numero"))
            resultado = numero1 / numero2
            alert("Su resultado a la división es " +resultado)
        }
    
} while (programa != 0);











