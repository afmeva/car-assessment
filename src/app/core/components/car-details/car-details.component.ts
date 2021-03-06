import { Component, Input } from "@angular/core";
import { Car } from "../../models/car.model";

@Component({
  selector: "app-car-details",
  templateUrl: "./car-details.component.html",
  styleUrls: ["./car-details.component.scss"]
})
export class CarDetailsComponent {
  @Input() car: Car = {
    id: "",
    images: {
      small: "",
      big: ""
    },
    model: "",
    year: 0,
    brand: "",
    price: 0,
    features: []
  };
}
