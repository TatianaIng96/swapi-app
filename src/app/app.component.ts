import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from './core/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swapi-app';
  loading$: Observable<boolean>;

  constructor(private loaderService: LoaderService){
    this.loading$ = this.loaderService.loading$;
  }
}
