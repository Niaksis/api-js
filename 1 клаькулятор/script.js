const inPutNums = document.querySelector('.numberInput'), 
outPutNums = document.querySelector('.numberOutnput');


function input(i) {
    inPutNums.value = inPutNums.value + i
}

function output() {
    if (eval(inPutNums.value) == "Infinity"){
    outPutNums.value = 0;
    inPutNums.value = 0;
    }else{
    outPutNums.value = eval(inPutNums.value);
    inPutNums.value = eval(inPutNums.value);
    }
}

function clearAll() {
    inPutNums.value = ('')
    outPutNums.value = ('')
}

function clearLast() {
    inPutNums.value = inPutNums.value.slice(0, -1)
}

function backspase() {
    inPutNums.value = inPutNums.value.substring(0, inPutNums.value.length - 1)
}

function half() {
    inPutNums.value = inPutNums.value/2
    outPutNums.value = inPutNums.value
}

function square() {
    inPutNums.value = inPutNums.value**2
    outPutNums.value = inPutNums.value
}
function cube() {
    inPutNums.value = inPutNums.value**3
    outPutNums.value = inPutNums.value
}

function percent() {
    inPutNums.value = inPutNums.value/100
    outPutNums.value = inPutNums.value
}

function plmin() {
    inPutNums.value = inPutNums.value * -1;
}