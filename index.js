//create empty array to put prices in later
var priceArray=[];

//checks every item in 'items' array
items.forEach(function(item){
  // console.log(item.price);
});

//takes all 'prices' found in array and pushes it top empty array
var push = items.forEach( function(x){
  priceArray.push(x.price);
});

//adds all 'prices' together
var total= priceArray.reduce(function(a, b){
  return a+b;
});
console.log(priceArray);
console.log(total);
//divide total or prices by length of array to find average
var average= total/priceArray.length;
  console.log(average);
  console.log(average.toFixed(2));
