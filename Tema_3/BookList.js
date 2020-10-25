class Book{    
    constructor(title, genre, author){
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
    currentBook; lastBook;nextBook;
    constructor(){
        this.books;
    }

    addBook(book=new Book("12 Rules for Life","Psychology","Jordan B. Peterson")) {
        this.books.push(book);
        if (this.books.length===1) {
            this.currentBook=book;            
        }
        else{
            if(this.nextBook===null){
                this.nextBook=book;
            }
        }
    }

    finishCurrentBook(){
        for (const i of this.books) {
            if (i===this.currentBook){
                this.lastBook=i;
                i.read=true;
                i.readDate=new Date(Date.now());
                this.currentBook=this.nextBook;
                this.nextBook=this.books.firstNotRead();
            }            
        }     
        
    }

    firstNotRead(){
        for (const i of this.books) {
            if (i.read===false&&i!==this.currentBook) {
               return i.title;                      
            }
        }
    }

    get booksRead(){
        for (let i of books) {
            if (i.read===true){
                booksRead++;
            }                
        }
    }

    get numberBooksNotRead(){
        return this.books.length-this.booksRead;
    }

}
