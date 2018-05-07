import { Team, Detail, AllPlayers, Latest, Bio } from './models';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/map';

@Injectable()
export class NbaService {

  constructor(private http: HttpClient) { }

  // Liste de toutes les équipes Américaines -- team component
  public getTeams(year: number): Observable<Team> {
    return this.http.get<Team>(`/nba/prod/v1/${year}/teams.json`);
  }

  // Liste de tous les joueurs de la NBA -- teamdetail component
  public getTeamRoster(year: number): Observable<AllPlayers> {
    return this.http.get<AllPlayers>(`/nba/prod/v1/${year}/players.json`);
  }

  // Requête pour avoir le détail d'une équipe -- teamdetail component
  public getTeamDetail(teamId: number): Observable<Detail> {
    return this.http.get<Detail>(`/roster/feeds/teams/profile/${teamId}_TeamProfile.js`);
  }

  // Stats d'un joueur sur une année donnée et avec son personId -- player component
  public getPlayerProfile(year: number, playerId: number): Observable<any> {
    return this.http.get<any>(`/nba/prod/v1/${year}/players/${playerId}_profile.json`);
  }

  // Bio d'un joueur -- player component
  public getPlayerBio(playerId: number): Observable<any> {
    return this.http.get<any>(`/nba/json/bios/player_${playerId}.json`);
  }
}
