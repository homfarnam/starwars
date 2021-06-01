export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type AuthenticatedUser = {
  __typename?: 'AuthenticatedUser';
  user?: Maybe<User>;
  token?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type Film = {
  __typename?: 'Film';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  episodeID?: Maybe<Scalars['Int']>;
  openingCrawl?: Maybe<Scalars['String']>;
  director?: Maybe<Scalars['String']>;
  producers?: Maybe<Array<Maybe<Scalars['String']>>>;
  releaseDate?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  species?: Maybe<Array<Maybe<Species>>>;
  starships?: Maybe<Array<Maybe<Starship>>>;
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
  characters?: Maybe<Array<Maybe<Person>>>;
  planets?: Maybe<Array<Maybe<Planet>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  signup?: Maybe<AuthenticatedUser>;
  login?: Maybe<AuthenticatedUser>;
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Person = {
  __typename?: 'Person';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  birthYear?: Maybe<Scalars['String']>;
  eyeColor?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  hairColor?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  mass?: Maybe<Scalars['Float']>;
  skinColor?: Maybe<Scalars['String']>;
  homeworld?: Maybe<Planet>;
  films?: Maybe<Array<Maybe<Film>>>;
  species?: Maybe<Species>;
  image?: Maybe<Scalars['String']>;
  starships?: Maybe<Array<Maybe<Starship>>>;
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Planet = {
  __typename?: 'Planet';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  diameter?: Maybe<Scalars['Int']>;
  rotationPeriod?: Maybe<Scalars['Int']>;
  orbitalPeriod?: Maybe<Scalars['Int']>;
  gravity?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Int']>;
  climate?: Maybe<Scalars['String']>;
  terrain?: Maybe<Scalars['String']>;
  surfaceWater?: Maybe<Scalars['Float']>;
  residents?: Maybe<Array<Maybe<Person>>>;
  films?: Maybe<Array<Maybe<Film>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  allFilms?: Maybe<Array<Maybe<Film>>>;
  film?: Maybe<Film>;
  allPeople?: Maybe<Array<Maybe<Person>>>;
  person?: Maybe<Person>;
  allPlanets?: Maybe<Array<Maybe<Planet>>>;
  planet?: Maybe<Planet>;
  allSpecies?: Maybe<Array<Maybe<Species>>>;
  species?: Maybe<Species>;
  allStarships?: Maybe<Array<Maybe<Starship>>>;
  starship?: Maybe<Starship>;
  allVehicles?: Maybe<Array<Maybe<Vehicle>>>;
  vehicle?: Maybe<Vehicle>;
};


export type QueryFilmArgs = {
  id: Scalars['ID'];
};


export type QueryPersonArgs = {
  id: Scalars['ID'];
};


export type QueryPlanetArgs = {
  id: Scalars['ID'];
};


export type QuerySpeciesArgs = {
  id: Scalars['ID'];
};


export type QueryStarshipArgs = {
  id: Scalars['ID'];
};


export type QueryVehicleArgs = {
  id: Scalars['ID'];
};

export type Species = {
  __typename?: 'Species';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  classification?: Maybe<Scalars['String']>;
  designation?: Maybe<Scalars['String']>;
  averageHeight?: Maybe<Scalars['Float']>;
  averageLifespan?: Maybe<Scalars['Int']>;
  eyeColors?: Maybe<Array<Maybe<Scalars['String']>>>;
  hairColors?: Maybe<Array<Maybe<Scalars['String']>>>;
  skinColors?: Maybe<Array<Maybe<Scalars['String']>>>;
  language?: Maybe<Scalars['String']>;
  homeworld?: Maybe<Planet>;
  people?: Maybe<Array<Maybe<Person>>>;
  films?: Maybe<Array<Maybe<Film>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Starship = {
  __typename?: 'Starship';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  starshipClass?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  costInCredits?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  crew?: Maybe<Scalars['String']>;
  passengers?: Maybe<Scalars['String']>;
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>;
  hyperdriveRating?: Maybe<Scalars['Float']>;
  mglt?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  cargoCapacity?: Maybe<Scalars['Float']>;
  consumables?: Maybe<Scalars['String']>;
  pilots?: Maybe<Array<Maybe<Person>>>;
  films?: Maybe<Array<Maybe<Film>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  createdAtAt?: Maybe<Scalars['DateTime']>;
};

export type Vehicle = {
  __typename?: 'Vehicle';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  vehicleClass?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  costInCredits?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Float']>;
  crew?: Maybe<Scalars['String']>;
  passengers?: Maybe<Scalars['String']>;
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>;
  cargoCapacity?: Maybe<Scalars['Int']>;
  consumables?: Maybe<Scalars['String']>;
  pilots?: Maybe<Array<Maybe<Person>>>;
  films?: Maybe<Array<Maybe<Film>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'AuthenticatedUser' }
    & Pick<AuthenticatedUser, '[object Object]'>
  )> }
);

export type SignupMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup?: Maybe<(
    { __typename?: 'AuthenticatedUser' }
    & Pick<AuthenticatedUser, '[object Object]'>
  )> }
);
