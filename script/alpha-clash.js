// function play(){
//     // step-1: hide the home screen. to hide the screen  add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);
//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);
// }

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    // console.log('pressed', playerPressed);

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



        // ------------------------
        // update score
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // // 2. increase the score by 1
        // const newScore = currentScore + 1;

        // // 3.show the updated score
        // currentScoreElement.innerText = newScore;

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

            // -----------------------------
        // // step 1: get ther current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // step 2: reduce the life count
        // const newLife = currentLife -1;

        // // step 3: display the updated life
        // currentLifeElement.innerText = newLife;
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