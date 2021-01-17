import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookRepoService {

  constructor(private http:HttpClient) { }
  getBooks()
  {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http.get<any[]>("https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json",{headers: headers})
  }
}
