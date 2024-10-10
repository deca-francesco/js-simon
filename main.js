/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
*/

let randomNumbersEl = document.getElementById("random_numbers");

function generateRandomInteger(min, max) {
    Math.floor(Math.random() * (max - min + 1)) + min;
}

randomNumbersEl.innerHTML = generateRandomInteger(1, 10);
console.log(randomNumbersEl.innerHTML);

let clock = setTimeout(function() {
    randomNumbersEl.innerHTML = (`
<div class="mb-3">
    <label for="number1" class="form-label">Numero 1</label>
    <input type="text" class="form-control" name="number1" id="number1"/>
</div>
<div class="mb-3">
    <label for="number2" class="form-label">Numero 2</label>
    <input type="text" class="form-control" name="number2" id="number2"/>
</div>
<div class="mb-3">
    <label for="number3" class="form-label">Numero 3</label>
    <input type="text" class="form-control" name="number3" id="number3"/>
</div>
<div class="mb-3">
    <label for="number4" class="form-label">Numero 4</label>
    <input type="text" class="form-control" name="number4" id="number4"/>
</div>
<div class="mb-3">
    <label for="number5" class="form-label">Numero 5</label>
    <input type="text" class="form-control" name="number5" id="number5"/>
</div>
        `);
}, 3000)