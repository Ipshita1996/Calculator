var editField =  document.querySelector('#numText');
//editField.value = "Hola";
var numbers = document.querySelectorAll(".numbers p");
var numArray = Array.apply(null, numbers);
numArray.forEach(element => {
    console.log(element)
});
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
console.log(operate("*",2,3));
