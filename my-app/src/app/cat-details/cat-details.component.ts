import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Cat} from '../cats';
import {CatService} from '../cat.service';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CatDetailsComponent implements OnInit {
  @Input() cat: Cat;

  constructor(
    private route: ActivatedRoute,
    private catService: CatService,
    private location: Location
  ) {}

  ngOnInit():void {
    this.getCat();
  }

  getCat(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.catService.getCat(id)
      .subscribe(cat => this.cat = cat);
  }

  goBack(): void {
    this.location.back();
  }

}
