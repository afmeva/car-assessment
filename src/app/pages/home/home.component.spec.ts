import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { CarsAPIService } from "../../core/services/cars-api.service";
import { Observable } from "rxjs/Observable";
import { Component, Input } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";

import mockData from "../../specs-mocks/cars.mock";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let carsApi: CarsAPIService;


  @Component({
    selector: "app-car-box",
    template: ""
  })
  class CarBoxStubComponent {
    @Input() car;
    @Input() isAdded;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [HomeComponent, CarBoxStubComponent],
      providers: [
        {
          provide: CarsAPIService,
          useValue: jasmine.createSpyObj({
            getAll: Observable.of(mockData),
            getById: Observable.of({})
          })
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    carsApi = TestBed.get(CarsAPIService);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call getAll method from carsApi when carService is created", () => {
    expect(carsApi.getAll).toHaveBeenCalled();
  });

  it("should store the cars data within the service", () => {
    component.cars.subscribe(data => {
      expect(data).toEqual(mockData);
    });
  });

  it("should filter the data by the given brand (case insensitive) ", () => {
    component.filterTerm.next("MAZDA");

    component.cars.subscribe(data => {
      expect(data).toEqual([mockData[0]]);
    });
  });
});
