import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
   }
   newPlayer(player_id: number) {
    return this._http.post('/players/new', {uniqueId: player_id});
  }

  updatePlayerInfo(player_id: number, gold: number, log: string) {
    const data = {
      'gold': gold,
      'log': log
    };
    return this._http.put(`/players/${player_id}`, data);
  }
}
