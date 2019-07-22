import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  model = { name: '', email: '', password: '' };
  constructor(
    private router: Router,
    private dataService: DataServiceService
  ) {}

  ngOnInit() {}

  submitForm(form: NgForm) {
    if (form.valid) {
      this.dataService.signUp(form.value).subscribe((data: any) => {
        if (data.success) {
          this.router.navigate(['/login']);

        }
      });
    }
  }
}
