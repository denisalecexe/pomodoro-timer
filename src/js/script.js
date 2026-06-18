// === VARIABILI GLOBALI ===
let pomodoroTimer = ""; // cera la scatola vuota che conterrà il tempo totale calcolato in secondi

const displayTimer = document.getElementById("timer"); // questa si al div dell'HTML dove deve comparire il countdown che scorre

const btnStart = document.getElementById("start"); // questa al bottone Start per poter intercettare quando ci clicco sopra
const btnPause = document.getElementById("pause"); // questa si aggancia al bottone Pause per poterlo programmare in futuro
const btnRestart = document.getElementById("reset"); // questa si aggancia al bottone Reset per poter azzerare tutto in futuro

// === FUNZIONI ===

// funzione che fa da metronomo e andrà a chiamare a ripetizione ogni secondo
function startTimer() {
    // si toglie 1 secondo dal totale dei secondi che sono rimasti nella scatola
    pomodoroTimer -= 1;
    // qui si prendono i secondi totali, li divido per 60 e solo dopo li arrotonda per difetto per scoprire i minuti reali
    let minuti = Math.floor(pomodoroTimer / 60);
    // qui si usa l'operatore del resto (%) per scoprire quanti secondi avanzano fuori dai minuti interi
    let secondi = pomodoroTimer % 60;
    
    // con questo ciclo if si fa in modo che i secondi sono a una sola cifra (da 0 a 9)
    if (secondi < 10) {
        // se sì, si incollano davanti uno "0" di testo così a schermo leggo ":05" e non ":5"
        secondi = "0" + secondi;
    }
    
    // con questo si prendono i minuti, si incollano in mezzo i due punti e poi i secondi e solo dopo si sparano tutto dentro il display dell'HTML
    displayTimer.innerText = minuti + ":" + secondi;
}


// === EVENTI (CLICK) ===

// addEventListener, un evento in ascolto per quando l'utente clicca effettivamente sul bottone Start
btnStart.addEventListener('click', () => {
    // con questo si va nell'HTML, si legge il testo dentro il box delle impostazioni e la si trasforma in un numero matematico puro
    let minutiImpostati = parseInt(document.getElementById("numPomodoro").innerText);
    
    // con questo si prende quel numero di minuti e lo si moltiplica per 60 per caricarlo nella scatola globale sotto forma di secondi totali
    pomodoroTimer = minutiImpostati * 60; 
    
    // con questo si attiva il metronomo di JavaScript dicendogli: "Lancia la funzione startTimer ogni 1000 millisecondi (cioè 1 secondo)"
    setInterval(startTimer, 1000);
});


// === TEST DI FUNZIONAMENTO ===
// questo stampa un semplice messaggio nella console del browser solo per essere sicuro che il file sia collegato correttamente
console.log("JavaScript funziona!");