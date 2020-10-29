import { TeamsResponse, Standard, PlayerResponse } from './../models';
import { Team } from '../models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NbaService } from './../nba.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {

  westTeams: TeamsResponse[];
  eastTeams: TeamsResponse[];

  constructor(private route: ActivatedRoute, private nbaService: NbaService, private router: Router) {

    this.route.params.subscribe(res => {
      console.log(res);
      this.nbaService.getAllTeams().subscribe(data => {
        console.log('teams', data);
        this.eastTeams = data.filter(team => team.conference === 'East');
        this.westTeams = data.filter(team => team.conference === 'West');
      });
    });
  }

  public goToTeamDetail(id: number) {
    this.router.navigate(['/teamdetails', id]);
  }

  ngOnInit() {
  }
}
