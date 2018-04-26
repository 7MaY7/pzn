import { Component, OnInit } from '@angular/core';
import { TourService } from '../admin/tour.service';
import { ITour } from '../admin/tour';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  errorMessage: string;
  tours: ITour[];

  constructor(private _tourService: TourService) { }

  ngOnInit() {
    this._tourService.getTour()
      .subscribe(tours => this.tours = tours,
                 error => this.errorMessage = <any>error);
  }

}
