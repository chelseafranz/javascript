//create empty array to put prices in later
var priceArray=[];


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

//filter through all prices and print only those 14-18
// var t=[];
// items.map(function(t){
//     t>=14 && t<=18;
// console.log(t);
//  });
// priceArray.filter(function(a){
// if (a >=14 && a<=18){
//   console.log(a);
// }});

var findPrice= items.filter(function(i){
  return i.price > 14 && i.price < 18;

});
console.log(findPrice);
