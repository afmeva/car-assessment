import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Car } from "../../core/models/car.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { withLatestFrom } from "rxjs/operators/withLatestFrom";
import { map } from "rxjs/operators/map";
import { CarsAPIService } from "../../core/services/cars-api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  cars: Observable<Car[]>;
  filterTerm: BehaviorSubject<string>;
  term: string;

  constructor(private carApi: CarsAPIService) {}

  ngOnInit() {
    this.filterTerm = new BehaviorSubject("");

    this.cars = this.filterTerm.pipe(
      withLatestFrom(this.carApi.getAll()),
      map(([term, carsData]) => {
        if (!term) {
          return carsData;
        }
        return carsData.filter(
          ({ brand }) => brand.toLowerCase().includes(term.toLowerCase())
        );
      })
    );
  }

  onInput(event: Event) {
    this.filterTerm.next((<HTMLInputElement>event.target).value)
  }
  onSubmit(event: Event) {
    event.preventDefault();

    this.filterTerm.next(this.term)
  }
}
