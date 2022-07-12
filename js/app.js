function getPin(){
    const pin = Math.round(Math.random() *10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const calcInput = document.getElementById('calcInput');
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})

document.getElementById('submit-btn').addEventListener('click',function(){
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('calcInput').value;
    const success = document.getElementById('pin-matched');
    const notSuccess = document.getElementById('pin-notMatched');
    if(pin == typedNumber){
        
        success.style.display ='block';
        notSuccess.style.display = 'none';
    }
    else{
        
        notSuccess.style.display = 'block';
        success.style.display ='none';
    }
})
