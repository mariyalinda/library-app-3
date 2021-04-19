import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  book = {
    title: '',
    image: '',
    author: '',
    genre: '',
    about: '',
  };

  constructor(private http: HttpClient) {}
  getBook(id: any) {
    return this.http.get('http://localhost:5000/books' + id);
  }
  getBooks() {
    return this.http.get('http://localhost:5000/books');
  }

  deleteBook(id: any) {
    return this.http.delete('http://localhost:5000/delete/book' + id);
  }
  editBook(book: any) {
    console.log('client update');
    return this.http
      .put('http://localhost:5000/update/book', book)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
