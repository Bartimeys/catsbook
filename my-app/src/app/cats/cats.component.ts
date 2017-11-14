import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Cat } from '../cats'

import { CatService } from '../cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
  // encapsulation: ViewEncapsulation.None
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

  add(name: string): void {
    debugger;
    name = name.trim();
    if (!name) { return; }
    debugger;
    this.catService.addCat({ name } as Cat)
      .subscribe(cat => {
        this.cats.push(cat);
      });
  }

  delete(cat: Cat): void {
    let del = confirm("Are you realy want to delete cat info? ");
    if(del===true){
      this.cats = this.cats.filter(c => c !== cat);
      this.catService.deleteCat(cat).subscribe();
    }else{
      alert("ok");
    }
  }


}
