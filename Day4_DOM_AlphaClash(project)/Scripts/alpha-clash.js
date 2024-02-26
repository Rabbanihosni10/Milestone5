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
