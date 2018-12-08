var add = function(num1 , num2) {
    return num1+num2;
}
var subtract = function(num1 , num2) {
    return num1 - num2;
}
var multiply = function(num1, num2) {
    return num1*num2;
}
var divide = function(num1, num2) {
    return num1/num2;
}
var operate = function(operator, num1, num2) {
    if(operator == "+") {
        return add(num1, num2);
    } else if(operator == '-') {
        return subtract(num1,num2);
    } else if(operator == '*') {
        return multiply(num1,num2);
    }else if(operator == '/') {
        return divide(num1,num2);
    }
}

//adding numbers to textfield
var editField =  document.querySelector('#numText');
//editField.value = "1 + 2 - 3";
var numbers = document.querySelectorAll(".numbers p");
var operators = document.querySelectorAll(".operations p");
var numArray = Array.apply(null, numbers);
var opArray = Array.apply(null,operators);

numArray.forEach(element => {
    element.addEventListener("click", function(){
        console.log(element.innerHTML);
        editField.value += element.innerHTML;
    });
});
opArray.forEach(element => {
    element.addEventListener("click", function(){
        console.log(element.innerHTML);
        if(editField.value != ""){
            editField.value += " "+element.innerHTML+" ";
        }
    });
});
//first operator should always be a number
//add same functionality for operators as well (if two operators clicked on a row the overwrite the most recent operator)
//modify DEL button

//the clear button
var clearButton = document.querySelector(".calc-field span");
clearButton.addEventListener("click", function() {
    editField.value = "";
});
