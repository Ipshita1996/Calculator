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
var numbers = document.querySelectorAll(".numbers p");
var operators = document.querySelectorAll(".operations p");
var numArray = Array.apply(null, numbers);
var opArray = Array.apply(null,operators);

numArray.forEach(element => {
    element.addEventListener("click", function(){
        console.log(element.innerHTML);
        if(element.innerHTML == "DEL") {
            editField.value = editField.value.slice(0, -1);
        } else {
            editField.value += element.innerHTML;
        }
        
    });
});

opArray.forEach(element => {
    element.addEventListener("click", function(){
        console.log(element.innerHTML);
        if(element.innerHTML == "=") {
            alert("call eval");
        } else {
            console.log("spliced and found "+editField.value.slice(-1))
            let op = editField.value.slice(-1)
            if( op == "-" || op == "+" || op == "*" || op == "/") {
                editField.value = editField.value.slice(0, -1);
                editField.value += element.innerHTML;
            } else if(editField.value != "") {
                editField.value += element.innerHTML;
            }
        }
        //if value ends with operator override recent one
    });
});

//modify the = button

//the clear button
var clearButton = document.querySelector(".calc-field span");
clearButton.addEventListener("click", function() {
    editField.value = "";
});
