import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandingsComponent } from './components/standings/standings.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { H2HComponent } from './components/h2-h/h2-h.component';
import { PreviousMatchesComponent } from './components/previous-matches/previous-matches.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    StandingsComponent,
    MatchesComponent,
    PlayersComponent,
    H2HComponent,
    PreviousMatchesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: 'components/players', component: PlayersComponent},
      {path: 'components/standings', component: StandingsComponent},
      {path: 'components/matches', component: MatchesComponent},
      {path: 'components/previous-matches', component: PreviousMatchesComponent},
      {path: 'components/matches', component: H2HComponent},
      {path: 'about', component: AboutComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
