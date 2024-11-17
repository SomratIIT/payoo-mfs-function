document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();





    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');

    if(pinNumber===1){

        const balance =getTextValueById('account-balance');
        const newBalance = balance - cashOut ;

        document.getElementById('account-balance').innerText = newBalance;



        const q = document.createElement('q');
        q.innerText = `Cash_out: ${cashOut} Tk. New_Balance: ${newBalance}`;
        console.log(q.innerText);



document.getElementById('transaction-container').appendChild(q);
}
    

    else{
        alert('Get Lost');
    }
})