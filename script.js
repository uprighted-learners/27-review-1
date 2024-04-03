const greetingNode = document.getElementById('greeting')
const myDiv = document.getElementById("myDiv")

console.log("greeting Node:", greetingNode)
console.log("my div: ", myDiv)

greetingNode.innerText = "Hello, Joe!"

const newParagraph = document.createElement("p")

newParagraph.textContent = "This is a new paragraph added with DOM manipulation."

myDiv.appendChild(newParagraph)