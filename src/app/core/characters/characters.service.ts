import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map,forkJoin, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  obsCharacters= new Subject<any>;
  arrayCharacters: any[] = [];

  constructor( private http: HttpClient) {
    this.getObservable().subscribe((response) =>{
      this.arrayCharacters = response;
    });
   }

  private httpHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getObservable(): Observable<any>{
    return this.obsCharacters.asObservable();
  }

  getCharacters(characters: string[]): Observable<any>{
    const observables = characters.map((url) =>
      this.http.get(url).pipe(
        catchError((error) => {
          console.error(`Error al realizar la petición a ${url}:`, error);
          return [];
        })
      )
    );

    return forkJoin(observables);
  }
}
