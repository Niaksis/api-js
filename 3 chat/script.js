const inpmesg = document.querySelector('.inpMesg');
const sendBtn = document.querySelector('.sendBtn');
const mesg = document.querySelector('.mesg');

sendBtn.addEventListener('click', function(){
    let mesgList = inpmesg.value;
    
    if (mesgList === '') {
        alert('Введите текст')
    }else{
        mesg.innerHTML = mesgList;
    }
})