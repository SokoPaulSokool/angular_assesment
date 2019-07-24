import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  baseUrl = 'http://127.0.0.1:8080';

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
    return this.http.post(url, userData).pipe(catchError(this.errorHandler));
  }

  loginIn(userData) {
    const url = this.baseUrl + '/users/loginIn';
    return this.http.post(url, userData).pipe(catchError(this.errorHandler));
  }

  createBook(bookData) {
    const url = this.baseUrl + `/books?userId=${this.user.id}`;
    return this.http
      .post(url, { ...bookData, userId: this.user.id })
      .pipe(catchError(this.errorHandler));
  }

  editBookBook(bookData) {
    const url = this.baseUrl + `/books/${bookData.id}?userId=${this.user.id}`;
    return this.http
      .put(url, { ...bookData, userId: this.user.id })
      .pipe(catchError(this.errorHandler));
  }
  deleteBook(bookData) {
    const url = this.baseUrl + `/books/${bookData.id}?userId=${this.user.id}`;
    return this.http
      .delete(url, { ...bookData, userId: this.user.id })
      .pipe(catchError(this.errorHandler));
  }
  getBooks() {
    const url = this.baseUrl + `/books?userId=${this.user.id}`;
    return this.http.get(url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return of({ error: 'Something bad happened; please try again later.' });
  }
}
