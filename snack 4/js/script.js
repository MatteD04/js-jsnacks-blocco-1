//Calcola la somma e la media dei primi 10 numeri.

let sum = 0;

//leggi i primi 10 numeri
for(let i = 1; i <= 10; i++) {

    console.log(i);

    //fai la somma dei numeri
    sum += i;
}

console.log('la somma è',sum);

//fai la media dei numeri
media = sum / 10;
console.log('la media è', media);

