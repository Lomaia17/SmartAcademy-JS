// First Task
console.log("Task 3rd")
function reverseWord(str) {
  var newWord = ""
  for (var i = str.length-1; i >= 0 ; i --){
    newWord += str[i]
  }
  return newWord
}

var title ="SmartAcademy"
const reverse = reverseWord(title)
console.log(reverse)

// Second Task
console.log("Task 4th")
let givenString="123456789"
var numbersFromArr = givenString.split``.map(x=>+x);
for(var i = 0 ; i <= numbersFromArr.length-1; i++) {
  console.log(Math.pow(numbersFromArr[i],i+1))
}

//Third Task 
console.log("Task 5th")
let givenString1 = "123456789"
var numbersFromArr = givenString1.split``.map(x=>+x);
for(j=0; j <= numbersFromArr.length-1; j++) {
    for(g=1; g <= numbersFromArr.length; g++){
     console.log(Math.pow(numbersFromArr[j],g))
    }
}
