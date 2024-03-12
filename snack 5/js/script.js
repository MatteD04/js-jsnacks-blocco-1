//dato un array di 10 numeri, stampare in console il numero più grande

const numbers = [5,34,8,67,12,90,63,48,39,26];

let biggestNumber = numbers[0];

//scorro i numeri
for(let i = 0; i < numbers.length; i++){

    const thisNumber = numbers[i];

   //per ogni numero
   //se è maggiore di quello che ho salvato come più grande
   //allora questo numero diventa il più grande che ho salvato
   if(thisNumber > biggestNumber) {
    biggestNumber = thisNumber;
   }
}

console.log('il numero più grande è',biggestNumber);