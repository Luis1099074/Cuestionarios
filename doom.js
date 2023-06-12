/* // Seleccionamos el elemento a través de su ID
const main = document.getElementById("main")

// Verificamos en consola que obtenemos la etiqueta
console.log(main)
 */
// Seleccionamos los elementos a través de su clase
const main = document.getElementsByClassName("main")

// Verificamos en consola que obtenemos la etiqueta
console.log(main[0])
console.log(main[0].textContent)