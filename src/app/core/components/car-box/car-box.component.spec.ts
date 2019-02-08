import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CarBoxComponent } from "./car-box.component";
import { RouterTestingModule } from "@angular/router/testing";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";

describe("CarBoxComponent", () => {
  let component: CarBoxComponent;
  let fixture: ComponentFixture<CarBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: "details",
            component: class dummy {}
          }
        ])
      ],
      declarations: [CarBoxComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: Observable.of({
              id: ""
            })
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call onAddToCompare event when add button is clicked", () => {
    spyOn(component, "onAddToCompare");

    const addButton = fixture.debugElement.nativeElement.querySelector(
      "button"
    );
    addButton.click();

    fixture.whenStable().then(() => {
      expect(component.onAddToCompare).toHaveBeenCalled();
    });
  });

  it("should call onAddToCompare event when remove button is clicked", () => {
    spyOn(component, "onAddToCompare");

    component.isAdded = false;
    fixture.detectChanges();

    const removeButton = fixture.debugElement.nativeElement.querySelector(
      "button"
    );
    removeButton.click();

    fixture.whenStable().then(() => {
      expect(component.onAddToCompare).toHaveBeenCalled();
    });
  });

  it("should emit addToCompare event when onAddToCompare is called", () => {
    spyOn(component.addToCompare, "emit");

    component.onAddToCompare(new Event(""));
    expect(component.addToCompare.emit).toHaveBeenCalled();
  });
});
