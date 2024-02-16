const  randomNumber = parseInt(Math.random() * 100 +1)



const guessNumber = document.querySelector('.guessNumber')
const submitNumber = document.querySelector('.submitNumber')
const guesses = document.querySelector('.guesses')
const lastGuesses = document.querySelector('.lastGuesses')
const results = document.querySelector('.results')
const lowOrHi = document.querySelector('.lowOrHi')


const p = document.createElement('p')

let prevGuesses = [] 
let numGuess = 1
let playGame = true

if(playGame){
   submitNumber.addEventListener('click',function (e)
   {
    e.preventDefault();
    const guess = parseInt(guessNumber.value);
    validateGuess(guess)
    console.log(guess)
   });
}

function validateGuess(guess){
   if(isNaN(guess)){
   alert('Please enter a valid Number ')
   }else if(guess<1){
    alert('Please enter a number greater than 1')
   }else if(guess>10)
   {
    alert('Please enter a number less than 10')
   } else{
    prevGuesses.push(guess)
    if(numGuess===11)
    {
        displayGuess(guess)
        displayMesagge(`Random Number was ${guess}`)
        endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
   }
}

function checkGuess(guess){
   if(randomNumber===guess)
   {
      displayGuess(guess)
      displayMesagge(`Your guess is correct and your guess value is ${guess}`)
      endGame()
   }else if(guess  < randomNumber)
   {
    displayMesagge(`Guessed Number is lesser than the Answer`)
   }else if(guess>randomNumber){
    displayMesagge(`Guesses Number is greater than the Answer`)
   }else{
       displayGuess(guess)
       numGuess++;
   }
}

function displayGuess(guess){
     guessNumber.value=''
    numGuess++
    guesses.innerHTML += `${guess}   `
    lastGuesses.innerHTML = 11 - numGuess;

}
 

function displayMesagge(message){
     lowOrHi.innerHTML=message
}

function endGame(){
    playGame=false
     guessNumber.innerHTML=''
     guessNumber.setAttribute('disabled','')
     p.classList.add('button')
     p.innerHTML=`<h2 id="NewGame"></h2>`
     results.appendChild(p)
     newGame()
}
function newGame(){
const game = document.querySelector('#NewGame')
newGame.addEventListener('click',function(e)
{
    randomNumber = parseInt(Math.random() * 100 +1)
    numGuess=1
    prevGuesses = []
   
    lastGuesses.innerHTML = 11 - numGuess;
    guessNumber.removeAttribute('disabled')
    results.removeChild(p)
    playGame=true
})
}
