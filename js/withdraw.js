const withdrawInputBtn = document.getElementById('withdrawInputBtn').addEventListener('click',function(){

    const withdrawInput = inputFieldValues('withdrawInput');
    const withdrawElemnt = textElement('withdrawElement');
    const elementBalance2 = textElement('elementBalance');

    const withdrawAmount = withdrawInput + withdrawElemnt ;
    displaySystem('withdrawElement' , withdrawAmount) ;


    const totalBalance  = elementBalance2 - withdrawInput ;
    displaySystem('elementBalance' , totalBalance ) ;

})