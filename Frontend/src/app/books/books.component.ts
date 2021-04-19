import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books = [
    {
      title: '',
      image: '',
      author: '',
      genre: '',
    },
  ];

  constructor(
    private router: Router,
    private bookservice: BookService,
    public _auth: AuthService
  ) {}
  ngOnInit(): void {
    this.bookservice.getBooks().subscribe((data) => {
      this.books = JSON.parse(JSON.stringify(data));
    });
  }
  getbook(book: any) {
    //get individual book
  }
  editBook(book: any) {
    localStorage.setItem('editBookId', book._id.toString());
    this.router.navigate(['update/book']);
  }
  deleteProduct(book: any) {
    this.bookservice.deleteBook(book._id).subscribe((data) => {
      this.books = this.books.filter((p) => p !== book);
    });
  }
}
