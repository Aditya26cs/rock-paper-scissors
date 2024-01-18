let userScore = 0
let computerScore = 0

let attempts = prompt('enter number games you want to play.');
 
if(attempts==null || attempts==="") {
    attempts = 5;
    msg.style.backgroundColor = "grey"

}

document.getElementById('msg').textContent = `${attempts} attempts left`;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector('#msg')



const  genCompChoice = () => {
   
    const options = [ 'rock' , 'paper' , 'scissors']
    const  randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
}

 const gameDraw = () => {
 
     // msg.innerText = " game draw"
       msg.style.backgroundColor = "grey"
  }


const showWinner = (userWin ,   userChoice, compChoice) => {
    if(userWin){
         
    userScore++;
    document.getElementById('user-score').innerText = userScore;
    msg.style.backgroundColor = "green"
    }
    else{
        
        computerScore++;
        document.getElementById('comp-score').innerText = computerScore;
         msg.style.backgroundColor = " red"
        // msg.innerText = ` you lose ${ compChoice} beats ${userChoice}` 
    }
}

 
const playGame = function(userChoice){
    // generate comp choice

    const compChoice = genCompChoice()

     console.log( 'comp choice' , compChoice)

    if(userChoice === compChoice){
         gameDraw()
    }
    else{
        let userWin = true 
        if( userChoice === 'rock'){
            // paper scissors
           userWin = compChoice === "paper" ?  false :   true
        }

        else if (userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false
        }

        else{
            userWin = compChoice === "rock" ?   false  : true
        }
        showWinner(userWin ,  userChoice, compChoice)
    }

}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        if (attempts > 0) {
            const userChoice = choice.getAttribute("id");
            console.log('user choice', userChoice);
            playGame(userChoice);
            attempts--;
            document.getElementById('msg').textContent = `${attempts} attempts left`;
        } 
        else {
             if(userScore > computerScore){
                msg.style.backgroundColor = "green"
                document.getElementById('msg').innerText = "user is win"  
             }
             else{
                msg.style.backgroundColor = " red"
                document.getElementById('msg').innerText =  'computer is win'
             }
    
             

        }
    });
});


const newGame = () => {
    userScore = 0;
    computerScore = 0;
    attempts = prompt('Enter the number of games you want to play.') || 5;
    document.getElementById('msg').textContent = `${attempts} attempts left`;
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('comp-score').innerText = computerScore;
};

// Event listener for restart button
restart.addEventListener("click", newGame);


 

      

  







    



     
    

     


 