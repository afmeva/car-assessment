import { NgModule } from "@angular/core";
import { CarsService } from "./services/cars.service";
import { CarsAPIService } from "./services/cars-api.service";
import { CarBoxComponent } from './components/car-box/car-box.component';

@NgModule({
  providers: [CarsAPIService, CarsService],
  declarations: [CarBoxComponent]
})
export class CoreModule {}
