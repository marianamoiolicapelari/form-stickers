const incrementButton = document.querySelector('#increment-button')
const decrementButton = document.querySelector('#decrement-button')
let counter = document.querySelector('#counter-value')
const form = document.querySelector('#form')
const buttonForm = document.querySelector('#button-form')

let value = 0

let disableButton = () => {
    if (counter.value == 0) {
        decrementButton.disabled = true
        return
    }
    decrementButton.disabled = false
}

let inputColor = () => {

    if (counter.value == 0) {
        counter.style.backgroundColor = '#ff6961'
        counter.style.borderColor = '#ff0000'
        return
    }
    counter.style.backgroundColor = '#dde3e9'
    counter.style.borderColor = '#2f3676'
}


// let isFormSuccess = () => {
//     let msgFooter = document.querySelector('.msg-footer')

  
// }


let inputValidation = (e) => {
    const check = document.querySelectorAll('.checkbox');
    const resultChecked = []

    for (let i = 0; i < check.length; ++i) {
        resultChecked.push(check[i].checked)
    }

    if (resultChecked.includes(true)) {
        return
    }
    alert('Selecione um tipo de Sticker')

    e.preventDefault()
}

form.addEventListener('submit', inputValidation)


incrementButton.addEventListener('click', () => {
    value = ++value
    counter.value = value
    disableButton()
    inputColor()
})

decrementButton.addEventListener('click', () => {
    value = value !== 0 ? --value : 0
    counter.value = value
    disableButton()
    inputColor()
})
