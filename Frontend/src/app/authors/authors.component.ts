import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  authors = [
    {
      name: '',
      image: '',
      place: '',
      genre: '',
    },
  ];
  constructor(
    public _auth: AuthService,
    private authorservice: AuthorService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.authorservice.getAuthors().subscribe((data) => {
      this.authors = JSON.parse(JSON.stringify(data));
    });
  }

  getAuthor(author: any) {
    //get individual author
  }
  editAuthor(author: any) {
    localStorage.setItem('editAuthorId', author._id.toString());
    this._router.navigate(['update/author']);
  }
  deleteAuthor(author: any) {
    this.authorservice.deleteAuthor(author._id).subscribe((data) => {
      this.authors = this.authors.filter((p) => p !== author);
    });
  }
}
