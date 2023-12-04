import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loading$: Observable<boolean>
  updateSpinner$ = new Subject<boolean>;

  constructor() {
    this.loading$ = this.updateSpinner$.asObservable();
   }


}
