import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Cat } from '../cats'

import { CatService } from '../cat.service';
import { CatServiceLocalStorage } from '../cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class CatsComponent implements OnInit {
  cats: Cat[];

  constructor(private catService: CatService,
              private catServiceLocalStorage: CatServiceLocalStorage) { }

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.cats = this.catServiceLocalStorage.getCats();
    // this.catService.getCats()
    //   .subscribe(cats => this.cats = cats);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    let cat = this.catServiceLocalStorage.addCat({name} as Cat);
    this.cats.push(cat);
    // this.catService.addCat({ name } as Cat)
    //   .subscribe(cat => {
    //     this.cats.push(cat);
    //   });
  }
  update(name: string): void {
    name = name.trim();
    if (!name) { return; }
    debugger;
    this.catService.updateCat({ name } as Cat)
      .subscribe(cat => {
        this.cats.push(cat);
      });
  }

  delete(cat: Cat): void {
    let del = confirm("Are you realy want to delete cat info? ");
    if(del===true){
      this.cats = this.cats.filter(c => c !== cat);
      this.catServiceLocalStorage.deleteCat(cat);
    }
  }


}
