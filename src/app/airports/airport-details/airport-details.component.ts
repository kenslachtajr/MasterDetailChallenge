import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-airport-details',
  templateUrl: './airport-details.component.html',
  styleUrls: ['./airport-details.component.css']
})
export class AirportDetailsComponent {
  originalName;
  currentAirport;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set airport(value) {
    if (value) { this.originalName = value.name; }
    this.currentAirport = Object.assign({}, value);
  }
}
