import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GeneralApiService {

  constructor(private http: HttpClient) { }

  public getPosts() {
   return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }

}
