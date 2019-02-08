import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { switchMap } from "rxjs/operators/switchMap";
import { shareReplay } from "rxjs/operators/shareReplay";

import { CarsAPIService } from "../../core/services/cars-api.service";
import { Car } from "../../core/models/car.model";
import { WindowService } from "../../core/services/window.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  car: Observable<Car>;
  constructor(private route: ActivatedRoute, private carApi: CarsAPIService, private windowService: WindowService) {}

  ngOnInit() {
    this.windowService.getWindow().scrollTo(0,0);
    
    this.car = this.route.params.pipe(
      switchMap(({ id }) => this.carApi.getById(id)),
      shareReplay(1)
    );
  }
}
