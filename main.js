document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("myDiv").style.display = "none";
});



let card = document.createElement("div");
card.id = "card"; 


let title = document.createElement("h2");
title.textContent = "Gandalf"; 

let link = document.createElement("a");
link.href = "#"; 
link.textContent = "Go to profile";

card.appendChild(title);
card.appendChild(link);

document.body.appendChild(card);



const questions = [
    {
        question: "რა არის JavaScript?",
        answers: ["პროგრამირების ენა", "ოპერაციული სისტემა", "ვებ ბრაუზერი"],
        correct: 0
    },
    {
        question: "რომელ წელს შეიქმნა JavaScript?",
        answers: ["1995", "2005", "2015"],
        correct: 0
    },
    {
        question: "რომელი კომპანია შექმნა JavaScript?",
        answers: ["Microsoft", "Netscape", "Google"],
        correct: 1
    }
];

let score = 0;


const quizContainer = document.createElement("div");
quizContainer.id = "quiz";
document.body.appendChild(quizContainer);

questions.forEach((q, index) => {
    const questionEl = document.createElement("h3");
    questionEl.textContent = q.question;
    quizContainer.appendChild(questionEl);

    q.answers.forEach((answer, i) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", function() {
            if (i === q.correct) {
                button.style.backgroundColor = "green";
                score++;
            } else {
                button.style.backgroundColor = "red";
            }
            scoreDisplay.textContent = `ქულები: ${score}`;
        });
        quizContainer.appendChild(button);
    });
});


const scoreDisplay = document.createElement("h2");
scoreDisplay.textContent = "ქულები: 0";
document.body.appendChild(scoreDisplay);
