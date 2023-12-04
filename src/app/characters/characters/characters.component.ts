import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/core/characters/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  listCharacters: any[];
  constructor(private charactersService: CharactersService, private router: Router) {
    this.listCharacters = [];
  }

  ngOnInit(): void {
    this.getCharactersUrls(this.charactersService.arrayCharacters);
  }
  getCharactersUrls( characters: any[]) {
    if(characters.length > 0){
      this.charactersService.getCharacters(characters).subscribe(
        (response: any[]) =>{
          console.log(response);
          this.listCharacters = response
        }
      )
    }else{
      this.router.navigate(['films'])
    }
  }

}
