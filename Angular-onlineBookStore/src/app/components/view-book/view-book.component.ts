import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../service/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../Modal/Book';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.css',
  host: { 'ngSkipHydration': '' }
})
export class ViewBookComponent {
  book:Book=new Book();
  books:Book[]=[];
  bName:string;
  bAuthor:string;
  bPrice:number;
  showDialog1:boolean;
  Issubmitted: boolean;

  constructor( private forservice:BookServiceService,private router:Router) {}
  
  public DeleteBook(bookId:number)
  {
    this.forservice.deleteBook(bookId).subscribe(response=>{
  console.log(response);
 alert("Book is Deleted");
 window.location.reload();
    });
  }
  EditBook(bookId: number) {
    // debugger
    this.showDialog1 = true;
    // this.customerId=this.route.snapshot.params["CId"];

    this.forservice.getBook(bookId).subscribe(response => {
      this.book = response;
      this.book.bookName=this.bName;
      this.book.bookAuthor=this.bAuthor;
      this.book.bookPrice=this.bPrice;

    })
  }
  public getBookList():void{

    this.Issubmitted=true;

    console.log(this.book);

    this.forservice.extractBooks().subscribe(

      response=>

      {

  this.books=response;

      }

    )

  }
  
}
