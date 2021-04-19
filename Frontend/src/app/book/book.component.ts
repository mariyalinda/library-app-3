import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  book = {
    title: '',
    author: '',
    about: '',
    bookimg: '',
    genre: '',
  };

  constructor(
    private router: Router,
    private bookservice: BookService,
    public _auth: AuthService
  ) {}
  editBook(book: any) {
    localStorage.setItem('editBookId', book._id.toString());
    this.router.navigate(['update/book']);
  }
  // deleteProduct(book: any) {
  //   this.bookservice.deleteBook(book._id).subscribe((data) => {
  //     this.book = this.book.filter((p) => p !== book);
  //   });
  // }

  ngOnInit(): void {}
}
