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
    }

]

let releaseYear = books.map((book)=>{
    return book.releaseYear
})

releaseYear.sort()
console.log(releaseYear)