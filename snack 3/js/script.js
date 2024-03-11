//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.

let numbers = [];

for(let i = 0; i < 6; i++){

    //Chiedo per 6 volte all’utente di inserire un numero
    const userNumbers = parseInt(prompt('inserisci un numero'));
    console.log(userNumbers);

    //se il numerro è dispari lo inserisco nell'array
    if((userNumbers % 2 === 0) === false) {
        numbers.push(userNumbers);
    }
}

//stampo in console
console.log(numbers);