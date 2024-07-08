const grid = document.getElementById('grid');
const btnStart = document.getElementById('btn-start');

let bombe = [];
let punteggio = 0;
let gameOver = false;

btnStart.addEventListener('click', function() {
    bombe = [];
    punteggio = 0;
    gameOver = false;
    document.getElementById('punteggio').innerText = punteggio;
    
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
    
    while (bombe.length < 16) {
        let temp = Math.floor(Math.random() * 100) + 1;
        if (!bombe.includes(temp)) {
            bombe.push(temp);
        }
    }
    console.log(bombe);
    
    for (let i = 0; i < 100; i++) {
        let currentSquare = createSquare();
        currentSquare.innerText = i + 1;
        currentSquare.addEventListener('click', controlloSquare);
        grid.append(currentSquare);
    }
});

function createSquare() {
    let currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement;
}

function controlloSquare() {
    if (gameOver) return;
    
    let squareNumber = parseInt(this.innerText);
    
    if (bombe.includes(squareNumber)) {
        this.classList.add('bomba');
        rivelaBombe()
        alert(`Game Over. Il tuo punteggio è di ${punteggio}`);
        gameOver = true;
    } else {
        this.classList.add('clicked');
        punteggio++;
    }
    
    this.removeEventListener('click', controlloSquare);
    document.getElementById('punteggio').innerText = punteggio;
    
    if (punteggio === 100 - bombe.length) {
        alert('Vincitore supremo!');
        gameOver = true;
    }
}

function rivelaBombe() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        let squareNumber = parseInt(square.innerText);
        if (bombe.includes(squareNumber)) {
            square.classList.add('bomba');
        }
        square.removeEventListener('click', controlloSquare);
    });
}
