function calcularIMC(){
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;

    console.log(altura);
    console.log(peso);

    var IMC = peso / (altura) **2;

    if (IMC < 18.5){
        window.alert("IMC está abaixo do peso!");
    } 

    else if (IMC < 24.9){
        window.alert("IMC está normal!");
    }

    else if (IMC < 29.9){
        window.alert("sobrepeso!");
    }

    else if (IMC < 39.9){
        window.alert("Obsidade Tipo I!");
    }

    else if (IMC > 39.9){
        window.alert("Obsidade Tipo II!");
    }
}

