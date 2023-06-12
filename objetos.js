/* // vobjeto declarado sin propiedades 
let persona = []
console.log(persona);
 */
/* let persona = {
    nombre: 'Angel',
    apellido :'Cruz',
    edad: 22,
    estudios: 'Licenciatura',
    hijos: false
}
console.log(persona.edad) */

// segunda fortma de decdlarar un objeto
/* 
let persona = new Object()
{
    persona.nombre = 'Martin',
    persona.apellido= 'Nava',
    persona.edad= 30
}
console.log(persona)
 */

// tercera forma de delcarar un objeto

let persona= new Object()
{
    persona ["Nombre"] = 'Angel',
    persona ["Apellido"] = 'Cruz',
    persona ["Edad"] = 22,
    persona.pais='Mexico'

   delete persona.pais
}
console.log(persona)

console.log( `Mi nombre es: ${persona.Nombre} y mi apellido es: ${persona.Apellido}`)