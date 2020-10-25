class Book{    
    constructor(title="", genre="", author=""){
        this.title=title;
        this.genre=genre;
        this.author=author;
        this.read=false;
        this.readDate=null;
    }
}

class Booklist{
    books =[];
    static booksRead; static booksNotRead;
    
/*     constructor(currentBook="",nextBook="",lastBook=""){
        this.currentBook=currentBook;
        this.nextBook=nextBook;
        this.lastBook=lastBook;
    } */

    constructor(){
        this.books;
    }

    addBook(book=new Book("12 Rules for Life","Psychology","Jordan B. Peterson",false)) {
        this.books.push(book);
    }

    finishCurrentBook(){
        currentBook=books[i];
        currentBook.read=true;
        currentBook.readDate=new Date(Date.now());
        this.lastBook=this.currentBook;
        this.currentBook=this.nextBook;
        this.nextBook=books.firstNotRead();
    }
    firstNotRead(){
        for (const i of this.books) {
            if (i.read===false) {
                this.currentBook=i;            
            }
        }
    }

    get booksRead(){
        for (let i of books) {
            if (books===false){
                booksRead++;
            }
                
        }
    }

    get numberBooksNotRead(){
        return this.books.length-this.booksRead;
    }

}