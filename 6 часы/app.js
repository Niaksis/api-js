function time() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    checkTime(hours);
    hours = plusZero(hours);
    minutes = plusZero(minutes);
    seconds = plusZero(seconds);
    
    document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds}`;
}
function checkTime(hours) {
    if (4 < hours < 16) {
        document.body.style.background = '#f5f5dc';//  #f5f5dc 
        document.getElementById('clock').style.color = '#482525';//  #482525
    }
    
}

function plusZero(num) {
    if (num < 10) {
        num = '0' + `${num}`;
    }
    return num
}

setInterval(time,1000);