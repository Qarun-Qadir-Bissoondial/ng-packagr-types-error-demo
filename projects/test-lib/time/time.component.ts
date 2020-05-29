import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class TimeComponent implements OnInit {

  defaultTime: Time = { hours: 12, minutes: 30, seconds: 0 };
  constructor() { }

  ngOnInit(): void {
  }

}
