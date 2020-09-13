console.log('Hola Mundo :D')

/* Tipos de variables:
    var
    let     ->cambleCase :v
    const -> puras mayusculas

*/

var name = 'Dana' //var puede cambiar de valor sin conflicto
let name2 = 'Edwin'//let no puede cambiar el valor en cualquier lado
const NAME3 = 'Anahi'
function sayHello(){
    name = 'Hill'
    name2 = 'Naomi'
    console.log(name2)
}

console.log('nombre1',name)
console.log('nombre2',name2)

sayHello()


/*
    Metodos de String

*/


 //toUperCase
 var phrase = 'Hola a todos'
 let phraseUpper = phrase.toUpperCase()
console.log(phraseUpper)

//toLowerCase
let phraseLower = phraseUpper.toLocaleLowerCase()
console.log(phraseLower)

//Contar caracteres
let characterNumber = phraseLower.length
console.log(characterNumber)

//concatenar un string con un var +
let stringConcat = phraseLower.concat(', tengo ',characterNumber, ' caracteres')
console.log(stringConcat)

//busqueda en un string

//indexOf([carcter que se va a buscar],[a partir de que indice*])
//siempre empieza en 0 y si no encuentra nada regresa -1

let findCharacter = phrase.indexOf('a')
console.log(findCharacter)

findCharacter = phrase.search('a') //aqui se puede buscar una expresión regular
console.log(findCharacter)

//algoritmo de naomi
findCharacter = phrase.lastIndexOf('a')
console.log(findCharacter)

var cadena = 'aaadbbbc'
console.log(cadena)

for (let i=0; i<cadena.length; i++){
    if(cadena.indexOf(cadena[i])==cadena.lastIndexOf(cadena[i])){
        console.log(cadena[i])
        break
    }
}

//metodos array :D 