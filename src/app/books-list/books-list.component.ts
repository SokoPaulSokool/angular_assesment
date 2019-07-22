import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  bookList = [];

  bookList$: Observable<any>;

  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.bookList = this.dataService.bookList;
    this.dataService.bookList$.subscribe((books: any) => {
      console.log(books);
      this.bookList = books;
      console.log(this.bookList);
    });
    // this.bookList.concat(this.dataService.bookList);
  }

  editBook(book) {
    this.dataService.bookToEdit = book;
    this.dataService.editBookBook(book).subscribe(result => {
      this.router.navigate(['/editBook']);
    });
  }
  deleteBook(book) {
    this.dataService.bookToEdit = book;
    this.dataService.deleteBook(book).subscribe(result => {
      console.log(result);
      this.router.navigate(['/books']);
    });
  }
}
