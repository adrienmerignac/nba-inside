import { Bio } from './../models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NbaService } from './../nba.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  player: any;
  bio: any;
  playerProfileId;
  playerTeamId;

  constructor(private route: ActivatedRoute, private nbaService: NbaService, private router: Router) {

    this.route.params.subscribe(res => {
      console.log(res.teamid, res.id);

      this.playerTeamId = res.teamid;
      this.playerProfileId = res.id;

      this.nbaService.getPlayerProfile(2017, res.id).subscribe(results => {
        console.log('player', results);
        this.player = results;
      });

      this.nbaService.getPlayerBio(res.id).subscribe(results => {
        console.log('bio', results);
        this.bio = results;
      });
    });
  }
  ngOnInit() {
  }

}
