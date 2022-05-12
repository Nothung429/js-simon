//------ FUNCTIONS ------//
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function listRandomNumber (min, max, nElement) {
    const numberlist = [];
    for (let i = 0 ; i < nElement ; i++) {
        numberlist.push(getRandomNumber (min , max));
    }
    return numberlist;
}
function getMatch (firstArray, secondArray) {
    let matches = [];
    for (let i = 0 ; i < firstArray.length ; i++) {
        for (let j = 0 ; j < secondArray.length ; j++) {
            if ( firstArray[i] === secondArray[j] ) {
                matches.push (firstArray[i]);
            }
        }
    }
    return matches;
}

//------ MAIN ------//
// 1. visualizzare in pagina 5 numeri casuali
const simonSays = listRandomNumber(1,100,5);
console.log(simonSays);
const numbers = document.querySelector(".numbers-list");
let number = document.querySelector(".number");
number.innerText = simonSays;

// 2. far partire un timer di 30 secondi
// 3. finito il timer, nascondo i numeri che ho mostrato all'utente
// 4. adesso chiedo all'utente di inserire 5 numeri uno alla volta
setTimeout( 
    function () {
        number.style.display = "none";
    }, 10000    
);

const playerSays = [];
setTimeout(
    function(){
        for (let i= 0 ; i < 5 ; i++) {
            let simonAsk = Number(prompt("Inserisci un numero"));
            console.log(simonAsk);
            playerSays.push(simonAsk);
        };
        console.log(playerSays);
        console.log(simonSays);
    }, 11000
);

// 5. una volta che l'utente ha inserito i numeri controllo se corrispondono a quelli del Simon Says
// 6. infine mostro il punteggio (quanti numeri ha ricordato e quali)
const score = document.querySelector(".score");
const scoreNumbers = document.querySelector(".score-numbers");
setTimeout(
    function() {
        verify = getMatch(simonSays,playerSays);
        score.innerHTML = `Il tuo punteggio è : ${verify.length}`;
        scoreNumbers.innerHTML = `I numeri che hai indovinato sono : ${verify}`;
        score.style.display = "block";
        scoreNumbers.style.display = "block";
    }, 12000
);