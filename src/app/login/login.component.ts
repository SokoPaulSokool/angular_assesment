import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model = { name: '', email: '', password: '' };
  message = '';
  constructor(
    private router: Router,
    private dataService: DataServiceService
  ) {}

  ngOnInit() {}

  submitForm(form: NgForm) {
    if (form.valid) {
      this.dataService.loginIn(form.value).subscribe((data: any) => {
        if (data.success) {
          this.router.navigate(['/books']);
        } else {
          this.message = data.message;
        }
      });
    }
  }
}
