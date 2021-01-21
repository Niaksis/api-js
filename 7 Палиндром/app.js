const result = document.querySelector('.result')
const inpText = document.querySelector('.inpText')
const btn = document.querySelector('.btn')
let text


btn.addEventListener('click', function () {
    checkText(text)
})

function checkText(text) {
    text = inpText.value

    let numText = text.length
    
    for (let i = 0; i < numText; i++) {
        if (text[i] !== text[numText - 1 - i]) {
            result.innerHTML = "Не палиндром"
        } else {
            result.innerHTML = "Палиндром"
        }

    }
}



