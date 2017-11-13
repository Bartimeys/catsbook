import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Cat } from '../cats'

import { CatService } from '../cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CatsComponent implements OnInit {
  cats: Cat[];

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.catService.getCats()
      .subscribe(cats => this.cats = cats);
  }


}
