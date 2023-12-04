import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../../core/species/species.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  listSpecies: any[];
  constructor(private speciesService: SpeciesService, private router: Router) {
    this.listSpecies = [];
  }

  ngOnInit(): void {
    this.getSpeciessUrls(this.speciesService.arraySpecies);
  }
  getSpeciessUrls( species: any[]) {
    if(species.length > 0){
      this.speciesService.getSpecies(species).subscribe(
        (response: any[]) =>{
          console.log(response);
          this.listSpecies = response
        }
      )
    }else{
      this.router.navigate(['films'])
    }
  }

}
