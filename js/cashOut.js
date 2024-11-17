document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();





    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');

    if(pinNumber===1){

        const balance =getTextValueById('account-balance');
        const newBalance = balance - cashOut ;

        document.getElementById('account-balance').innerText = newBalance;
    }

    else{
        alert('Get Lost');
    }
})