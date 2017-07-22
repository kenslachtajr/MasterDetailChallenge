import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent {
  originalName;
  currentFlight;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set flight(value) {
    if (value) { this.originalName = value.name; }
    this.currentFlight = Object.assign({}, value);
  }
}
