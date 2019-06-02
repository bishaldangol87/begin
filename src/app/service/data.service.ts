import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../player';
import { Rank, Standing } from '../standing';
import {Upmatch} from '../Matches';
import {Matchs} from '../Match';

const httpOptionsA = {
	headers: new HttpHeaders ({
		'X-Auth-Token': '6818f4d80fc14af2b29bb6de920223a1'
	})
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getSquad(): Observable<Player>{
    return this.http.get<Player>('http://api.football-data.org/v2/teams/1776', httpOptionsA)
  }

  
  getRank(): Observable<Rank>{
    return this.http.get<Rank>('http://api.football-data.org/v2/competitions/BSA/standings', httpOptionsA)
  }

  getUpmatch(): Observable<Upmatch>{
    return this.http.get<Upmatch>('http://api.football-data.org/v2/competitions/BSA/matches', httpOptionsA)
  }

  getMatch(): Observable<Matchs>{
    return this.http.get<Matchs>('http://api.football-data.org/v2/teams/1776/matches', httpOptionsA)
  }

}
