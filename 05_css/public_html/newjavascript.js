function Item(name, price, tags) {
  this.name = name;
  this.price = price;
  this.tags = tags;
}
var items = [];
items.push(new Item("Cellphone", 99.99, ["electronics", "computing"]));
items.push(new Item("Computer", 250.54, ["computing"]));
items.push(new Item("Book", 15.25, ["printed material"]));
items.push(new Item("Magazine", 8.52, ["printed material"]));
items.push(new Item("Tablet", 150.54, ["electronics", "computing"]));
items.push(new Item("Speaker", 55.21, ["electronics"]));

// Calculate the total of all items.
var total =
  items.map(function(item) {
    return item.price;
  }).reduce(function(prevValue, currValue) {
    return prevValue + currValue;
  }, 0);
// Calculate the total of all electronics.
var electronicsTotal = 
	items.filter(function(item) {
    return item.tags.includes("electronics");
  }).map(function(item) {
    return item.price;
  }).reduce(function(prevValue, currValue) {
    return prevValue + currValue;
  }, 0);
var limit = items.length;
console.log(limit);
var totalPrice = 0;
for(var i = 0; i < limit; i++){
  if(items[i].tags.includes("electronics")){
    totalPrice += items[i].price;
  }
}
console.log(totalPrice);

var ex1 = 
	items.filter(function(item) {
    return item.tags.includes("electronics");
  }).map(function(item,idx) {
    return "" + idx+" "+item.price;
  });

printArray("ex1", ex1);

// Create an object with the count of all the tags.
var allTags = {};

items.forEach(function(item){
  console.log('>>>> zewn ' + item.tags);
  item.tags.forEach(function(tag){
    console.log('>>>> wewn ' + tag);
    console.log(allTags[tag]);
    if(allTags[tag]){
      console.log('Jest');
      allTags[tag]++;
    }else{
      console.log('Nie ma');
      allTags[tag] = 1;
    }
  });
});

console.log(allTags);

function printArray(header, array) {
  console.log(header);
  array.forEach(function(item, index) {
    if (item.toString) {
      console.log(index + ":" + item.toString());
    } else {
      console.log(index + ":" + item);
    }
  });
}


var x = 5;
function declare_funkcja_x() {
  var x = 8;
  //x = 8;
    console.log(x);
}; 
declare_funkcja_x();
console.log(x);
