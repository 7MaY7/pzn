import { Component } from '@angular/core';
import { TourService } from './admin/tour.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ TourService ]
})
export class AppComponent {
}
