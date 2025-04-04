
const questions =  [ 
   
{
    question: 'What is the capital city of Kenya?',
    answers: [ 
        { text:'Juja', correct: false },
        { text:'Nyeri', correct: false },
        { text:'Eldoret', correct: false },
        { text:'Nairobi', correct: true },
    ]
},


{
    question: 'Who is the president of Kenya?',
    answers: [ 
        { text:'William Ruto', correct: true },
        { text:'Daniel Moi', correct: false },
        { text:'Uhuru Kenyatta', correct: false },
        { text:'Kevin Malomba', correct: false },
    ]
},


{
    question: 'Which is the smallest country in the world?',
    answers: [ 
        { text:'Tonga', correct: false },
        { text:'Burundi', correct: false },
        { text:'Vatican City', correct: true },
        { text:'Spain', correct: true },
    ]
},


{
    question: 'Which of the following is the true full name of acronym A.I in technology',
    answers: [ 
        { text:'Artificial Intelligence', correct: true },
        { text:'Artificial Insemination', correct: false },
        { text:'As Is', correct: false },
        { text:'Annual Inception', correct: false },
    ]
},
];


const questionElement = document.getElementById( 'question')
const answerButtons = document.getElementById( 'answer-buttons')
const nextButton = document.getElementById( 'next-button')

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() { 
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML='Next';
  showQuestions()
}

function showQuestions() { 

    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + '.' + currentQuestion.question


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button') 
        button.innerHTML =answer.text
        button.classList.add('btn')
        answerButtons.appendChild(button)

        if (answer.correct) { 
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', selectAnswer)
    });


}



function resetState(){ 

    nextButton.style.display='none'
    while(answerButtons.firstChild){ 
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){ 

    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct == 'true'

    if(isCorrect){ 
        selectBtn.classList.add('correct')
        score++
        // alert('kudos')
    }
    else {
        selectBtn.classList.add('incorrect')
     }

     Array.from(answerButtons.children).forEach( button => {

        if(button.dataset.correct ==='true'){

            button.classList.add('correct')
        }

        button.disabled = 'true'


     })

nextButton.style.display='block'

}

function showScore(){ 
    resetState()
   questionElement.innerHTML= `You scored ${score} out of  ${questions.length}`
   nextButton.innerHTML='Play Again'
   nextButton.style.display='block'
   nextButton.style.margin='10px'


}

function handleNextButton(){ 

    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){ 
        showQuestions()
    }
    else { 
        showScore()
    
    }
}


nextButton.addEventListener('click',()=> {

if(currentQuestionIndex<questions.length){ 

    handleNextButton()
}
else { 
    startQuiz()
}

 })


startQuiz()




