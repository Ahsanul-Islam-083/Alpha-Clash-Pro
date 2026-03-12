
function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    
    // start game with Enter
    if (playerPressed === 'Enter') {
        const homeScreen = document.getElementById('home-screen');
        if (!homeScreen.classList.contains('hidden')) {
            play();
            return;
        }
    }


    // stop the game if pressed "Esc"
    if (playerPressed === 'Escape') {
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // cheak right or wrong key pressed
    if (playerPressed === expectedAlphabet) {
        console.log("point gained");

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score',updatedScore);


        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        console.log('lost life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1 ;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        } 

    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame() {
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet:', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}


function play() {
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById("current-life", 5);
    setTextElementValueById("current-score", 0);

    continueGame();
}
function gameOver() {
    hideElementById("play-ground");
    showElementById('final-score');
    //update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}
