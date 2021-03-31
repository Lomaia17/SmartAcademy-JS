let output = document.getElementById("output")
let clear = document.getElementById("r1-1")
let equal = document.getElementById("r5-2")
let delButton = document.getElementById("r1-2")

// function to clear output

function clearDisplay(){
  output.innerText = "0"
}

//  function to remove zero 
function clearZero() {
  if (output.innerText === "0" ) {
    output.innerText=  ' '
 }
}

// displays numbers on output  

function display(num){
  clearZero()
  output.innerText += num
}

// adds function to CE button

function displayOnScreen(){
  let displayText = output.innerText.toString()
  let displaySlice = displayText.slice(0, displayText.length-1)
  if(displaySlice == ''){
    output.innerText = '0'
  }else {
    output.innerText = displaySlice
  }
}

// solve mathematical operations 
function solve(){
  clearZero()
  let solved = eval(output.innerText)
  output.innerText = solved
}

// adding functions to buttons

clear.addEventListener('click', clearDisplay )
equal.addEventListener('click', solve)
delButton.addEventListener('click', displayOnScreen)