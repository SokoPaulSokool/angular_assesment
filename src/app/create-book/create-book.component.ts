import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  model = { title: '', description: '' };
  constructor(
    private router: Router,
    private dataService: DataServiceService
  ) {}

  ngOnInit() {}

  submitForm(form: NgForm) {
    this.dataService.createBook(form.value).subscribe((result: any) => {
      if (result.success) {
        this.dataService.getBooks().subscribe(res => {
          this.dataService.updateList(res);
          this.router.navigate(['/books']);
        });
      }
    });
  }
}
