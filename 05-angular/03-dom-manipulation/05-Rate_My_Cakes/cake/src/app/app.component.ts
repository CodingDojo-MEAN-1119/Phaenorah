import { Component, OnInit } from '@angular/core';
import { CakeService } from './cake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cake = '';
  cakes = [];
  newCake: any;
  newRating = { rating: '', comment: '' };
  selectedCake;
  avg;

  constructor(private _httpService: CakeService) {

  }
  ngOnInit() {
    this.getCakesFromService();
    this.newCake = { baker: '', image: ''};
  }

  getCakesFromService() {
    this._httpService.getCakes().subscribe(data => {
      console.log('all_cakes', data);
      this.cakes = data as any;
    });
  }

  cakeSubmit() {
    this._httpService.show(this.newCake).subscribe(data => {
      console.log('Create Cake');
    });
    this.newCake = { baker: '', image: '' };
    this.getCakesFromService();
  }

  ratingSubmit(cakeId) {
    console.log(cakeId);
    this._httpService.addRating(this.newRating, cakeId).subscribe(data => {
      console.log('Create Comment');
    });
    this.newRating = { rating: '', comment: '' };
    this.getCakesFromService();
  }

  info(idx) {
    this.selectedCake = this.cakes[idx];
    let sum = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.selectedCake.ratings.length; i++) {
      sum += this.selectedCake.ratings[i].rating;
    }
    this.avg = sum / this.selectedCake.ratings.length;
  }
}
