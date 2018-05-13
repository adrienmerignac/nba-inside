import { Component, OnInit } from '@angular/core';
import { Standard } from '../models';
import { ActivatedRoute, Router } from '@angular/router';
import { NbaService } from '../nba.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  playersList: Standard[];
  searchPlayer = '';
  filterPlayers = [];

  constructor(private route: ActivatedRoute, private nbaService: NbaService, private router: Router) {

    const excludedFirstnames = ['Wade', 'MarShon', 'Markel', 'Gerald', 'RJ', 'Demetrius', 'Georges', 'Georgios',
    'Malachi', 'Derrick', 'Ramon', 'Marquis', 'Markieff'];
    const excludedLastnames = ['Lawson'];

    this.nbaService.getAllPlayers(2017).subscribe(data => {
      console.log('players', data);
      const players = data.league.standard;
      this.playersList = players.filter(
        player => player.heightMeters && player.draft.pickNum &&
        excludedFirstnames.indexOf(player.firstName) === -1 &&
        excludedLastnames.indexOf(player.lastName) === -1
      );
      this.filterPlayers = [...this.playersList];
    });
   }

   public searchPlayers() {
    const search = this.formatSearch(this.searchPlayer);
    this.filterPlayers = search.length > 0 ? this.playersList.filter(
      player => this.formatSearch(player.firstName).indexOf(search) !== -1 ||
        this.formatSearch(player.lastName).indexOf(search) !== -1
    ) : [...this.playersList];
  }

  private formatSearch(value: string) {
    return value.toLowerCase().replace(' ', '');
  }

  ngOnInit() {
  }

}
