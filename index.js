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

//filters through all objects in var 'items' and returns all with value between 14&18
var findPrice= items.filter(function(i){
  return i.price > 14 && i.price < 18;

});
console.log(findPrice);


//find all items with a currecy of GBP
var GBP= items.filter(function(j){
  return j.currency_code==="GBP";

});
console.log(GBP);

var values= GBP.map.call(GBP, function(v){
  console.log(v.title + " $" + v.price);
});

items.forEach(function(w){
  w.materials.forEach(function(q){
    if(q.materials === "wood");
    console.log(w.title);
  })
});

var mat = items.filter(function(m){
  return m.materials.length > 8;
});
console.log(mat);

var howMany = mat.map.call(mat, function(r){
  console.log(r.title + r.materials);
});

var whoMade= items.filter(function(w){
  return w.who_made === 'i_did';
});

console.log(whoMade.length);
