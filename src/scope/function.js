/* 
    Function Scope
    Es el entorno donde las variables locales solo se pueden acceder
    desde una funcion del programa.

    En este scope no importa que las variables sean declaradas con
    var, let o const. Sin embargo, hay que tener presente que se
    puede redeclarar una variable con var, pero no con let y const.
*/

function greeting() {
  let userName = "Ana";
  console.log(userName);

  if (userName === "Ana") {
    console.log(`Hola ${userName}`);
  }
}

greeting();
console.log(userName); // Error, solo se puede acceder a esa variable dentro de la funcion gretting
