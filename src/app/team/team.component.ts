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

  westTeams: Standard[];
  eastTeams: Standard[];
  playersList: Standard[];

  constructor(private route: ActivatedRoute, private nbaService: NbaService, private router: Router) {

    const excludedFirstnames = ['Wade', 'MarShon', 'Markel', 'Gerald', 'RJ', 'Demetrius', 'Georges', 'Georgios',
    'Malachi', 'Derrick', 'Ramon', 'Marquis', 'Markieff'];
    const excludedLastnames = ['Lawson'];

    this.route.params.subscribe(res => {
      console.log(res.year);

      this.nbaService.getAllTeams(2017).subscribe(data => {
        console.log('teams', data);
        const teams = data.league.standard;
        this.eastTeams = teams.filter(team => team.isNBAFranchise === true && team.confName === 'East');
        this.westTeams = teams.filter(team => team.isNBAFranchise === true && team.confName === 'West');
      });

      this.nbaService.getAllPlayers(2017).subscribe(data => {
        console.log('players', data);
        const players = data.league.standard;
        this.playersList = players.filter(
          player => player.heightMeters && player.draft.pickNum &&
          excludedFirstnames.indexOf(player.firstName) === -1 &&
          excludedLastnames.indexOf(player.lastName) === -1
        );
      });
    });
  }

  public goToTeamDetail(id: number) {
    this.router.navigate(['/teamdetails', id]);
  }

  ngOnInit() {
  }

}
