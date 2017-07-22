import { Component, OnInit } from '@angular/core';
import { AirportsService } from '../common/services/airports.service';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit {
  airports;
  currentAirport;

  constructor(public airportsService: AirportsService) { }

  ngOnInit() {
    this.getAirports();
    this.resetCurrentAirport();
  }

  resetCurrentAirport() {
    this.currentAirport = {
      id: null,
      iataCode: '',
      iataName: '',
      airportName: '',
      cityName: '',
      timeZoneGmtOffset: null,
      timeZoneId: '',
      stateProvinceCode: '',
      stateProvinceName: '',
      countryCode: '',
      countryName: '',
      latitude: null,
      longitude: null };
  }

  setCurrentAirport(airport) {
    this.currentAirport = airport;
  }

  cancel() {
    this.resetCurrentAirport();
  }

  getAirports() {
    this.airportsService.all()
      .subscribe(airports => this.airports = airports);
  }

  saveAirport(airport) {
    if (!airport.id) {
      this.createAirport(airport);
    } else {
      this.updateAirport(airport);
    }
  }

  createAirport(airport) {
    this.airportsService.create(airport)
      .subscribe(response => {
        this.getAirports();
        this.resetCurrentAirport();
      });
  }

  updateAirport(airport) {
    this.airportsService.update(airport)
      .subscribe(response => {
        this.getAirports();
        this.resetCurrentAirport();
      });
  }

  deleteAirport(airport) {
    this.airportsService.delete(airport.id)
      .subscribe(response => {
        this.getAirports();
        this.resetCurrentAirport();
      });
  }
}
