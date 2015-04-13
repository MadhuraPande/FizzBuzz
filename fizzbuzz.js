//javascript program - FizzBuzz
/*Descirption - Given a set of numbers, for each number, print "fizz" if divisible by 3, print "buzz" if divisible by 5 
and print "fizzbuzz" if divisible by both.*/

function print() {

    var startNumber = document.getElementById("number1").value;     //get first number entered by user
    var endNumber = document.getElementById("number2").value;       //get second number entered by user
    for (var i = startNumber; i <= endNumber; i++) {                
        var node = document.createElement("p");
        if (i % 15 == 0) {                                              //if divisible by 5 and 3 both print fizzbuzz
            node.appendChild(document.createTextNode(i + ":fizzbuzz"));
            document.getElementById("output-area").appendChild(node);
            continue;
        }
        if (i % 5 == 0) {
            node.appendChild(document.createTextNode(i + ":buzz"));     //if divisible only by 5 print buzz
            document.getElementById("output-area").appendChild(node);
            continue;
        }
        if (i % 3 == 0) {
            node.appendChild(document.createTextNode(i + ":fizz"));         //if divisible only by 3 print fizz
            document.getElementById("output-area").appendChild(node);
            continue;
        }
    }
}
