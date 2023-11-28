// create id
function generateID() {
 var count = 0;
  return function () {
    return count++;
 };
 
  
 }
var id = generateID()
// function  each 
function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}
// function map 
function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}
//function filter
function filter(array, predicate) {
 var acc = [];
 each(array, function (element, index) {
   
   if (predicate(element, index)) {
     acc.push(element);
   }
 });
 return acc;
}
// function reduce 
function reduce(array, f, acc) {
 if (acc === undefined) {
   acc = array[0];
   array = array.slice(1);
 }
 each(array, function (element, i) {
   acc = f(acc, element, i);
 });
 return acc;
}   
//recuperer les valeurs de formulaires 


function makeProduits(nom, categ, prac,plac){
  return {
  id:id(),
  name:nom,
  category:categ,
  price: prac,
  Place:plac,
  date:Date()
}
}

var nom = document.getElementById("name");

let categ = document.getElementById("cat");

let prac = document.getElementById("pr");

let plac = document.getElementById("pl");



 
function makeBloc (name,list) {
      var bloc={}
        bloc.name=name,
       bloc.list= list , 
        bloc.addProduct =addProduct 
        /*bloc.remove=removeProduct
        bloc.update=updateProduct
        bloc.display=displayProduct
       */
        
        return bloc
}
var arr = this.list
 arr = []
   console.log(arr)
      // creation bloc list 
var Products = makeBloc("Bloc1")
console.log(Products)


//methode add product 
var addProduct = function (nom, categ, prac, plac) {
 
 var first= makeProduits(nom, categ, prac, plac)
  this.arr.push(first)
  //console.log(first)
console.log(arr);
}

