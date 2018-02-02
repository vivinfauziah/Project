import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http, RequestOptions, Headers } from "@angular/http";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  article = []

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadNews()
  }

  loadNews(){
    
        let header = new Headers()
        let options = new RequestOptions({ headers : header });
    
        this.http.get("http://localhost:3300/api/article", options)
        .subscribe(
          result => {
            this.article = result.json();
          },
          error => {
            
          }
        );
      }

}
