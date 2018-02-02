import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Http, RequestOptions, Headers } from "@angular/http";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  file : File
  article = []

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
  }

  SaveArticle(f : NgForm){
    if( f.value.source != "" && f.value.source != null && this.file != null){

      
      let formData = new FormData();
      formData.append("source", f.value.source);
      formData.append("title", f.value.title);
      formData.append("photo", this.file);
      formData.append("description", f.value.description);

      let header = new Headers();
      let options = new RequestOptions({ headers : header });

      this.http.post("http://localhost:3300/api/article", formData, options)
      .subscribe(
        result => {
          console.log(result.json());
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
  fileChange($event){
    this.file = $event.target.files[0];
  }
}
