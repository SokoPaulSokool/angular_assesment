import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  book = { id: 0, title: '', description: '' };
  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.dataService.bookToEdit) {
      this.book = this.dataService.bookToEdit;
    }
  }

  submitForm(form: NgForm) {
    console.log(form.value);
    if (form.valid) {
      this.dataService.editBookBook(form.value).subscribe(result => {
        this.router.navigate(['/books']);
      });
    }
  }
}
