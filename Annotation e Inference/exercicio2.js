"use strict";
const input = document.querySelector('input');
const total = localStorage.getItem('total');
if (input) {
    if (total)
        input.value = total;
    calcularGanho(input.value);
    const totalMudou = () => {
        const value = Number(input.value);
        localStorage.setItem('total', String(value));
        calcularGanho(value);
    };
    input.addEventListener('keyup', totalMudou);
}
function calcularGanho(value) {
    const p = document.querySelector('p');
    value = Number(value);
    if (isNaN(value))
        return;
    if (!p)
        return;
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}
