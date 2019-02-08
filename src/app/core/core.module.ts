import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { CarsAPIService } from "./services/cars-api.service";
import { CarBoxComponent } from './components/car-box/car-box.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WindowService } from './services/window.service';

@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [CarBoxComponent, CarDetailsComponent, NavbarComponent],
  providers: [CarsAPIService, WindowService],
  exports: [CarBoxComponent, CarDetailsComponent, NavbarComponent]
})
export class CoreModule {}
