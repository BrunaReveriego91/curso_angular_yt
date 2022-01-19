import { Component, OnInit } from '@angular/core';

import { MomentService } from 'src/app/services/moment.service';

import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  moments: Moment[] = [];

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService
      .getMoments()
      .subscribe((moments) => (this.moments = moments));
  }
}