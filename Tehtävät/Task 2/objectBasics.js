class book {
    isbn = "";
    name = "";
    authors = "";
    publicationDate = "";

    constructor(isbn, name, authors, publicationDate){
        this.isbn = isbn;
        this.name = name;
        this.authors = authors;
        this.publicationDate = publicationDate;
    }

    getAuthors(){
        return this.authors;
    }

    setAuthors(authors){
        this.authors = authors;
    }

    getIsbn(){
        return this.isbn;
    }

    setIsbn(isbn){
        this.isbn = isbn;
    }
}

const book1 = new book("0007458428", "The Hobbit", "J.R.R. Tolkien", "21-09-1937");
const book2 = new book("0007458428", "The Hobbit", "J.R.R. Tolkien", "21-09-1937");

if(book1.getIsbn() == book2.getIsbn()){
    console.log(true);
} else{
    console.log(false);
}