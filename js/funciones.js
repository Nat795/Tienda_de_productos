var a = 4;
var b = 6;
//var suma = 0;
//suma = sumar_devolver(a, b);
sumar_delegar(a,b)
//mostrar(suma);

function sumar_devolver(numero1, numero2){
    var suma = 0;
    suma = numero1 + numero2;
    
    return suma;
}

function sumar_delegar(a,b){
    var suma = 0;
    suma = a + b;
    mostrar(suma);
}

function mostrar(suma){
    alert(suma);
}