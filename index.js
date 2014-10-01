//create empty array to put prices in later
var priceArray=[];

//takes all 'prices' found and pushes it up to empty array
var push = items.forEach(function(x){
  priceArray.push(x.price);
});

//adds all 'prices' together
var total= priceArray.reduce(function(a, b){
  return a+b;
});

//divide total of all prices by length of array to find average
var average= total/priceArray.length;
  console.log ("The average price for an item is " + (average.toFixed(2)));

//filters through all objects in var 'items' and returns all with value between 14&18
var findPrice= items.filter(function(i){
  return i.price > 14 && i.price < 18;
});
console.log ("Items that cost between $14 USD and $18 USD: " + (findPrice));

//find all items with a currecy of GBP
var GBP= items.filter(function(j){
  return j.currency_code==="GBP";

});

var values= GBP.map.call(GBP, function(v){
  console.log(v.title + " costs  \u00A3" + v.price);
});
//
items.forEach(function(w){
  w.materials.forEach(function(q){
    if(q.materials === "wood");
    console.log(w.title);
  })
});

//checks all objects called "materials" in 'items' array, only prints the ones that have an array with more that 8 objects inside
var mat = items.filter(function(m){
  return m.materials.length >= 8;
});
console.log(mat);

var howMany = mat.map.call(mat, function(r){
  console.log(r.title + r.materials);
});
//filters through 'items' to find all cases where object 'who_made' is equal to 'i_did'
var whoMade= items.filter(function(w){
  return w.who_made === 'i_did';
});
//logs the number of objects found in whoMade function
console.log(whoMade.length) + " were made by their sellers";
