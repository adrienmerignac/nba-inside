import { Detail, PlayerResponse, TeamDetailResponse, Standard, TeamDetail } from './../models';
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

  teamDetail: Detail;
  teamRostersPlayers: Standard[];

  constructor(private route: ActivatedRoute, private nbaService: NbaService, private router: Router) {
    this.route.params.subscribe(res => {
      console.log(res.id);

      this.nbaService.getTeamDetail(res.id).subscribe(data => {
        console.log('teamDetail', data);
        this.teamDetail = data;
        // const teamDetails = data.TeamDetails;
      });

      this.nbaService.getAllPlayers(2017).subscribe(data => {
        console.log('teamRostersPlayers', data);
        const players = data.league.standard;
        this.teamRostersPlayers = players.filter(player => player.teamId);
        // const teamRosters = data.league.standard;
        // this.teamRostersPlayers = teamRosters.filter(player => player.teamId);
      });
    });
  }

  public goToPlayerProfile(id: number) {
    this.router.navigate(['/player', id]);
  }

  ngOnInit() {
  }
}
