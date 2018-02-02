import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http, RequestOptions, Headers } from "@angular/http";

@Component({
  selector: 'app-mendouble',
  templateUrl: './mendouble.component.html',
  styleUrls: ['./mendouble.component.css']
})
export class MendoubleComponent implements OnInit {

  mend = []

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadMend()
  }

  loadMend(){
    
        let header = new Headers()
        let options = new RequestOptions({ headers : header });
    
        this.http.get("http://localhost:3300/api/mend", options)
        .subscribe(
          result => {
            this.mend = result.json();
          },
          error => {
            
          }
        );
      }

}
