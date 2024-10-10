/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
*/

const randomNumbersEl = document.getElementById("random_numbers");
const formEl = document.getElementById("numbers_form");
// let inputsEl = document.querySelectorAll("input");
// console.log(inputsEl);
// let btn_submitEl = document.getElementById("btn_submit");
const resultsEl = document.getElementById("results");

function generate5RandomIntegers() {
    let random_number_array = [];
    for (let i = 1; i <= 5; i++) {
        let random_number = Math.floor(Math.random() * 100) + 1;
        random_number_array.push(random_number);
    }
    return random_number_array.join(" | ");
}

randomNumbersEl.innerHTML = generate5RandomIntegers();
console.log(randomNumbersEl.innerHTML);

const clock = setTimeout(function() {
    randomNumbersEl.classList.add("d-none");
    formEl.classList.remove("d-none");
}, 3000);

formEl.addEventListener("submit", function(e) {
    e.preventDefault();
    formEl.classList.add("d-none");
    resultsEl.classList.remove("d-none");
    
})