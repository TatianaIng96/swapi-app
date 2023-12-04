import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { environment } from 'src/environments/environment';
import { LoaderService } from '../loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor( private http: HttpClient, private loaderService: LoaderService) { }

  private httpHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getFilms(): Observable<any>{
    this.loaderService.updateSpinner$.next(true);
    return this.http.get<any>(environment.swapi + environment.films)
      .pipe(map(
            (response:any)=> response,
            (error:any) => error
      ));
  }

  getFilmById(id:string){

  }
}
