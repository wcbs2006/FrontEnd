// Script que una elementos do array (ficou um pouco complexo)

// const users = ["Ana", "Fernando", "Rafael", "Clara", "Maria"]
// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin, output: process.stdout
// })
// rl.question('Coloque um nome: ', (name) => {
//     users.sort()
//     users.unshift(name)
//     let join = users.join("; ")
//     console.log("Nomes:", join)
//     rl.close()
// })

// Script de colocar nomes em ordem alfabética
// const planets = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Saturno", "Urano", "Netuno"] 
// planets.sort()
// let join = planets.join(", ")
// console.log(join)

// A e B
// function myFunction (a, b){
//     let array = [];

//     if(a.indexOf(b) !== -1){
//         array.push(b+a)
//         return array
//     }else{
//         array.push(a+b)
//         return array
//     }
// }

// console.log(myFunction("tips", "a"))

// No-first element
let socialMedia = ["Orkut", "Facebook", "Instagram", "Twitter"]
socialMedia.shift()
console.log(socialMedia)