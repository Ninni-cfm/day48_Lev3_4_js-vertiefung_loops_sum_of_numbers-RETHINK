let numMax = document.getElementById("numMax");
let selectNum1 = document.getElementById("cbNum1");
let selectNum2 = document.getElementById("cbNum2");
let result = document.getElementById("result");

initSelects();

function initSelects() {
    for (let i = 2; i < 10; i++) {
        let opt = `<option value="${i}">${i}</option>`
        selectNum1.innerHTML += opt;
        selectNum2.innerHTML += opt;
    }
}

function countMe() {
    let num = Number(numMax.value);
    let div1 = Number(selectNum1.value);
    let div2 = Number(selectNum2.value);

    result.style.color = 'red';
    if (num == 0) {
        result.innerHTML = "Bitte eine Zahl > 0 eingeben!";
    } else if (div1 == div2) {
        result.innerHTML = "Die beiden selektierten Zahlen dürfen nicht gleich sein!";
    } else {
        let sum = 0;
        for (let i = 0; i < num; i++) {
            if ((i % div1 == 0) || (i % div2 == 0))
                sum += i;
        }
        result.style.color = 'green';
        result.innerHTML = `Ergebnis: ${sum}`;
    }
}