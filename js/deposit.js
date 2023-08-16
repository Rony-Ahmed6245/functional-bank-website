document.getElementById('deposit-btn').addEventListener('click',function(){
//   get the value 
    const depositInpput = inputFieldValues('dpInput')
    const depositElement  = textElement('dpText')
    const elementBalance = textElement('elementBalance');
 

    // calculate the value and display value 
    const depositTotal = depositInpput + depositElement ;
    displaySystem('dpText', depositTotal)

   

    const totalBalance = elementBalance  + depositInpput ;
    displaySystem('elementBalance', totalBalance);

 
 })



