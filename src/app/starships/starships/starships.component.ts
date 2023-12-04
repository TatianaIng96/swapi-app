import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/core/loader/loader.service';
import { StartshipsService } from 'src/app/core/starships/startships.service';


@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  listStartships: any[];
  constructor(private starshipsService: StartshipsService,
              private router: Router,
              private loaderService: LoaderService) {
    this.listStartships = [];
  }

  ngOnInit(): void {
    this.getStartshipssUrls(this.starshipsService.arrayStartships);
  }

  redirectFilms(){
    this.router.navigate(['films'])
  }
  getStartshipssUrls( starships: any[]) {
    if(starships.length > 0){
      this.starshipsService.getStartships(starships).subscribe(
        (response: any[]) =>{
          console.log(response);
          this.listStartships = response
          this.loaderService.updateSpinner$.next(false);
        }
      )
    }else{
      this.router.navigate(['films'])
    }
  }

}
