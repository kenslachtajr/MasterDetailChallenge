export interface Flight {
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
          nonRevCounts: [ ''
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
