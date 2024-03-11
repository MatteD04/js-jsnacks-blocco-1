//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

let sum = 0;

for(let i = 0; i < 5; i++) {
    //chiedo per 5 volte un numero all'utente
    const userNumber = parseInt(prompt('scrivi un numero'));
    console.log(userNumber);

    //sommo i numeri dati
    sum += userNumber;
}

//stampo il risultato
console.log('somma',sum);
alert (sum);