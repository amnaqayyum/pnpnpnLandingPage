import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-counter',
  templateUrl: './stats-counter.component.html',
  styleUrls: ['./stats-counter.component.css'],
})
export class StatsCounterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // data for counter values
  counter: any = [
    {
      countName: 'Lorem Ipsum',
      targetValue: '856752',
      countText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
      countName: 'Lorem Ipsum',
      targetValue: '40145',
      countText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
      countName: 'Lorem Ipsum',
      targetValue: '71216',
      countText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
  ];
}
