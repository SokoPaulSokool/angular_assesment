import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  baseUrl = 'http://localhost:8080';

  bookList = [];
  bookList$ = new Subject();

  user = null;
  bookToEdit = null;

  constructor(private http: HttpClient) {}

  updateList(list) {
    this.bookList$.next(list);
  }

  signUp(userData) {
    const url = this.baseUrl + '/users/signUp';
    this.user = userData;
    return this.http.post(url, userData);
  }

  loginIn(userData) {
    const url = this.baseUrl + '/users/loginIn';
    this.user = userData;
    return this.http.post(url, userData);
  }

  createBook(bookData) {
    const url = this.baseUrl + '/books/createBook';
    return this.http.post(url, bookData);
  }

  editBookBook(userData) {
    const url = this.baseUrl + '/books/editBook';
    return this.http.put(url, userData);
  }
  deleteBook(userData) {
    const url = this.baseUrl + '/books/deleteBook';
    return this.http.post(url, userData);
  }
  getBooks() {
    const url = this.baseUrl + '/books';
    return this.http.get(url);
  }
}
