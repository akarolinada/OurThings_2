import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from '../models/booksModel';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseURL: String = "http://localhost:8081/forfun"

  constructor(private http: HttpClient) { }

  // list of books 
  listBooks(): Observable<Books[]>{
    const url = `${this.baseURL}/books/list`
    return this.http.get<Books[]>(url)
  }
  
}
