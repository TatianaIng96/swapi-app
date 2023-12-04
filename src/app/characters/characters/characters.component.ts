import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/core/characters/characters.service';
import { LoaderService } from 'src/app/core/loader/loader.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  listCharacters: any[];
  constructor(private charactersService: CharactersService,
              private router: Router,
              private loaderService: LoaderService,) {
    this.listCharacters = [];
  }

  ngOnInit(): void {
    this.getCharactersUrls(this.charactersService.arrayCharacters);
  }

  redirectFilms(){
    this.router.navigate(['films'])
  }

  getCharactersUrls( characters: any[]) {
    if(characters.length > 0){
      this.charactersService.getCharacters(characters).subscribe(
        (response: any[]) =>{
          console.log(response);
          this.listCharacters = response
          this.loaderService.updateSpinner$.next(false);
        }
      )
    }else{
      this.router.navigate(['films'])
    }
  }

}
