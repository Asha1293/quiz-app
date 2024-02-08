const question = [
    {
        questions: "Which of the below is NOT a french region?",
        answers: [
            
                {text: "Bretagne", correct: "false"},
                {text: "Normandie", correct: "false"},
                {text: "Catalogne", correct: "true"},
                {text: "Ile de France", correct: "false"},
            
        ]
    },
    {
        questions: "Which river runs through Paris",
        answers: [
            
                {text: "The Seine", correct: "true"},
                {text: "The Rhine", correct: "false"},
                {text: "The Danube", correct: "false"},
                {text: "The Thames", correct: "false"},
            
        ]
    },
    {
        questions: "Which is the largest mountain in France",
        answers: [
            
                {text: "Mount Etna", correct: "false"},
                {text: "Yr Wyddfa", correct: "false"},
                {text: "Matterhorn", correct: "false"},
                {text: "Mount Blanc", correct: "true"},
            
        ]
    },
    {
        questions: "What are the districts in Paris called?",
        answers: [
            
                {text: "Avenues", correct: "false"},
                {text: "Quarters", correct: "false"},
                {text: "Arrondisements", correct: "true"},
                {text: "Jardin", correct: "false"},
            
        ]
    }
]

const questionElement = document.getElementById("questions")
const answerButton = document.getElementById("answer-buttons")
const nextButton = document.getElementById("Next-btn")

let currentquestionIndex = 0
let score = 0

function startQuiz(){

    currentquestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestions()

}

function showQuestions(){
    resetState()

    let currentQuestion = question[currentquestionIndex]
    let questionNo = currentquestionIndex + 1
    questionElement.innerText = questionNo + ". "+ currentQuestion.questions 

    currentQuestion.answers.forEach(answers => {

        const button = document.createElement("Button")
        button.innerText = answers.text
        button.classList.add("btn")
        answerButton.appendChild(button)
        if(answers.correct){
            button.dataset.correct = answers.correct
        }
        button.addEventListener("click", selectAnswers)
    });

}

function resetState(){
    nextButton.style.display = "none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswers(e){
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }else{
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }

        button.disabled = "true"

    })

    nextButton.style.display = "block"

}

function showScore(){
    resetState()

    questionElement.innerText = `Your score is ${score} out of ${question.length}!!`
    nextButton.innerText = "Play again"
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentquestionIndex++
    if(currentquestionIndex < question.length){
        showQuestions()
    }else{
        showScore()
        
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentquestionIndex <question.length){
        handleNextButton()
    }else{
        startQuiz()
    } 
})

startQuiz()

const fruits = ["Apple", "Bananas", "oranges"]

fruits.forEach((fruit)=>{

    console.log(fruit)

})

