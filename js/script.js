// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

var userDistance = prompt('Inserisci la distanza da percorrere (in km)');
var userAge = prompt('inserisci la tua età');

console.log(userDistance);

let pricePerKM = 0.21;

let message = 'Importo totale: ';

if (userDistance && !isNaN(userDistance) && userAge && !isNaN(userAge)) {
	if (userAge < 18) {
		messaggio += userDistance * pricePerKM * 0.8;
	} else if ((userAge > 18, userAge < 65)) {
		messaggio += userDistance * pricePerKM;
	} else if (userAge > 65) {
		message += yserDistance * pricePerKM * 0.6;
	}
} else {
	message = 'Inserisci valori validi';
}

document.getElementById('app').innerHTML += `<p>${message}</p>`;

// LASCIO IL PC A MIO FRATELLINO PER VISITA MEDICA A DISTANZA, CONTINUO DOPO LE 17
