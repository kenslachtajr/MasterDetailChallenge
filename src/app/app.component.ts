import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Master Detail Challenge';
  links = [
    { path: '/flights', icon: 'today', label: 'Flights'},
    { path: '/airports', icon: 'flight_takeoff', label: 'Airports'}
  ];
}
