import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Libros } from '../models/libros';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  librosModel: Libros[];
  readonly URL_API =
    'https://www.etnassoft.com/api/v1/get/?book_title=javascript';
  readonly URL_API_SQL = 'https://www.etnassoft.com/api/v1/get/?book_title=sql';
  readonly URL_API_MYSQL =
    'https://www.etnassoft.com/api/v1/get/?book_title=mysql';
  constructor(private http: HttpClient) {}

  getLibrosJavascript() {
    return this.http.get(this.URL_API);
  }
  getLibrosSql() {
    return this.http.get(this.URL_API_SQL);
  }
  getLibrosMsql() {
    return this.http.get(this.URL_API_MYSQL);
  }
}
