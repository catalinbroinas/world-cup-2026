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
  }
];
