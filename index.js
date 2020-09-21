//sintaxis: array.forEach(callback(nameItem, index)){}
//forEach no retorn nada 

let numbersArray = [1,2,3,4,5]

numbersArray.forEach((number,index)=> {
    console.log(`${number * number} y mi index es ${index}`)
})

let numbersArrayMap = numbersArray.map(number=>number*number)
console.log(numbersArrayMap)

let numbersArrayFilter = numbersArrayMap.filter(number => number >= 10)
console.log(numbersArrayFilter)

let numbersArrayReduce = numbersArray.reduce((acum,number,index) => acum = acum + number,0)
console.log(numbersArrayReduce)

//+++++++++++++++++++++++++++
let promedio = numbersArrayMap.reduce((acum, number, index, arr) =>acum = acum + number / arr.length,0)
console.log(promedio)