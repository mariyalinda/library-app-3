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
    return this.http.get('/authors' + id);
  }
  getAuthors() {
    return this.http.get('/authors');
  }

  deleteAuthor(id: any) {
    return this.http.delete('/delete/author' + id);
  }
  editBook(author: any) {
    console.log('client update');
    return this.http.put('/update/author', author).subscribe((data) => {
      console.log(data);
    });
  }
}
