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
    return this.http.post(url, userData);
  }

  loginIn(userData) {
    const url = this.baseUrl + '/users/loginIn';
    return this.http.post(url, userData);
  }

  createBook(bookData) {
    const url = this.baseUrl + `/books?userId=${this.user.id}`;
    return this.http.post(url, { ...bookData, userId: this.user.id });
  }

  editBookBook(bookData) {
    const url = this.baseUrl + `/books/${bookData.id}?userId=${this.user.id}`;
    return this.http.put(url, { ...bookData, userId: this.user.id });
  }
  deleteBook(bookData) {
    const url = this.baseUrl + `/books/${bookData.id}?userId=${this.user.id}`;
    return this.http.delete(url, { ...bookData, userId: this.user.id });
  }
  getBooks() {
    const url = this.baseUrl + `/books?userId=${this.user.id}`;
    return this.http.get(url); 
  }
}
