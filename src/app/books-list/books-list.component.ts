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
    this.dataService.getBooks().subscribe((res: any) => {
      this.bookList = res;
    });
    this.bookList = this.dataService.bookList;
    this.dataService.bookList$.subscribe((books: any) => {
      this.bookList = books;
    });
  }

  editBook(book) {
    this.dataService.bookToEdit = book;
    this.router.navigate(['/editBook']);
  }
  deleteBook(book) {
    this.dataService.bookToEdit = book;
    this.dataService.deleteBook(book).subscribe((result: any) => {
      if (result.success) {
        this.dataService.getBooks().subscribe(res => {
          this.dataService.updateList(res);
          this.router.navigate(['/books']);
        });
      }
    });
  }
}
