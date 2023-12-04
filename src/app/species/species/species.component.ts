import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../../core/species/species.service';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/core/loader/loader.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  listSpecies: any[];
  constructor(private speciesService: SpeciesService,
              private router: Router,
              private loaderService: LoaderService) {
    this.listSpecies = [];
  }

  ngOnInit(): void {
    this.getSpeciessUrls(this.speciesService.arraySpecies);
  }

  redirectFilms(){
    this.router.navigate(['films'])
  }

  getSpeciessUrls( species: any[]) {
    if(species.length > 0){
      this.speciesService.getSpecies(species).subscribe(
        (response: any[]) =>{
          console.log(response);
          this.listSpecies = response
          this.loaderService.updateSpinner$.next(false);
        }
      )
    }else{
      this.router.navigate(['films'])
    }
  }

}
