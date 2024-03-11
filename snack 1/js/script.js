// Chiedere all'utente 5 numeri.
//Inserire i numeri nell'array ma senza creare duplicati 
//(inserire il numero nell'array solo se non è già presente).

let numbers = [] ;

for(let i = 0; i < 5; i++) {
    
    //chiedo 5 volte un numero all'utente
    const userNumbers = parseInt(prompt('dimmi un numero'));
    console.log(userNumbers);

    //se il numero non è nell'array lo inserisco
    if (numbers.includes(userNumbers) === false) {

        numbers.push (userNumbers);
    }
}

console.log(numbers);