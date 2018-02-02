import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  tournament = []
  comments = []

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadTournament()
    this.loadComments()
  }

  loadTournament(){
    
        let header = new Headers()
        let options = new RequestOptions({ headers : header });
    
        this.http.get("http://localhost:3300/api/tournament", options)
        .subscribe(
          result => {
            this.tournament = result.json();
          },
          error => {
            
          }
        );
      }

      loadComments(){
        
            let header = new Headers()
            let options = new RequestOptions({ headers : header });
        
            this.http.get("http://localhost:3300/api/comment", options)
            .subscribe(
              result => {
                this.comments = result.json();
              },
              error => {
                
              }
            );
          }

      SaveComments(f : NgForm){
        if( f.value.name != "" && f.value.name != null){
    
          
          let formData = new FormData();
          formData.append("name", f.value.name);
          formData.append("email", f.value.email);
          formData.append("comments", f.value.comments);
    
          let header = new Headers();
          let options = new RequestOptions({ headers : header });
    
          this.http.post("http://localhost:3300/api/comment", formData, options)
          .subscribe(
            result => {
              console.log(result.json());
              this.loadComments();
              f.reset();
            },
            error => {
              console.log(error);
            },
          );
        }
        else{
          console.log("error")
        }
      }

}
