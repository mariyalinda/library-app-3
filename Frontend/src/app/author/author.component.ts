import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  author = {
    name: '',
    genre: '',
    place: '',
    authorabout: '',
    authorimg: '',
  };
  constructor(
    private _router: Router,
    public _auth: AuthService,
    private authorservice: AuthorService
  ) {}
  editAuthor(author: any) {
    localStorage.setItem('editAuthorId', author._id.toString());
    this._router.navigate(['update/author']);
  }
  // deleteProduct(book: any) {
  //   this.bookservice.deleteBook(book._id).subscribe((data) => {
  //     this.book = this.book.filter((p) => p !== book);
  //   });
  // }
  ngOnInit(): void {}
}
