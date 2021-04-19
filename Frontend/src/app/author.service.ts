import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  author = {
    name: '',
    genre: '',
    place: '',
    authorabout: '',
    authorimg: '',
  };
  constructor(private http: HttpClient) {}
  getAuthor(id: any) {
    return this.http.get('http://localhost:5000/authors' + id);
  }
  getAuthors() {
    return this.http.get('http://localhost:5000/authors');
  }

  deleteAuthor(id: any) {
    return this.http.delete('http://localhost:5000/delete/author' + id);
  }
  editBook(author: any) {
    console.log('client update');
    return this.http
      .put('http://localhost:5000/update/author', author)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
