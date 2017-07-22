import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-airports-list',
  templateUrl: './airports-list.component.html',
  styleUrls: ['./airports-list.component.css']
})
export class AirportsListComponent {
  @Input() airports;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
