const easyGame = document.getElementById('btn-facile');
const midGame = document.getElementById('btn-medio');
const hardGame = document.getElementById('btn-difficile');
const grid = document.getElementById('grid');

const easyGrid = 100
const midGrid = 81
const hardGrid = 49

let bombe = [];
let punteggio = 0;
let gameOver = false;


easyGame.addEventListener('click', function() {
    bombe = [];
    punteggio = 0;
    gameOver = false;
    document.getElementById('punteggio').innerText = punteggio;

    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }

    while (bombe.length < 16) {
        let temp = Math.floor(Math.random() * easyGrid) + 1;
        if (!bombe.includes(temp)) {
            bombe.push(temp);
        }
    }
    console.log(bombe);

    for (let i = 0; i < easyGrid; i++) {
        let currentSquare = createSquareEasy();
        currentSquare.innerText = i + 1;
        currentSquare.addEventListener('click', controlloSquareEasy);
        grid.append(currentSquare);
    
    }

});

midGame.addEventListener('click', function() {
    bombe = [];
    punteggio = 0;
    gameOver = false;
    document.getElementById('punteggio').innerText = punteggio;

    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }

    while (bombe.length < 16) {
        let temp = Math.floor(Math.random() * easyGrid) + 1;
        if (!bombe.includes(temp)) {
            bombe.push(temp);
        }
    }
    console.log(bombe);

    for (let i = 0; i < midGrid; i++) {
        let currentSquare = createSquareMid();
        currentSquare.innerText = i + 1;
        currentSquare.addEventListener('click', controlloSquareMid);
        grid.append(currentSquare);
    
    }

});

hardGame.addEventListener('click', function() {
    bombe = [];
    punteggio = 0;
    gameOver = false;
    document.getElementById('punteggio').innerText = punteggio;

    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }

    while (bombe.length < 16) {
        let temp = Math.floor(Math.random() * hardGrid) + 1;
        if (!bombe.includes(temp)) {
            bombe.push(temp);
        }
    }
    console.log(bombe);

    for (let i = 0; i < hardGrid; i++) {
        let currentSquare = createSquareHard();
        currentSquare.innerText = i + 1;
        currentSquare.addEventListener('click', controlloSquareHard);
        grid.append(currentSquare);
    
    }

});

function controlloSquareEasy() {
    if (gameOver) return;
    
    let squareNumber = parseInt(this.innerText);
    
    if (bombe.includes(squareNumber)) {
        this.classList.add('bomba');
        rivelaBombeEasy()
        alert(`Game Over. Il tuo punteggio è di ${punteggio}`);
        gameOver = true;
    } else {
        this.classList.add('clicked');
        punteggio++;
    }
    
    this.removeEventListener('click', controlloSquareEasy);
    document.getElementById('punteggio').innerText = punteggio;
    
    if (punteggio === easyGrid - bombe.length) {
        alert('Vincitore supremo!');
        gameOver = true;
    }
}

function controlloSquareMid() {
    if (gameOver) return;
    
    let squareNumber = parseInt(this.innerText);
    
    if (bombe.includes(squareNumber)) {
        this.classList.add('bomba');
        rivelaBombeMid()
        alert(`Game Over. Il tuo punteggio è di ${punteggio}`);
        gameOver = true;
    } else {
        this.classList.add('clicked');
        punteggio++;
    }
    
    this.removeEventListener('click', controlloSquareMid);
    document.getElementById('punteggio').innerText = punteggio;
    
    if (punteggio === midGrid - bombe.length) {
        alert('Vincitore supremo!');
        gameOver = true;
    }
}

function controlloSquareHard() {
    if (gameOver) return;
    
    let squareNumber = parseInt(this.innerText);
    
    if (bombe.includes(squareNumber)) {
        this.classList.add('bomba');
        rivelaBombeHard()
        alert(`Game Over. Il tuo punteggio è di ${punteggio}`);
        gameOver = true;
    } else {
        this.classList.add('clicked');
        punteggio++;
    }
    
    this.removeEventListener('click', controlloSquareHard);
    document.getElementById('punteggio').innerText = punteggio;
    
    if (punteggio === hardGrid - bombe.length) {
        alert('Vincitore supremo!');
        gameOver = true;
    }
}

function createSquareEasy() {
    let currentElement = document.createElement('div');
    currentElement.classList.add('square-easy');
    return currentElement
};

function createSquareMid() {
    let currentElement = document.createElement('div');
    currentElement.classList.add('square-mid');
    return currentElement
};

function createSquareHard() {
    let currentElement = document.createElement('div');
    currentElement.classList.add('square-hard');
    return currentElement
};

function rivelaBombeEasy() {
    let squares = document.querySelectorAll('.square-easy');
    squares.forEach(square => {
        let squareNumber = parseInt(square.innerText);
        if (bombe.includes(squareNumber)) {
            square.classList.add('bomba');
        }
        square.removeEventListener('click', controlloSquareEasy);
    });
}

function rivelaBombeMid() {
    let squares = document.querySelectorAll('.square-mid');
    squares.forEach(square => {
        let squareNumber = parseInt(square.innerText);
        if (bombe.includes(squareNumber)) {
            square.classList.add('bomba');
        }
        square.removeEventListener('click', controlloSquareMid);
    });
}

function rivelaBombeHard() {
    let squares = document.querySelectorAll('.square-hard');
    squares.forEach(square => {
        let squareNumber = parseInt(square.innerText);
        if (bombe.includes(squareNumber)) {
            square.classList.add('bomba');
        }
        square.removeEventListener('click', controlloSquareHard);
    });
}