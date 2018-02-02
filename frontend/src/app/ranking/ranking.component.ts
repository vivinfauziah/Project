import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http, RequestOptions, Headers } from "@angular/http";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  mens = []

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadMens()
  }

  loadMens(){
    
        let header = new Headers()
        let options = new RequestOptions({ headers : header });
    
        this.http.get("http://localhost:3300/api/mens", options)
        .subscribe(
          result => {
            this.mens = result.json();
          },
          error => {
            
          }
        );
      }

}
