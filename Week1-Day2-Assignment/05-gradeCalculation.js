
function studentScoreValidation(score){
    
    switch (true){
        case (score>90 && score<=100):
            console.log("Score is: " +score+ " & Grade is: A1")
            break;
        case (score>80 && score<=90):
            console.log("Score is: " +score+ " & Grade is: A2")
            break;
        case (score>70 && score<=80):
            console.log("Score is: " +score+ " & Grade is: B1")
            break;
        case (score>60 && score<=70):
            console.log("Score is: " +score+ " & Grade is: B2")
            break;
        case (score>50 && score<=60):
            console.log("Score is: " +score+ " & Grade is: C1")
            break;
        case (score>40 && score<=50):
            console.log("Score is: " +score+ " & Grade is: C2")
            break;
        case (score>=33 && score<=40):
            console.log("Score is: " +score+ " & Grade is: D")
            break;
        default:
            console.log("Score is: " +score+ " & Grade is: F")
            break;
    }
}

let inputscore=32
studentScoreValidation(inputscore)
