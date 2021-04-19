import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-authorupdate',
  templateUrl: './authorupdate.component.html',
  styleUrls: ['./authorupdate.component.css'],
})
export class AuthorupdateComponent implements OnInit {
  author = {
    name: '',
    genre: '',
    place: '',
    about: '',
    image: '',
  };
  constructor(private authorservice: AuthorService, private _router: Router) {}

  ngOnInit(): void {
    let authorid = localStorage.getItem('editAuthorId');
    this.authorservice.getAuthor(authorid).subscribe((data) => {
      this.author = JSON.parse(JSON.stringify(data));
    });
  }
}
