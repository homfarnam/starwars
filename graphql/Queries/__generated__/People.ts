/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: People
// ====================================================

export interface People_allPeople_homeworld {
  __typename: "Planet";
  id: string;
}

export interface People_allPeople_films {
  __typename: "Film";
  id: string;
}

export interface People_allPeople_species {
  __typename: "Species";
  id: string;
}

export interface People_allPeople_starships {
  __typename: "Starship";
  id: string;
}

export interface People_allPeople_vehicles {
  __typename: "Vehicle";
  id: string;
}

export interface People_allPeople {
  __typename: "Person";
  id: string;
  name: string | null;
  birthYear: string | null;
  eyeColor: string | null;
  gender: string | null;
  height: number | null;
  hairColor: string | null;
  mass: number | null;
  skinColor: string | null;
  homeworld: People_allPeople_homeworld | null;
  films: (People_allPeople_films | null)[] | null;
  species: People_allPeople_species | null;
  image: string | null;
  starships: (People_allPeople_starships | null)[] | null;
  vehicles: (People_allPeople_vehicles | null)[] | null;
  createdAt: any | null;
}

export interface People {
  allPeople: (People_allPeople | null)[] | null;
}
