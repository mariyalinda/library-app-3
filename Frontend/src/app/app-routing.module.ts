import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorupdateComponent } from './authorupdate/authorupdate.component';
import { BooksComponent } from './books/books.component';
import { BookupdateComponent } from './bookupdate/bookupdate.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'addbook', component: AddbookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'books',
    component: BooksComponent,
    children: [{ path: 'update/book', component: BookupdateComponent }],
  },
  {
    path: 'authors',
    component: AuthorsComponent,
    children: [{ path: 'update/author', component: AuthorupdateComponent }],
  },
];
//individual book and author route to be added

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
