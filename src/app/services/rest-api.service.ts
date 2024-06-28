import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(
    private http: HttpClient
  ) { }

  postData(url: any, data: any) {
    return this.http.post(url, data);
  }

}
