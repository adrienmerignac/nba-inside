import { AllPlayers, Detail } from './../models';
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
  teamRoster: AllPlayers;

  constructor(private route: ActivatedRoute, private nbaService: NbaService, private router: Router) {
    this.route.params.subscribe(res => {
      console.log(res.id);

      this.nbaService.getTeamDetail(res.id).subscribe(results => {
        console.log('teamDetails', results);
        this.teamDetail = results;
      });

      this.nbaService.getTeamRoster(2017).subscribe(results => {
        console.log('teamRosters', results);
        this.teamRoster = results;
      });
    });
  }

  public goToPlayerProfile(id: number) {
    this.router.navigate(['/player', id]);
  }

  ngOnInit() {
  }
}
