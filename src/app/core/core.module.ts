import { NgModule } from "@angular/core";

import { CarsAPIService } from "./services/cars-api.service";
import { CarBoxComponent } from './components/car-box/car-box.component';
import { BrowserModule } from "@angular/platform-browser";
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [CarBoxComponent, CarDetailsComponent, NavbarComponent],
  providers: [CarsAPIService],
  exports: [CarBoxComponent, CarDetailsComponent, NavbarComponent]
})
export class CoreModule {}
