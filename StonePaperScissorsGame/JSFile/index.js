let userScore = 0;
let compScore = 0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice= () =>{
const options=["stone","paper","scissors"];
const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame= () =>{
    msg.innerText= "Game Was Draw🤝play Again!!";
    msg.style.backgroundColor="#081b31";
}

const showWinner= (userWin, userChoice, compChoice) => {
        if(userWin){
           userScore++;
           userScorePara.innerHTML = userScore;
           msg.innerHTML= "You Win👍!!";
           msg.style.backgroundColor="green";
        }else{
           compScore++;
           compScorePara.innerHTML = compScore;
           msg.innerHTML= "You Lose👎!!";
           msg.style.backgroundColor="red";
        }
};

const playGame=(userChoice) =>{
        // Generate computer choice   
            const compChoice=genCompChoice();
            
                if(userChoice === compChoice){
                    // Draw Game

                   drawGame();
                }else{
                    let userWin=true;
                if(userChoice === "rock"){
                    //scissors, paper

                    userWin = compChoice === "paper" ? false : true;
                }else if(userChoice === "paper"){
                    userWin = compChoice === "scissors" ? false:true;
                }else{
                    // rock,paper
                    userWin = compChoice === "scissors" ? false:true;
                }
                showWinner(userWin, userChoice, compChoice);
            }
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("Id");
      playGame(userChoice);
    });
});