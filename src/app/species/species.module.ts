import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesComponent } from './species/species.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    SpeciesComponent
  ],
  imports: [
    CommonModule,
    SpeciesRoutingModule,
    CardModule,
    ButtonModule,
    TableModule
  ]
})
export class SpeciesModule { }
