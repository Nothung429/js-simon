// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1. visualizzare in pagina 5 numeri casuali
function getRandomNumber (min , max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}
function listRandomNumber (min, max , nElement) {
    const numberlist = [];
    for (let i = 0 ; i < nElement ; i++) {
        numberlist.push(getRandomNumber (min , max));
    }
    return numberlist;
}
let simonSays = (listRandomNumber(1,100,5));
console.log(simonSays);

// 2. far partire un timer di 30 secondi
const gameTimer = setTimeout(
    function(){
        alert("hello");
    }, 3000
);

// 3. finito il timer, nascondo i numeri che ho mostrato all'utente
// 4. adesso chiedo all'utente di inserire 5 numeri uno alla volta
// 5. una volta che l'utente ha inserito i numeri controllo se corrispondono a quelli del Simon Says
// 6. infine mostro il punteggio (quanti numeri ha ricordato e quali)
