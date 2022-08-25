import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/models/booksModel';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.css']
})
export class TableBooksComponent implements OnInit {

  books!: Books[];

  constructor(private booksService: BooksService) {

   }

  ngOnInit(): void {
    this.listBooks();
  }

  listBooks(){
    this.booksService.listBooks().subscribe(res =>{
      console.log(res);      
      this.books = res;
      console.log(this.books)
      
    //   res.forEach((e: any[])=>{
    //     let book: Books = {
    //       id:'',
    //       name:'',
    //       author:'',
    //       cover:''
    //     }

    //   book.id = e[0]
    //   book.name = e[1],
    //   book.author = e[2],
    //   book.cover = e[3]

    //   this.books.push(book);

    //   })
      
      
    })
  }





}






