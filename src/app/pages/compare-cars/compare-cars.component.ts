import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators/switchMap";
import { forkJoin } from "rxjs/observable/forkJoin";

import { CarsAPIService } from "../../core/services/cars-api.service";
import { Car } from "../../core/models/car.model";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-compare-cars",
  templateUrl: "./compare-cars.component.html",
  styleUrls: ["./compare-cars.component.scss"]
})
export class CompareCarsComponent implements OnInit {
  carsToCompare: Observable<Car[]>;

  constructor(private route: ActivatedRoute, private carsApi: CarsAPIService) {}

  ngOnInit() {
    this.carsToCompare = this.route.queryParams.pipe(
      switchMap(({ cars = [] }) => {
        const cleanArray = cars.reduce(
          (acc, el) => (acc.includes(el) ? acc : [...acc, el]),
          []
        );
        return forkJoin(cleanArray.slice(0, 3).map(id => this.carsApi.getById(id)));
      })
    );
  }
}
