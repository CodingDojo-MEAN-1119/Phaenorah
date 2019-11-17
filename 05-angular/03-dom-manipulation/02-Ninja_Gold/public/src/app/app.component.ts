import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  player;
  playersLog = [];
  gold = 0;
  player_id: any;

  constructor(private _httpService: HttpService) {
  }
  ngOnInit() {
    this.player_id = this.random(1, 10000);
    this._httpService.newPlayer(this.player_id).subscribe(data => {
      console.log('players', data);
      this.player = data as any;

    });
  }
  random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
  }

  updatePlayerInfo(player_id, gold, log) {
    this._httpService.updatePlayerInfo(player_id, gold, log).subscribe();
  }

  setGold(gold) {
    this.gold += gold;
  }

  farm() {
    const goldFound = this.random(2, 6);
    this.setGold(goldFound);
    const msg = `You found ${goldFound} at the farm.`;
    this.playersLog.push(msg);
    this.updatePlayerInfo(this.player_id, goldFound, msg);
  }

  cave() {
    let goldFound = this.random(5, 11);
    this.setGold(goldFound);
    let msg = `You found ${goldFound} at the cave.`;
    this.playersLog.push(msg);
    this.updatePlayerInfo(this.player_id, goldFound, msg);
  }

  house() {
    const goldFound = this.random(7, 16);
    this.setGold(goldFound);
    const msg = `You found ${goldFound} at the house.`;
    this.playersLog.push(msg);
    this.updatePlayerInfo(this.player_id, goldFound, msg);
    console.log('this players', this.playersLog.length);
  }

  casino() {
    const goldFound = this.random(-100, 101);
    this.setGold(goldFound);
    let msg = '';
    if (goldFound >= 0 ) {
      msg = `You found ${goldFound} at the casino.`;
    } else {
      msg = `You lost ${goldFound * -1} at the casino.`;
    }
    this.playersLog.push(msg);
    this.updatePlayerInfo(this.player_id, goldFound, msg);
  }

  onReset() {
    this.gold = 0;
    this.playersLog = [];
    this.player_id = this.random(1, 10000);
  }
}
