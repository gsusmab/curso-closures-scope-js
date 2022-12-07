/*
    Global Scope.
    Tipos: Global, Function y Block.
    En JS los objetos y las funcioens tambien son variables.
    El Scope determina la accesibilidad de las variables, objetos y funciones desde diferentes partes del codigo
*/

// Variables

var a; // Declarando
var b = "b"; // Declarondo y asigando
b = "bb"; // Reasigancion
var a = "aa"; // Redeclaracion

// Global Scope
var fruit = "Apple";

function bestFruit() {
  console.log(fruit);
}

bestFruit();

// Variables que son asignadas sin ser previamente declaradas se convierten en variables globales

function countries() {
  country = "Mexico";
  console.log(country);
}

countries();
console.log(country);
