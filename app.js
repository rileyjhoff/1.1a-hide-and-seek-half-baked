// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');


let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    let correctSpot = getRandomHidingSpot();
    // console.log(correctSpot);
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess(boulderContainer, correctSpot);
});

treeButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    let correctSpot = getRandomHidingSpot();
    // console.log(correctSpot);
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess(boulderContainer, correctSpot);
});

boulderButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    let correctSpot = getRandomHidingSpot();
    // console.log(correctSpot);
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess(boulderContainer, correctSpot);
});



function getRandomHidingSpot() {
    // initialize state
    const hidingPlaces = [
        'tree',
        'shed',
        'boulder'
    ];
    // console.log(hidingPlaces);
    const index = Math.floor(Math.random() * hidingPlaces.length);
    // console.log(index);
    // use the random index above and the array of hidingPlaces to get a random hiding place string
    let correctSpot = hidingPlaces[index];
    // console.log(correctSpot);
    // return that random hiding place string
    return correctSpot;
}

// to validate that correctSpot is random and console logging a string
// getRandomHidingSpot();

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