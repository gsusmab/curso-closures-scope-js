/*
    Block Scope
    Es el entorno donde las variables locales unicamente pueden
    ser accedidas desde un bloque de codigo del programa. 
    Un bloque de codigo es todo aquello que esta dentro de las
    llaves {}.
*/

function fruits() {
  if (true) {
    var fruit1 = "Apple"; // function scope
    let fruit2 = "Kiwi"; // block scope
    const fruit3 = "Banana"; // block scope
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
}

fruits();
