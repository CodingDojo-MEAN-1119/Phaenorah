import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = '/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }
  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseUrl, book);
  }

  getBook(bookId: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/${bookId}`);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.baseUrl}/${book._id}`, book);
  }

  removeBook(bookId: string): Observable<Book> {
    return this.http.delete<Book>(`${this.baseUrl}/${bookId}`);
  }
}
