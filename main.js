/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
*/

const randomNumbersEl = document.getElementById("random_numbers");
const formEl = document.getElementById("numbers_form");
const inputEl1 = document.getElementById("number1");
const inputEl2 = document.getElementById("number2");
const inputEl3 = document.getElementById("number3");
const inputEl4 = document.getElementById("number4");
const inputEl5 = document.getElementById("number5");
const resultsEl = document.getElementById("results");
let random_numbers_array = [];
let your_numbers_array = [];

function generate5RandomIntegers() {
    for (let i = 1; i <= 5; i++) {
        let random_number = Math.floor(Math.random() * 100) + 1;
        random_numbers_array.push(random_number);
    }
    return random_numbers_array;
}

random_numbers_array = generate5RandomIntegers();
randomNumbersEl.innerHTML = random_numbers_array;
console.log(random_numbers_array);

const clock = setTimeout(function() {
    randomNumbersEl.classList.add("d-none");
    formEl.classList.remove("d-none");
}, 5000);

formEl.addEventListener("submit", function(e) {
    e.preventDefault();
    formEl.classList.add("d-none");
    resultsEl.classList.remove("d-none");
    your_numbers_array.push(Number(inputEl1.value), Number(inputEl2.value), Number(inputEl3.value), Number(inputEl4.value), Number(inputEl5.value));
    let guessed_array = [];
    let guessed_number = 0;
    console.log(your_numbers_array);
    for (let i = 0; i < your_numbers_array.length; i++) {
        if (random_numbers_array.includes(your_numbers_array[i]) ) {
            guessed_array.push(your_numbers_array[i]);
            guessed_number++;
        }
    }

    resultsEl.innerHTML = (`
    <div id="your_numbers">
        <h4>I tuoi numeri</h4>
        ${your_numbers_array}
    </div>
    <div id="simon_numbers">
        <h4>I numeri di Simon</h4>
        ${random_numbers_array}
    </div>
    <div id="guessed" class="mt-5 flex-grow-1">
        <h4>Numeri esatti: ${guessed_number}</h4>
        ${guessed_array} 
    </div>
    `)
})