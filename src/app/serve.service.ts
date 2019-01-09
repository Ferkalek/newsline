import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

// const baseUrl = 'https://randomuser.me/api/';
const baseUrl = 'https://api.newsriver.io/v2/search';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'sBBqsGXiYgF0Db5OV5tAw15nXE-zkf70jmi21Xab4QXiWpgXUXFGU_m3lDjTG8Xjn2pHZrSf1gT2PUujH1YaQA'
    })
};

@Injectable()
export class ServeService {

  constructor(
      private http: HttpClient
  ) { }

  getNews(): Observable<any> {
      return this.http.get<any>(`${baseUrl}/?query=text%3AUkraine&sortBy=_score&sortOrder=DESC&limit=3`, httpOptions);
  }

}
