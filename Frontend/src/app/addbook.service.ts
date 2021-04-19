import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddbookService {
  book: {
    title: '';
    author: '';
    genre: '';
    place: '';
    bookimg: '';
    authorimg: '';
    bookabout: '';
    authorabout: '';
  };
  constructor(private http: HttpClient) {}
  newBook(book: any) {
    return this.http
      .post('http://localhost:5000/addbook', { book: book })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
