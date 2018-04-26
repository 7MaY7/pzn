import { Component, OnInit } from '@angular/core';
import { ITour } from '../admin/tour';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss']
})
export class TourDetailsComponent implements OnInit {
  tour: {};
  pageTitle: string = 'Tour Details';

  constructor(private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
