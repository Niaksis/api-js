const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const btn = document.querySelector(".btn")
const color = document.querySelector('.tcolor')
const bodyBacg = document.querySelector('body')


btn.addEventListener('click', function() {
    let hexColors = "#";
    for (let i = 0; i < 6; i++) {
        let randomHex = Math.floor(Math.random() * hex.length)
        hexColors += hex[randomHex];

    }
    bodyBacg.style.backgroundColor = hexColors
    color.textContent = hexColors

})