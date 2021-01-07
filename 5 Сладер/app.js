const btn_prev = document.querySelector(".btn_prev");
const btn_next = document.querySelector(".btn_next");
const container = document.querySelector(".container");

let numImg = 1;

btn_prev.addEventListener('click', function () {
    container.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration:1000, fill:'forwards'});
    if (numImg === 1) {
        numImg = 6;
    }
    numImg--;
    container.style.background = `url(/img/${numImg}.jpg`;
    //console.log(`url(/img/${numImg}.jpg`)
})

btn_next.addEventListener('click', function () {
    container.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration:1000, fill:'forwards'});
    if (numImg === 5) {
        numImg = 0;
    }
    numImg++;
    container.style.background = `url(/img/${numImg}.jpg`;
    //console.log(`url(/img/${numImg}.jpg`)
})

