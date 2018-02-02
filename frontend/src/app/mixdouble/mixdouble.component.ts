import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http, RequestOptions, Headers } from "@angular/http";

@Component({
  selector: 'app-mixdouble',
  templateUrl: './mixdouble.component.html',
  styleUrls: ['./mixdouble.component.css']
})
export class MixdoubleComponent implements OnInit {

  mix = []

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadMix()
  }

  loadMix(){
    
        let header = new Headers()
        let options = new RequestOptions({ headers : header });
    
        this.http.get("http://localhost:3300/api/mix", options)
        .subscribe(
          result => {
            this.mix = result.json();
          },
          error => {
            
          }
        );
      }

}
