const btn1 = document.querySelector("#executa1")
const btn2 = document.querySelector("#executa2")
const btn3 = document.querySelector("#executa3")
const btn4 = document.querySelector("#executa4")
const btn5 = document.querySelector("#executa5")
const btn6 = document.querySelector("#executa6")
const btn7 = document.querySelector("#executa7")

btn1.onclick = function() {
    //resposta do exercicio 1
    
    let num1 = document.querySelector("#num1_1").value //recupera a propriedade value do input#num1_1
    let num2 = document.querySelector("#num2_1").value // o mesmo

    document.querySelector(".result1").innerHTML = (num1*1) + (num2*1) // para converter para Number
}

btn2.onclick = function() {
    // 1. Recuperar os valores digitados
    let num1 = document.querySelector("#num1_2").value *1 // pegando o value e convertendo pra Number
    let num2 = document.querySelector("#num2_2").value *1

    if(num1>num2)
        document.querySelector(".result2").innerHTML = num1
    else
        document.querySelector(".result2").innerHTML = num2
}

btn3.onclick = function() {

    let num1 = document.querySelector("#num1_3").value * 1;
    const resultElement = document.querySelector(".result3");

    if (num1 <= 1) {
    resultElement.innerHTML = false;
    return;
    }

    if (num1 === 2) {
    resultElement.innerHTML = true;
    return;
    }

    if (num1 % 2 === 0) {
    resultElement.innerHTML = false;
    return;
    }

    const raiz = Math.sqrt(num1);
    for (let i = 3; i <= raiz; i += 2) {
    if (num1 % i === 0) {
        resultElement.innerHTML = false;
        return;
    }
    }

    resultElement.innerHTML = true;

}

btn4.onclick = function() {

    let num1 = document.querySelector("#num1_4").value *1 
    let num2 = document.querySelector("#num2_4").value *1

    let hipotenusa = Math.sqrt((num1*num1)+(num2*num2))

    document.querySelector(".result4").innerHTML=hipotenusa
}
btn5.onclick = function() {

    let num1 = document.querySelector("#num1_5").value *1 
    let num2 = document.querySelector("#num2_5").value *1

    let salarioAjustado = num1 + (num1*(num2/100))
    document.querySelector(".result5").innerHTML=salarioAjustado
}
btn6.onclick = function() {
    let num1 = document.querySelector("#num1_6").value *1 
    let temperaturaCelsius = (num1*5-160)/9

    document.querySelector(".result6").innerHTML=temperaturaCelsius

}
btn7.onclick = function() {
    let num1 = document.querySelector("#num1_7").value *1 
    let num2 = document.querySelector("#num2_7").value *1
    let num3 = document.querySelector("#num1_7").value *1 

    let mediaFinal = ((num1*2)+(num2*3)+(num3*5))/10
    document.querySelector(".result7").innerHTML = mediaFinal
}
