import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddbookService } from '../addbook.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
})
export class AddbookComponent implements OnInit {
  newbook = {
    title: '',
    author: '',
    genre: '',
    place: '',
    bookimg: '',
    authorimg: '',
    bookabout: '',
    authorabout: '',
  };
  constructor(private _router: Router, private addservice: AddbookService) {}

  ngOnInit(): void {}
  addbook() {
    this.addservice.newBook(this.newbook);
    alert('Success!');
    this._router.navigate(['books']);
  }
}
