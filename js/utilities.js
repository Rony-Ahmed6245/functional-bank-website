
// inputField function 
function inputFieldValues(input){
   const inputField =  document.getElementById(input);
   const inputFieldValue = inputField.value ;
   const inputFieldAmount = parseFloat(inputFieldValue);
   inputField.value = '';
   return inputFieldAmount ;

}

// text Element function 
function textElement(element){
   const elements = document.getElementById(element);
   const elementText = elements.innerText ;
   const elementAmount = parseFloat(elementText);
   return elementAmount ;
}


// display the value function 
function displaySystem(displayId , displayValue){
   const displayElements = document.getElementById(displayId);
   displayElements.innerText = displayValue ;
}







