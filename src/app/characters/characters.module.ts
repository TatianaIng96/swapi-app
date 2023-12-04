import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    CardModule,
    ButtonModule,
    TableModule
  ]
})
export class CharactersModule { }
