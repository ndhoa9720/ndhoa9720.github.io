
let quantity = document.getElementById("quantity")
let price = document.getElementById('price')
let totalPrice = document.getElementById("totalPrice")


function totalPriceS() {
    totalPrice.value = quantity.value * price.value
    totalPrice.innerHTML = totalPrice.value
}