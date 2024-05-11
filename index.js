var prompt = require('prompt-sync')();


do {
    

var a = parseInt(prompt("enter 1st no-->"));

var b = parseInt(prompt("enter 2nd no-->"));


var c= prompt("enter the operation (+, -, *, /) -->");

var result;
switch (c) {
    case '+':
        result = console.log("ans is ",a+b);
        break;
    case '-':
        result = console.log("ans is ",a-b);
        break;
    case '*':
        result = console.log("ans is ",a*b);
        break;
    case '/':
        result = console.log("ans is ",a/b);
        break;
    default:
        console.log('Invalid operation');
        break;
}
console.log("enter y for continue or n for end");
ch=prompt();
} while (ch=='y');
console.log("thq");