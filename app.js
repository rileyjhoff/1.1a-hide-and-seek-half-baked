// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');
const lionButton = document.getElementById('lion-button');
const dogButton = document.getElementById('dog-button');


const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');
const lionContainer = document.getElementById('lion-container');
const dogContainer = document.getElementById('dog-container');

const treeGuessCounter = document.getElementById('tree-guesses');
const boulderGuessCounter = document.getElementById('boulder-guesses');
const shedGuessCounter = document.getElementById('shed-guesses');
const lionGuessCounter = document.getElementById('lion-guesses');
const dogGuessCounter = document.getElementById('dog-guesses');

const treeCorrectCounter = document.getElementById('tree-correct');
const boulderCorrectCounter = document.getElementById('boulder-correct');
const shedCorrectCounter = document.getElementById('shed-correct');
const lionCorrectCounter = document.getElementById('lion-correct');
const dogCorrectCounter = document.getElementById('dog-correct');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

const guessHistoryEl = document.getElementById('guess-history');
const hidingHistoryEl = document.getElementById('hiding-history');

let correctGuesses = 0;
let totalGuesses = 0;
let treeGuesses = 0;
let boulderGuesses = 0;
let shedGuesses = 0;
let treeHiding = 0;
let boulderHiding = 0;
let shedHiding = 0;

treeButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    let correctSpot = getRandomHidingSpot();
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess(treeContainer, correctSpot);
    spotCounter(treeContainer);
    guessHistoryEl.append(totalGuesses + '. Tree' + '\n');
    hidingHistory(correctSpot);
});

boulderButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    let correctSpot = getRandomHidingSpot();
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess(boulderContainer, correctSpot);
    spotCounter(boulderContainer);
    guessHistoryEl.append(totalGuesses + '. Boulder' + '\n');
    hidingHistory(correctSpot);
});

shedButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    let correctSpot = getRandomHidingSpot();
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess(shedContainer, correctSpot);
    spotCounter(shedContainer);
    guessHistoryEl.append(totalGuesses + '. Shed' + '\n');
    hidingHistory(correctSpot);
});



function getRandomHidingSpot() {
    // initialize state
    const hidingPlaces = [
        'tree',
        'shed',
        'boulder'
    ];
    const index = Math.floor(Math.random() * hidingPlaces.length);
    // use the random index above and the array of hidingPlaces to get a random hiding place string
    // return that random hiding place string
    return hidingPlaces[index];
}

function handleGuess(userGuess, correctSpot) {
    // first, right after clicking, we need to remove the emoiji face from the previous hiding place that way we don't end up with more than one emoji face
    // we can do that by removing the .face class from all containers
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    // then increment the guesses
    totalGuesses++;
    // then use getElementById and the correctSpot string to grab the appropriate container from the DOM
    const correctContainer = document.getElementById(`${correctSpot}-container`);
    // then add the .face css class to that element so that the face shows up
    correctContainer.classList.add('face');
    // then if the user guess is correct, increment the correct guesses
    if (userGuess === correctContainer) {
        correctGuesses++;
    }
    // update the DOM to show the new value of wins, losses and total guesses to the user
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
    winsEl.textContent = correctGuesses;
}

function spotCounter(userGuess) {
    if (userGuess === treeContainer) {
        treeGuesses++;
        treeGuessCounter.textContent = treeGuesses;
    } else if (userGuess === boulderContainer){
        boulderGuesses++;
        boulderGuessCounter.textContent = boulderGuesses;
    } else if (userGuess === shedContainer){
        shedGuesses++;
        shedGuessCounter.textContent = shedGuesses;
    }
}

function hidingHistory(correctSpot) {
    if (correctSpot === 'tree') {
        treeHiding++;
        treeCorrectCounter.textContent = treeHiding;
        hidingHistoryEl.append(totalGuesses + '. Tree' + '\n');
    } else if (correctSpot === 'boulder'){
        boulderHiding++;
        boulderCorrectCounter.textContent = boulderHiding;
        hidingHistoryEl.append(totalGuesses + '. Boulder' + '\n');
    } else if (correctSpot === 'shed'){
        shedHiding++;
        shedCorrectCounter.textContent = shedHiding;
        hidingHistoryEl.append(totalGuesses + '. Shed' + '\n');
    }
}