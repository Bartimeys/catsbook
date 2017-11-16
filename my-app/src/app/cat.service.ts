import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';

import {Cat} from './cats';
import {MessageService} from './message.service';

//Create rules for http headers
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CatService {

  private catsUrl = 'api/cats';  // URL to web api

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  /** GET cats from the server */
  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.catsUrl)
      .pipe(
        tap(cat => this.log(`fetched cats`)),
        catchError(this.handleError('getCats', []))
      );
  }

  /** GET cat by id. Return `undefined` when id not found */
  getCatNo404<Data>(id: number): Observable<Cat> {
    const url = `${this.catsUrl}/?id=${id}`;
    return this.http.get<Cat[]>(url)
      .pipe(
        map(cat => cat[0]), // returns a {0|1} element array
        tap(c => {
          const outcome = c ? `fetched` : `did not find`;
          this.log(`${outcome} cat id=${id}`);
        }),
        catchError(this.handleError<Cat>(`getCat id=${id}`))
      );
  }

  /** GET cat by id. Will 404 if id not found */
  getCat(id: number): Observable<Cat> {
    const url = `${this.catsUrl}/${id}`;
    return this.http.get<Cat>(url).pipe(
      tap(_ => this.log(`fetched cat id=${id}`)),
      catchError(this.handleError<Cat>(`getCat id=${id}`))
    );
  }

  /* GET cats whose name contains search term */
  searchCats(term: string): Observable<Cat[]> {
    if (!term.trim()) {
      // if not search term, return empty cat array.
      return of([]);
    }
    return this.http.get<Cat[]>(`api/cats/?name=${term}`).pipe(
      tap(_ => this.log(`found cats matching "${term}"`)),
      catchError(this.handleError<Cat[]>('searchCats', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new cat to the server */
  addCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(this.catsUrl, cat, httpOptions).pipe(
      tap((cat: Cat) => this.log(`added cat w/ id=${cat.id}`)),
      catchError(this.handleError<Cat>('addCat'))
    );
  }

  /** DELETE: delete the cat from the server */
  deleteCat(cat: Cat | number): Observable<Cat> {
    const id = typeof cat === 'number' ? cat : cat.id;
    const url = `${this.catsUrl}/${id}`;

    return this.http.delete<Cat>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted cat id=${id}`)),
      catchError(this.handleError<Cat>('deleteCat'))
    );
  }

  /** PUT: update the cat on the server */
  updateCat(cat: Cat): Observable<any> {
    return this.http.put(this.catsUrl, cat, httpOptions).pipe(
      tap(_ => this.log(`updated cat id=${cat.id}`)),
      catchError(this.handleError<any>('updateCat'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CatService message with the MessageService */
  private log(message: string) {
    this.messageService.add('CatService: ' + message);
  }
}

@Injectable()
export class CatServiceLocalStorage {
  private catsUrl = 'api/cats';

  getCats(): Cat[] {
    let catsJSON = localStorage.getItem('cats');
    if (!catsJSON) {
      let testData = [
        {
          id: 2,
          name: 'Vasia',
          description: 'I am fat cat',
          image: 'https://cs7.pikabu.ru/post_img/big/2014/07/04/11/1404493722_841718462.jpeg'
        },
        {
          id: 3,
          name: 'Kick Ass',
          description: 'come to me and I kick your ass',
          image: 'https://cs7.pikabu.ru/post_img/big/2014/07/04/11/1404493722_841718462.jpeg'
        },
        {
          id: 4,
          name: 'Lucky',
          description: 'I ma lucky cat',
          image: 'https://cs7.pikabu.ru/post_img/big/2014/07/04/11/1404493722_841718462.jpeg'
        },
        {
          id: 5,
          name: 'Timchik',
          description: 'I know angular5, and if you will "good boy" maybe I tell you all secrets of this framework',
          image: 'https://cs7.pikabu.ru/post_img/big/2014/07/04/11/1404493722_841718462.jpeg'
        },
        {
          id: 6,
          name: 'Tim chen Ir',
          description: 'I am dictator',
          image: 'https://cs7.pikabu.ru/post_img/big/2014/07/04/11/1404493722_841718462.jpeg'
        }
      ];
      localStorage.setItem('cats',JSON.stringify(testData));
      return testData;
    } else {
      let cats = JSON.parse(catsJSON);
      return cats;
    }
  }
  //////// Save methods //////////

  /** POST: add a new cat to the server */
  addCat(cat: Cat): Cat {
    let catsJSON = localStorage.getItem('cats');
    let cats = JSON.parse(catsJSON);
    cats.push(cat);
    localStorage.setItem('cats',JSON.stringify(cats));
    return cat;
  }
  /** DELETE: delete the cat from the server */
  deleteCat(cat: Cat): Cat{
    let id = typeof cat === 'number' ? cat : cat.id;
    let id2 = JSON.stringify(id);
    let url = `${this.catsUrl}/${id}`;

    localStorage.removeItem(id2);
    return cat;
  }

}
