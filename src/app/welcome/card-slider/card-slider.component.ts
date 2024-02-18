import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {
  constructor() {}

  carouselData: any = [
    {
      title: 'lorem1',
      desc: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      title: 'lorem2',
      desc: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      title: 'lorem3',
      desc: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      title: 'lorem4',
      desc: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      title: 'lorem5',
      desc: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      title: 'lorem6',
      desc: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    }
  ];

  
  ngOnInit(): void {}

  getPassedData(data: SlidesOutputData) {
    let activeSlides = data;
    console.log(activeSlides);
  }

  customOptions: OwlOptions = { 
    mouseDrag: false, 
    dots: false,
    navSpeed: 500,
    margin: 10,
    slideTransition: 'linear',
    animateOut: 'fadeOut',
    animateIn: 'flipInX',
    navText: ['<i class="bi bi-chevron-left"></i>', "<i class='bi bi-chevron-right'></i>"], 
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
    
  };
}
