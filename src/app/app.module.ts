import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/add/operator/map';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { AirportsComponent } from './airports/airports.component';
import { FlightDetailsComponent } from './flights/flight-details/flight-details.component';
import { FlightsListComponent } from './flights/flights-list/flights-list.component';

import { AirportsService } from './common/services/airports.service';
import { FlightsService } from './common/services/flights.service';
import { AirportsListComponent } from './airports/airports-list/airports-list.component';
import { AirportDetailsComponent } from './airports/airport-details/airport-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    AirportsComponent,
    FlightDetailsComponent,
    FlightsListComponent,
    AirportsListComponent,
    AirportDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [ AirportsService, FlightsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
