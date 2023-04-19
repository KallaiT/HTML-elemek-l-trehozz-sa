console.log("script loaded")

let div1 = document.createElement("div")
let div2 = document.createElement("div")
let div3 = document.createElement("div")
div1.innerText = "ez az első div"
div2.innerText = "ez az 2 div"
div3.innerText = "ez az 3 div"

div1.innerText = "Hello world"

console.log(div1)

document.body.append(div1)
div1.appendChild

function kiír(x) {
  console.log(x)
}

kiír("Szia")

document.body.prepend(div1)

function kiír() {
  console.log("a:", a)
  console.log("b", b)
  console.log("c:", c)
}

let a = 1
let b = 2
let c = a
kiír3()

a = 7
kiír3()

let tomb = [1, 2, 3, 4, 5]
for (let i = 0; i < tomb.length; i++) {
  console.log(tomb[i])
}

let tomb2 = tomb
