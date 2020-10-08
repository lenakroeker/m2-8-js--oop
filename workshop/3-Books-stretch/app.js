
let bookshelf = document.getElementById("bookshelf");

class Book {
    constructor(cover, title, author, genre) {
        this.cover = cover,
            this.title = title,
            this.author = author,
            this.genre = genre
    }
};

class BookList {
    constructor() {
        this.books = [];
    }
    add = (book) => {
        this.books.push(book);
    }
}

let book1 = new Book("https://upload.wikimedia.org/wikipedia/en/thumb/0/09/The_Glass_Castle_Jeannette_Walls_hardcover_first_edition_2005.jpg/220px-The_Glass_Castle_Jeannette_Walls_hardcover_first_edition_2005.jpg", "The Glass Castle", "Jeanette Walls", "memoir");
let book2 = new Book("https://images-na.ssl-images-amazon.com/images/I/51CTshbwqeL._SX314_BO1,204,203,200_.jpg", "Educated", "Tara Westover", "memoir");
let book3 = new Book("https://upload.wikimedia.org/wikipedia/en/4/46/Into_Thin_Air.jpg", "Into Thin Air", "Jon Krakauer", "memoir/adveture");
let book4 = new Book("https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1437029776l/2187._SY475_.jpg", "Middlesex", "Jeffery Eugenides", "fiction");
let book5 = new Book("https://images-na.ssl-images-amazon.com/images/I/81wUspzxnkL.jpg", "When Breath Becomes Air", "Paul Kalanithi", "memoir");
let book6 = new Book("https://images-na.ssl-images-amazon.com/images/I/51A7W14Kg3L._SY264_BO1,204,203,200_QL40_ML2_.jpg", "The Masion of Happiness", "Jill Lepore", "social science");
let book7 = new Book("https://images.penguinrandomhouse.com/cover/9780525436058", "I Am, I Am, I Am", "Maggie O'Farrell", "memoir");


let jsbookshelf = new BookList();

jsbookshelf.add(book1);
jsbookshelf.add(book2);
jsbookshelf.add(book3);
jsbookshelf.add(book4);
jsbookshelf.add(book5);
jsbookshelf.add(book6);
jsbookshelf.add(book7);

jsbookshelf.books.map((book) => {
    let bookcover = document.createElement("img");
    bookcover.src = book.cover;

    let booktitle = document.createElement("h3");
    booktitle.innerHTML = book.title;

    let bookauthor = document.createElement("p");
    bookauthor.innerHTML = book.author;
    bookauthor.classList.add("author");

    let bookgenre = document.createElement("p");
    bookgenre.innerHTML = book.genre;

    let bookdiv = document.createElement("div");
    bookdiv.classList.add("book");
    bookdiv.appendChild(bookcover);
    bookdiv.appendChild(booktitle);
    bookdiv.appendChild(bookauthor);
    bookdiv.appendChild(bookgenre);
    bookshelf.appendChild(bookdiv);

})

