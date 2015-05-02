//javascript program - FizzBuzz
/*Descirption - Given a set of numbers, for each number, print "fizz" if divisible by 3, print "buzz" if divisible by 5 
and print "fizzbuzz" if divisible by both.*/

function print(printNumber, printString){
    var node = document.createElement("p");
    node.appendChild(document.createTextNode(printNumber + " :" + printString));
    document.getElementById("output-area").appendChild(node);
}

function calculate() {

    var startNumber = document.getElementById("number1").value;     //get first number entered by user
    var endNumber = document.getElementById("number2").value;       //get second number entered by user
    for (var i = startNumber; i <= endNumber; i++) {                
        if (i % 15 == 0) {                                              //if divisible by 5 and 3 both print fizzbuzz
            print(i,"fizzbuzz");
            continue;
        }
        if (i % 5 == 0) {
            print(i,"buzz");
            continue;
        }
        if (i % 3 == 0) {
            print(i,"fizz");
        }
    }
}
