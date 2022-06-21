// Adición (+)
const three = 1 + 2 // 3
const four = three + 2 // 5
// el operador + también sirve para concatenar, strings por ejemplo
const string = "three" + 1 // three1

//Sustracción (-)
const two = 4 - 2

//Division
//retorna el cociente entre el primer operador y el segundo
const result = 20 / 5 // resultado === 4
const result1 = 20 / 7 // resultado === 2.85714
// Si divides entre 0 no dara error, pero respondera con "infinity" o -Infinity si el valor es negativo
// 1 / 0 - Infinity
// 1 / 0 -Infinity

//Resto (%)
//El resto del calculo es muy util en muchos casos de uso:
const _result = 20 % 5 // result === 0
const _Result = 20 % 7 // result === 6
// Un resto por 0 es siempre NaN un valor especial que significa "No es un número":
;(1 % 0) // NaN
(1 % 0) // NaN

//Multiplicación (*)
//Multiplicar 2 numeros
1 * 2 //2
-1 * 2 // -2

//Potenciación (**)
//Elevar el primer operando a la potencia del segundo operando
3 ** 4 // 81

//incremento (++)
//Incrementa un numero, este es un operador unitario y este va después del numero, este retorna el valor incrementado
let x = 0 
x++ // 0
x // 1 
++x // 2

//Decremento (--)
//trabaja como el operador de incremento, pero este decrementa el valor
let xy = 10
xy++ // 10
xy // 9
++xy // 8

// Negación Unaria (-)
let z = 2 - z // -2

// Suma Unaria (+)
z = 2 + z // 2
x = '2' + x // 2 (Lo convierte a numero)
x = '2a' + x // NaN
