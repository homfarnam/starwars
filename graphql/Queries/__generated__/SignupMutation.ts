/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignupMutation
// ====================================================

export interface SignupMutation_signup {
  __typename: "AuthenticatedUser";
  token: string | null;
}

export interface SignupMutation {
  signup: SignupMutation_signup | null;
}

export interface SignupMutationVariables {
  email: string;
  password: string;
}
