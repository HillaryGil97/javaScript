var phrase = ' Hola a todos'
console.log(phrase)
// * Nos regresa un array [palabra,donde empieza,texto]
findChacter = phrase.match(/Hola/)
console.log('match',findChacter)

// * Extrae|corta una parte de la cadena y devuelve la parte extraida en una nueva cadena
newPhrase = phrase.slice(7,12)
console.log(newPhrase)

//* Regresa los caracteres que se encuentran en ese rango, regresa una nueva cadena
newPhrase = phrase.substring(0,4)
console.log(newPhrase)

//* Parametros (posición inicial, longitud)
newPhrase = phrase.substr(0,5)
console.log(newPhrase)
console.log(newPhrase.length)

//* Nos dice si el texto empieza con este parametro. Retorna true|false
let starWith = phrase.startsWith('h')
console.log(starWith)

//* Nos dice si el texto termino con este parametro. Retorna true|false
let endWith = phrase.endsWith('s')
console.log(endWith)

//* Para reemplazar una parte por otra de un string. Reemplaza el primer
//*parametro por el segundo parametro, solo remplaza la primera palabra
//* que encuentra, regresa una nueva cadena, "g" es una cadena.
newPhrase = phrase.replace(/o/g,'e')
console.log(newPhrase)
//*Quita los espacios en blanco al inicio y al final en blanco.
newPhrase = phrase.trim()
console.log(newPhrase)

//* Nos retorna el caracter que se encuentra en la posición que le pasamos
let CharacterNumber = phrase.charAt(4)
console.log(CharacterNumber)

positionCharacter = phrase[6]
console.log(positionCharacter)

//* Devuelve el unicode (codigo ASCII) del caracter
positionCharacter = phrase.charCodeAt(8)
console.log(positionCharacter) 

//* Devuelve el caracter del unicode que pongas como parametro
let character = String.fromCharCode(69)
console.log(character)

//*Separa un string en un array tomando como tope la letra del parametro
let newArray = phrase.split('o')
console.log(newArray)

//* busca si existe una palabra, retorna true|false
let hasCharacter = phrase.includes('Hola')
console.log(hasCharacter)

//*Se repite las veces que le pidas
console.log(phrase.repeat(20))

/*
input: Hola mundo
output::odnum aloH

input:Saludar a todos
output:sodotar a dulas

*/