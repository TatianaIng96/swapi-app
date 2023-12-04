import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor( private http: HttpClient) { }

  private httpHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getFilms(): Observable<any>{
    return this.http.get<any>(environment.swapi + environment.films)
      .pipe(map(
            (response:any)=> response,
            (error:any) => error
      ));
  }

  getFilmById(id:string){

  }
}
