  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
//generate random cell
//mole appears in random cell
//click on mole
//mole reappears in random cell

//create cells array
let cells = document.getElementsByTagName("TD")

//argument for generating random cell from maximum cell length
let randomIndex = Math.floor(Math.random() * cells.length)

//declaring randomCell variable
let randomCell = cells[randomIndex]

//create new image element
var mole = document.createElement('img')

//link image file 
mole.src = './mole.PNG';
mole.id = "mole"

//attach mole image to random cell
randomCell.appendChild(mole)

//console.log(randomCell)

//when clicking on mole - calls whackedMole function
mole.onclick = whackedMole

//new function reassigning random generation for subsequent mole
function whackedMole() {
  randomIndex = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomIndex]
  randomCell.appendChild(mole)

//playing audio with each mole
let audio = new Audio('whack-audio.wav')
audio.play();

  //    console.log("whacked the mole")
}