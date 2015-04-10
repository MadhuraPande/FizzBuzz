//javascript program - FizzBuzz
//Descirption - Given a set of numbers, for each number, print "fizz" if divisible by 3, print "buzz" if divisible by 5 and print "fizzbuzz" if divisible by both.

function print() {

    //var outputarea = document.getElementById("output-area");
    //while (outputarea.hasChildNodes()) {
    //    outputarea.removeChild(outputarea.lastChild);
    //}
    var startNumber = document.getElementById("number1").value;
    var endNumber = document.getElementById("number2").value;
    for (var i = startNumber; i <= endNumber; i++) {
        var node = document.createElement("p");
        if (i % 15 == 0) {
            node.appendChild(document.createTextNode(i + ":fizzbuzz"));
            document.getElementById("output-area").appendChild(node);
            continue;
        }
        if (i % 5 == 0) {
            node.appendChild(document.createTextNode(i + ":buzz"));
            document.getElementById("output-area").appendChild(node);
            continue;
        }
        if (i % 3 == 0) {
            node.appendChild(document.createTextNode(i + ":fizz"));
            document.getElementById("output-area").appendChild(node);
            continue;
        }
    }
}
