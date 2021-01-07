const minusOdd = document.querySelector('.minusOdd');
const plusOdd = document.querySelector('.plusOdd');
const minusEven = document.querySelector('.minusEven');
const plusEven = document.querySelector('.plusEven');

const countNumb = document.querySelector('.countNumb');

let Num = 0;

minusOdd.addEventListener('click', function () {
    Num -= 1;
    countNumb.value = Num;
    countNumb.textContent = Num;
    colorSpan(Num);
})

plusOdd.addEventListener('click', function () {
    Num += 1;
    countNumb.value = Num;
    countNumb.textContent = Num;
    colorSpan(Num);
})

minusEven.addEventListener('click', function () {
    Num -= 2;
    countNumb.value = Num;
    countNumb.textContent = Num;
    colorSpan(Num);
})

plusEven.addEventListener('click', function () {
    Num += 2;
    countNumb.value = Num;
    countNumb.textContent = Num;
    colorSpan(Num);
})

function colorSpan(Num) {
    if (Num > 0) {
        countNumb.style.color = "#dc3a3f";
    } else if (Num < 0) {
        countNumb.style.color = "#35B8E7";
    } else {
        countNumb.style.color = "black"
    }

}

