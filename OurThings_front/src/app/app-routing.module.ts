import { EditBooksComponent } from './views/books/edit-books/edit-books.component';
import { TableBooksComponent } from './views/books/table-books/table-books.component';
import { AddBooksComponent } from './views/books/add-books/add-books.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:"", redirectTo:"/login", pathMatch:"full"},
{path:"login",component:LoginComponent},
{path:"home",component:HomeComponent},
{path:"books/add",component:AddBooksComponent},
{path:"books/table",component:TableBooksComponent},
{path:"books/edit",component:EditBooksComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
