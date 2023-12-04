import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/core/films/films.service';
import { SpeciesRoutingModule } from '../../species/species-routing.module';
import { CharactersService } from 'src/app/core/characters/characters.service';
import { Router } from '@angular/router';
import { SpeciesService } from 'src/app/core/species/species.service';
import { LoaderService } from '../../core/loader/loader.service';
import { StartshipsService } from 'src/app/core/starships/startships.service';
import { VehiclesService } from 'src/app/core/vehicles/vehicles.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films: any;
  listFilms: any[];
  displayCharactersModal: boolean = false;
  displaySpeciesModal: boolean = false;
  displayStarshipsModal: boolean = false;
  displayVehiclesModal: boolean = false;
  selectedFilm: any; // Variable para almacenar la película seleccionada

  showDialog(film: any, modalType: string) {
    this.selectedFilm = film;

    if (modalType === 'characters') {
      this.displayCharactersModal = true;
    } else if (modalType === 'species') {
      this.displaySpeciesModal = true;
    }else if (modalType === 'starships') {
      this.displayStarshipsModal = true;
    }else if (modalType === 'vehicles') {
      this.displayVehiclesModal = true;
    }
  }

  hideDialog(modalType: string) {
    if (modalType === 'characters') {
      this.displayCharactersModal = false;
    } else if (modalType === 'species') {
      this.displaySpeciesModal = false;
    }else if (modalType === 'starship') {
      this.displayStarshipsModal = false;
    }else if (modalType === 'vehicles') {
      this.displayVehiclesModal = false;
    }
  }

  constructor(private filmsService: FilmsService,
              private characterService: CharactersService,
              private speciesService: SpeciesService,
              private starshipsService: StartshipsService,
              private loaderService: LoaderService,
              private vehiclesService: VehiclesService,
              private router: Router) {
    this.films = {};
    this.listFilms = [];
  }

  ngOnInit(): void {
    this.getAllFilms();
  }

  getAllFilms(){
    this.filmsService.getFilms().subscribe((response: any) =>{
      this.films = response;
      this.listFilms = this.films.results;
      this.loaderService.updateSpinner$.next(false);
    }, (error: any) =>{
      console.log(error);
      this.loaderService.updateSpinner$.next(false);
    })
  }

  sendCharacters(characters:any[]){
    this.characterService.obsCharacters.next(characters);
    console.log("Array de personajes: ",this.characterService.arrayCharacters);
    this.router.navigate(['characters']);
  }

  sendSpecies(species:any[]){
    this.speciesService.obsSpecies.next(species);
    console.log("Array de species: ",this.speciesService.arraySpecies);
    this.router.navigate(['species']);
  }

  sendStarships(starships:any[]){
    this.starshipsService.obsStartships.next(starships);
    console.log("Array de starships: ",this.starshipsService.arrayStartships);
    this.router.navigate(['starships']);
  }
  sendVehicles(vehicles:any[]){
    this.vehiclesService.obsVehicles.next(vehicles);
    console.log("Array de vehicles: ",this.vehiclesService.arrayVehicles);
    this.router.navigate(['vehicles']);
  }
}
