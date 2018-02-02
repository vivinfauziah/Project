import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http, RequestOptions, Headers } from "@angular/http";

@Component({
  selector: 'app-womensingle',
  templateUrl: './womensingle.component.html',
  styleUrls: ['./womensingle.component.css']
})
export class WomensingleComponent implements OnInit {

  womens = []

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadWomens()
  }

  loadWomens(){
    
        let header = new Headers()
        let options = new RequestOptions({ headers : header });
    
        this.http.get("http://localhost:3300/api/womens", options)
        .subscribe(
          result => {
            this.womens = result.json();
          },
          error => {
            
          }
        );
      }

}
