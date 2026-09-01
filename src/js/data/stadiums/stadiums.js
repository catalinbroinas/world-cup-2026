import { stadiumImages } from "./stadiumImages";

export const stadiums = [
  {
    id: crypto.randomUUID(),
    imageUrl: stadiumImages.akron,
    location: "Guadalajara, Mexico",
    name: "Estadio Akron",
    capacity: 45.664,
    matches: 4
  },
  {
    id: crypto.randomUUID(),
    imageUrl: stadiumImages.bbva,
    location: "Monterey, Mexico",
    name: "Estadio BBVA",
    capacity: 51.243,
    matches: 4
  },
  {
    id: crypto.randomUUID(),
    imageUrl: stadiumImages.azteca,
    location: "Mexico City, Mexico",
    name: "Estadio Azteca",
    capacity: 80.824,
    matches: 5
  },
  {
    id: crypto.randomUUID(),
    imageUrl: stadiumImages.bcPlace,
    location: "Vancouver, Canada",
    name: "BC Place",
    capacity: 52.497,
    matches: 7
  },
  {
    id: crypto.randomUUID(),
    imageUrl: stadiumImages.bmoField,
    location: "Toronto, Canada",
    name: "BMO Field",
    capacity: 43.036,
    matches: 6
  },
  {
    id: crypto.randomUUID(),
    imageUrl: stadiumImages.metLife,
    location: "New York, USA",
    name: "MetLife Stadium",
    capacity: 80.663,
    matches: 8
  },
  {
    id: crypto.randomUUID(),
    imageUrl: stadiumImages.dallas,
    location: "Dallas, USA",
    name: "AT&T Stadium",
    capacity: 70.649,
    matches: 9
  },
  {
    id: crypto.randomUUID(),
    imageUrl: stadiumImages.sofi,
    location: "Los Angeles, USA",
    name: "Sofi Stadium",
    capacity: 70.492,
    matches: 8
  },
  {
    id: crypto.randomUUID(),
    imageUrl: stadiumImages.levis,
    location: "San Francisco, USA",
    name: "Levi's Stadium",
    capacity: 68.827,
    matches: 6
  },

  {
    id: crypto.randomUUID(),
    imageUrl: stadiumImages.nrg,
    location: "Houston, USA",
    name: "NRG Stadium",
    capacity: 68.777,
    matches: 7
  },
  {
    id: crypto.randomUUID(),
    imageUrl: stadiumImages.kansasCity,
    location: "Kansas City, USA",
    name: "Arrowhead Stadium",
    capacity: 69.045,
    matches: 6
  }
];
