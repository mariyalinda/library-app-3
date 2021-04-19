import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorComponent } from './author/author.component';

import { AuthorsComponent } from './authors/authors.component';
import { AuthorupdateComponent } from './authorupdate/authorupdate.component';
import { BookComponent } from './book/book.component';

import { BooksComponent } from './books/books.component';
import { BookupdateComponent } from './bookupdate/bookupdate.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthService } from './auth.service';
import { AddbookService } from './addbook.service';
import { BookService } from './book.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AddbookComponent,
    AuthorComponent,

    AuthorsComponent,
    AuthorupdateComponent,
    BookComponent,

    BooksComponent,
    BookupdateComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthService, AddbookService, BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
