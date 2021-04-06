const calculator = document.querySelector('.calculator-container')
const buttons = calculator.querySelector('.calculator-buttons')
const output = calculator.querySelector('.output')
const operatorButtons = buttons.querySelectorAll('[data-type="operator"]')

buttons.addEventListener('click', e => {
  if (!e.target.closest('button')) return

  const button = e.target
  const buttonValue = button.textContent
  const outputValue = output.textContent
  const { type } = button.dataset
  const { previousButtonType } = calculator.dataset

  // Displays numbers

  if (type === 'number') {
    if (
      outputValue == 0 ||
      previousButtonType === 'operator'
    ) {
      output.textContent = buttonValue
    } else {
      output.textContent = outputValue +  + buttonValue
    }
  }
  if (type === 'operator') {
    operatorButtons.forEach(el => { el.dataset.state = '' })
    button.dataset.state = 'selected'
    calculator.dataset.firstNumber = outputValue
    calculator.dataset.operator = button.dataset.key
  }

  // solves mathematical operations

  if (type === 'equal') {
    const firstOperand = calculator.dataset.firstNumber
    const operator = calculator.dataset.operator
    const secondOperand = outputValue
    output.textContent = calculate(firstOperand, operator, secondOperand)
  }
  // function for clear button
  if (type === 'clear') {
    output.textContent = '0'
    delete calculator.dataset.firstNumber
    delete calculator.dataset.operator
  }

  calculator.dataset.previousButtonType = type
})

  // function for evaluation

function calculate (firstOperand, operator, secondOperand) {
  firstOperand = parseInt( firstOperand )
  secondOperand = parseInt(secondOperand)

  if (operator === 'plus') return firstOperand + secondOperand
  if (operator === 'minus') return firstOperand - secondOperand
  if (operator === 'times') return firstOperand  * secondOperand
  if (operator === 'divide') return firstOperand / secondOperand
}

// changes theme from dark to white and vice versa

const switchButton = document.getElementById("switch")

function switchToggle(){
  let body = document.body
  body.classList.toggle('light-background')
  let calcBody = document.getElementById("calcBody")
  calcBody.classList.toggle("light-calculator")
  let output = document.getElementById("output")
  output.classList.toggle("light-calculator")
  if(body.classList.contains('light-background')){
    switchButton.innerText = "Dark Mode 🌚"
    switchButton.style.cssText = "color:black"

  }else {
    switchButton.innerText = "Light Mode 🌝"
    switchButton.style.cssText = "color:white"
  }
}


switchButton.addEventListener('click', switchToggle)
