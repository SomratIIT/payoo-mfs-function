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

 
 }

 else{
    alert('Get Out');
 }
})