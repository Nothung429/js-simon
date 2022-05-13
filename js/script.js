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
// 2. far partire un timer di 30 secondi
// 3. finito il timer, nascondo i numeri che ho mostrato all'utente
// 4. adesso chiedo all'utente di inserire 5 numeri uno alla volta
// 5. una volta che l'utente ha inserito i numeri controllo se corrispondono a quelli del Simon Says
// 6. infine mostro il punteggio (quanti numeri ha ricordato e quali)
const btnStart = document.getElementById("start");
btnStart.addEventListener ("click" , 
    function () {
        const simonSays = listRandomNumber(1,100,8);
        const numbers = document.querySelector(".numbers-list");
        let number = document.querySelector(".number");
        number.innerText = simonSays;
        setTimeout( 
            function () {
                number.style.display = "none";
            }, 10000
        );
        
        const playerSays = [];
        setTimeout(
            function(){
                do {
                    const simonAsk = Number(prompt("Inserisci i numeri che hai visto"));
                    if (playerSays.includes(simonAsk)) {
                        alert("Numero già inserito")
                    } else {
                        playerSays.push(simonAsk);
                    }
                } while (playerSays.length < 8);
            }, 11000
        );

        const score = document.querySelector(".score");
        const scoreNumbers = document.querySelector(".score-numbers");
        setTimeout(
            function() {
                verify = getMatch(simonSays,playerSays);
                score.innerHTML = `Il tuo punteggio è : ${verify.length}`;
                scoreNumbers.innerHTML = `I numeri corrispondenti sono : ${verify}`;
                score.style.display = "block";
                scoreNumbers.style.display = "block";
            }, 12000
        );
    }
);