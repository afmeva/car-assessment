import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../core/services/cars.service';
import { Observable } from 'rxjs/Observable';
import { Car } from '../../core/models/car.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cars: Observable<Car[]>
  term: string;
  
  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.cars = this.carsService.getData();
  }

  onSubmit(event:Event) {
    event.preventDefault();
  
    this.carsService.setTerm(this.term);
  }
}
