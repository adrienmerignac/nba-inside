import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamComponent } from './team/team.component';
import { TeamdetailsComponent } from './teamdetails/teamdetails.component';
import { PlayerComponent } from './player/player.component';


const routes: Routes = [
  {
    path: '',
    component: TeamComponent
  },
  {
    path: 'teamdetails/:id',
    component: TeamdetailsComponent
  },
  {
    path: 'player/:teamid/:id',
    component: PlayerComponent
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
