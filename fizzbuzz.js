//javascript program - FizzBuzz
/*Descirption - Given a set of numbers, for each number, check divisibility for some numbers and print respective 
string associated with that number*/


//print output for each number
function print(printNumber, printString) {
    var node = document.createElement("p");
    node.appendChild(document.createTextNode(printNumber + ": " + printString));
    document.getElementById("output-area").appendChild(node);
}

//divisibility test
function calculate() {
    var startNumber = document.getElementById("number1").value; //get first number entered by user
    var endNumber = document.getElementById("number2").value; //get second number entered by user
    
    document.getElementById("output-area").innerHTML = "";  //clear page at every new request
    
    var numberList = [3, 5, 7];                 //list of numbers for divisibility test
    var stringList = ["fizz","buzz","tuzz"];    //list of print strings for respective numbers
    
    for (var i = startNumber; i <= endNumber; i++) {
        var outputString = "";
        for (var j = 0; j < numberList.length; j++) {
            if (i % numberList[j] == 0) {
                outputString += stringList[j];              //since each number is associated with particular string, 
            }                                       //order of strings is important.
        }
        if (outputString != "") {           //print only those numbers which are divisible by atleast one number from numberlist
            print(i, outputString);
        }
   }
}
