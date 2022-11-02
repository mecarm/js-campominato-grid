/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

const griglia = document.getElementById('griglia');
console.log(griglia);

let play = document.getElementById('play');
let selectValue = document.getElementById('mode');



play.addEventListener('click', function difficulty(){

    for(let i = 0; i < selectValue.value; i++){
        console.log(selectValue.value);
    
        num += 1;
        let elementoCliccato = createSquare(num);
    
        elementoCliccato.addEventListener('click', function(){
            this.classList.toggle('azure');
            console.log(this);
        })

        
        griglia.append(elementoCliccato);
    }
    
})

let num = 0;

function createSquare(param){ // setto un parametro generico che mi servirà per inserire un testo nel div.
    const div = document.createElement('div');
    div.classList.add('square');
    div.innerText = param ; // inserisco il parametro nel testo del div 
    return div;
}

console.log(createSquare());

