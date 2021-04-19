import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bookupdate',
  templateUrl: './bookupdate.component.html',
  styleUrls: ['./bookupdate.component.css'],
})
export class BookupdateComponent implements OnInit {
  book = {
    title: '',
    author: '',
    about: '',
    bookimg: '',
    genre: '',
  };
  constructor(private _router: Router, private bookservice: BookService) {}

  ngOnInit(): void {
    let bookid = localStorage.getItem('editBookId');
    this.bookservice.getBook(bookid).subscribe((data) => {
      this.book = JSON.parse(JSON.stringify(data));
    });
  }
  editBook() {
    this.bookservice.editBook(this.book);
    alert('Success');
    this._router.navigate(['books']);
  }
}
