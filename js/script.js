/* Chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */

// INPUT
// Primo passaggio: chiedere all'utente quanti chilometri vuole percorrere
const kilometres = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(kilometres);

// Secondo passaggio: chiedere all'utente quanti anni ha
const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge);

// ESECUZIONE
// SE minorenne applicare uno sconto del 20%
// ALTRIMENTI SE over 65 applicare sconto del 40%
// ALTRIMENTI prezzo intero

const adult = 18;
const overAdult = 65;
let ticket;
let message = "";

if (userAge < adult){
    ticket = ((kilometres * 0.21) * 0.80); 
    ticket = ticket.toFixed(2); 
    message = `Il prezzo del biglietto è di: ${ticket} euro`;
    console.log(message);
} else if (userAge > overAdult){
    ticket = ((kilometres * 0.21) * 0.60);
    ticket = ticket.toFixed(2); 
    message = `Il prezzo del biglietto è di: ${ticket} euro`;
    console.log(message);
} else{
    ticket = (kilometres * 0.21);
    message = `Il prezzo del biglietto è di: ${ticket} euro`;
    console.log(message);
}

// OUTPUT
// Stampi prezzo
alert(message);