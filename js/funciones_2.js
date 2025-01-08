var verduras = ["TOMATE","PAPA","ZANAHORIA","ZAPALLO","CEBOLLA"];
const TOMATE = 200, PAPA = 150, ZANAHORIA = 400, ZAPALLO = 600, CEBOLLA = 550, IVA = 1.21;
var total = 0;
var j = 0;
var flag = true;
alert("Bienvenido a verdulería Franco Vendeverduras, y bofe!");
presentar_verduras();
while(flag == true){
    j = Number(prompt("Ingrese un numero de verdura, o precione -1 para finalizar"));
    if(j < 6 && j> 0){
        evaluar(j);
    }
    else if(j == -1){
        flag = false;
        finalizar();
    }
    else{
        alert("Ha ingresado un valor incorrecto");
    }
}

function presentar_verduras(){
    var mostrar = "";
    for(var i = 0; i < verduras.length; i++){
        mostrar += verduras[i];
        if(verduras[i] == "TOMATE"){
            mostrar += " " + "$" + TOMATE + "\n";
        }
        else if(verduras[i] == "PAPA"){
            mostrar += " " + "$" + PAPA + "\n";
        }
        else if(verduras[i] == "ZANAHORIA"){
            mostrar += " " + "$" + ZANAHORIA + "\n";
        }
        else if(verduras[i] == "ZAPALLO"){
            mostrar += " " + "$" + ZAPALLO + "\n";
        }
        else if(verduras[i] == "CEBOLLA"){
            mostrar += " " + "$" + CEBOLLA;
        }
    }
    alert(mostrar);
}

function evaluar(numero_verdura){
    var cantidad = 0;
    var flag2 = true;
    var subTotal = 0;
    while(flag2){
        cantidad = Number(prompt("Ingrese la cantidad que desea llevar, sino -1 para volver"));
        if(cantidad > 0 && cantidad <= 10){
            if(verduras[numero_verdura] == "TOMATE"){
                subTotal += TOMATE * cantidad;
            }
            else if(verduras[numero_verdura] == "PAPA"){
                subTotal += PAPA * cantidad;
            }
            else if(verduras[numero_verdura] == "ZANAHORIA"){
                subTotal += ZANAHORIA * cantidad;
            }
            else if(verduras[numero_verdura] == "ZAPALLO"){
                subTotal += ZAPALLO * cantidad;
            }
            else if(verduras[numero_verdura] == "CEBOLLA"){
                subTotal += CEBOLLA * cantidad;
            }
    
        }
        else if(cantidad == -1){
            flag2 = false;
            total += subTotal;
        }
        else{
            alert("Ingresó un valor incorrecto!");
        }

    }
}

function finalizar(){
    total *= IVA;
    alert("El total de su compra es: " + total);
}