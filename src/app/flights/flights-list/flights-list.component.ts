import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent {
  @Input() flights;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
