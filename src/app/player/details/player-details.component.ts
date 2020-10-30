import { PlayerByIdResponse, PlayerStats } from '../../models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NbaService } from '../../nba.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  playerStats: PlayerStats;
  playerId: PlayerByIdResponse[];

  constructor(private route: ActivatedRoute, private nbaService: NbaService, private router: Router) {

    this.route.params.subscribe(res => {

      this.nbaService.getPlayerProfile(2020, res.playerid).subscribe(data => {
        this.playerStats = data;
      });

      this.nbaService.getPlayerById(res.playerid).subscribe(data => {
        this.playerId = data;
      });
    });
  }

  ngOnInit() {
  }
}
