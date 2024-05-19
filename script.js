function helloWorld() {
    console.log("Hello Worldy");
}

function getComputerChoice() {
    compAns = Math.random();
    compAns = compAns * 3;

    if (compAns <= 1) {
        compRoc = 1;
        compPap = 0;
        compSci = 0;
    }

    if (compAns > 1 && compAns <= 2) {
        compRoc = 0;
        compPap = 1;
        compSci = 0;
    }

    if (compAns > 2 && compAns <= 3) {
        compRoc = 0;
        compPap = 0;
        compSci = 1;
    }

}

function getUserChoice() {
    console.log("Please input your choice.")
    console.log("Enter 1 for Rock")
    console.log("Enter 2 for Paper")
    console.log("Enter 3 for Scissors")
    console.log("Enter ? for a reminder of the rules.")

    userAns = prompt("Enter your answer!")

    console.log(userAns)

    if (userAns == "?") {
        console.log("Both players select from Rock Paper and Scissors")
        console.log("Answers are compared to see who wins!")
        console.log("Rock beats Scissors, Scissors beat Paper, and Paper beats Rock.")
        console.log("In the event that both players choose the same answer, it's a draw.")
        getUserChoice();
    }



}

function comparison() {
    // r p s
    if (compRoc == 1){
        console.log("Computer throws Rock!")
        if (userAns == 1) {
            console.log("You throw Rock!")
            console.log("It's a tie!")
        }
        if (userAns == 2) {
            console.log("You throw Paper!")
            console.log("You win!")
            userScore = userScore + 1
        }
        if (userAns == 3) {
            console.log("You throw Scissors!")
            console.log("Computer wins!")
            compScore = compScore + 1
        }
    }

    if (compPap == 1){
        console.log("Computer throws Paper!")
        if (userAns == 2) {
            console.log("You throw Paper!")
            console.log("It's a tie!")
        }
        if (userAns == 3) {
            console.log("You throw Scissors!")
            console.log("You win!")
            userScore = userScore + 1
        }
        if (userAns == 1) {
            console.log("You throw Rock!")
            console.log("Computer wins!")
            compScore = compScore + 1
        }
    }

    if (compSci == 1){
        console.log("Computer throws Scissors!")
        if (userAns == 3) {
            console.log("You throw Scissors!")
            console.log("It's a tie!")
        }
        if (userAns == 1) {
            console.log("You throw Rock!")
            console.log("You win!")
            userScore = userScore + 1
        }
        if (userAns == 2) {
            console.log("You throw Paper!")
            console.log("Computer wins!")
            compScore = compScore + 1
        }
    }

    else {
        console.log("error in comparison function")
    }
    
}

function rocPapSci() {
        getUserChoice()
        getComputerChoice() //by running the User choice before the Comp choice, we can make sure it's not possible to cheat
        comparison()

}



function playGame() {
    console.log("Welcome to Rock Paper Scissors!")
    console.log("There will be five rounds")
    userScore = 0;
    compScore = 0;
    rocPapSci()

    if (compScore > userScore){
        console.log("Computer wins!")
    }
    if (compScore < userScore){
        console.log("You win!")
    }
    if (compScore == userScore){
        console.log("It's a tie!")
    }
}

/*

1. generate random number 0, 1, 2, assigned to rock, paper, scissors
2. ask user for input, rock paper or scissors (assigned to number?)
3. compare answers to see who wins
4. output result!

*/