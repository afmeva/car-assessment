import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Car } from "../../core/models/car.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { withLatestFrom } from "rxjs/operators/withLatestFrom";
import { map } from "rxjs/operators/map";
import { CarsAPIService } from "../../core/services/cars-api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  cars: Observable<Car[]>;
  filterTerm: BehaviorSubject<string>;
  term: string;
  _carsToCompare = {} as Car;

  constructor(private carApi: CarsAPIService, private router: Router) {}

  ngOnInit() {
    this.filterTerm = new BehaviorSubject("");

    this.cars = this.filterTerm.pipe(
      withLatestFrom(this.carApi.getAll()),
      map(([term, carsData]) => {
        if (!term) {
          return carsData;
        }
        return carsData.filter(({ brand }) =>
          brand.toLowerCase().includes(term.toLowerCase())
        );
      })
    );
  }

  setCarsToCompare(car: Car) {
    if (this.isAdded(car)) {
      delete this._carsToCompare[car.id];
    } else if(Object.keys(this._carsToCompare).length < 3) {
      this._carsToCompare[car.id] = car;
    }
  }
  isAdded(car) {
    return Boolean(this._carsToCompare[car.id]);
  }

  get carsToCompare(): Car[] {
    return Object.values(this._carsToCompare);
  }

  onAddToCompare(car: Car) {
    this.setCarsToCompare(car)
  }

  onInput(event: Event) {
    this.filterTerm.next((<HTMLInputElement>event.target).value);
  }

  goToCompare() {
    this.router.navigate(['/compare'], { queryParams: { cars: Object.keys(this._carsToCompare)}});
  }
}
