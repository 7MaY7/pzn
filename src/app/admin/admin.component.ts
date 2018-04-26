import { Component, OnInit } from '@angular/core';
import { ITour } from './tour';
import { TourService } from './tour.service';
import { Url } from 'url';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  tours: ITour[];
  toursCount: number;
  tourImgUrl: string;
  tourName: string;
  tourPrice: number;
  tourInfo: string;
  errorMessage: string;
  newTour: any;

  constructor(private _tourService: TourService) { }

  ngOnInit() {
    this._tourService.getTour()
      .subscribe(tours => {
        this.tours = tours;
        this.toursCount = this.tours.length;
      },
        error => this.errorMessage = <any>error);
  }

  addItem() {
    let newTour = {'imgUrl': this.tourImgUrl,
                    'title': this.tourName,
                    'description': this.tourInfo,
                    'price': this.tourPrice,
                    'tourId': this.tours.length+1};

    // this._tourService.addTour(newTour)
    // .subscribe(tour => this.tours.push(tour));

    this.tours.unshift(newTour);
    this.tourName = '';
    this.toursCount = this.tours.length;
    console.log(this.tours.length);
  }

}
