import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class NameComponent implements OnInit {

  defaultName: Name = { firstName: 'fname', lastName: 'lname' };
  constructor() { }

  ngOnInit(): void {
  }

}
