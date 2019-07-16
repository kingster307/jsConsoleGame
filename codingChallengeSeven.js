let score =0;

// function constructor 
function Question (question, answers, correct)  {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

//adding to prototype chain 
Question.prototype.displayQuestion = function () {
    console.log(this.question);
    //question counter 
    let i = 0;
 
     this.answers.forEach((answer)=>{
        //increment then return  
        ++i;
        //show question 
         console.log(`${i}: ${answer} \n`);
     })
}

Question.prototype.checkAnswer = function (userAnswer){
    if(userAnswer === (this.answers[this.correct]) || parseInt(userAnswer) === ((this.correct)+1)){
        this.addPoint();
        return console.log(`${this.answers[this.correct]} is the correct answer!!!`);
    }else if (userAnswer === "q") {
        return console.log(`goodbye!`);
    }
    console.log("wrong answer");
}

Question.prototype.addPoint = function (){
    ++score;
    return console.log(`your total score is: ${score}`);
}


//instances of the question constructor 
let q1 = new Question("is JS the coolest language?", ["yes", "no"], 0),
    q2 = new Question("what is my name?", ["peter", "Jorge", "hose"], 0),
    q3 = new Question("Where am I?", ["jorgeTown", "hell", "Goegeous West Palm Beach", "heaven"], 2),

//randomizing questions array
    questions = [q1, q2, q3];
// randomizing index


do{
n = Math.floor(Math.random() * questions.length);
questions[n].displayQuestion();
userAnswer = prompt('please select the correct answer or type q to quit');
questions[n].checkAnswer(userAnswer);
}while(userAnswer !== "q");

// questions[n]