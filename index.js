//++++++++++    FUNCIONES 
function sayHello (greet = () => {console.log('Hello')}){
    let hello = true
    hello ? greet() : null
}

sayHello()

function suma(num, num2){
    return num + num2
}
console.log(suma(2,2))

const sum1 = (num,num2) => num + num2
console.log(sum1(3,3))

const printValue = (value) => console.log(value)
printValue('Hola a todos')

const printValue2 = (value) => {
    value = value.toUpperCase()
    console.log(value)
}
printValue2('Hola a todos morros 7u7')

