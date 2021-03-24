// Adds variables to DOM
var itemInput = document.getElementById('item-input')
var priceInput = document.getElementById('price-input')
var addProductBtn = document.getElementById('add-product')
var productList = document.getElementById('product-list')
var priceList = document.getElementById('price-list')
var priceBtn = document.getElementById('price')

// creates arrays for list

var products = []
var price = []

// adds products to the list 

var renderAllItem = function() {
  productList.innerText = ''
  priceList.innerText = ''
  products.forEach(function(list){
    var itemLi = document.createElement('li')
    itemLi.innerText = list 
    productList.appendChild(itemLi)
  })
  
  // adds prices to the list
  
  price.forEach(function(list){
    var itemLi = document.createElement('li')
    itemLi.innerText = list + '₾'
    priceList.appendChild(itemLi)
  })
  itemInput.value = ''
  priceInput.value = ''
}

// creates functions for buttons

// gets input values and sends to arr
var handleButtonClick = function(){
  var itemValue = itemInput.value
  var priceValue = Number(priceInput.value)
  products.push(itemValue)
  price.push(priceValue)
  renderAllItem()
}

// sum function
var sumBtn = function(){
  var sum = price.reduce(function(a,b){
    return a + b 
  }, 0)
  document.getElementById("sum").innerHTML = sum+'₾'
  
}
// adds functions to buttons

addProductBtn.addEventListener('click', handleButtonClick)
priceBtn.addEventListener('click', sumBtn)