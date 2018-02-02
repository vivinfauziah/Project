import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http"

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { NewsComponent } from './news/news.component';
import { RankingComponent } from './ranking/ranking.component';
import { TournamentComponent } from './tournament/tournament.component';
import { MendoubleComponent } from './mendouble/mendouble.component';
import { MixdoubleComponent } from './mixdouble/mixdouble.component';
import { WomendoubleComponent } from './womendouble/womendouble.component';
import { WomensingleComponent } from './womensingle/womensingle.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NewsComponent,
    RankingComponent,
    TournamentComponent,
    MendoubleComponent,
    MixdoubleComponent,
    WomendoubleComponent,
    WomensingleComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([
      { path : '', component: NewsComponent},
      { path : 'article', component: ArticleComponent},
      { path : 'tournaments', component: TournamentComponent},
      { path : 'ranking', component: RankingComponent},
      { path : 'womensingle', component: WomensingleComponent},
      { path : 'mendouble', component: MendoubleComponent},
      { path : 'womendouble', component: WomendoubleComponent},
      { path : 'mixdouble', component: MixdoubleComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
