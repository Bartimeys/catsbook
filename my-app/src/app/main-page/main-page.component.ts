import { Component, OnInit } from '@angular/core';
import { Cat } from '../cats';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
  // encapsulation: ViewEncapsulation.None
})

export class MainPageComponent implements OnInit {
  cats: Cat[] = [];

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.catService.getCats()
      .subscribe(cats => this.cats = cats.slice(1, 5));
  }
}
