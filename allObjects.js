let books = [
    {
        title: "Hannibal - A Origem do Mal",
        author: "Thomas Harris",
        releaseYear: 2002,
    },
    {
        title: "Dragão Vermelho",
        author: "Thomas Harris",
        releaseYear: 1992,
    },
    {
        title: "Caçador de Assassinos",
        author: "Thomas Harris",
        releaseYear: 2004,
    },
    {
        title: "O Silêncio dos Inocentes",
        author: "Thomas Harris",
        releaseYear: 1979,
    },
    {
        title: "Hannibal",
        author: "Thomas Harris",
        releaseYear: 2014,
    },
]

let teste = books.map(function (book){
    return book.releaseYear
})

console.log(teste.sort())
