/* 
Ejercicio 1
Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.

var palabra = prompt("ingrese una palabra")
for(i=0; i < 10 ; i ++){
    console.log(palabra + " " + i );
}
Ejercicio 3)
Escribir un programa que pida al usuario un número entero positivo
y muestre por pantalla todos los números impares desde 1 hasta ese
número separados por comas.
 este hice yo, estaba mal algunas cosas ...
var numPositivo = Number(prompt("ingrese un numero entero positivo"))
for(i =0; numPositivo%2 != 0; i++){
    if (numPositivo%2 == 0 && Number.isInteger(numPositivo) && numPositivo > 0 ){
        for (let i =0 ; i <= numPositivo;i++){
            if(i%2 != 0 ){
                console.log(i);
            }
        }
    }
    else{
        prompt("El numero ingresado no es el correcto")
    }
    break
}
este hizo ari, esta bien....
var flag = true;
while(flag){
    var numPositivo = Number(prompt("ingrese un numero entero positivo"))

    if (numPositivo%2 == 0 && Number.isInteger(numPositivo) && numPositivo > 0 ){
        flag = false;
        for (let i =0 ; i <= numPositivo;i++){
            if(i%2 != 0 ){
                console.log(i);
            }
        }
    }
    else{
        prompt("El numero ingresado no es el correcto")
    }
}
Ejercicio 2
Escribir un programa que pregunte al usuario su edad y muestre por pantalla
todos los años que ha cumplido (desde 1 hasta su edad).


var edad = Number(prompt("Hola, indique su edad"));
var i = 1;
while (i <= edad){
    console.log(i);
    i++;
}
esta correcto
/*Ejercicio 4
Escribir un programa que pida al usuario un número entero positivo y muestre
por pantalla la cuenta atrás desde ese número hasta cero separados por comas.


numero = Number(prompt("Ingrese un numero entero positivo"));
var i = 0;
do {
  i = i - 1;
  console.log(i);
} while (i < num);

var i = 0;
do {
  i = i + 1;
  console.log(i);
} while (i < 5);


/*
Ejercicio 5
Escribir un programa que pregunte al usuario una cantidad a invertir, 
el interés anual y el número de años, y muestre por pantalla el capital obtenido en la inversión cada año que dura la inversión.

Ejercicio 6
Escribir un programa que muestre por pantalla la tabla de multiplicar del 1 al 10.

Ejercicio 7
Escribir un programa que almacene la cadena de caracteres contraseña en una variable, 
pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.

Ejercicio 8
Escribir un programa que pida al usuario un número entero y muestre por 
pantalla si es un número primo o no.
var valor=0;
var i =0;
valor = Number(prompt("Ingrese un numero entero:"));

for (var i = 0; i <= Math.sqrt(valor); i++){

    if (valor % 2 == 0){
        alert("no es numero primo");
    }
    else{
        alert("es numero primo..");
    }
}


Ejercicio 9
Escribir un programa que pida al usuario una palabra y luego muestre por pantalla
una a una las letras de la palabra introducida empezando por la última.
( explicacion: 
    Se utiliza el método prompt para obtener la palabra del usuario y se almacena en la variable 'palabra'.
Luego, se inicia un bucle for que recorre cada letra de 'palabra' utilizando la función charAt(i), donde 'i' representa la posición actual en la cadena.
En cada iteración del bucle, se muestra la letra actual en una ventana de alerta, lo que resultará en mostrar cada letra en vertical.
Este código te permitirá mostrar cada letra de 'palabra' en una línea difer ente.)a


var palabra = prompt("Introduzca una palabra:");
for (var i = 0; i < palabra.length; i++) {
    alert(palabra.charAt(i));
}



Ejercicio 10
Escribir un programa en el que se pregunte al usuario por una frase y una letra, 
y muestre por pantalla el número de veces que aparece la letra en la frase.
*/
var frase = 0, contador = 0,  i= 0;

frase = prompt("escribe una frase...en lo posible larga");
letra = prompt("elija la letra que quiera para saber cuantas veces esta en la frase...");
letra = letra.toLowerCase();

// Recorre cada caracter de la frase
for (var i = 0; i < frase.length; i++) {
    // Convierte el caracter actual a minúscula para la comparación
    var caracter = frase[i].toLowerCase();
    
    // Compara el caracter con la letra ingresada
    if (caracter === letra) {
        contador++;
    }
}

alert("La letra '" + letra + "' aparece " + contador + " veces en la frase.");




/*1-En este script deberás crear un array para guardar los nombres de 
los días de la semana, empezando por 0 para el domingo. Para comprobar el
funcionamiento pide al usuario un número entre 0 y 6 y devuelve el nombre del día.
Se supone que el dato tecleado estará entre 0 y 6
///////////////
var dias = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
//var dias = new Array(7);
var flag = true;
var j = 0;

while (flag == true){
    j = Number((prompt("que dia desea ver?")));
    if (j < 7  && j > 0){
        alert(dias[j]);
    }
    else if( j < -1 ){
         flag = false
    }
    else{
        alert("el numero no esta contemplado, vuelva a intentarlo");
    }
    break
}
///////////////FUNCIONES: ///////////////////////////
var a=1;
var b=2;
var suma = 0;
suma = sumar_devolver(a,b);

mostrar(suma);

function sumar_devolver(num1,num2){
    var suma = 0;
    suma = num1+ num2;
    return suma;

}
function sumar_delegar(a,b){
    var suma=0;
    suma = a + b;
    mostrar(suma);
}
function mostrar(suma){
    alert(suma);
}

/*
2-Crea un array booleano con dos valores 'verdadero' y 'falso'. 
Este array te sirve para traduicr los valores true y false. 
Usalo para que el script muestre un alert con el nombre vedadero si un
usuario teclea un valor entre 0 y 9 y falso en el caso contrario.

//let var_booleano = ['falso', 'verdadero'], num, indice_num;
//num = parseInt(prompt("Teclear un número"));
//indice_num = (num <= 9 && num >= 0 )? 1:0;
//alert(var_booleano[indice_num]);

/////////////////

3-Diseña un script que vaya leyendo números y guardándolos en un array. 
Una vez lleno mostrará el array y deberá decir cuantos números son pares y 
cuantos son impares. La entrada de datos termina cuando el usuario teclea 0 o un valor no numérico.

var numeros = [],i = 0, pares=0 , impares=0;
do{
    j= Number(prompt("Bienvenido - Ingrese un numero, o ingrese cero o un valor no numerico para salir"));
    if(j > 0  || j < 0){
        numeros[i] = j
        i++
    }
}  
while (j !=0 && !isNaN(j));
    alert("Lista de números "+ numeros);
    for(i=0; i < numeros.length; i++){
        if (numeros[i]%2==0) 
            pares++
        else 
            impares++
    }
alert("pares " + pares);
alert("Impares " + impares);
var cadena ='una cadena';
if (cadena){document.write(cadena); // arroja 'una cadena'*/