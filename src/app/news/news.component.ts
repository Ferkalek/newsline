import { Component, OnInit } from '@angular/core';

import { ServeService } from '../serve.service';

@Component({
  selector: 'nl-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: any;

  constructor(
      private service: ServeService
  ) { }

  ngOnInit() {
    this.service.getNews()
        .subscribe(data => {
          console.log('---', data);
          this.news = data;
        })
  }

}
