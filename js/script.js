// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// promps
const userDistance = prompt('Inserisci la distanza da percorrere (in km)');
const userAge = prompt('inserisci la tua età');

console.log(userDistance);
console.log(userAge);

// qui ho provato a vedere se mancavano le cifre a due zeri dopo la virgola perche non leggeva i numeri con le virgole, quindi ho usato il sistema a potenze e radici.

let less20 = 0.8;
// let less20 = 8e-1;
let less40 = 0.6;
// let less40 = 6e-1;
let pricePerKM = 0.21;
// let pricePerKM = 21e-2;
let total = 'Importo totale: € ';
let discount20 = 'Sconto applicato Under 18 (-20%): € ';
let discount40 = 'Sconto applicato Over 65 (-40%): € ';
let newTotal = 'Da pagare: € ';

if (userDistance && !isNaN(userDistance) && userAge && !isNaN(userAge)) {
	if (userAge < 18) {
		total += (userDistance * pricePerKM).toFixed(2);
		discount20 += (userDistance * pricePerKM - userDistance * pricePerKM * less20).toFixed(2);
		discount40 = '';
		newTotal += (userDistance * pricePerKM * less20).toFixed(2);
	} else if ((userAge > 18, userAge < 65)) {
		total += (userDistance * pricePerKM).toFixed(2);
		discount20 = '';
		discount40 = '';
		newTotal = '';
	} else if ((userAge) => 65) {
		total += (userDistance * pricePerKM).toFixed(2);
		discount20 = '';
		discount40 += (userDistance * pricePerKM - userDistance * pricePerKM * less40).toFixed(2);
		newTotal += (userDistance * pricePerKM * less40).toFixed(2);
	}
} else {
	total = 'Inserisci valori validi';
	discount20 = '';
	discount40 = '';
	newTotal = '';
}

// Inseriti i risultati nella #app

document.getElementById(
	'app'
).innerHTML += `<p>${total}</p><p>${discount20}</p><p>${discount40}</p><p>${newTotal}</p>`;

// Console fatta per prendere anche i valore ottenuti

console.log(`${total} ${discount20}${discount40} ${newTotal}`);
