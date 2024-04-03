const greetingNode = document.getElementById('greeting')
const myDiv = document.getElementById("myDiv")
const quizForm = document.getElementById('quizForm')

console.log("greeting Node:", greetingNode)
console.log("my div: ", myDiv)

greetingNode.innerText = "Hello, Joe!"

const newParagraph = document.createElement("p")

newParagraph.textContent = "This is a new paragraph added with DOM manipulation."

myDiv.appendChild(newParagraph)

let score = 0;

let numberOfPoints = 10;

quizForm.addEventListener("submit", (event) => {

    console.log("event parameter: ", event)
    event.preventDefault()

    const userAnswer = document.getElementById("answer").value;
    const resultDiv = document.getElementById("result");
    const scoreDiv = document.getElementById("score")
    console.log("userAnswer:", userAnswer)

    if (userAnswer.toLowerCase() == "austin") {
        resultDiv.textContent = "Correct!"
        score = score + numberOfPoints;
        scoreDiv.textContent = score;
    } else {
        resultDiv.textContent = "Incorrect!"
        score = score - numberOfPoints;
        scoreDiv.textContent = score;
    }
})