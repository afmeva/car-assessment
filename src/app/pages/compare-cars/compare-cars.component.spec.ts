import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, Input } from "@angular/core";

import { CompareCarsComponent } from "./compare-cars.component";
import { RouterTestingModule } from "@angular/router/testing";
import { CarsAPIService } from "../../core/services/cars-api.service";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";

import mockData from "../../specs-mocks/cars.mock";

@Component({
  selector: "app-navbar",
  template: ""
})
class NavbarStubComponenet {}

@Component({
  selector: "app-car-details",
  template: ""
})
class CarDetailsStubComponent {
  @Input() car;
}

describe("CompareCarsComponent", () => {
  let component: CompareCarsComponent;
  let fixture: ComponentFixture<CompareCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        CarDetailsStubComponent,
        NavbarStubComponenet,
        CompareCarsComponent
      ],
      providers: [
        {
          provide: CarsAPIService,
          useValue: {
            getAll: () => Observable.of([]),
            getById: carId =>
              Observable.of(mockData.find(({ id }) => carId === id))
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: Observable.of({
              cars: [
                "38e87c73-1dfe-4f81-9dcc-cf54fc92dce5",
                "38e87c73-1dfe-4f81-9dcc-cf54fc92dce1"
              ]
            })
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should extract Id's from the url and create an array of cars with them", () => {
    component.carsToCompare.subscribe(data => {
      expect(data).toEqual(mockData);
    });
  });
});
