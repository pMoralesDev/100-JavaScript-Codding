let totalAmount = document.getElementById("total-amount")
let userAmount = document.getElementById("user-amount")
const checkAmountButton = document.getElementById("check-amount")
const totalAmountButton = document.getElementById("total-amount-button")
const productTitle = document.getElementById("product-title")
const errorMessage = document.getElementById("budget-error")
const productTitleError = document.getElementById("product-title-error")
const productCostError = document.getElementById("product-cost-error")
const amount = document.getElementById("amount")
const expenditureValue = document.getElementById("expenditure-value")
const balanceValue = document.getElementById("balance-amount")
let tempAmount = 0
/**
 * Funciones para el presupesto
 */
totalAmountButton.addEventListener('click', () => {
    tempAmount = totalAmount.value
    /**
     * Nos aseguramos de que tenemos un valor valido
     */
    if (tempAmount === "" || tempAmount < 0) {
        errorMessage.classList.remove("hide")
    } else {
        errorMessage.classList.add("hide")
        amount.innerHTML = tempAmount
        balanceValue.innerText = tempAmount - expenditureValue.innerText
        totalAmount.value = 0
    }
})
/**
 * habilitamos los botones para editar y borrar cargos
 */
const disableButtons = (bool) => {
    let editButtons = document.getElementsByClassName("edit")
    Array.from(editButtons).forEach(element => {
        element.disable = bool
    })
}
/**
 * Modificamos la lista de elementos
 */
const modifyElement = (element, edit = false) => {
    let parentDiv = element.parentElement
    let currentBalance = balanceValue.innerText
    let currentExpence = expenditureValue.innerText
    let parentAmount = parentDiv.querySelector(".amount").innerText
}