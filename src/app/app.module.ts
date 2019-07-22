import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BooksListComponent } from './books-list/books-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { HttpClientModule } from "@angular/common/http";
import { CanActivateRouteGuard } from "./can-activate-route-guard.service";


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavigationComponent,
    SignupComponent,
    LoginComponent,
    BooksListComponent,
    CreateBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  

  ],
  providers: [CanActivateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
