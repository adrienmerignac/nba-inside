import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamComponent } from './team/team.component';
import { TeamdetailsComponent } from './teamdetails/teamdetails.component';
import { PlayerDetailsComponent } from './player/details/player-details.component';
import { PlayerComponent } from './player/player.component';


const routes: Routes = [
  {
    path: '',
    component: TeamComponent
  },
  {
    path: 'teamdetails/:team',
    component: TeamdetailsComponent
  },
  {
    path: 'players',
    component: PlayerComponent
  },
  {
    path: 'players/:season/:playerid',
    component: PlayerDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
