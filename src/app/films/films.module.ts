import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films/films.component';

import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';


@NgModule({
  declarations: [
    FilmsComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    CardModule,
    ButtonModule,
    DialogModule,
    AccordionModule
  ]
})
export class FilmsModule { }
