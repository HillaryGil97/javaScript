let numero = 2

console.log(typeof(numero),numero+2)//sirve para obtener el tipo de una variable
numero = numero.toString()//sirve para pasar una variable a tipo String ;)

console.log(typeof(numero),numero+2)

//PEQUEÑO PARENTESIS DE ***************Concatenación**************
let phrase = 'Hola'
let name = 'Hill'
let age = 23

let greetPerson = phrase+' '+name

console.log(greetPerson)
console.log(phrase+' soy '+name+' y tengo '+age+' años.')

//template literal
console.log(`${phrase} soy ${name} y tengo ${age} años.`)

//fin del pequeño parentesis

//ARRAY

/*Array conjunto de datos, su posición empieza en 0 a n, si
declaramos un array como const podemos modifiar sus elementos 
unicamente con su id o push, pero no reemplazarlo para eso tendría
ya ser val o let*/

/*const array = ['string',1,{},[1,2,3]]
console.log(array[3])
array[0] = 'hola'
console.log(array[3])*/

//concat -> sirve para concatenar
let array = ['Hola',24,17,32,54,25,3,6]
let array2 = ['Adios']
let newAr = array.concat(array2)
console.log(array)
console.log(newAr)

//every -> verifica si todos los item pasan por una prueba
//regresa true si todos los items pasan||false si alguno 
//de los elementos falla

let is = array.every(function(age){
    return age >= 18
})
console.log(is)

//fill -> llena los items especificados con un
//valor estatico MODIFICA el array

array.fill('hi',1,3)
console.log(array)

//find
let numeroMayor = array.find((age)=> age>= 18)
console.log(numeroMayor)

//findIndex
let position = array.findIndex((age)=> age>= 18)
console.log('position: '+position)

//indexOf
let item =array.indexOf(20,3)
console.log(item)

//join -> sirve para pasar un array a un string
//es el contrario al split

//reverse -> 
let numberArr = [1,2,3,4,5]
console.log(numberArr.reverse())

//push 
numberArr.push(4)
console.log(numberArr)

//some()
array = [12,2,52,1,2]
position = array.some((age)=> age>= 18)
console.log(position)

/* **********TAREA***********

let phrase3 = 'Hola a todos'

let aux = phrase3.replace(/ /g,'')
console.log(aux)
let newPhrase = aux.split('').reverse().join('')
console.log(newPhrase)
var final = ''
for(let i=0, j=0; i<phrase3.length;i++){
    if(phrase3[i] == ' '){
        final = final + ' '
    }else if(newPhrase[j] != undefined){
        final = final + newPhrase[j]
        j++
    }
}

console.log(final)

//*********************************/
//Shift
let deleteItem = array.shift()
console.log(`Eliminando el primer elemento que es ${deleteItem} y ahora queda ${array}`) 

//Pop
deleteItem = array.pop()
console.log(deleteItem)

//push
array.push(4)
console.log(array)

//slice
newAr = array.slice(1,4)
console.log(newAr)

//splice() sirve para eliminar o gregar, no regresa nada, solo modifica el array original
array.splice(2, 1, 'Hola')
console.log(array)

//includes() regresa true || false si el elemento esta en el array
let hasHola = array.includes('Hola')
console.log(hasHola)

//sort sirve para ordenar items alfabeticamnte
let AlhabetArr = ['a', 'o', 'm', 'b', 'e', 'k']
AlhabetArr.sort()
console.log(AlhabetArr)

    //para que lo haga numericamente es necesario ponerle una función
array.sort((a,b) => a-b)
console.log(array)



