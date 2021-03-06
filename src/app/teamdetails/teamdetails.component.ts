import { TeamsResponse, PlayerByTeamResponse, Season } from './../models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NbaService } from './../nba.service';

@Component({
  selector: 'app-teamdetails',
  templateUrl: './teamdetails.component.html',
  styleUrls: ['./teamdetails.component.scss']
})
export class TeamdetailsComponent implements OnInit {

  teamDetails: TeamsResponse;
  teamRostersPlayers: PlayerByTeamResponse[];
  season: Season;

  constructor(private route: ActivatedRoute, private nbaService: NbaService, private router: Router) {
    this.route.params.subscribe(res => {

      this.nbaService.getAllTeams().subscribe(data => {
        this.teamDetails = data.find(teamdetail => res.team === teamdetail.Key);
        console.log(this.teamDetails);
      });

      this.nbaService.getPlayerByTeam(res.team).subscribe(result => {
        this.teamRostersPlayers = result;
      });

      this.nbaService.getSeason().subscribe(result => {
        this.season = result;
      });
    });
  }

  public goToPlayerProfile(season: number, playerid: number) {
    this.router.navigate(['/player/', season, playerid]);
  }

  ngOnInit() {
  }
}
