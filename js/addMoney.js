document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();






 const addMoney =    
 getInputFieldValueById('input-add-money');
 

 const pinNumber =getInputFieldValueById('input-pin-number');
 console.log(addMoney,pinNumber);

 if(pinNumber===1)
 {
    const balance =getTextValueById('account-balance');
    const totalBalance = addMoney + balance;
    console.log(totalBalance);

     document.getElementById('account-balance').innerText=totalBalance; 

//  Add to Transaction History

                      const p = document.createElement('p');
                      p.innerText = `Added: ${addMoney} Tk. New_Balance: ${totalBalance}`;
                      console.log(p.innerText);



document.getElementById('transaction-container').appendChild(p);
 }

 else{
    alert('Get Out');
 }
})