import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Cat } from '../cats'

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CatsComponent implements OnInit {
  cat : Cat = {
    id: 1,
    name: 'Vasia'
  };
  constructor() { }

  ngOnInit() {
  }

}
