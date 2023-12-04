import { Injectable } from '@angular/core';
import { LoaderService } from '../loader/loader.service';
import { Observable, Subject, catchError, forkJoin } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  obsVehicles= new Subject<any>;
  arrayVehicles: any[] = [];

  constructor( private http: HttpClient, private loaderService: LoaderService) {
    this.getObservable().subscribe((response: any[]) =>{
      this.arrayVehicles = response;
    });
   }

  private httpHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getObservable(): Observable<any>{
    return this.obsVehicles.asObservable();
  }

  getVehicles(vehicles: string[]): Observable<any>{
    this.loaderService.updateSpinner$.next(true);
    const observables = vehicles.map((url) =>
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
