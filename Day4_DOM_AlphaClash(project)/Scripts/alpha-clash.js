// function play(){
//     //step1- hide the home screen, to hide the screen add the class hidden to the home section 
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);
//     //show the playground
//     const playgroundSection=document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);
// }
function handleKeyboardButtonPress(event){
    const playerPressed=event.key;

    //key player is expected to press
    const currentAlphabetElement= document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();

    //check right or wrong key pressed
    if(playerPressed===expectedAlphabet){
        console.log("You got a point!");
        console.log('You have pressed correctly!',expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log("Dhuro, right key press koren!");
    }
}
function removeBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
//capture keyboard key press (call back function)
document.addEventListener('keyup',handleKeyboardButtonPress);
function continueGame(){
    //step-1: Generate a random alphabet
    const alphabet=getARandomAlphabet();
    console.log("Your random alphabet is:",alphabet);
    //set randomly genarated alphabet to the screen
    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;    
    addBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
// const fairplay=document.getElementById("home-screen");
//set background color
