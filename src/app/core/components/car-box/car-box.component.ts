import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-car-box",
  templateUrl: "./car-box.component.html",
  styleUrls: ["./car-box.component.scss"]
})
export class CarBoxComponent {
  @Input() car = {};
  @Input() isAdded = true;

  @Output() addToCompare = new EventEmitter();

  onAddToCompare(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.addToCompare.emit(this.isAdded);
  }
}
