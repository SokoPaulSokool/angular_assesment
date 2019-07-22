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
    const url = this.baseUrl + '/signUp';
    this.user = userData;
    return this.http.post(url, userData);
  }

  loginIn(userData) {
    const url = this.baseUrl + '/loginIn';
    this.user = userData;
    return this.http.post(url, userData);
  }

  createBook(bookData) {
    this.bookList.push({ ...bookData, id: this.bookList.length + 1 });
    console.log(this.bookList);
    this.updateList(this.bookList);
    const url = this.baseUrl + '/createBook';
    return this.http.post(url, bookData);
  }

  editBookBook(userData) {
    const url = this.baseUrl + '/editBooks';
    this.bookList = this.bookList.map(book => {
      if (book.id === userData.id) {
        return userData;
      }
      return book;
    });
    this.updateList(this.bookList);
    return this.http.post(url, userData);
  }
  deleteBook(userData) {
    const url = this.baseUrl + '/deleteBook';
    this.bookList = this.bookList.filter(book => {
      if (book.id === userData.id) {
        return false;
      }
      return true;
    });
    this.updateList(this.bookList);
    return this.http.post(url, userData);
  }
  getBooks(userData) {
    const url = this.baseUrl + '/books';
    return this.http.get(url);
  }
}
