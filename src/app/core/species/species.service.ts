import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  obsSpecies= new Subject<any>;
  arraySpecies: any[] = [];

  constructor( private http: HttpClient) {
    this.getObservable().subscribe((response: any[]) =>{
      this.arraySpecies = response;
    });
   }

  private httpHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getObservable(): Observable<any>{
    return this.obsSpecies.asObservable();
  }

  getSpecies(species: string[]): Observable<any>{
    const observables = species.map((url) =>
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
