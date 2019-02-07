import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DetailsComponent } from "./details.component";
import { Component, Input } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { CarsAPIService } from "../../core/services/cars-api.service";
import { Observable } from "rxjs/Observable";

describe("DetailsComponent", () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  @Component({
    selector: "app-navbar",
    template: ""
  })
  class NavbarStubComponent {}

  @Component({
    selector: "app-car-details",
    template: ""
  })
  class CarDetailsStubComponent {
    @Input() car;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        DetailsComponent,
        NavbarStubComponent,
        CarDetailsStubComponent,
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
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
