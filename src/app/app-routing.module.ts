import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'films',
   loadChildren: ()=> import('./films/films.module').then( (m) => m.FilmsModule )
  },
  {path: 'characters',
   loadChildren: ()=> import('./characters/characters.module').then( (m) => m.CharactersModule )
  },
  {path: 'species',
   loadChildren: ()=> import('./species/species.module').then( (m) => m.SpeciesModule )
  },
  {path: 'vehicles',
   loadChildren: ()=> import('./vehicles/vehicles.module').then( (m) => m.VehiclesModule )
  },
  {path: 'starships',
   loadChildren: ()=> import('./starships/starships.module').then( (m) => m.StarshipsModule )
  },
  {
    path:'**',
    redirectTo: 'films'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
