/*
    La redeclaración es volver a declarar una variable, y la reasignación es volver a asignar un valor.

    var puede ser redeclarada y reasignada.
    let puede ser reasignada, pero no redeclarada.
    const no puede ser redeclarada, ni reasignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.
*/

var firstName; // Declaracion (undefined) ✅
firstName = "Jesus"; // Asignacion ✅
firstName = "Manuel"; // Reasignacion ✅
var firstName = "Almaraz"; // Redeclaracion y reasignacion ✅
console.log(firstName);

let lastName; // Declaracion (undefined) ✅
lastName = "Jesus"; // Asignacion ✅
lastName = "Manuel"; // Reasignacion ✅
//let lastName = "Almaraz"; // SyntaxError: Identifier 'lastName' has already been declared. ❌
console.log(lastName);

//const dogName; // Declaracion (undefined) ❌
dogName = "Tommy"; // TypeError: Assignment to constant variable. ❌
dogName = "Manuel"; // TypeError: Assignment to constant variable. ❌
const dogName = "Tommy"; // Declaración y asignación ✅
console.log(lastName);

const array = ["apple", "banana"]; // declaración y asignación ✅
array[0] = "banana"; // Cambio de valor en un elemento del array
console.log(array); // [ 'piña', 'pera' ]
const array = [1, 2, 3]; // SyntaxError: Identifier 'array' has already been declared. ❌
