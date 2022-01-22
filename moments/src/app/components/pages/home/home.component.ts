import { Component, Input, OnInit } from '@angular/core';

import { MomentService } from 'src/app/services/moment/moment.service';

import { Moment } from 'src/app/Moment';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  moments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      this.moments = items.data;
    });
  }

  searchMoment(event: Event): void {
    const search = event.target as HTMLInputElement;

    console.log(this.moments);

    this.moments = this.moments.filter((moment) => {
      console.log(moment.title);
      return moment.title.includes(search.value);
    });
  }
}
