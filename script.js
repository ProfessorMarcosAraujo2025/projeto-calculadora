document.addEventListener("DOMContentLoaded", function () {

    function soma(a, b) {
        return a + b;
    }

    function subtrair(a, b) {
        return a - b;
    }

    function multiplicar(a, b) {
        return a * b;
    }

    function dividir(a, b) {
        return a / b;
    }

    let valor1 = document.querySelector("#valor1");
    let valor2 = document.querySelector("#valor2");
    let caixaResultado= document.querySelector("#valor-resultado");

    document.querySelector('.btnSomar').addEventListener('click', function () {
        let resultado = soma(Number(valor1.value), Number(valor2.value));
        caixaResultado.textContent = resultado; 
    })


    document.querySelector('.btnSubtrair').addEventListener('click', function () {
        let resultado = subtrair(Number(valor1.value), Number(valor2.value));
         caixaResultado.textContent = resultado;

    })

    document.querySelector('.btnMultiplicar').addEventListener('click', function () {
        let resultado = multiplicar(Number(valor1.value), Number(valor2.value));
        caixaResultado.textContent = resultado;

    })

    document.querySelector('.btnDividir').addEventListener('click', function () {
        let resultado = dividir(Number(valor1.value), Number(valor2.value));
        caixaResultado.textContent = resultado;

    })

    document.querySelector(".btnReset").addEventListener('click', function () {
        caixaResultado.textContent = 0;
        valor1.value = 0;
        valor2.value = 0;
    })
})

