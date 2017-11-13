import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Rx';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';

import {Cat} from './cats';
import {CATS} from './list-cats';


@Injectable()
export class CatService {
  constructor(private messageService: MessageService) { }

  getCats(): Observable<Cat[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('CatService: test');
    return of(CATS);
  }

}
