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

guessHistoryEl.scrollTop = guessHistoryEl.scrollHeight;
hidingHistoryEl.scrollTop = hidingHistoryEl.scrollHeight;

let correctGuesses = 0;
let totalGuesses = 0;
let treeGuesses = 0;
let boulderGuesses = 0;
let shedGuesses = 0;
let lionGuesses = 0;
let dogGuesses = 0;
let treeHiding = 0;
let boulderHiding = 0;
let shedHiding = 0;
let lionHiding = 0;
let dogHiding = 0;

treeButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    let correctSpots = getRandomHidingSpot();
    let correctSpot1 = correctSpots[0];
    let correctSpot2 = correctSpots[1];
    console.log(correctSpot1);
    console.log(correctSpot2);
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess(treeContainer, correctSpot1, correctSpot2);
    spotCounter(treeContainer);
    hidingHistory(correctSpot1);
    hidingHistory(correctSpot2);
    hidingHistoryEl.append(totalGuesses + '. ' + correctSpot1.charAt(0).toUpperCase() + correctSpot1.slice(1) + ' & ' + correctSpot2.charAt(0).toUpperCase() + correctSpot2.slice(1) + '\n');
    hidingHistoryEl.scrollTop = hidingHistoryEl.scrollHeight;
    guessHistoryEl.append(totalGuesses + '. Tree' + '\n');
    guessHistoryEl.scrollTop = guessHistoryEl.scrollHeight;
});

boulderButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    let correctSpots = getRandomHidingSpot();
    let correctSpot1 = correctSpots[0];
    let correctSpot2 = correctSpots[1];
    console.log(correctSpot1);
    console.log(correctSpot2);    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess(boulderContainer, correctSpot1, correctSpot2);
    spotCounter(boulderContainer);
    hidingHistory(correctSpot1);
    hidingHistory(correctSpot2);
    hidingHistoryEl.append(totalGuesses + '. ' + correctSpot1.charAt(0).toUpperCase() + correctSpot1.slice(1) + ' & ' + correctSpot2.charAt(0).toUpperCase() + correctSpot2.slice(1) + '\n');
    hidingHistoryEl.scrollTop = hidingHistoryEl.scrollHeight;
    guessHistoryEl.append(totalGuesses + '. Boulder' + '\n');
    guessHistoryEl.scrollTop = guessHistoryEl.scrollHeight;
});

shedButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    let correctSpots = getRandomHidingSpot();
    let correctSpot1 = correctSpots[0];
    let correctSpot2 = correctSpots[1];
    console.log(correctSpot1);
    console.log(correctSpot2);    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess(shedContainer, correctSpot1, correctSpot2);
    spotCounter(shedContainer);
    hidingHistory(correctSpot1);
    hidingHistory(correctSpot2);
    hidingHistoryEl.append(totalGuesses + '. ' + correctSpot1.charAt(0).toUpperCase() + correctSpot1.slice(1) + ' & ' + correctSpot2.charAt(0).toUpperCase() + correctSpot2.slice(1) + '\n');
    hidingHistoryEl.scrollTop = hidingHistoryEl.scrollHeight;
    guessHistoryEl.append(totalGuesses + '. Shed' + '\n');
    guessHistoryEl.scrollTop = guessHistoryEl.scrollHeight;
});

lionButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    let correctSpots = getRandomHidingSpot();
    let correctSpot1 = correctSpots[0];
    let correctSpot2 = correctSpots[1];
    console.log(correctSpot1);
    console.log(correctSpot2);    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess(lionContainer, correctSpot1, correctSpot2);
    spotCounter(lionContainer);
    hidingHistory(correctSpot1);
    hidingHistory(correctSpot2);
    hidingHistoryEl.append(totalGuesses + '. ' + correctSpot1.charAt(0).toUpperCase() + correctSpot1.slice(1) + ' & ' + correctSpot2.charAt(0).toUpperCase() + correctSpot2.slice(1) + '\n');
    hidingHistoryEl.scrollTop = hidingHistoryEl.scrollHeight;
    guessHistoryEl.append(totalGuesses + '. Lion' + '\n');
    guessHistoryEl.scrollTop = guessHistoryEl.scrollHeight;
});

dogButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    let correctSpots = getRandomHidingSpot();
    let correctSpot1 = correctSpots[0];
    let correctSpot2 = correctSpots[1];
    console.log(correctSpot1);
    console.log(correctSpot2);    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess(dogContainer, correctSpot1, correctSpot2);
    spotCounter(dogContainer);
    hidingHistory(correctSpot1);
    hidingHistory(correctSpot2);
    hidingHistoryEl.append(totalGuesses + '. ' + correctSpot1.charAt(0).toUpperCase() + correctSpot1.slice(1) + ' & ' + correctSpot2.charAt(0).toUpperCase() + correctSpot2.slice(1) + '\n');
    hidingHistoryEl.scrollTop = hidingHistoryEl.scrollHeight;
    guessHistoryEl.append(totalGuesses + '. Dog' + '\n');
    guessHistoryEl.scrollTop = guessHistoryEl.scrollHeight;
});

function getRandomHidingSpot() {
    // initialize state
    const hidingPlaces = [
        'tree',
        'shed',
        'boulder',
        'lion',
        'dog'
    ];
    const index = Math.floor(Math.random() * hidingPlaces.length);
    const newHidingPlaces = hidingPlaces.filter(hidingPlace => hidingPlace !== hidingPlaces[index]);
    const newIndex = Math.floor(Math.random() * newHidingPlaces.length);
    const bothSpots = [hidingPlaces[index], newHidingPlaces[newIndex]];
    // use the random index above and the array of hidingPlaces to get a random hiding place string
    // return that random hiding place string
    return bothSpots;
}

function handleGuess(userGuess, correctSpot1, correctSpot2) {
    // first, right after clicking, we need to remove the emoiji face from the previous hiding place that way we don't end up with more than one emoji face
    // we can do that by removing the .face class from all containers
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    lionContainer.classList.remove('face');
    dogContainer.classList.remove('face');
    // then increment the guesses
    totalGuesses++;
    // then use getElementById and the correctSpot string to grab the appropriate container from the DOM
    const correctContainer1 = document.getElementById(`${correctSpot1}-container`);
    const correctContainer2 = document.getElementById(`${correctSpot2}-container`);
    // then add the .face css class to that element so that the face shows up
    correctContainer1.classList.add('face');
    correctContainer2.classList.add('face');
    // then if the user guess is correct, increment the correct guesses
    if (userGuess === correctContainer1 || userGuess === correctContainer2) {
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
    } else if (userGuess === lionContainer){
        shedGuesses++;
        lionGuessCounter.textContent = lionGuesses;
    } else if (userGuess === dogContainer){
        shedGuesses++;
        dogGuessCounter.textContent = dogGuesses;
    }
}

function hidingHistory(correctSpot) {
    if (correctSpot === 'tree') {
        treeHiding++;
        treeCorrectCounter.textContent = treeHiding;
    }
    if (correctSpot === 'boulder'){
        boulderHiding++;
        boulderCorrectCounter.textContent = boulderHiding;
    }
    if (correctSpot === 'shed'){
        shedHiding++;
        shedCorrectCounter.textContent = shedHiding;
    }
    if (correctSpot === 'lion'){
        lionHiding++;
        lionCorrectCounter.textContent = lionHiding;
    }
    if (correctSpot === 'dog'){
        dogHiding++;
        dogCorrectCounter.textContent = dogHiding;
    }
}