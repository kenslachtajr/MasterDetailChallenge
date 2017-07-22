import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../common/services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flights;
  currentFlight;

  constructor(public flightsService: FlightsService) { }

  ngOnInit() {
    this.getFlights();
    this.resetCurrentFlight();
  }

  resetCurrentFlight() {
    this.currentFlight = {
      id: null,
      duration: null,
      flightSegments: [
        {
          flightNumber: null,
          displayCarrier: '',
          duration: null,
          legs: [
            {
              departureDatetime: null,
              arrivalDatetime: null,
              nonRevCounts: [

              ],
              origin: '',
              destination: '',
              operatingDisclosure: '',
              operatingCarrier: null,
              duration: null,
              mileage: null,
              equipmentType: '',
              mealIconIndicator: false,
              aircraft: {
                code: '',
                wifi: null,
                meal: ''
              },
              businessAvailable: true,
              inventoryDetails: {
                cancelFlight: true,
                cabinInventoryDetails: [
                  {
                    cabinType: '',
                    aircraftCapacity: null,
                    authorizationLevel: null,
                    legSeatsAvailable: null,
                    baseSeatsSold: null
                  },
                  {
                    cabinType: '',
                    aircraftCapacity: '',
                    authorizationLevel: '',
                    legSeatsAvailable: '',
                    baseSeatsSold: ''
                  }
                ],
                eCount: null
              }
            }
          ]
        }
      ]
    }
  }

  setCurrentFlight(flight) {
    this.currentFlight = flight;
  }

  cancel() {
    this.resetCurrentFlight();
  }

  getFlights() {
    this.flightsService.all()
      .subscribe(flights => this.flights = flights);
  }

  saveFlight(flight) {
    if (!flight.id) {
      this.createFlight(flight);
    } else {
      this.updateFlight(flight);
    }
  }

  createFlight(flight) {
    this.flightsService.create(flight)
      .subscribe(response => {
        this.getFlights();
        this.resetCurrentFlight();
      });
  }

  updateFlight(flight) {
    this.flightsService.update(flight)
      .subscribe(response => {
        this.getFlights();
        this.resetCurrentFlight();
      });
  }

  deleteFlight(flight) {
    this.flightsService.delete(flight.id)
      .subscribe(response => {
        this.getFlights();
        this.resetCurrentFlight();
      });
  }
}
