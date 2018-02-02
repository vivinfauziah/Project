import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http, RequestOptions, Headers } from "@angular/http";

@Component({
  selector: 'app-womendouble',
  templateUrl: './womendouble.component.html',
  styleUrls: ['./womendouble.component.css']
})
export class WomendoubleComponent implements OnInit {

  womend = []

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadWomend()
  }

  loadWomend(){
    
        let header = new Headers()
        let options = new RequestOptions({ headers : header });
    
        this.http.get("http://localhost:3300/api/womend", options)
        .subscribe(
          result => {
            this.womend = result.json();
          },
          error => {
            
          }
        );
      }

}
