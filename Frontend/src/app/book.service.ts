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
    return this.http.get('/books' + id);
  }
  getBooks() {
    return this.http.get('/books');
  }

  deleteBook(id: any) {
    return this.http.delete('/delete/book' + id);
  }
  editBook(book: any) {
    console.log('client update');
    return this.http.put('/update/book', book).subscribe((data) => {
      console.log(data);
    });
  }
}
