export interface Airport {
  id: number;
  iataCode: string;
  iataName: string;
  airportName: string;
  cityName: string;
  timeZoneGmtOffset: number;
  timeZoneId: string;
  stateProvinceCode: string;
  stateProvinceName: string;
  countryCode: string;
  countryName: string;
  latitude: number;
  longitude: number;
}
