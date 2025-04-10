var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");
var res = document.getElementById("resultado");
var botao = document.getElementById("calcular");
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calcular(numero1.value, numero1.value);
});
