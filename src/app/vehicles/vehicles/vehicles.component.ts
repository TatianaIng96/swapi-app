import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/core/loader/loader.service';
import { VehiclesService } from 'src/app/core/vehicles/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit, AfterViewInit {

  listVehicles: any[];
  constructor(private vehiclesService: VehiclesService,
              private router: Router,
              private loaderService: LoaderService) {
    this.listVehicles = [];
  }
  ngAfterViewInit(): void {
    this.getVehiclessUrls(this.vehiclesService.arrayVehicles);
  }

  ngOnInit(): void {

  }

  redirectFilms(){
    this.router.navigate(['films'])
  }
  getVehiclessUrls( vehicles: any[]) {
    if(vehicles.length > 0){
      this.vehiclesService.getVehicles(vehicles).subscribe(
        (response: any[]) =>{
          console.log(response);
          this.listVehicles = response
          this.loaderService.updateSpinner$.next(false);
        }
      )
    }else{
      this.router.navigate(['films'])
    }
  }

}
