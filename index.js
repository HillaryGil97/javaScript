let phrase = 'Hola a todos'
console.log(phrase)
let newPhrase = phrase.split('').reverse()
console.log(newPhrase)
let final = '', i = 0
while(i<phrase.length){
    if (newPhrase[i] != undefined){
        if (phrase[i] == ' '){
            final = final + ' ' + newPhrase[i+1]
            i--
        }else{
            final = final + newPhrase[i]
        }
    }
    i++
}

console.log(final)