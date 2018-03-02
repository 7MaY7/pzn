import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tours: any[] = [
    {
      imgUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg',
      title: 'My adventure',
      description: 'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      price: 356.4564
    },
    {
      imgUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg',
      title: 'My adventure',
      description: 'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      price: 356.4564
    },
    {
      imgUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg',
      title: 'My adventure',
      description: 'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      price: 356.4564
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
