// Create a new paragraph element to use in the solutions
var newParagraphElement = document.createElement("p");
var text = "This is the new Text";
var newTextElement = document.createTextNode(text);
// insert the newly created text node into the node tree of paragraph
newParagraphElement.appendChild(newTextElement);

if (document.getElementById('p1')) {
// Write here solution for practice #1
    var newParagraphElement = document.createElement("p");
    var text = "This is the new Text";
    var newTextElement = document.createTextNode(text);

    var currentElement = document.getElementById('p1');
    currentElement.parentNode.replaceChild(newTextElement, currentElement);
}

if (document.getElementById('p2')) {
    var currentElement = document.getElementById('p2');
    currentElement.parentNode.removeChild(currentElement);
}

// Write below solution for practice #3
if (document.getElementById('p3')) {
    var newParagraphElement = document.createElement("p");
    var text = "This is the new Text";
    var newTextElement = document.createTextNode(text);
    newParagraphElement.appendChild(newTextElement);
    
    var currentElement = document.getElementById('p3');
    var parent = currentElement.parentNode;
    parent.appendChild(newParagraphElement);
}

var date = [5,3,1999];
var dateString = date[2]+'-'+('0'+(date[1]-1))+'-'+('0'+date[0]);
console.log(dateString);
console.log(new Date(dateString));

var obj = {a: 45};
console.log(obj);
// Write below solution for practice #4

// Write below solution for practice #5

// Write below solution for practice #6

// Write below solution for practice #7