import { Component, OnInit, ViewEncapsulation, Input  } from '@angular/core';
import { Cat } from '../cats';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CatDetailsComponent implements OnInit {
  @Input() cat: Cat;
  constructor() { }

  ngOnInit() {
  }

}
