import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router, private dataService: DataServiceService) {}

  ngOnInit() {}

  createBook() {
    this.router.navigate(['/createBook']);
  }

  home() {
    this.router.navigate(['/']);
  }

  logIn() {
    this.router.navigate(['/login']);
  }

  logOut() {
    this.dataService.user = null;
    this.router.navigate(['/']);
  }
}
