/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllPeople
// ====================================================

export interface AllPeople_allPeople_homeworld {
  __typename: "Planet";
  id: string;
}

export interface AllPeople_allPeople_films {
  __typename: "Film";
  id: string;
}

export interface AllPeople_allPeople_species {
  __typename: "Species";
  id: string;
}

export interface AllPeople_allPeople_starships {
  __typename: "Starship";
  id: string;
}

export interface AllPeople_allPeople_vehicles {
  __typename: "Vehicle";
  id: string;
}

export interface AllPeople_allPeople {
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
  homeworld: AllPeople_allPeople_homeworld | null;
  films: (AllPeople_allPeople_films | null)[] | null;
  species: AllPeople_allPeople_species | null;
  image: string | null;
  starships: (AllPeople_allPeople_starships | null)[] | null;
  vehicles: (AllPeople_allPeople_vehicles | null)[] | null;
  createdAt: any | null;
}

export interface AllPeople {
  allPeople: (AllPeople_allPeople | null)[] | null;
}
