import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TeamComponent } from './team/team.component';
import { TeamdetailsComponent } from './teamdetails/teamdetails.component';
import { PlayerComponent } from './player/player.component';
import { NbaService } from './nba.service';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamdetailsComponent,
    PlayerComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [NbaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
