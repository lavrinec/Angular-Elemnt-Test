import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {

  @Input() someString = '';
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
