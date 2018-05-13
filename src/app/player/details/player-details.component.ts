import { Season } from '../../models/playerdetails';
import { Bio, BioResponse } from '../../models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NbaService } from '../../nba.service';
import { PlayerProfileResponse } from '../../models/playerdetails';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  seasons: Season[];
  bio: Bio;
  playerProfileId;
  playerTeamId;

  constructor(private route: ActivatedRoute, private nbaService: NbaService, private router: Router) {

    this.route.params.subscribe(res => {
      console.log(res.teamid, res.id);

      this.playerTeamId = res.teamid;
      this.playerProfileId = res.id;

      this.nbaService.getPlayerProfile(2017, res.id).subscribe(data => {
        console.log('player', data);
        const seasonsData = data.league.standard.stats.regularSeason.season;
        this.seasons = seasonsData;
        this.seasons = seasonsData.map(
          seasonData => {
            return {
              ...seasonData,
              teams: seasonData.teams.filter(team => team.ppg !== '-1')
            };
          }
        );
      });

      this.nbaService.getPlayerBio(res.id).subscribe(data => {
        console.log('bio', data);
        this.bio = {
          ...data.Bio,
          // Surcharge de l'attribut display_name / On lui affecte une nouvelle valeure ES6
          display_name: data.Bio.display_name.split(',').reverse().join(' ').trim()
        };
      });
    });
  }

  ngOnInit() {
  }
}
