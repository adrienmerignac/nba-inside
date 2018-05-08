import { AllPlayers } from './../models';
import { Team } from '../models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NbaService } from './../nba.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team: Team;
  players: AllPlayers;

  constructor(private route: ActivatedRoute, private nbaService: NbaService, private router: Router) {
    this.route.params.subscribe(res => {
      console.log(res.year);

      this.nbaService.getTeams(2017).subscribe(results => {
        console.log('team', results);
        this.team = results;
      });

      this.nbaService.getTeamRoster(2017).subscribe(results => {
        console.log('players', results);
        this.players = results;
      });
    });
  }

  public goToTeamDetail(id: number) {
    this.router.navigate(['/teamdetails', id]);
  }

  ngOnInit() {
  }

}
