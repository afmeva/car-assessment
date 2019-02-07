import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, Input } from "@angular/core";

import { CompareCarsComponent } from "./compare-cars.component";
import { RouterTestingModule } from "@angular/router/testing";
import { CarsAPIService } from "../../core/services/cars-api.service";
import { Observable } from "rxjs/Observable";

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
          useValue: jasmine.createSpyObj({
            getAll: Observable.of([]),
            getById: Observable.of({})
          })
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
});
