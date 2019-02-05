import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-box',
  templateUrl: './car-box.component.html',
  styleUrls: ['./car-box.component.scss']
})
export class CarBoxComponent {
  @Input() car = {}
}
