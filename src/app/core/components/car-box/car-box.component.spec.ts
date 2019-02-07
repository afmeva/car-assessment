import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBoxComponent } from './car-box.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CarBoxComponent', () => {
  let component: CarBoxComponent;
  let fixture: ComponentFixture<CarBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CarBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should emit addToCompare event when buttons are clicked", () => {

  })
});
