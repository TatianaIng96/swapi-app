import { Injectable } from '@angular/core';
import { LoaderService } from '../loader/loader.service';
import { Observable, Subject, catchError, forkJoin } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StartshipsService {
  obsStartships= new Subject<any>;
  arrayStartships: any[] = [];

  constructor( private http: HttpClient, private loaderService: LoaderService) {
    this.getObservable().subscribe((response: any[]) =>{
      this.arrayStartships = response;
    });
   }

  private httpHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getObservable(): Observable<any>{
    return this.obsStartships.asObservable();
  }

  getStartships(starships: string[]): Observable<any>{
    this.loaderService.updateSpinner$.next(true);
    const observables = starships.map((url) =>
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
