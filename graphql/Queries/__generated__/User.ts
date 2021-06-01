/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: User
// ====================================================

export interface User_me {
  __typename: "User";
  id: string;
  email: string | null;
  createdAtAt: any | null;
}

export interface User {
  me: User_me | null;
}
