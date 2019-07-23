import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BooksListComponent } from './books-list/books-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { CanActivateRouteGuard } from './can-activate-route-guard.service';
import { ErrorPageComponent } from "./error-page/error-page.component";

const routes: Routes = [
  { component: LandingPageComponent, path: '' },
  { component: SignupComponent, path: 'signup' },
  { component: LoginComponent, path: 'login' },
  {
    component: BooksListComponent,
    path: 'books',
    canActivate: [CanActivateRouteGuard]
  },
  {
    component: EditBookComponent,
    path: 'editBook',
    canActivate: [CanActivateRouteGuard]
  },
  {
    component: CreateBookComponent,
    path: 'createBook',
    canActivate: [CanActivateRouteGuard]
  },
  {
    component: ErrorPageComponent,
    path: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
