import { NgModule } from "@angular/core";

import { CarsService } from "./services/cars.service";
import { CarsAPIService } from "./services/cars-api.service";
import { CarBoxComponent } from './components/car-box/car-box.component';
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [BrowserModule],
  declarations: [CarBoxComponent],
  providers: [CarsAPIService, CarsService],
  exports: [CarBoxComponent]
})
export class CoreModule {}
