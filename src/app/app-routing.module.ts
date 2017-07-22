import { NgModule } from '@angular/core';
import { AirportsComponent } from './airports/airports.component';
import { FlightsComponent } from './flights/flights.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: '/airports', pathMatch: 'full'},
  {path: 'airports', component: AirportsComponent},
  {path: 'flights', component: FlightsComponent},
  {path: '**', redirectTo: '/airports', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
