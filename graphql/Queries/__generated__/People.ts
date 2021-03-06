/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: People
// ====================================================

export interface People_person_homeworld {
  __typename: "Planet";
  id: string;
}

export interface People_person_films {
  __typename: "Film";
  id: string;
}

export interface People_person_species {
  __typename: "Species";
  id: string;
}

export interface People_person_starships {
  __typename: "Starship";
  id: string;
}

export interface People_person_vehicles {
  __typename: "Vehicle";
  id: string;
}

export interface People_person {
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
  homeworld: People_person_homeworld | null;
  films: (People_person_films | null)[] | null;
  species: People_person_species | null;
  image: string | null;
  starships: (People_person_starships | null)[] | null;
  vehicles: (People_person_vehicles | null)[] | null;
  createdAt: any | null;
}

export interface People {
  person: People_person | null;
}

export interface PeopleVariables {
  id: string;
}
