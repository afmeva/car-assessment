import { Car } from "../models/car.model";
import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { withLatestFrom } from "rxjs/operators/withLatestFrom";
import { map } from "rxjs/operators/map";

import { CarsAPIService } from "./cars-api.service";

@Injectable()
export class CarsService {
  carsData: Observable<Car[]>;
  filterTerm: BehaviorSubject<string>;

  constructor(private carApi: CarsAPIService) {
    this.filterTerm = new BehaviorSubject("");

    this.carsData = this.filterTerm.pipe(
      withLatestFrom(this.carApi.getAll()),
      map(([term, carsData]) => {
        if (!term) {
          return carsData;
        }
        return carsData.filter(
          ({ brand }) => term.toLowerCase() === brand.toLocaleLowerCase()
        );
      })
    );
  }

  setTerm(term = "") {
    this.filterTerm.next(term);
  }
}
