const board = document.querySelector("#board")
const SQUARES_NUMBER = 500
const colors = ["#ba5b5b", "#ba5ba6", "#ba2bb5", "#722bba", "#2b39ba", "#2ba0ba", "#2bba64", "#8dba2b"]

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div")
  square.classList.add("square")

  square.addEventListener("mouseover", () => 
    setColor(square)
  )
  square.addEventListener("mouseleave", () =>
    removeColor(square)
  )

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = ` 0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d"
  element.style.boxShadow = ` 0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}